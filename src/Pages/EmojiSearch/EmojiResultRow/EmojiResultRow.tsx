import React from "react";
import "../../../Styles/Pages/EmojiSearch/EmojiResultRow.css";

type EmojiResultRowPropType = {
  title: string;
  symbol: string;
};

const EmojiResultRow: React.FC<EmojiResultRowPropType> = ({
  title,
  symbol,
}) => {
  const codePointHex =
    symbol && symbol.length > 0 ? symbol.codePointAt(0)?.toString(16) : "";

  const src = codePointHex
    ? `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`
    : "";

  return (
    <div
      className="component-emoji-result-row copy-to-clipboard"
      data-clipboard-text={symbol}
    >
      <img alt={title} src={src} />
      <div className="title">{title}</div>
    </div>
  );
};

export default EmojiResultRow;
