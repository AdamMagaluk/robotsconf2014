var zetta = require('zetta');
var Pinoccio = require('zetta-pinoccio-api-driver');

zetta()
  .use(Pinoccio, process.env.PINOCCIO_USER, process.env.PINOCCIO_PASS)
  .link('http://hello-zetta.herokuapp.com')
  .listen(1337);
