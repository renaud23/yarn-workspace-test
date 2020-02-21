import { isIterable } from "./ngram-tools";

function splitToken(token, n) {
  if (isIterable(token) && token.length >= n) {
    const { stack } = Array.from(token).reduce(
      (a, l) => {
        const { stack, tmp } = a;
        const next = [...tmp, l];

        if (next.length < n) {
          return { stack, tmp: next };
        }
        const [f, ...rest] = next;
        return {
          stack: [...stack, next],
          tmp: Array.isArray(rest) ? rest : [rest]
        };
      },
      { stack: [], tmp: [] }
    );

    return stack;
  }

  return [];
}

export function buildNGram(tokens, n) {
  if (isIterable(tokens)) {
    return tokens.reduce((a, t) => {
      return [...a, ...splitToken(t, n)];
    }, []);
  }
  return [];
}
