export default function createPublicInstance(element, internalInstance) {
  const { type, props } = element;
  // eslint-disable-next-line new-cap
  const publicInstance = new type(props);
  // eslint-disable-next-line no-underscore-dangle
  publicInstance.__internalInstance = internalInstance;
  return publicInstance;
}
