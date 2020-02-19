import OwnReact from "../src";
import mixString from "../src/utils/mix-string";

const root = document.getElementById("root");

let alphabetRU = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

let List = (
  <ul>
    {alphabetRU.split("").map(word => (
      <li>{word}</li>
    ))}
  </ul>
);

// eslint-disable-next-line react/no-deprecated
OwnReact.render(List, root);

setInterval(() => {
  alphabetRU = mixString(alphabetRU);

  // почему-то значение alphabet кешируется и в render попадают старые данные
  List = (
    <ul>
      {alphabetRU.split("").map(word => (
        <li>{word}</li>
      ))}
    </ul>
  );

  // eslint-disable-next-line react/no-deprecated
  OwnReact.render(List, root);
}, 5000);
