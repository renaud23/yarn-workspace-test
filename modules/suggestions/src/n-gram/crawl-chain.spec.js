import { buildNGram } from "./build-n-gram";
import { buildNGramMap } from "./build-n-gram-map";
import { buildChain } from "./build-chain";
import { crawlChain } from "./craw-chain";

describe("build-n-gram-map", function() {
  it("", function() {
    const iterable = ["toto", "tota", "topo"];
    const nGrams = buildNGram(iterable, 3);
    const map = buildNGramMap(nGrams);
    const chain = buildChain(map);
    const props = crawlChain(["t", "o"], chain);
  });

  it("with array of string", function() {});
});
