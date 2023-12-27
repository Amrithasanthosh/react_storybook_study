import emojiList from "../Constants/EmojiList.json";

export const filterEmoji = (searchText: string, maxResults: number) => {
  return emojiList
    .filter((emoji: any) => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
};

// export default function filterEmoji(searchText, maxResults) {
//   return emojiList
//     .filter(emoji => {
//       if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
//         return true;
//       }
//       if (emoji.keywords.includes(searchText)) {
//         return true;
//       }
//       return false;
//     })
//     .slice(0, maxResults);
// }
