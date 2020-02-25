import OwnReact from "../";
import Component from "../Component";
import List from "./List";
import mixArray from "../utils/mix-array";

export default class ChangingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
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
        <button onClick={this.startMix}>START MIX</button>
        <button onClick={this.endMix}>END MIX</button>
      </div>
    )
  }

  startMixing = () => {
    if (this.idInterval) {
      clearInterval(this.idInterval);
    }

    this.idInterval = setInterval(() => {
      this.setState({
        items: mixArray(this.state.items)
      });
    }, 1000);
  }

  endMixing = () => {
    clearInterval(this.idInterval);
  }
}