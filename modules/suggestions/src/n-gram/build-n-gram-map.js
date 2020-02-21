import * as tools from "./ngram-tools";

export function buildNGramMap(nGrams) {
  return nGrams.reduce(function(a, it) {
    const start = it.slice(0, it.length - 1);
    const last = it.slice(-1).pop();
    const key = tools.getIterableKey(start);

    if (key in a) {
      return {
        ...a,
        [key]: [
          { ...a[key][0], [last]: last in a[key][0] ? a[key][0][last] + 1 : 1 },
          a[key][1]
        ]
      };
    }

    return { ...a, [key]: [{ [last]: 1 }, start] };
  }, {});
}
