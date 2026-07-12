---
title: Basics On Web Development
categories: random_stuff
tags: [random_stuff]
---

## 1. Networks, the Internet, and How It Works

To understand the web, we first have to understand the physical highway it rides on.

### What is a Network?

A **Network** is simply a collection of two or more computers or devices linked together so they can share resources, files, and communicate with each other.

### What is the Internet?

The **Internet** is literally an internetwork—a global network of millions of smaller networks connected together. It is a massive, physical infrastructure consisting of underground wires, fiber-optic cables running across ocean floors, satellites, and routers.

### How Does It Work?

Every device connected to the internet is assigned a unique identifier called an **IP Address** (Internet Protocol Address), which looks like a string of numbers (e.g., `192.168.1.1`). Think of an IP address as a digital mailing address. When two computers communicate over the internet, they find each other using these precise numerical addresses.

---

## 2. The Client-Server Model & Web Servers

The entire web operates on a fundamental division of labor called the **Client-Server Model**.

### What is a Client?

The **Client** is the device or application requesting information. When you look at a website on your phone, laptop, or smart TV, your web browser acts as the client.

### What is a Server?

A **Server** is a high-powered computer that runs 24/7, waiting to "serve" up data, files, or images to any client that asks for them.

### What is a Web Server?

While a "server" can refer to the physical machine, a **Web Server** is specific software (like Apache or Nginx) running on that machine. Its sole job is to understand incoming web requests and deliver the correct files (HTML, CSS, JavaScript, images) back to the client's browser.

---

## 3. Packets and How Data Travels

Data on the internet doesn't travel as one giant file. If you try to download a massive high-definition video all at once, it would clog the network lines.

### What is a Packet?

To solve this, files are chopped up into thousands of tiny, bite-sized pieces called **Packets**. Each packet contains:

* A chunk of the actual data payload.
* A header containing metadata (the sender's IP address, the destination's IP address, and the packet's sequence number).

### How Data Travels

When you click a link, the server splits the webpage data into packets. These packets are sent across the internet via devices called **Routers**.

Routers act like traffic cops, directing each packet along the fastest available path. Because network traffic changes rapidly, individual packets belonging to the exact same file might take completely different routes across the globe. Once all the packets arrive at your browser, they look at the sequence numbers in the headers and reassemble themselves back into the complete webpage you see on your screen.

---

## 4. Web Browsers vs. Search Engines

Beginners frequently confuse these two terms, but they play completely different roles in your web experience.

* **Web Browser:** A software application installed locally on your device (e.g., Google Chrome, Safari, Firefox) used to display websites. It takes the code (HTML/CSS) sent by a server and translates it into a visual webpage you can interact with.
* **Search Engine:** A website inside the browser (e.g., Google, Bing, DuckDuckGo) used to find other websites. Search engines use automated bots called "crawlers" to map out the web and create a searchable index of pages.

---

## 5. Domain Names, DNS, and How It Works

Computers love numbers, but humans love words. It's much easier to remember `google.com` than `142.250.190.46`. This is where domains and the DNS come into play.

### What is a Domain?

A **Domain Name** is the human-readable text string we type into a browser to visit a website (e.g., `wikipedia.org`).

### What is DNS (Domain Name System)?

The **DNS** is often called the "phonebook of the internet." It is a decentralized network of servers whose only job is to map human-readable domain names to their actual computer IP addresses.

### How a DNS Lookup Works:

1. You type `example.com` into your browser.
2. Your computer checks its local memory cache. If it doesn't know the address, it sends a request to a **DNS Resolver** (usually managed by your Internet Service Provider).
3. The resolver asks a chain of specialized servers (Root, TLD, and Authoritative nameservers) until it finds the exact matching record.
4. The DNS system returns the IP address (e.g., `93.184.216.34`) back to your browser.
5. Your browser now uses that IP address to talk directly to the target web server.

---

## 6. Demystifying Protocols: HTTP vs. HTTPS

Once your browser knows the server's IP address, they need a standardized language to speak to each other. That language is a **Protocol**.

### What is HTTP?

**HTTP** stands for *Hypertext Transfer Protocol*. It is the foundational set of rules governing how web browsers and web servers send data back and forth. When a browser sends an HTTP request, the server responds with an HTTP response status code (like `200 OK` or `404 Not Found`).

### What is HTTPS?

**HTTPS** stands for *Hypertext Transfer Protocol Secure*. The standard HTTP protocol sends data over the wire in plain, readable text. If you type your credit card into an old HTTP site, an attacker sitting on your Wi-Fi network could read it instantly.

HTTPS adds an explicit layer of security using encryption protocols called **SSL/TLS**. This scrambles the data before it leaves your device, making it completely unreadable to anyone intercepting it along the way.

---

## 7. Anatomy of a URL

A **URL** (Uniform Resource Locator) is the complete web address used to target a specific resource or page on the internet. A URL is composed of several distinct building blocks:

```text
https://blog.example.com:80/courses/web-dev?session=1#intro

```

* **Protocol (`https://`):** Declares the set of communication rules the browser must use to connect.
* **Subdomain (`blog.`):** An optional prefix used to organize separate sections of a larger website ecosystem.
* **Domain Name (`example.com`):** The primary registered destination identity pointing to the target server.
* **Port (`:80`):** The specific digital gateway or channel on the server being targeted. (HTTP defaults to port 80; HTTPS defaults to port 443). Ports are usually hidden in your browser bar automatically.
* **Path (`/courses/web-dev`):** Points to the specific file directory location or page path inside that server's architecture.
* **Query Parameters (`?session=1`):** Extra data keys passed dynamically to the backend server script (separated by a question mark).
* **Anchor/Fragment (`#intro`):** An internal bookmark instruction telling your browser to scroll instantly to a specific heading ID on that page.
