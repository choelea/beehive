var winston = require('winston');
require('winston-daily-rotate-file');
// winston.emitErrs = true;
  var transport = new winston.transports.DailyRotateFile({
    filename: 'logs/./txt',
    datePattern: 'bee-yyyy-MM-dd.',
    prepend: true,
    level: process.env.ENV === 'development' ? 'debug' : 'info'
  });
  
  var logger = new (winston.Logger)({
    transports: [
      transport
    ]
  });

module.exports = logger;
