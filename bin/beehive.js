const debug = require('debug')('restapi');

const libs = process.cwd() + '/libs/';
const config = require(libs + 'config');
const app = require(libs + 'app');

app.set('port', process.env.PORT || config.get('port') || 3000);

var server = app.listen(app.get('port'), function () {

});
