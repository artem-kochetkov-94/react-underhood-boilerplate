import OwnReact from "../";
import Component from "../Component";
import List from "./List";
import mixArray from "../utils/mix-array";
import mixArrayByAnotherArray from "../utils/mix-array-by-another-array";
import getUniqueArray from "../utils/get-unique-array";

export default class ChangingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      value: ""
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <p>Случайная перемешка <button onClick={this.mixRandom}>MIX</button></p>
          </div>
          <div>
            <p>Перемешать в соответствии с введенным значением
              <input
                type="text"
                value={this.state.value}
                onInput={this.handleInput}
              />
            </p>
          </div>
        </div>
        <button onClick={this.deleteFirstItem}>DELETE FIRST ITEM</button>
        <List items={this.state.items} />
      </div>
    )
  }

  deleteFirstItem = () => {
    this.setState({
      items: this.state.items.slice(1)
    })
  }

  handleInput = e => {
    const { value } = e.target;
    const uniqueLetters = getUniqueArray(value.replace(/\s+/g,'').split(""));

    this.setState({
      value,
      items: mixArrayByAnotherArray(this.state.items, uniqueLetters)
    });
  }

  mixRandom = () => {
    this.setState({
      items: mixArray(this.state.items)
    });
  }
}