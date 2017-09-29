#!/usr/bin/env node

var program = require('commander');
var logger = require('../lib/logger.js');

program.version('v'+require('../package.json').version)
		.description('npm包对应的命令行工具。');

program.command('log <msg> [otherMsgs...]')
		.alias('l')
		.description('打印输入的参数')
		.action((msg,otherMsgs)=>{
			let str = msg + otherMsgs.join(' ');
			logger.log(str);

		})

program.parse(process.argv);

if (program.args.length === 0) {  
  program.help()  
}  