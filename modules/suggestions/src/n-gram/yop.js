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
