import * as tools from "./ngram-tools";

const SEUIL = 0.1;
function rec(key, proba, chain, seuil = SEUIL, prop) {
  if (key in chain) {
    const [alts, gram] = chain[key];
    return Object.entries(alts).reduce((a, [alt, p]) => {
      const n = [...gram.slice(1), alt];
      const np = proba * p;
      const nk = tools.getIterableKey(n);

      if (nk in chain && np >= seuil) {
        return [
          ...a,
          ...rec(nk, np, chain, seuil, prop ? [...prop, alt] : [...gram, alt])
        ];
      }
      return [...a, prop];
    }, []);
  }
  return [];
  //   return [word];
}

export function crawlChain(nGram, chain) {
  const key = tools.getIterableKey(nGram);

  if (key in chain) {
    return rec(key, 1, chain);
  }
  return [];
}
