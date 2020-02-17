import App from "../samples/App";

test("jsx works", () => {
  expect(App).toEqual({
    props: {
      children: [
        {
          props: {
            nodeValue: "Hello, World!"
          },
          type: "TEXT ELEMENT"
        }
      ],
      prop1: "prop value"
    },
    type: "h5"
  });
});
