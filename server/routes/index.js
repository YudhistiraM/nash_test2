var express = require('express');
var router = express.Router();


module.exports = function (pool) {

  /* GET home page. */
  router.get('/', function (req, res, next) {
    try {
      let sql = `SELECT * FROM mahasiswa`;
      pool.query(sql, (err, data) => {
        res.json(data);
        console.log('ini data', data);
      })
    } catch (err) {
      res.json({
        error: true,
        message: `something went wrong : ${err.message}`
      })
    }

  });

  return router;
}