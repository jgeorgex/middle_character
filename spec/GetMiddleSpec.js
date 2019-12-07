describe("Middle", function() {
  var middle;

  beforeEach(function() {
    middle = new Middle();
  });

  describe("#getMiddle", function() {
    it("returns a when given a", function() {
      expect(middle.getMiddle("a")).toBe("a");
    });
  });
});
