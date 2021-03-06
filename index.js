/**
 * @file edp-build iconfont
 * @author junmer
 */

/* eslint-env node */

var extend = require('extend');
var Fontmin = require('fontmin');
var path = require('path');

/**
 * iconfont 处理器
 *
 * @param  {processContext}   processContext 处理器上下文
 * @param  {Function} done           完成回调
 */
function iconfont(processContext, done) {

    var destDir = path.resolve(processContext.baseDir, this.dest);

    var fontmin = new Fontmin()
        .src(this.files, {base: processContext.baseDir})
        .use(Fontmin.svgs2ttf(this.fontName))
        .use(Fontmin.ttf2eot())
        .use(Fontmin.ttf2woff())
        .use(Fontmin.ttf2svg())
        .use(Fontmin.css({
            glyph: true
        }))
        .dest(destDir);

    var me = this;

    fontmin.run(function (err, files, stream) {
        if (err) {
            me.log.error(err);
        }

        done();
    });
}

/**
 * iconProcessor 默认配置
 *
 * @type {Object}
 */
var iconProcessor = {
    files: ['*.svg'],
    fontName: 'iconfont',
    dest: 'font',
    name: 'IconProcessor',
    start: iconfont
};

/**
 * IconProcessor 构造函数
 *
 * @param {Object} opt 配置
 * @param {Array} opt.files svg 文件
 * @param {Array} opt.fontName 字体名称
 * @param {Array} opt.dest 字体文件路径
 * @return {Object} IconProcessor instance
 */
function IconProcessor(opt) {
    return extend({}, iconProcessor, opt);
}

module.exports = exports = IconProcessor;
