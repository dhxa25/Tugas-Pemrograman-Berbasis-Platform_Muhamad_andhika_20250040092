
const Mahasiswa = require('../models/mahasiswaModel');

// Menampilkan semua mahasiswa
const getAll = (req, res) => {
    res.json({
        success: true,
        message: "Data mahasiswa berhasil ditampilkan",
        data: Mahasiswa.getAllMahasiswa()
    });
};

// Menampilkan detail mahasiswa
const getById = (req, res) => {
    const id = parseInt(req.params.id);
    const data = Mahasiswa.getMahasiswaById(id);

    if (!data) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa tidak ditemukan"
        });
    }

    res.json({
        success: true,
        message: "Detail mahasiswa berhasil ditampilkan",
        data
    });
};

// Menambahkan mahasiswa
const create = (req, res) => {
    const data = Mahasiswa.createMahasiswa(req.body);

    res.status(201).json({
        success: true,
        message: "Data mahasiswa berhasil ditambahkan",
        data
    });
};

// Mengubah mahasiswa
const update = (req, res) => {
    const id = parseInt(req.params.id);
    const data = Mahasiswa.updateMahasiswa(id, req.body);

    if (!data) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa tidak ditemukan"
        });
    }

    res.json({
        success: true,
        message: "Data mahasiswa berhasil diperbarui",
        data
    });
};

// Menghapus mahasiswa
const remove = (req, res) => {
    const id = parseInt(req.params.id);
    const data = Mahasiswa.deleteMahasiswa(id);

    if (!data) {
        return res.status(404).json({
            success: false,
            message: "Data mahasiswa tidak ditemukan"
        });
    }

    res.json({
        success: true,
        message: "Data mahasiswa berhasil dihapus",
        data
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
