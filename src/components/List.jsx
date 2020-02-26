import OwnReact from "../";
import ListItem from "./ListItem";

export default function List({ items }) {
  return (
    <ul>
      {items.map(item => <ListItem>{item}</ListItem>)}
    </ul>
  )
}