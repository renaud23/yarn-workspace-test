import tokenize from "./tokenize";

describe("yop", function() {
  describe("tokenize", function() {
    it("todo", function() {
      const data = tokenize("toto tata titi");
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBe(3);
      expect(data[0]).toEqual("toto");
      expect(data[1]).toEqual("tata");
      expect(data[2]).toEqual("titi");
    });
  });
});
