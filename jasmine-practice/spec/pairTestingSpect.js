const invert = require('../jasmine-pair-activity.js'); 

// describe what im testing
describe("invert", () => {
    

    it("loops through the object to verify the key is defined in the object itself", () => {
        let object = { 'a': 1, 'b': 2, 'c': 1 };
        const result = invert(object)
        // console.log(result)
        expect(result['2']).toEqual("b")
        // asserting what is going to happen after calling the function
    });

    it("new key is added to our new object and drops off the other key with same value", () => {
        let object = { 'a': 1, 'b': 2, 'c': 1 };
        const result = invert(object)
        expect(result['1']).toEqual("c")
    });
});