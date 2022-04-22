import React from "react";
import "../Body/index.css";
import { useStateValue } from "../../StateProvider";

function Body({ spotify }) {
  const [{ discover_weekly }] = useStateValue();



  return (
    <div className="body">
      <Body spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
