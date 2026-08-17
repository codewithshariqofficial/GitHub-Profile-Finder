<div align="center">

# GitHub Profile Finder

**Search and explore any GitHub user's profile instantly using the GitHub REST API. View stats, repos, followers and more. Built with HTML, CSS and JavaScript.**

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-brightgreen?style=for-the-badge&logo=vercel&logoColor=white)](https://git-hub-profile-finder-seven.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white)](https://docs.github.com/en/rest)

</div>

---

## Live Demo

**https://git-hub-profile-finder-seven.vercel.app**

---

## Topics

`html` `css` `javascript` `github-api` `rest-api` `api-integration` `fetch-api` `responsive-design` `front-end` `vanilla-js`

---

## About

A **powerful GitHub Profile Finder** that lets you search any GitHub user and instantly view their complete profile -- avatar, bio, location, repositories, followers, and more.

Uses the **GitHub REST API** with `fetch()` and `async/await` for real-time data. No API key required!

---

## Features

| Feature | Description |
|---------|-------------|
| Instant Search | Find any GitHub user by username |
| Full Profile | Avatar, name, bio, location |
| Stats | Repos, followers, following count |
| Repo List | Browse user's public repositories |
| Real-Time | Live data from GitHub API |
| Error Handling | Graceful invalid username handling |
| Responsive | Works on all devices |
| No API Key | Free public API access |

---

## Tech Stack

```
HTML5   -->  Search Input and Profile Layout
CSS3    -->  Card Design, Responsive Grid
JS      -->  Fetch API, Async/Await, DOM Updates
API     -->  GitHub REST API v3 (Public, No Auth)
```

---

## API Usage

```javascript
// Fetch user profile
const res = await fetch(`https://api.github.com/users/${username}`);
const user = await res.json();

// Fetch user repos
const repos = await fetch(`https://api.github.com/users/${username}/repos`);
```

**Rate Limit:** 60 requests/hour (unauthenticated)

---

## Quick Start

```bash
git clone https://github.com/codewithshariqofficial/GitHub-Profile-Finder.git
cd GitHub-Profile-Finder
start index.html
```

---

## Project Structure

```
GitHub-Profile-Finder/
  |-- index.html
  |-- script.js
  |-- style.css
  |-- README.md
```

---

## Author

**Code With Shariq Official**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/codewithshariqofficial)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/codewithshariq1/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/codewithshariq1)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://muhammad-shariq-shahid.vercel.app/)
