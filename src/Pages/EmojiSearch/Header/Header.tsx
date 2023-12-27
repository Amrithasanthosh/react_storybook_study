import React from "react";
import "../../../Styles/Pages/EmojiSearch/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
        width="32"
        height="32"
        alt=""
      />
      Emoji Search
      <img
        src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
        width="32"
        height="32"
        alt=""
      />
    </header>
  );
};

export default Header;
