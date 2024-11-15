const mongoose = require('mongoose');// Mengimpor Modul mongoose untuk mengelola skema dan model

const prodiSchema = new mongoose.Schema({// Definisikan skema untuk fakultas
    nama: {// Field untuk nama fakultas
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    singkatan: {// Field untuk singkatan fakultas
        type: String, // Tipe data string
        required: true, // Field ini wajib diisi
        trim: true, // Menghapus spasi di awal dan akhir string
    },
    fakultas_id: {// Field untuk singkatan fakultas
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fakultas", // Field ini wajib diisi   
        required: true, // Menghapus spasi di awal dan akhir string
    },
    createdAt: {// Field untuk menyimpan tanggal pembuatan data fakultas
        type: Date, // Tipe data tanggal
        default: Date.now, // Default adalah tanggal dan waktu saat ini
    },
});

// Buat model Fakultas dari skema yang telah didefinisikan
const Prodi = mongoose.model("Prodi", prodiSchema);

// Mengekspor model Fakultas agar dapat digunakan di file lain
module.exports = Prodi;