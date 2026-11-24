
const express = require('express');
const app = express();

const mahasiswaRoutes = require('./routing/mahasiswaRoutes');

// Middleware untuk membaca JSON
app.use(express.json());

// Menggunakan routes mahasiswa
app.use('/api/mahasiswa', mahasiswaRoutes);

// Menjalankan server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
