import * as tools from "./ngram-tools";

const SEUIL = 0.1;
const MAX_LEVEL = 9;

function rec(key, proba, chain, seuil = SEUIL, level = 0, prop) {
  if (key in chain && level < MAX_LEVEL) {
    const [alts, gram] = chain[key];

    const what = Object.entries(alts).reduce((a, [alt, p]) => {
      const n = [...gram.slice(1), alt];
      const np = proba * p;
      const nk = tools.getIterableKey(n);

      if (np >= seuil) {
        const tutu = rec(
          nk,
          np,
          chain,
          seuil,
          level + 1,
          prop ? [...prop, alt] : [...gram, alt]
        );

        return tutu ? [...a, ...tutu] : a;
      }
    }, []);

    return what;
  }

  return prop ? [prop] : [];
}

export function crawlChain(nGram, chain) {
  console.log(chain);
  const key = tools.getIterableKey(nGram);

  return rec(key, 1, chain);
}
