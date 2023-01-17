
const { applyMask } = require("../app/");
var chai = require('chai');
var expect = chai.expect;

describe('test app', function() {
   


    it('teste app', function() {
        let result = applyMask("#.#", "12");
        let expected = "1.2";

        expect(expected).to.eql(result);
    })

    it('teste app 2', function() {
        let result = applyMask("#.##", "123");
        let expected = "1.23";

        expect(expected).to.eql(result);
    })

    it('teste app 3', function() {
        let result = applyMask("#.##", "1");
        let expected = "1";

        expect(expected).to.eql(result);
    })

    it('teste app 3', function() {
        let result = applyMask("#.##", "12");
        let expected = "1.2";

        expect(expected).to.eql(result);
    })

    it('teste app 3', function() {
        let result = applyMask("#.##", "123");
        let expected = "1.23";

        expect(expected).to.eql(result);
    })

});