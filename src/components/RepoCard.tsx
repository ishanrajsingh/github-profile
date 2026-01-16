import { GitHubRepo } from "../types/github";

interface Props {
  repo: GitHubRepo;
}

export default function RepoCard({ repo }: Props) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="repo-card"
    >
      <h3>{repo.name}</h3>
      <p>{repo.description || "No description available"}</p>

      <div className="repo-meta">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>{repo.language}</span>
      </div>
    </a>
  );
}
