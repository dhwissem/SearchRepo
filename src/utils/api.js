const BASE_URL = 'https://api.github.com';

class GitHubAPI {
  static getRepos(query, page, size) {
    return fetch(
      `${BASE_URL}/search/repositories?q=${query}&sort=score&order=desc&page=${page}&per_page=${size}`
    )
      .then(response => response.json())
      .then(json => json.items);
  }

  static getContributors(owner, repository, page, size) {
    return fetch(
      `${BASE_URL}/repos/${owner}/${repository}/contributors?sort=contributions&order=desc&page=${page}&per_page=${size}`
    ).then(response => response.json());
  }
}

export default GitHubAPI;
