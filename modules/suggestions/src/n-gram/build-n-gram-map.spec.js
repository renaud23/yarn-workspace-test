import stringHash from "string-hash";
import { buildNGramMap } from "./build-n-gram-map";

describe("build-n-gram-map", function() {
  it("", function() {
    const base = [
      ["t", "o", "t"],
      ["o", "t", "o"],
      ["t", "o", "t"],
      ["o", "t", "a"]
    ];
    const map = buildNGramMap(base);
    expect(typeof map === "object").toEqual(true);
    expect(Object.keys(map)).toEqual([
      stringHash("to").toString(),
      stringHash("ot").toString()
    ]);
    expect(Object.values(map).map(([i, _]) => i)).toEqual([
      { t: 2 },
      { o: 1, a: 1 }
    ]);
  });

  it("with array of string", function() {
    const base = [
      ["toto", "tata", "encore"],
      ["tata", "encore", "what"],
      ["toto", "tata", "encore"],
      ["tata", "encore", "prout"]
    ];
    const map = buildNGramMap(base);
    expect(typeof map === "object").toEqual(true);
    expect(Object.keys(map)).toEqual([
      stringHash("tototata").toString(),
      stringHash("tataencore").toString()
    ]);
    expect(Object.values(map).map(([i, _]) => i)).toEqual([
      { encore: 2 },
      { what: 1, prout: 1 }
    ]);
  });
});
