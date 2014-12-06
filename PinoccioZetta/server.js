var zetta = require('zetta');
var Pinoccio = require('zetta-pinoccio-api-driver');
var Spark = require('zetta-spark-http-driver');

zetta()
  .use(Pinoccio, process.env.PINOCCIO_USER, process.env.PINOCCIO_PASS)
  .use(Spark, process.env.SPARK_USER, process.env.SPARK_PASS)
  .link('http://hello-zetta.herokuapp.com')
  .listen(1337);
