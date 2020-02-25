import getUniqueArray from "./get-unique-array";

export default function mixArrayByText(array, text) {
  const copyArray = array.slice();
  const lettersUnique = getUniqueArray(text.split(""));
  const indexes = [];

  lettersUnique.forEach(item => {
    const indexLetter = copyArray.indexOf(item);
    indexes.push(indexLetter);
  });

  indexes.sort((a, b) => a - b);

  indexes.forEach((indexLetter, index) => {
    copyArray[indexLetter] = lettersUnique[index];
  });

  return copyArray;
}
