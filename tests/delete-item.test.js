import OwnReact from "../src";
import List from "../src/components/List";
import reconcile from "../src/reconcile";

test("correct reconcile on delete item", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  const prevElement = <List items={["а", "б", "в", "г"]} />;
  const nextElement = <List items={["а", "б"]} />;

  const prevInstance = reconcile(root, null, prevElement);

  expect(
    reconcile(root, prevInstance, nextElement).dom.children.length
  ).toEqual(2);
});
