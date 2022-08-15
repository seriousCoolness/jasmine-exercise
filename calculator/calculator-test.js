
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({amount: 10.0, years: 1.0, rate: 1.0})).toEqual('$1.35');
  expect(calculateMonthlyPayment({amount: 0, years: 1, rate: 1})).toEqual('$0.00');
  expect(calculateMonthlyPayment({amount: 0, years: 0, rate: 0})).toEqual('$NaN');
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({amount: 10.0, years: 1.0, rate: 1.0})).not.toEqual('$1.350');
});

/// etc
