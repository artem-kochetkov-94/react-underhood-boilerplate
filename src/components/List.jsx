import OwnReact from "../";
import Component from "../Component";
import ListItem from "./List-item";
import mixArray from "../utils/mix-array";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    }
    this.startMix = this.startMix.bind(this);
    this.endMix = this.endMix.bind(this);
  }

  startMix() {
    this.idInterval = setInterval(() => {
      this.setState({
        items: mixArray(this.state.items)
      })
    }, 1000)
  }

  endMix() {
    clearInterval(this.idInterval);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.startMix}>START MIX</button>
          <button onClick={this.endMix}>END MIX</button>
        </div>
        <ul>
          {this.state.items.map(item => <ListItem>{item}</ListItem>)}
        </ul>
      </div>
    )
  }
}