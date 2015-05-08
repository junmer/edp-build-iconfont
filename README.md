move to [ecomfe/edp-build-iconfont](https://github.com/ecomfe/edp-build-iconfont)

---

# edp-build-iconfont

> edp-build iconfont with fontmin, generate [iconfont](https://github.com/showcases/icon-fonts) from svgs.

## Usage

`edp-build-config.js`:

```
var IconProcessor = require('edp-build-iconfont');

exports.getProcessors = function () {

    var iconProcessor = new IconProcessor({
        files: 'src/svg/*.svg',             // svg 文件
        fontName: 'font-food',              // 字体名称
        dest: 'src/font'                    // 字体文件路径
    });

    return {
        'iconfont': [iconProcessor]
    };

});
```

## Related

- [edp-build-iconfont-demo](https://github.com/junmer/edp-build-iconfont-demo)
- [fontmin](https://github.com/ecomfe/fontmin)
- [edp-build-fontmin](https://github.com/ecomfe/edp-build-fontmin)

[![NPM](https://nodei.co/npm/edp-build-iconfont.png?downloads=true&stars=true)](https://nodei.co/npm/edp-build-iconfont/)
