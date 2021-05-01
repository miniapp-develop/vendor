const vendor = require('./vendor');
const supportPromise = (function () {
    return !!vendor.getSystemInfo();
})();

function ex(fn_name) {
    if (!ex[fn_name]) {
        ex[fn_name] = ex.__promisify(fn_name);
    }
    return ex[fn_name];
}

ex.__promisify = function ex_promisify(fn_name) {
    const vendor_fn = vendor[fn_name];
    return function _promisify(options) {
        if (supportPromise) {
            return vendor_fn.call(vendor, options);
        } else {
            if (options && (options.success || options.fail || options.complete)) {
                return vendor_fn.call(vendor, options);
            } else {
                return new Promise((resolve, reject) => {
                    vendor_fn.call(vendor, {
                        ...options,
                        success: res => {
                            resolve(res);
                        },
                        fail: (e) => {
                            reject(e);
                        }
                    });
                });
            }
        }
    }
}

module.exports = ex;
