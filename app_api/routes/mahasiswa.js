const express = require("express");// Mengimpor framework express.js
const router = express.Router(); // Membuat instance router dari express
const mahasiswaController = require("../controllers/mahasiswaController"); // Mengimpor controller untuk mahasiswa
const upload = require("../middleware/uploadMiddleware"); // Middleware untuk menangani upload file

// Mengimpor middleware untuk autentikasi dan pengecekan peran
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Route untuk mendapatkan semua data mahasiswa
router.get("/", authMiddleware, mahasiswaController.getAllMahasiswa);

// Route untuk mendapatkan data mahasiswa berdasarkan ID
router.get("/:id", authMiddleware, mahasiswaController.getMahasiswaById);

// Route untuk menambahkan data mahasiswa baru, termasuk upload file foto
router.post("/", authMiddleware, roleMiddleware("admin"), upload.single("foto"), mahasiswaController.createMahasiswa);

// Route untuk memperbarui data mahasiswa, dengan upload foto opisional
router.put("/:id", authMiddleware, roleMiddleware("admin"), upload.single("foto"), mahasiswaController.updateMahasiswa);

// Route untuk menghapus data mahasiswa berdasarkan ID
router.delete("/:id", authMiddleware, roleMiddleware("admin"), mahasiswaController.deleteMahasiswa);

module.exports = router;