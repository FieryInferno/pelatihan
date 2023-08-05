import html from "../../../public/html.png";
import RoundedImage from "@/components/RoundedImage";
import Submodule from "@/components/Submodule";
import BackButton from "@/components/BackButton";

const submodules = [
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
];

export default () => <>
    <div className="m-4">
        {/* Tombol kembali  */}
        <BackButton />

        {/* Deskripsi module */}
        <div className="bg-[rgb(27,29,30)] p-4 mb-12 rounded-lg">
            <div className="w-1/4">
                <RoundedImage image={html} alt="html" />
            </div>
            <div className="text-[rgb(196,191,183)] my-4 font-bold uppercase text-2xl">html</div>
            <div className="text-[rgb(153,144,131)]">Dalam module ini kita akan mempelajari materi - materi dasar seputar pemrograman website, struktur pembentuk website, proses pembuatan dokumen HTML, struktur dasar HTML dan elemen - elemen HTML sepeti paragraf, heading, list, image, semantic HTML, generic HTML dan berbagai atribut didalamnya..</div>
        </div>

        {/* Submodule materi */}
        <div>
            {submodules.map((submodule, index) => <Submodule key={`submodule${index}`} {...submodule} />)}
        </div>
    </div>
</>;
