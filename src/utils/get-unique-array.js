export default function getUniqueArray(array) {
  return array.slice().filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}
