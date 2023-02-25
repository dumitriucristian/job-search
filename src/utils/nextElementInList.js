const nextElementInList = (list, value) => {
  const currentElementIndex = list.indexOf(value);
  const nextElementIndex = (currentElementIndex + 1) % list.length;
  return list[nextElementIndex];
};

export default nextElementInList;
