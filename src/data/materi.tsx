import html from "../../public/html.png";
import css from "../../public/css.webp";
import javascript from "../../public/javascript.png";

export default [{
    title: 'html',
    image: html,
    description: 'Dalam module ini kita akan mempelajari materi - materi dasar seputar pemrograman website, struktur pembentuk website, proses pembuatan dokumen HTML, struktur dasar HTML dan elemen - elemen HTML sepeti paragraf, heading, list, image, semantic HTML, generic HTML dan berbagai atribut didalamnya.',
    submodules: [
        {title: 'Persiapan Belajar', bab: [
            'Requirement Tools',
            'Mekanisme Belajar',
            'Forum Diskusi',
            'Materi yang akan Dipelajari',
            'Daftar Referensi',
        ]},
        {title: 'Pendahuluan', bab: ['Pengantar Web Programming', 'Website dan Halaman Web', 'Anatomi Website']},
        {title: 'Pengantar HTML', bab: [
            'Pengantar HTML',
            'Membangun Halaman Web Pertama (Halaman Profil)',
            'Identifikasi Elemen pada Halaman Pertama',
            'Anatomi Elemen HTML',
            'Attribute di Elemen HTML',
            'Anatomi Dokumen HTML',
        ]},
        {title: 'Pendalaman HTML', bab: [
            'Pengantar Pendalaman HTML',
            'Paragraf',
            'Heading',
            'List',
            'Menambahkan List pada Halaman Profil',
            'Gambar',
            'Menambahkan Gambar pada Halaman Profil',
            'Inline Formatting Text',
            'Menerapkan Elemen Anchor ada Halaman Profil',
            'Semantic HTML',
            'Generic Element',
            'Tabel',
            'Struktur Dasar Tabel',
            'Spanning Cell',
            'Elemen dan Atribut pada Tabel',
            'Input User',
            'Atribut pada Elemen Input',
            'Mengirim Data Formulir',
            'Special Character',
        ]},
    ],
}, {title: 'css', image: css}, {title: 'javascript', image: javascript}];
