import { buildNGram } from "./build-n-gram";

describe("build-n-gram", function() {
  it("with string", function() {
    const tokens = ["toto"];
    const nGrams = buildNGram(tokens, 3);

    expect(Array.isArray(nGrams)).toEqual(true);
    expect(nGrams.length).toEqual(2);
    expect(nGrams[0]).toEqual(["t", "o", "t"]);
    expect(nGrams[1]).toEqual(["o", "t", "o"]);
  });

  it("with array of string", function() {
    const tokens = [["toto", "tata", "encore", "what"]];
    const nGrams = buildNGram(tokens, 3);

    expect(Array.isArray(nGrams)).toEqual(true);
    expect(nGrams.length).toEqual(2);
    expect(nGrams[0]).toEqual(["toto", "tata", "encore"]);
    expect(nGrams[1]).toEqual(["tata", "encore", "what"]);
  });
});
