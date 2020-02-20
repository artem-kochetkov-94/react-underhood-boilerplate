import OwnReact from "../src";
import List from "../src/components/List";

const root = document.getElementById("root");

const alphabetRU = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

// eslint-disable-next-line react/no-deprecated
OwnReact.render(<List items={alphabetRU.split("")} />, root);
