global.wx = {};
const vendor = require('../index');
describe('vendor object', () => {
    it('vendor is object', () => {
        expect(vendor).toBe(global.wx);
    });
});