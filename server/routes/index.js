var express = require('express');
var router = express.Router();


module.exports = function (pool) {

  /* GET home page data mahasiswa. */
  router.get('/', function (req, res, next) {
    try {
      let sql = `SELECT * FROM mahasiswa`;
      pool.query(sql, (err, data) => {
        res.json(data.rows);
        // console.log('ini data', data.rows);
      })
    } catch (err) {
      res.json({
        error: true,
        message: `something went wrong : ${err.message}`
      })
    }

  });

  /* Add data nilai. */
  router.post('/add', function (req, res, next) {
    try {
      let namaMahasiswa = req.body.Mahasiswa;
      let namaMatkul = req.body.Matkul;
      let nilaiMahasiswa = req.body.nilai;
      let keteranganMhs = req.body.keterangan;
      let sqlMahasiswa = `SELECT id_mhs FROM mahasiswa WHERE nama_mhs = '${namaMahasiswa}'`;
      let sqlMatakuliah = `SELECT id_matkul FROM mata_kuliah WHERE nama_matkul = '${namaMatkul}'`;
      pool.query(sqlMahasiswa, (err, dataMhs) => {
        pool.query(sqlMatakuliah,(err, dataMatkul) => {
        let sql = `INSERT INTO nilai (id_mhs, id_matkul, nilai_mhs, keterangan) VALUES (${dataMhs.rows[0].id_mhs}, ${dataMatkul.rows[0].id_matkul}, ${nilaiMahasiswa}, '${keteranganMhs}')`;
          pool.query(sql, (err, data) => {
          res.json({
            message: "data has been added"
          });
          // console.log('ini data', data);
          })
        })
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