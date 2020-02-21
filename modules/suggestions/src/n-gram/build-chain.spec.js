import { buildNGram } from "./build-n-gram";
import { buildNGramMap } from "./build-n-gram-map";
import { buildChain } from "./build-chain";

describe("build-n-gram-map", function() {
  it("", function() {
    const iterable = ["toto", "tota"];
    const nGrams = buildNGram(iterable, 3);
    const map = buildNGramMap(nGrams);
    const chain = buildChain(map);

    // TODO
  });

  it("with array of string", function() {});
});
