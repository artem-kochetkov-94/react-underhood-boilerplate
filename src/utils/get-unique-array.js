export default function getUniqueArray(array) {
  return array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}
