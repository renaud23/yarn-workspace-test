import removeAccents from "remove-accents";

export function tokenize(text) {
  if (typeof text === "string") {
    return removeAccents(text.toLocaleLowerCase())
      .match(/\w*/g)
      .filter(e => e.length);
  }
  return [];
}

export function aggregateParts(parts) {
  return parts.reduce((a, part) => {
    const start = part.substr(0, part.length - 1);
    const letter = part.substr(part.length - 1);

    if (start in a) {
      return {
        ...a,
        [start]: {
          ...a[start],
          [letter]: letter in a[start] ? a[start][letter] + 1 : 1
        }
      };
    }
    return { ...a, [start]: { [letter]: 1 } };
  }, {});
}
