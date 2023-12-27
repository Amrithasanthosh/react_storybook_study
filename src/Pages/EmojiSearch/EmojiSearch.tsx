import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import Header from "./Header/Header";
import Search from "./Search/Search";
import { filterEmoji } from "../../Utils";
import EmojiResults from "./EmojiResults/EmojiResults";
import "../../Styles/Pages/EmojiSearch/EmojiSearch.css";

const EmojiSearch: React.FC = () => {
  const [filteredEmoji, setFilteredEmoji] = useState<
    { title: string; symbol: string; keywords?: string }[]
  >(filterEmoji("", 20));

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFilteredEmoji(filterEmoji(event.target.value, 20));
    },
    []
  );

  useEffect(() => {
    document.title = "Emoji";
  }, []);

  return (
    <div className="emoji-search">
      <Header />
      <Search onChange={handleSearchChange} />
      <EmojiResults emojiData={filteredEmoji} />
    </div>
  );
};

export default EmojiSearch;
