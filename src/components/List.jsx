import OwnReact from "../";
import ListItem from "./List-item";

export default function List({ items }) {
  return (
    <ul>
      {items.map(item => <ListItem>{item}</ListItem>)}
    </ul>
  )
}