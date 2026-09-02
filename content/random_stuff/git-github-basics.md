---
date: '2026-08-01'
tags:
- git
- github
- version-control
- beginners
title: Getting Started with Git & GitHub
---

Managing project history manually gets messy fast. That is where **Git** and **GitHub** come in—the industry standards for tracking code history and collaborating with other developers.

---

## 1. Git vs. GitHub: What's the Difference?

Many beginners mix up Git and GitHub, but they are 2 separate things:

* **Git :** A local command-line tool installed on your computer do not need internet or anything.

* **GitHub :** A platform that hosts your Git repositories online so you can store backups and share code with teams now powered by Microsoft.

---

## 2. The 3 Main Part of Git

To master Git, picture three zones on your local system:

1. **Working Directory:** Where you actively edit your Python code files.
2. **Staging Area :** A temporary zone where we select or check files we are trying to upload.
3. **GitHub Repository :** Your directory on the cloud.

---

## 3. Essential Git Commands Workflow To Push Existing Folder/Directory Work To A New Repo

### Step 1: Initialize a Repository

Turn any project folder into a Git-tracked folder:

```bash
git init

```

### Step 2: Track Changes (Staging)

Select a single file or select all modified files at once to be upload:

```bash
git add your_file_name
# OR stage everything:
git add .

```

### Step 3: Save Your Changes Or Add A Message(Committing)

Take a proof of your selected files with a clear message and a message to show in history that why you did it:

```bash
git commit -m "Add initial user login function"
```

---

## 4. Connecting Local Git to GitHub

Once you've made local commits, push your work to GitHub:

### Link to Remote Repository

Link your local project folder to a blank GitHub repository:

```bash
git remote add origin https://github.com/your-username/your-repo-name.git
```

### Push Code Up to GitHub

Send your saved commits to the `main` branch online:

```bash
git push -u origin main # -u is only required first time.
```

---

## Core Commands Cheat Sheet

| Command | Action |
| --- | --- |
| `git status` | View modified files in your working directory |
| `git log` | Review full commit history |
| `git clone <url>` | Download an existing repository from GitHub |
| `git pull` | Fetch and merge the latest code updates from GitHub |

---


## 4. Downloading Existing Git Repo To Your System And Work With It

### Step 1: Clone the Repository (`git clone`)

To copy an entire repository from GitHub down to your local computer, copy its HTTPS URL from GitHub and run:

```bash
git clone https://github.com/username/repository-name.git
```

This creates a new folder on your computer named after the repository, complete with all project files and its full commit history.

**Pro Tip:** Navigate inside the newly created folder right after cloning!
```bash
cd repository-name
```

---

### Step 2: Check the Project Status (`git status`)

Before making changes, it's good practice to inspect the current state of your working directory:

```bash
git status
```

This tells you which branch you are currently on and confirms that your working space is clean and up to date.

---

### Step 3: Make Changes, Stage, and Commit

Edit your code files as usual. Once you're done and tested your updates, Add and commit changes:

```bash
# 1. Stage the specific file you modified
git add xyz.py

# 2. Commit the changes with a clear message
git commit -m "Fix calculation bug in xyz.py"
```

---

### Step 4: Fetch Latest Updates Before Pushing (`git pull` & `git push`)

If other people (or you on another machine) updated the remote repository while you were working, you should pull the latest changes first to keep everything in same page:

```bash
# Get the latest changes from GitHub
git pull origin main
```

Finally, upload your new local commits up to GitHub:

```bash
# Push your commits up to the remote main branch
git push origin main
```
