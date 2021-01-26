const vendor = require('../index');
global.wx = function () {

};
describe('vendor function', () => {
    it('vendor is function', () => {
        expect(vendor).toBeNull();
    });
});