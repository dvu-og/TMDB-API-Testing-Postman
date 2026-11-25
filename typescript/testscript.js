// Test 1: Status Code
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Test 2: Response Time
pm.test("Response time is below 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

// Test 3: Response is JSON
pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});