function createTextElement(item) {
  return {
    type: "TEXT ELEMENT",
    props: {
      nodeValue: item
    }
  };
}

export default function parseChildren(children) {
  const resultChildren = [];

  children.forEach(item => {
    if (typeof item === "string") {
      resultChildren.push(createTextElement(item));
    } else {
      resultChildren.push(item);
    }
  });

  return resultChildren;
}
