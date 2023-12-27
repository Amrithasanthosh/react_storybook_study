import React, { useEffect } from "react";
import Clipboard from "clipboard";
import EmojiResultRow from "../EmojiResultRow/EmojiResultRow";
import "../../../Styles/Pages/EmojiSearch/EmojiResults.css";

type EmojiResultsPropType = {
  emojiData: Array<{ title: string; symbol: string }>;
};

const EmojiResults: React.FC<EmojiResultsPropType> = ({ emojiData }) => {
  useEffect(() => {
    const clipboard = new Clipboard(".copy-to-clipboard");

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="component-emoji-results">
      {emojiData.map((emojiData) => (
        <EmojiResultRow
          key={emojiData.title}
          symbol={emojiData.symbol}
          title={emojiData.title}
        />
      ))}
    </div>
  );
};

export default EmojiResults;
