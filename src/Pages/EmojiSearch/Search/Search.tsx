import React, { ChangeEvent, useState } from "react";
import TextInput from "../../../Components/TextInput/TextInput";
import "../../../Styles/Pages/EmojiSearch/Search.css";

type SearchPropType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<SearchPropType> = ({ onChange }) => {
  return (
    <div className="search">
      <TextInput
        type="text"
        onChange={onChange}
        autoFocus
        label=""
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
