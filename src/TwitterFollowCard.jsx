import { useState } from "react";
export function TwitterFollowCard({
  formatUserName,
  userName,
  name,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleclick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button
          className={buttonClassName}
          onClick={() => {
            handleclick();
          }}
        >
          <span className="tw-followCard-Follow">{text}</span>
          <span className="tw-followCard-unFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
