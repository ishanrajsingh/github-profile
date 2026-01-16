import { GitHubProfile } from "../types/github";

interface Props {
  profile: GitHubProfile;
}

export default function ProfileCard({ profile }: Props) {
  return (
    <div className="profile-card">
      <img src={profile.avatar_url} alt="avatar" />

      <div>
        <h2>{profile.name || profile.login}</h2>
        <p>@{profile.login}</p>

        <div className="profile-stats">
          <span>Followers: {profile.followers}</span>
          <span>Following: {profile.following}</span>
          <span>Location: {profile.location ?? "N/A"}</span>
        </div>
      </div>
    </div>
  );
}
