describe("Middle", function() {
  var middle;

  beforeEach(function() {
    middle = new Middle();
  });

  describe("#getMiddle", function() {
    it("gets the middle character", function() {
      expect(middle.getMiddle()).toBe(true);
    });
  });
});
