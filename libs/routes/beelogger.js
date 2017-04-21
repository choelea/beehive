var winston = require('winston');
var config = require('../config');
require('winston-daily-rotate-file');
 winston.emitErrs = true;
 let rootLogPath = config.get('rootLogPath');
  var transport = new winston.transports.DailyRotateFile({
    filename: 'logs/./txt',
    datePattern: 'bee-yyyy-MM-dd.',
    prepend: true,
    '@timestamp':'',
    level: process.env.ENV === 'development' ? 'debug' : 'info'
  });
  
  var logger = new (winston.Logger)({
    transports: [
      transport
    ]
  });

module.exports = logger;
