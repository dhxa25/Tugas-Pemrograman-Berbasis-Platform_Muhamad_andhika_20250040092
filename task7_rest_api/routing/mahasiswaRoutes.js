
const express = require('express');
const router = express.Router();

const mahasiswaController = require('../controllers/mahasiswaController');

// Menampilkan semua mahasiswa
router.get('/', mahasiswaController.getAll);

// Menampilkan detail mahasiswa berdasarkan ID
router.get('/:id', mahasiswaController.getById);

// Menambahkan mahasiswa
router.post('/', mahasiswaController.create);

// Mengubah data mahasiswa
router.put('/:id', mahasiswaController.update);

// Menghapus mahasiswa
router.delete('/:id', mahasiswaController.remove);

module.exports = router;
