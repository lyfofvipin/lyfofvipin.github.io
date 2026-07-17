(() => {
  const input = document.getElementById('search-input');
  const resultsEl = document.getElementById('search-results');
  const searchRoot = document.getElementById('site-search');
  if (!input || !resultsEl || !searchRoot) return;

  let pages = [];
  let loaded = false;
  let loadPromise = null;

  function resolveIndexUrl() {
    return new URL('index.json', window.location.origin + '/').href;
  }

  async function loadIndex() {
    if (loaded) return pages;
    if (loadPromise) return loadPromise;
    loadPromise = fetch(resolveIndexUrl())
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load search index');
        return res.json();
      })
      .then((data) => {
        pages = Array.isArray(data) ? data : [];
        loaded = true;
        return pages;
      })
      .catch(() => {
        pages = [];
        loaded = true;
        return pages;
      });
    return loadPromise;
  }

  function normalize(text) {
    return (text || '').toLowerCase();
  }

  function search(query) {
    const q = normalize(query).trim();
    if (!q) return [];
    const terms = q.split(/\s+/).filter(Boolean);
    return pages
      .map((page) => {
        const haystack = normalize(`${page.title} ${page.section} ${page.summary}`);
        const score = terms.reduce((acc, term) => {
          if (!haystack.includes(term)) return -Infinity;
          let s = acc;
          if (normalize(page.title).includes(term)) s += 5;
          if (normalize(page.section).includes(term)) s += 2;
          if (normalize(page.summary).includes(term)) s += 1;
          return s;
        }, 0);
        return { page, score };
      })
      .filter((item) => item.score > -Infinity)
      .sort((a, b) => b.score - a.score || a.page.title.localeCompare(b.page.title))
      .slice(0, 8)
      .map((item) => item.page);
  }

  function render(results, query) {
    if (!query.trim()) {
      resultsEl.hidden = true;
      resultsEl.innerHTML = '';
      input.setAttribute('aria-expanded', 'false');
      return;
    }

    if (!results.length) {
      resultsEl.innerHTML = `<div class="search-empty">No posts found for “${escapeHtml(query)}”</div>`;
      resultsEl.hidden = false;
      input.setAttribute('aria-expanded', 'true');
      return;
    }

    resultsEl.innerHTML = results
      .map(
        (page) => `
      <a class="search-result" href="${escapeAttr(page.url)}" role="option">
        <span class="search-result-title">${escapeHtml(page.title)}</span>
        <span class="search-result-meta">${escapeHtml(page.section || 'page')}</span>
      </a>`
      )
      .join('');
    resultsEl.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/'/g, '&#39;');
  }

  let debounceTimer;
  input.addEventListener('input', () => {
    const query = input.value;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      await loadIndex();
      render(search(query), query);
    }, 120);
  });

  input.addEventListener('focus', () => {
    loadIndex();
    if (input.value.trim()) {
      render(search(input.value), input.value);
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      render([], '');
      input.blur();
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchRoot.contains(e.target)) {
      resultsEl.hidden = true;
      input.setAttribute('aria-expanded', 'false');
    }
  });
})();
