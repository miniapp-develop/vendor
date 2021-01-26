function _init() {
    if (typeof wx === 'object') {
        return wx;
    } else if (typeof qq === 'object') {
        return qq;
    } else if (typeof my === 'object') {
        return my;
    } else if (typeof swan === 'object') {
        return swan;
    } else if (typeof tt === 'object') {
        return tt;
    } else {
        return null;
    }
}

const vendor = _init();
module.exports = vendor;
