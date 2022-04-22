import React from "react";
import SidebarOption from "../SidebarOption";
import { useStateValue } from "../../StateProvider";

function Sidebar() {
  const [{ playlists }] = useStateValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt=""
      />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
