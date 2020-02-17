import parseChildren from "./utils/parse-children";
import reconcile from "./reconcile";

let rootInstance = null;

class OwnReact {
  /** @jsx createElement */
  static createElement(type, props, ...children) {
    const newElement = {
      type,
      props: {
        ...props
      }
    };

    if (children.length) {
      const copyChildren = [].concat(...children);
      newElement.props.children = (newElement.props.children || []).concat(
        parseChildren(copyChildren)
      );
    }

    return newElement;
  }

  static render(element, container) {
    const prevInstance = rootInstance;
    const nextInstance = reconcile(container, prevInstance, element);
    rootInstance = nextInstance;
  }
}

export default OwnReact;
