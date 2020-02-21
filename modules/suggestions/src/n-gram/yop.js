export function splitWord(word, n) {
  if (typeof word === "string" && word.length >= n) {
    const { stack } = word.split("").reduce(
      (a, l) => {
        const { stack, tmp } = a;
        const next = `${tmp}${l}`;
        if (next.length < n) {
          return { stack, tmp: next };
        }

        return { stack: [...stack, next], tmp: next.substr(1) };
      },
      { stack: [], tmp: "" }
    );

    return stack;
  }

  return [];
}

export function splitTokens(tokens, n) {
  tokens.reduce((a, t) => {
    return [...a, ...splitWord(t, n)];
  }, []);
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

function sum(letters) {
  return Object.values(letters).reduce((a, h) => h + a, 0);
}

function sum2(letters) {
  return Object.entries(letters).reduce((a, [l, v]) => [...a, { l, p: v }], []);
}

export function proba(dico) {
  const count = Object.entries(dico).reduce(
    (count, [k, v]) => count + sum(v),
    0
  );

  const [Paa, PaaX] = Object.entries(dico).reduce(
    ([a, b], [k, letters]) => {
      return [
        { ...a, [k]: sum(letters) },

        [...b, [k, sum2(letters).map(({ l, p }) => [l, p])]]
      ];
    },
    [{}, []]
  );

  const PxIaa = PaaX.map(([mm, alt]) => {
    return [
      mm,
      alt.reduce((a, [l, how]) => {
        return { ...a, [l]: how / Paa[mm] };
      }, {})
    ];
  });
  return PxIaa;
}

export function buildChaine(proba) {
  const chaine = proba.reduce((a, [mm, alt]) => {
    const m2 = mm.substr(1);
    return {
      ...a,
      [mm]: Object.entries(alt).reduce(
        (a, [l, p]) => ({ ...a, [`${m2}${l}`]: p }),
        {}
      )
    };
  }, {});
  return chaine;
}

const SEUIL = 0.1;
function crawl(mm, word, proba, chaine, seuil = SEUIL) {
  if (mm in chaine) {
    return Object.entries(chaine[mm]).reduce((a, [next, np]) => {
      const tt = `${word}${next.substr(next.length - 1)}`;
      const lim = proba * np;
      if (next in chaine && lim >= seuil) {
        return [...a, ...crawl(next, tt, lim, chaine)];
      }
      return lim >= seuil ? [...a, { token: tt, proba: lim }] : a;
    }, []);
  }
  return [word];
}

export function suggest(prefix, chaine) {
  if (prefix in chaine) {
    return crawl(prefix, prefix, 1, chaine).sort((a, b) =>
      a.proba > b.proba ? -1 : 1
    );
  }
  return [];
}

export function nextLetters(prefix, chaine) {
  if (prefix in chaine) {
    return Object.entries(chaine[prefix]).sort((a, b) =>
      a[1] > b[1] ? -1 : 1
    );
  }
  return [];
}
