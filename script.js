const searchInput = document.getElementById('username-input');
const searchBtn = document.getElementById('search-btn');
const mainContent = document.getElementById('main-content');
const welcomeMessage = document.getElementById('welcome-message');
const profileSection = document.getElementById('profile-section');
const errorMessage = document.getElementById('error-message');
const loader = document.getElementById('loader');

// Profile Elements
const avatar = document.getElementById('avatar');
const nameElement = document.getElementById('name');
const usernameElement = document.getElementById('username');
const bioElement = document.getElementById('bio');
const locationElement = document.getElementById('location');
const blogElement = document.getElementById('blog');
const twitterElement = document.getElementById('twitter');
const reposCount = document.getElementById('repos-count');
const followersCount = document.getElementById('followers-count');
const followingCount = document.getElementById('following-count');
const contributionGraph = document.getElementById('contribution-graph');
const reposGrid = document.getElementById('repos-grid');

// Detail Spans
const locationSpan = document.getElementById('location-span');
const blogSpan = document.getElementById('blog-span');
const twitterSpan = document.getElementById('twitter-span');

async function fetchGitHubUser(username) {
    showLoader();
    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        
        if (!userResponse.ok) {
            if (userResponse.status === 404) {
                showError();
            } else {
                throw new Error('Something went wrong');
            }
            return;
        }

        const userData = await userResponse.json();
        
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const reposData = await reposResponse.json();

        renderProfile(userData);
        renderRepos(reposData);
        showProfile();
    } catch (error) {
        console.error(error);
        showError();
    }
}

function renderProfile(user) {
    avatar.src = user.avatar_url;
    nameElement.textContent = user.name || user.login;
    usernameElement.textContent = `@${user.login}`;
    bioElement.textContent = user.bio || 'No bio available';
    
    // Stats
    reposCount.textContent = user.public_repos;
    followersCount.textContent = user.followers;
    followingCount.textContent = user.following;

    // Details
    if (user.location) {
        locationElement.textContent = user.location;
        locationSpan.classList.remove('hidden');
    } else {
        locationSpan.classList.add('hidden');
    }

    if (user.blog) {
        blogElement.textContent = user.blog.replace(/^https?:\/\//, '');
        blogElement.href = user.blog.startsWith('http') ? user.blog : `https://${user.blog}`;
        blogSpan.classList.remove('hidden');
    } else {
        blogSpan.classList.add('hidden');
    }

    if (user.twitter_username) {
        twitterElement.textContent = `@${user.twitter_username}`;
        twitterElement.href = `https://twitter.com/${user.twitter_username}`;
        twitterSpan.classList.remove('hidden');
    } else {
        twitterSpan.classList.add('hidden');
    }

    // Contribution Graph
    contributionGraph.src = `https://ghchart.rshah.org/00d2ff/${user.login}`;
}

function renderRepos(repos) {
    reposGrid.innerHTML = '';
    
    repos.forEach(repo => {
        const repoCard = document.createElement('a');
        repoCard.className = 'repo-card';
        repoCard.href = repo.html_url;
        repoCard.target = '_blank';

        repoCard.innerHTML = `
            <div>
                <h4>${repo.name}</h4>
                <p>${repo.description || 'No description available'}</p>
            </div>
            <div class="repo-stats">
                <span><i data-lucide="code-2"></i> ${repo.language || 'Unknown'}</span>
                <span><i data-lucide="star"></i> ${repo.stargazers_count}</span>
                <span><i data-lucide="git-fork"></i> ${repo.forks_count}</span>
            </div>
        `;
        reposGrid.appendChild(repoCard);
    });

    // Refresh icons for dynamic content
    lucide.createIcons();
}

function showLoader() {
    welcomeMessage.classList.add('hidden');
    profileSection.classList.add('hidden');
    errorMessage.classList.add('hidden');
    loader.classList.remove('hidden');
}

function showProfile() {
    loader.classList.add('hidden');
    profileSection.classList.remove('hidden');
}

function showError() {
    loader.classList.add('hidden');
    errorMessage.classList.remove('hidden');
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const username = searchInput.value.trim();
    if (username) {
        fetchGitHubUser(username);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const username = searchInput.value.trim();
        if (username) {
            fetchGitHubUser(username);
        }
    }
});
