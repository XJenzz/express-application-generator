var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.index)
router.get('/about', mainController.about)
router.get('/contact', mainController.contact)


// /* GET home page. */
// router.get('/', (req, res, next) => {
//   const berita = [
//       {
//           judul: 'Berita 1',
//           isi: 'Isi Berita 1'
//       },
//       {
//           judul: 'Berita 2',
//           isi: 'Isi Berita 2'
//       },
//   ];

//   res.render('index', {title : 'Halaman Home', berita , layout : 'main'});
// });


// // route /about
// router.get('/about', (req, res) => {
//     // res.send('About Us');
//     // res.sendFile(__dirname + '/about.html');
//     res.render('about', {title : 'About Us', layout : 'main'});
// });

// // route /contact
// router.get('/contact', (req, res) => {
//     // res.send('Contact Us');
//     // res.sendFile(__dirname + '/contact.html');
//     res.render('contact', {title : 'Contact Us', layout : 'main'});
// });

// // route /mahasiswa
// router.get('/mahasiswa', (req, res) => {
//     res.json({
//         'status' : 'success',
//         'message' : 'Data Mahasiswa',
//         'data' : [{npm : 2226240001, nama : 'ahmad'},
//             {npm : 2226240002, nama : 'ahmad 2'},
//             {npm : 2226240003, nama : 'ahmad 3'}]
//     })
// });

// // route /dosen
// router.get('/dosen', (req, res) => {
//     res.json({
//         'status' : 'success',
//         'message' : 'data dosen',
//         'data' : [
//             {
//                 prodi : 'Sistem Informasi', 
//                 nama : ['Iis', 'Faris', 'Dafid']
//             },
//             {
//                 prodi : 'Informatika', 
//                 nama : ['Derry', 'Siska' , 'Yohannes']
//             }
//         ]
//     })
// });

// // route /prodi
// router.get('/prodi', (req, res) => {
    
//     const prodi = [
//         {
//             prodi : 'Sistem Informasi',
//             fakultas : 'FIKR',
//             singkatan :'SI'
//         },
//         {
//             prodi : 'Informatika',
//             fakultas : 'FIKR',
//             singkatan :'IF'
//         },
//         {
//             prodi : 'Teknik Elektro',
//             fakultas : 'FIKR',
//             singkatan :'TE'
//         },
//         {
//             prodi : 'Manajemen Informatika',
//             fakultas : 'FIKR',
//             singkatan :'MI'
//         },
//         {
//             prodi : 'Manajemen',
//             fakultas : 'FEB',
//             singkatan :'MJ'
//         },
//         {
//             prodi : 'Akuntansi',
//             fakultas : 'FEB',
//             singkatan :'AK'
//         }
//     ];

//     res.render('prodi',  {title : 'Halaman Prodi', prodi , layout : 'main'});
// })

module.exports = router;
