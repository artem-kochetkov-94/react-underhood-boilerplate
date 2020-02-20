import parseChildren from "./parse-children";
import reconcile from "./reconcile";

let rootInstance = null;

class OwnReact {
  /** @jsx createElement */
  static createElement(type, props, ...children) {
    if (typeof type === "function") {
      if (!type.isClass) {
        const componentProps = {
          ...props,
          children: ((props && props.children) || []).concat(
            parseChildren(children)
          )
        };

        // eslint-disable-next-line new-cap
        const component = new type(componentProps);
        return component;
      }
    }

    const resultProps = { ...props };

    if (children.length) {
      resultProps.children = ((props && props.children) || []).concat(
        parseChildren(children)
      );
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
