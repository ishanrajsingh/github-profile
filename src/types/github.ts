export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  location: string | null;
  repos_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string | null;
}
