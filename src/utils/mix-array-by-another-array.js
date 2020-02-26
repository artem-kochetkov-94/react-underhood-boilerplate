export default function mixArrayByText(array, comparedArray) {
  const copyArray = array.slice();
  const arrayIndexes = [];
  const letterIndexes = [];

  comparedArray.forEach(item => {
    const indexLetter = copyArray.indexOf(item);
    if (indexLetter > -1) {
      arrayIndexes.push(indexLetter);
      letterIndexes.push(item);
    }
  });

  arrayIndexes.sort((a, b) => a - b);

  arrayIndexes.forEach((indexLetter, index) => {
    copyArray[indexLetter] = letterIndexes[index];
  });

  return copyArray;
}
