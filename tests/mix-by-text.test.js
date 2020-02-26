import mixArrayByAnotherArray from "../src/utils/mix-array-by-another-array";
import getUniqueArray from "../src/utils/get-unique-array";

test("mix correct works", () => {
  const text = "г а б";
  const uniqueLetters = getUniqueArray(text.replace(/\s+/g, "").split(""));

  const array = "абвгдеёж".split("");
  const mixedArray = mixArrayByAnotherArray(array, uniqueLetters);

  expect(mixedArray).toEqual(["г", "а", "в", "б", "д", "е", "ё", "ж"]);
});
