import OwnReact from "../src";
import ChangingList from "../src/components/ChangingList";

const root = document.getElementById("root");

const alphabetRU = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

// eslint-disable-next-line react/no-deprecated
OwnReact.render(<ChangingList items={alphabetRU.split("")} />, root);
