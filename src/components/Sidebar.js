import React from "react";

function Sidebar({ topAnime }) {
  return (
    <aside>
      <nav>
        <h3>Top Anime</h3>
        {topAnime.map((anime) => (
          <a
            href={anime.url}
            target="_blank"
            key={anime.mal_id}
            rel="noreferrer"
          >
            {anime.title}
          </a>
        ))}
      </nav>
      {topAnime.map((anime) => (
        <div>
          <a href={anime.url} target="_blank" rel="noreferrer">
            <figure>
              <img src={anime.image_url} alt="Anime" />
            </figure>
          </a>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
