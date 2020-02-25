import OwnReact from "../";
import Component from "../Component";
import List from "./List";
import mixArray from "../utils/mix-array";
import mixArrayByText from "../utils/mix-array-by-text";

export default class ChangingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultItems: props.items,
      items: props.items,
      value: ""
    }
  }

  render() {
    return (
      <div>
        {this.renderControls()}
        <List items={this.state.items} />
      </div>
    )
  }

  renderControls() {
    return (
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
    )
  }

  handleInput = e => {
    const { value } = e.target;

    this.setState({
      value,
      items: this.mixByText(this.state.defaultItems, value)
    })
  }

  mixRandom = () => {
    this.setState({
      items: mixArray(this.state.items)
    });
  }

  mixByText(array, text) {
    return mixArrayByText(array, text);
  }
}