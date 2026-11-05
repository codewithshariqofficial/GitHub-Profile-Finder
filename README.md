# GitFind — GitHub Profile Finder

A small web app that lets you search any GitHub username and view their profile, stats, contribution graph, and top repositories. Built with plain HTML, CSS, and JavaScript (no framework). Styled with a glassmorphism (frosted glass) look.

## Features

- Search any GitHub user by username
- Shows avatar, name, bio, location, blog, and Twitter handle
- Displays stats: public repositories, followers, following
- Contribution graph
- Top 6 recently updated repositories with language, stars, and forks
- Error message when a user is not found
- Loading spinner while fetching data
- Responsive layout for mobile screens

## Tech Stack

- HTML5
- CSS3 (custom properties, glassmorphism, responsive media queries)
- Vanilla JavaScript (Fetch API)
- [Lucide Icons](https://lucide.dev/) for icons
- [Inter](https://fonts.google.com/specimen/Inter) font (Google Fonts)
- GitHub REST API (`api.github.com`)
- Contribution chart via [ghchart.rshah.org](https://ghchart.rshah.org)

## Project Structure

```
GitHub-Profile-Finder/
├── index.html   # Page markup
├── style.css    # Styling (glassmorphism theme)
├── script.js    # Fetching data and rendering UI
└── README.md
```

## How to Run

No build step or dependencies required.

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. Type a GitHub username in the search box and press Enter (or click the search button).

> Note: The app calls the public GitHub API, which has a rate limit for unauthenticated requests. If searches stop working, wait a bit and try again.

## How It Works

- `script.js` calls `https://api.github.com/users/{username}` to fetch user data.
- It then calls `https://api.github.com/users/{username}/repos?sort=updated&per_page=6` for the latest repositories.
- The contribution graph is loaded from `https://ghchart.rshah.org/00d2ff/{username}`.

## License

This project is open source. Feel free to use and modify it.