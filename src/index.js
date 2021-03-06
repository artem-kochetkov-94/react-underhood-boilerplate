import parseChildren from "./parse-children";
import reconcile from "./reconcile";

let rootInstance = null;

class OwnReact {
  /** @jsx createElement */
  static createElement(type, props, ...children) {
    const resultProps = {
      ...props,
      children: parseChildren(children)
    };

    if (typeof type === "function") {
      if (!type.isClass) {
        // eslint-disable-next-line new-cap
        const component = new type(resultProps);
        return component;
      }
    }

    return {
      type,
      props: resultProps
    };
  }

  static render(element, container) {
    const prevInstance = rootInstance;
    const nextInstance = reconcile(container, prevInstance, element);
    rootInstance = nextInstance;
  }
}

export default OwnReact;
