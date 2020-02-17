import OwnReact from "../"
import List from "./list"
import ListItem from "./list-item"

const Alphabet = props => (
  <List>
    {props.alphabet.map(letter => <ListItem>{letter}</ListItem>)}
  </List>
)

export default Alphabet