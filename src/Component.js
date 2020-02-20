import updateInstance from "./update-instance";

export default class Component {
  constructor(props) {
    this.props = props;
    this.state = this.state || {};
  }

  setState(partialState) {
    this.state = { ...this.state, ...partialState };
    // eslint-disable-next-line no-underscore-dangle
    updateInstance(this.__internalInstance);
  }
}

Component.isClass = true;
