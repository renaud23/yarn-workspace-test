import stringHash from "string-hash";

export function isIterable(o) {
  if (o) {
    return typeof o[Symbol.iterator] === "function";
  }
  return false;
}

export function getIterableKey(iterable) {
  if (isIterable(iterable)) {
    return stringHash(iterable.reduce((a, i) => `${a}${i}`, ""));
  }
  return undefined;
}
