import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import { GitHubProfile, GitHubRepo } from "./types/github";
import "./index.css";

export default function App() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async (username: string) => {
    try {
      setLoading(true);
      setError("");

      const profileRes = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!profileRes.ok) {
        throw new Error("User not found");
      }

      const profileData: GitHubProfile = await profileRes.json();
      setProfile(profileData);

      const repoRes = await fetch(profileData.repos_url);
      const repoData: GitHubRepo[] = await repoRes.json();
      setRepos(repoData);
    } catch (err: any) {
      setError(err.message);
      setProfile(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <SearchBar onSearch={fetchUser} />

      {loading && <p className="info">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {profile && <ProfileCard profile={profile} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}
