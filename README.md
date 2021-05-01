# miniapp vendor

对各个平台的小程序全局对象的替换，具体代码如下：

```javascript
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

```