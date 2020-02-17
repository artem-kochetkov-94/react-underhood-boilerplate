import OwnReact from "../src";
import mixArray from "../src/utils/mix-array";

const root = document.getElementById("root");

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

let List = (
  <div>
    {alphabet.map(word => (
      <div>{word}</div>
    ))}
  </div>
);

// eslint-disable-next-line react/no-deprecated
OwnReact.render(List, root);

setInterval(() => {
  alphabet = mixArray(alphabet);

  // почему-то значение alphabet кешируется и в render попадают старые данные
  List = (
    <div>
      {alphabet.map(word => (
        <div>{word}</div>
      ))}
    </div>
  );

  // eslint-disable-next-line react/no-deprecated
  OwnReact.render(List, root);
}, 1000);
