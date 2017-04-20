describe("BalanceWeighingService", function() {

  beforeEach(module('BalanceApp'));

  var balance;
  var balls;

  beforeEach(inject(function ($injector, Balance){
    balance = $injector.get('Balance');   
    balls = [];
    for (i=0;i<8;i++){
      balls.push({label:i+1,value:1});
    }
    balls[5].value = 2;

  }));

  it("should do something", function() {
    var result = balance.weigh(balls);
    expect(result.label).toBe(6);
  });

});

describe("BalanceAppController", function() {

  beforeEach(angular.mock.module('BalanceApp'));

  var $controller;
  var balanceAppController;
  var itterator;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;

    var balanceMock = {};
    balanceMock.weigh = function (balls) {
      itterator = 5
      return {label:5,value:2};
    };

    balanceAppController =
      $controller('BalanceAppController',
                  {Balance: balanceMock});

  }));

  it("should change showResult to true", function() {
    balanceAppController.search();
    expect(balanceAppController.showResult).toBe(true);
  });

  it("should change ball value to 2", function() {
    balanceAppController.setHeavyBall(5);
    expect(balanceAppController.disabled).toBe(tru);
    expect(balanceAppController.balls[5].value).toBe(2);
    expect(balanceAppController.balls[5].class).toBe("selected");
  });
});

