import OwnReact from "../src";
import Alphabet from "../src/components/alphabet";
import mixArray from "../src/utils/mix-array";

const root = document.getElementById("root");

// eslint-disable-next-line react/no-deprecated

let alphabet = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я"
];

// eslint-disable-next-line
OwnReact.render(<Alphabet alphabet={alphabet} />, root);

setInterval(() => {
  alphabet = mixArray(alphabet);

  // eslint-disable-next-line
  OwnReact.render(<Alphabet alphabet={alphabet} />, root);
}, 5000);
