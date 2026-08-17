<div align="center">

# ðŸ” GitHub Profile Finder

**Search & explore any GitHub user's profile instantly using the GitHub REST API. View stats, repos, followers & more. Built with HTML, CSS & JavaScript.**

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-brightgreen?style=for-the-badge&logo=vercel&logoColor=white)](https://github-profile-finder.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white)](https://docs.github.com/en/rest)

</div>

---

## ðŸ“Œ Topics

`html` `css` `javascript` `github-api` `rest-api` `profile-finder` `fetch-api` `dom-manipulation` `async-await` `responsive-design` `front-end` `web-development` `vanilla-js` `api-integration`

---

## ðŸ“– About

A **powerful GitHub Profile Finder** that lets you search any GitHub user and instantly view their complete profile â€” avatar, bio, location, repositories, followers, and more.

Uses the **GitHub REST API** with `fetch()` and `async/await` for real-time data. No API key required!

---

## âœ¨ Features

| Feature | Description |
|---------|-------------|
| ðŸ”Ž Instant Search | Find any GitHub user by username |
| ðŸ‘¤ Full Profile | Avatar, name, bio, location |
| ðŸ“Š Stats | Repos, followers, following count |
| ðŸ“¦ Repo List | Browse user's public repositories |
| âš¡ Real-Time | Live data from GitHub API |
| ðŸ›¡ï¸ Error Handling | Graceful invalid username handling |
| ðŸ“± Responsive | Works on all devices |
| ðŸš« No API Key | Free public API access |

---

## ðŸ› ï¸ Tech Stack

```
HTML5   âžœ Search Input & Profile Layout
CSS3    âžœ Card Design, Responsive Grid
JS      âžœ Fetch API, Async/Await, DOM Updates
API     âžœ GitHub REST API v3 (Public, No Auth)
```

---

## âš™ï¸ API Usage

```javascript
// Fetch user profile
const res = await fetch(`https://api.github.com/users/${username}`);
const user = await res.json();

// Fetch user repos
const repos = await fetch(`https://api.github.com/users/${username}/repos`);
```

**Rate Limit:** 60 requests/hour (unauthenticated)

---

## ðŸš€ Quick Start

```bash
git clone https://github.com/codewithshariqofficial/GitHub-Profile-Finder.git
cd GitHub-Profile-Finder
start index.html
```

---

## ðŸ“‚ Project Structure

```
GitHub-Profile-Finder/
â”œâ”€â”€ index.html      # Search UI
â”œâ”€â”€ script.js       # API calls & DOM logic
â”œâ”€â”€ style.css       # Styling
â””â”€â”€ README.md
```

---

## ðŸ‘¨â€ðŸ’» Author

**Code With Shariq Official**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/codewithshariqofficial)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/codewithshariq1/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/codewithshariq1)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://muhammad-shariq-shahid.vercel.app/)

---
