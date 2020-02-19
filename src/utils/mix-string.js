import getRandomInteger from "./get-random-integer";

export default function mixString(text) {
  const arrayCopy = text.split("");

  for (let i = 0; i < 5; i += 1) {
    const prevPosition = getRandomInteger(0, arrayCopy.length - 1);
    let nextPosition = null;

    do {
      nextPosition = getRandomInteger(0, arrayCopy.length - 1);

      if (prevPosition !== nextPosition) {
        const prevLetter = arrayCopy[prevPosition];
        const nextLetter = arrayCopy[nextPosition];

        arrayCopy[prevPosition] = nextLetter;
        arrayCopy[nextPosition] = prevLetter;
      }
    } while (prevPosition === nextPosition);
  }

  return arrayCopy.join("");
}
