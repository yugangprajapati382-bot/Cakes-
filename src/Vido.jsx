
import React, { useState } from "react";
import "./Vido.css";

import vimg from "./video-box-image.jpg";

const Vido = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="vido-section">

      <div className="vido-image">
        <img src={vimg} alt="Delicious food" />

        <div className="vido-overlay"></div>
        <button
          className="vido-play"
          onClick={() => setPlaying(!playing)}
          aria-label="Play video"
        >
          {playing ? "Ⅱ" : "▶"}
        </button>

        {playing && (
          <div className="vido-player">
            <div className="vido-player-content">
              <button
                className="vido-close"
                onClick={() => setPlaying(false)}
              >
                ×
              </button>

              <p>Add your video URL here to play your video.</p>
            </div>
          </div>
        )}
      </div>

    </section>
  );
};

export default Vido;
