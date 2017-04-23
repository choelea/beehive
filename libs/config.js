var nconf = require('nconf');

const profile = process.argv.profile || 'dev';

nconf.argv()
	.env()
	.file({
		file: process.cwd() + '/config-' + profile + '.json'
	});

module.exports = nconf;