const invert = require('../jasmine-pair-activity.js'); 
let er; 

describe("invert", () => {
    
    beforeEach( () => {
        object = { 'a': 1, 'b': 2, 'c': 1 }
    });

    it("loops through the object to verify the key is defined in the object itself", () => {
        expect(invert(object)['2']).toEqual("b")
    });

    it("new key is added to our new object and drops off the other key with same value", () => {
        expect(invert(object)['1']).toEqual("c")
    });