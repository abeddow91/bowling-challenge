describe("Player", function() {
  var bowler;

  beforeEach(function() {
    bowler = new Bowler();
  });

it("should produce a random score from a bowl", function(){
  bowler.firstBowl;
  expect(bowler.score).not.toBeNull();
});

});
