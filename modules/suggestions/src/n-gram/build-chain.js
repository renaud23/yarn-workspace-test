import { getIterableKey } from "./ngram-tools";

function sum(letters) {
  return Object.values(letters).reduce((a, h) => h + a, 0);
}

function sum2(letters) {
  return Object.entries(letters).reduce((a, [l, v]) => [...a, { l, p: v }], []);
}

export function proba(map) {
  // const count = Object.entries(map).reduce(
  //   (count, [k, [v, _]]) => count + sum(v),
  //   0
  // );
  const [Paa, PaaX] = Object.entries(map).reduce(
    ([a, b], [k, [letters, gram]]) => {
      return [
        { ...a, [k]: sum(letters) },

        [...b, [k, sum2(letters).map(({ l, p }) => [l, p]), gram]]
      ];
    },
    [{}, []]
  );

  const PxIaa = PaaX.map(([mm, alt, gram]) => {
    return [
      mm,
      alt.reduce((a, [l, how]) => {
        return { ...a, [l]: how / Paa[mm] };
      }, {}),
      gram
    ];
  });
  return PxIaa;
}

export function buildChain(map) {
  const pr = proba(map);
  const chain = pr.reduce((a, [key, alt, gram]) => {
    return {
      ...a,
      [key]: Object.entries(alt).reduce(
        ([a, b], [l, p]) => [{ ...a, [l]: p }, b],
        [{}, gram]
      )
    };
  }, {});
  return chain;
}
