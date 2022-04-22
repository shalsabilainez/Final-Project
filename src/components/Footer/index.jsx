import React, { useEffect } from "react";
import { useStateValue } from "../../StateProvider";

function Footer({ spotify }) {
  const [{ item }, dispatch] = useStateValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [dispatch, spotify]);

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
