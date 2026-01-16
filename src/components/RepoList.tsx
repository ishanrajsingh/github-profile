import { GitHubRepo } from "../types/github";
import RepoCard from "./RepoCard";

interface Props {
  repos: GitHubRepo[];
}

export default function RepoList({ repos }: Props) {
  return (
    <div className="repo-grid">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
