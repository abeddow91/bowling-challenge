function Bowler() {
  this.pins = [0,1,2,3,4,5,6,7,8,9,10,11]
  this.score = []
};

Bowler.prototype.firstBowl = function () {
  var bowl = this.pins[Math.floor(Math.random()*this.pins.length)];
  this.score.push(bowl)
  return bowl
};
