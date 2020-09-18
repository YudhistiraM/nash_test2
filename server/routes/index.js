var express = require('express');
var router = express.Router();


module.exports = function (pool) {

  /* GET home page data mahasiswa. */
  router.get('/', function (req, res, next) {
    try {
      let sql = `SELECT m.id_mhs, m.nama_mhs, mt.nama_matkul, nilai_mhs FROM mahasiswa as m, mata_kuliah as mt, nilai WHERE m.id_mhs = nilai.id_mhs AND mt.id_matkul = nilai.id_matkul;`;
      pool.query(sql, (err, data) => {
        res.json({
          success: true,
          message: "Data has been load successfully",
          data: data.rows
        });
      })
    } catch (err) {
      res.json({
        error: true,
        message: `something went wrong : ${err.message}`
      })
    }
  });

  router.get('/mahasiswa', function (req, res, next) {
    try {
      let sql = `SELECT * FROM mahasiswa;`;
      pool.query(sql, (err, data) => {
        res.json({
          success: true,
          message: "Data has been load successfully",
          data: data.rows
        });
      })
    } catch (err) {
      res.json({
        error: true,
        message: `something went wrong : ${err.message}`
      })
    }
  });

  router.get('/mata_kuliah', function (req, res, next) {
    try {
      let sql = `SELECT * FROM mata_kuliah;`;
      pool.query(sql, (err, data) => {
        res.json({
          success: true,
          message: "Data has been load successfully",
          data: data.rows
        });
      })
    } catch (err) {
      res.json({
        error: true,
        message: `something went wrong : ${err.message}`
      })
    }
  });

  router.get('/', function (req, res, next) {
    try {
      let sql = `SELECT m.id_mhs, m.nama_mhs, mt.nama_matkul, nilai_mhs FROM mahasiswa as m, mata_kuliah as mt, nilai WHERE m.id_mhs = nilai.id_mhs AND mt.id_matkul = nilai.id_matkul;`;
      pool.query(sql, (err, data) => {
        res.json({
          success: true,
          message: "Data has been load successfully",
          data: data.rows
        });
      })
    } catch (err) {
      res.json({
        error: true,
        message: `something went wrong : ${err.message}`
      })
    }
  });

  /* Add data nilai. */
  router.post('/', function (req, res, next) {
    try {
      let idMhs = req.body.id_mhs;
      let idMatkul = req.body.id_matkul;
      let nilaiMahasiswa = req.body.nilai;
      let keterangan = req.body.keterangan;
      let sql = `INSERT INTO nilai (id_mhs, id_matkul, nilai_mhs, keterangan) VALUES (${idMhs}, ${idMatkul}, ${nilaiMahasiswa}, '${keteranganMhs}')`;
      pool.query(sql, (err, data) => {
        res.json({
          success: true,
          message: "Data has been added successfully",
          data: data.rows
        });
      })
    } catch (err) {
      res.json({
        error: true,
        message: `something went wrong : ${err.message}`
      })
    }
  });

  /* Update nilai. */
router.put('/:id', function (req, res, next) {
  let id = req.params.id;

  try {
    let sql = `DELETE FROM nilai WHERE id_nilai = ${id}`;
    pool.query(sql, (err, data) => {
      res.json({
        success: true,
        message: "Data has been deleted"
      });
    })
  } catch (err) {
    res.json({
      error: true,
      message: `something went wrong : ${err.message}`
    })
  }
});

/* Delete nilai. */
router.delete('/:id', function (req, res, next) {
  let id = req.params.id;

  try {
    let sql = `DELETE FROM nilai WHERE id_nilai = ${id}`;
    pool.query(sql, (err, data) => {
      res.json({
        success: true,
        message: "Data has been deleted"
      });
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