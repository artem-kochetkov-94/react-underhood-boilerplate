import parseChildren from "./utils/parse-children";
import reconcile from "./reconcile";

let rootInstance = null;

class OwnReact {
  /** @jsx createElement */
  static createElement(type, props, ...children) {
    const flatChildren = [];
    children.forEach(child => {
      if (Array.isArray(child)) {
        return child.forEach(item => flatChildren.push(item));
      }

      return flatChildren.push(child);
    });

    if (typeof type === "function") {
      const componentProps = {
        ...props,
        children: ((props && props.children) || []).concat(
          parseChildren(flatChildren)
        )
      };

      // eslint-disable-next-line
      const newElement = new type(componentProps);

      return newElement;
    }

    const newElement = {
      type,
      props: {
        ...props
      }
    };

    if (children.length) {
      const copyChildren = [].concat(...flatChildren);
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
