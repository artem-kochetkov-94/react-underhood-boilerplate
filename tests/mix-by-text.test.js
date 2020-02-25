import mixArrayByText from "../src/utils/mix-array-by-text";

test("mix correct works", () => {
  const text = "габ";
  const array = "абвгдеёж".split("");
  const mixedArray = mixArrayByText(array, text);

  expect(mixedArray).toEqual(["г", "а", "в", "б", "д", "е", "ё", "ж"]);
});
