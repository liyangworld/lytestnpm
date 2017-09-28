const _ = require('lodash');
const a = require('./a.js');

const init = function () {
	if (_) console.log('lodash加载完成！');
	a();
	console.log('logger.js加载完成！');
};

const log = function (str) {
	console.log('传入的参数为：',str);
};

module.exports = {init,log};