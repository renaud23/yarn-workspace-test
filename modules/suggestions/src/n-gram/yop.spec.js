import * as yop from "./yop";
import tokenize from "./tokenize";
import learn from "./learning";

const lorem =
  "Mediapart a publié mercredi les salaires du nouveau directeur général du syndicat Clément Faurax, de son remplaçant au poste de directeur adjoint Jean-Louis Chandellier, et les différentes rémunérations attribuées à la directrice générale sortante Catherine Lion. Selon le média d’informations ligne, M. Faurax « émarge aujourd’hui à 13 400 euros brut mensuels » à l’issue d’une revalorisation de 22 % décidée après son arrivée en avril 2019, soit quelque 3 000 euros de plus que le ministre de l’agriculture actuel Didier Guillaume, selon Mediapart, qui rappelle que l’essentiel des ressources de la fédération provient des cotisations des adhérents";

describe("yop", function() {
  describe("step", function() {
    it("split toto n=3", function() {
      const data = yop.splitWord("toto", 3);
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBe(2);
      expect(data[0]).toEqual("tot");
      expect(data[1]).toEqual("oto");
    });

    it("split toto n=3", function() {
      const data = yop.splitWord("denouncing", 3);
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBe(8);
      expect(data[0]).toEqual("den");
      expect(data[1]).toEqual("eno");
      expect(data[2]).toEqual("nou");
      expect(data[3]).toEqual("oun");
      expect(data[4]).toEqual("unc");
      expect(data[5]).toEqual("nci");
      expect(data[6]).toEqual("cin");
      expect(data[7]).toEqual("ing");
    });
  });

  describe("aggregateParts", function() {
    it("simple", function() {
      const parts = yop.splitWord("toto", 3);
      const data = yop.aggregateParts(parts);
      expect(typeof data === "object").toBe(true);
      expect(Object.keys(data).length).toBe(2);
    });
  });

  describe("aggregateParts", function() {
    it("two words", function() {
      const tokens = tokenize(learn.toLocaleLowerCase());
      const parts = tokens.reduce((a, t) => {
        return [...a, ...yop.splitWord(t, 4)];
      }, []);
      const dico = yop.aggregateParts(parts);
      const proba = yop.proba(dico);
      const chaine = yop.buildChaine(proba);

      const prefix = "cor";
      const suggest = yop.suggest(prefix, chaine);
      const nextLetters = yop.nextLetters(prefix, chaine);

      console.log(suggest);
      console.log(nextLetters);
    });
  });
});
