function createTextElement(text) {
  return {
    type: "TEXT ELEMENT",
    props: {
      nodeValue: text
    }
  };
}

export default function parseChildren(children) {
  if (!children) return [];

  const copyChildren = [].concat(...children);

  return copyChildren.map(child => {
    if (typeof child === "string") {
      return createTextElement(child);
    }

    return child;
  });
}
