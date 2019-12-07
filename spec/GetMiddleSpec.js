describe("Middle", function() {
  var middle;

  beforeEach(function() {
    middle = new Middle();
  });

  describe("#getMiddle", function() {
    it("returns a when given a", function() {
      expect(middle.getMiddle("a")).toBe("a");
    });

    it("returns b when given b", function() {
      expect(middle.getMiddle("b")).toBe("b");
    });

    it("returns ab when given ab", function() {
      expect(middle.getMiddle("ab")).toBe("ab");
    });

    it("returns b when given abc", function() {
      expect(middle.getMiddle("abc")).toBe("b");
    });
  });
});
