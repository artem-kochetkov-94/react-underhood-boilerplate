import isEvent from "./is-event";

const isAttribute = name => !isEvent(name) && name !== "children";

export default isAttribute;
