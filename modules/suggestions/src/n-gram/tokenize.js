import removeAccents from "remove-accents";

function tokenize(text) {
  if (typeof text === "string") {
    return removeAccents(text.toLocaleLowerCase())
      .match(/\w*/g)
      .filter(e => e.length);
  }
  return [];
}

export default tokenize;
