import htmlImage from "../../public/html.png";
import css from "../../public/css.webp";
import javascript from "../../public/javascript.png";

export interface Bab {
    title: string;
    subbab: Array<string>;
}

const materi = [{
    title: 'html',
    image: htmlImage,
    description: 'Dalam module ini kita akan mempelajari materi - materi dasar seputar pemrograman website, struktur pembentuk website, proses pembuatan dokumen HTML, struktur dasar HTML dan elemen - elemen HTML sepeti paragraf, heading, list, image, semantic HTML, generic HTML dan berbagai atribut didalamnya.',
    submodules: [
        {title: 'Persiapan Belajar', bab: [
            {
                title: 'Requirement Tools',
                subbab: [
                    `<h1 class="text-2xl mb-4 font-bold">Peralatan yang Dibutuhkan</h1>
                    <p class="mb-4">Sebelum memulai pada pelajaran pemrograman, ada 2 hal yang harus kita siapkan terlebih dahulu. Yaitu Code Editor atau IDE dan Browser</p>`,
                    `<h1 class="text-2xl mb-4 font-bold">Code Editor atau IDE</h1>
                    <p class="mb-4">Dalam mengembangkan aplikasi, baik website maupun platform lainnya, sudah pasti developer akan menuliskan kode-kode dalam bentuk HTML, CSS, maupun JavaScript. Semakin besar aplikasi maka semakin banyak kode yang akan dituliskan. Oleh karena itu, kita membutuhkan Code Editor atau Integrated Development Environment (IDE).</p>
                    <p class="mb-4">Sebenarnya, beberapa Sistem Operasi sudah menyediakan text editor usungannya masing-masing. Contohnya, Windows OS memiliki Notepad, Linux OS memiliki Text Editors, dan Mac OS memiliki TextEdit. Ketiga aplikasi tersebut dapat digunakan untuk menuliskan kode dalam pembuatan aplikasi website. Namun, tidak disarankan untuk menggunakan text editor tersebut karena tidak kaya akan fitur-fitur seperti IDE yang dapat mempercepat proses pengembangan web.</p>
                    `,
                    `<h1 class="text-2xl mb-4 font-bold">WebStorm (Jetbrains)</h1>
                        <div class="flex justify-center">
                            <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:ac5bc58f36846832d1917ccd72fdb00a20221228185950.png' alt="html" class="mb-4 lg:w-1/4" ß/>
                        </div>
                        <p class="mb-4">Salah satu produk milik Jetbrains yang berfokus pada pengembangan web seperti HTML, CSS, dan JavaScript. Berbagai framework JavaScript juga didukung, seperti React, Vue, Angular, dsb. IDE ini tidaklah gratis. Namun, IDE ini dapat diperoleh secara percuma dengan memanfaatkan Student License jika Anda seorang pelajar, mahasiswa, atau dosen. Silakan simak selengkapnya pada jetbrains.com/webstorm.</p>
                    `,
                    `<h1 class="text-2xl mb-4 font-bold">Visual Studio Code</h1>
                        <div class="flex justify-center">
                            <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:91f04139a6d06cbf401bb52e74cc2b5b20221228190029.png' alt="html" class="mb-4 lg:w-1/4" />
                        </div>
                        <p class="mb-4">Visual Studio Code merupakan sebuah text editor yang dikembangkan oleh Microsoft. Code editor ini memiliki banyak fitur seperti debugging, version control integration, syntax highlighting, code search, code completion, code snippets, code refactoring, dan yang tak kalah penting adalah extensions/plugins. Extension dapat memperkaya fitur code editor sehingga dapat memudahkan penulisan kode. Visual Studio Code tersedia untuk sistem operasi Windows, Mac, dan Linux. Selain itu, tentunya code editor ini dapat kita gunakan secara gratis. Silakan kunjungi pada code.visualstudio.com.</p>
                    `,
                    `<h1 class="text-2xl mb-4 font-bold">Brackets</h1>
                        <div class="flex justify-center">
                            <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:f0abc93421cb7aa50c41d8ebaa1a8c3a20221228190556.png' alt="html" class="mb-4 lg:w-1/4" />
                        </div>
                        <p class="mb-4">Brackets merupakan text editor modern yang ringan dan cukup powerful untuk digunakan. Pada brackets terdapat fitur live preview sehingga Anda dapat melihat perubahan yang dilakukan tanpa harus reload browser. Brackets juga merupakan project open-source yang mendapat banyak dukungan dari para pelaku komunitas aktif. Untuk mengunduhnya, silakan kunjungi brackets.io.</p>
                    `,
                    `<h1 class="text-2xl mb-4 font-bold">Web Browser</h1>
                        <p class="mb-4">Dalam mengakses halaman web, user akan membutuhkan web browser. Developer pun memerlukannya untuk melihat hasil website yang dikembangkan. Berikut beberapa web browser dari berbagai vendor yang dapat digunakan.</p>
                    `,
                    `<h1 class="text-2xl mb-4 font-bold">Mozilla Firefox</h1>
                        <div class="flex justify-center">
                            <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:a57d2b9a4121a85e497b0e3d22601be620221228192003.png' alt="html" class="mb-4 lg:w-1/4" />
                        </div>
                        <p class="mb-4">Firefox merupakan web browser usungan Mozilla. Browser ini memiliki keunggulan pada kesehatan internet dan menjaga privasi pengguna. Firefox juga dilengkapi berbagai fitur untuk meningkatkan produktivitas pengguna seperti Picture-in-Picture, sinkronisasi dengan perangkat mobile, tangkap gambar layar, dsb. Silakan simak pada mozilla.org/firefox/new.</p>
                    `,
                    `<h1 class="text-2xl mb-4 font-bold">Google Chrome</h1>
                        <div class="flex justify-center">
                            <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:244511dfc97709d8fa46707c25e605da20221228192626.png' alt="html" class="mb-4 lg:w-1/4" />
                        </div>
                        <p class="mb-4">Google Chrome memiliki bermacam-macam fitur terutama dalam membantu web developer melakukan proses pengembangan website. Alat tersebut dinamakan dengan DevTools. Dengan DevTools, developer dapat mengubah halaman website melalui browser secara langsung dan cepat tanpa mengubah kode yang dituliskan. Selain itu, kita dapat menganalisis dengan mudah jika ada kesalahan atau bug yang terjadi. Silakan kunjungi halaman pada google.com/chrome.</p>
                    `,
                ],
            },
            {
                title: 'Mekanisme Belajar',
                subbab: [
                    `<h1 class="text-2xl mb-4 font-bold">Materi Pembelajaran</h1>
                    <ul style="list-style: disc;margin-left: 1rem;">
                        <li>Materi Bacaan Elektronik</li>
                        <p>Materi yang ada dalam kelas ini mayoritas berupa teks atau tulisan. Karena proses belajar di bidang pemrograman, bentuk materi pembelajaran yang paling efektif untuk diingat, dimengerti, dan dipraktikkan adalah dalam bentuk teks.</p>
                        <li>Video</li>
                        <p>Coming soon</p>
                        <li>Forum Diskusi</li>
                        <p>Untuk forum disuki, tanya jawab dan share materi kita bisa menggunakan grup telegram yang sudah tersedia</p>
                    </ul>`,
                    `<h1 class="text-2xl mb-4 font-bold">Evaluasi Pembelajaran</h1>
                    <p class="mb-4">
                        Untuk evaluasi pembelajaran, akan disediakan latihan untuk peserta lalu hasil dari latihan tersebut akan dipresentasikan ketika pertemuan.
                    </p>`,
                ],
            },
            {
                title: 'Materi yang akan Dipelajari',
                subbab: [
                    `<h1 class="text-2xl mb-4 font-bold">Materi yang akan Dipelajar</h1>
                    <p class="mb-4">Kita akan mempelajari materi-materi dasar seputar HTML. Materi dalam kelas ini dibagi menjadi 3 modul. Berikut adalah modul-modul yang akan dicakup dalam kelas ini.</p>`,
                    `<h1 class="text-2xl mb-4 font-bold">1. Pengenalan Website</h1>
                    <p class="mb-4">Pada modul ini kita akan mempelajari berbagai hal seputar website seperti pengertian website, sejarah website secara singkat, struktur pembentuk website dan client dan server.</p>`,
                    `<h1 class="text-2xl mb-4 font-bold">2. Pengenalan HTML</h1>
                    <p class="mb-4">Pada modul ini kita akan mengenal apa itu HTML, proses pembuatan dokumen HTML, struktur dasar dokumen HTML, dan cara mengidentifikasi elemen yang tepat pada konten website.</p>`,
                    `<h1 class="text-2xl mb-4 font-bold">3. Pendalaman HTML</h1>
                    <p class="mb-4">Modul ini merupakan modul lanjutan dari modul sebelumnya yang membahas secara lebih dalam mengenai elemen-elemen HTML. Contohnya attribute pada elemen, paragraf, heading, list, image, teks terformat (quote, anchor, bold, dll), semantic HTML, generic element, table, special character, dan sebagainya.</p>`,
                ],
            },
            {
                title: 'Daftar Referensi',
                subbab: [
                    `<h1 class="text-2xl mb-4 font-bold">Daftar Referensi</h1>
                    <ul class="list-disc">
                        <li>
                            <a href="https://www.freecodecamp.org/news/learn-html-in-5-minutes-ccd378d2ab72/">https://www.freecodecamp.org/news/learn-html-in-5-minutes-ccd378d2ab72/</a>
                        </li>
                        <li>
                            <a href="https://www.w3schools.com/html/default.asp">https://www.w3schools.com/html/default.asp</a>
                        </li>
                        <li>
                            <a href="https://www.sololearn.com">https://www.sololearn.com</a>
                        </li>
                    </ul>`,
                ],
            },
        ]},
        {title: 'Pendahuluan', bab: [
            {
                title: 'Website dan Halaman Web',
                subbab: [
                    `<h1 class="text-2xl mb-4 font-bold">Website dan Halaman Web</h1>
                    <p class="mb-4">
                        Pada zaman modern sekarang ini pasti banyak dari kalian yang sudah mengenal apa itu website. Bahkan kita sekarang sedang mengakses sebuah website. Kita akan menggali memahami tentang website dan halaman web dan juga perbedaan diantara keduanya.
                    </p>`,
                    `<h1 class="text-2xl mb-4 font-bold">Halaman Web</h1>
                    <p class="mb-4">Halaman web merupakan halaman tunggal yang menampilkan informasi, baik berupa teks, gambar, maupun media lainnya. Tidak hanya media yang ditampilkan, halaman web yang dibangun dapat ditambahkan interaktivitas menggunakan kode (JavaScript).</p>
                    <div class="flex justify-center">
                        <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:01534503eeb7bfc20b9ae9741e43e70120230612143110.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                    </div>
                    <p class="mb-4">Halaman web di atas berisi banyak media yang disajikan hingga interaktivitas pengguna yang banyak. Halaman web yang diakses akan ditampilkan oleh browser menggunakan beberapa komponen pembangunnya. Kita akan membahas komponen-komponen ini pada materi Anatomi Website.</p>`,
                    `<h1 class="text-2xl mb-4 font-bold">Website</h1>
                    <p class="mb-4">Jika sebelumnya Anda belajar halaman web berupa halaman tunggal, website adalah sekumpulan halaman web yang saling terhubung. Website bersifat unik karena setiap halaman dapat saling terhubung dengan menggunakan hipertaut (hyperlink), baik dalam domain yang sama maupun berbeda.</p>
                    <p class="mb-4">Umumnya website memuat informasi yang disediakan secara perorangan, kelompok, atau organisasi. Semua informasi yang tersedia pada halaman website disimpan pada server. Kita akan membahas mengenai server pada materi berikutnya.</p>`,
                ],
            },
            {
                title: 'Anatomi Wesite',
                subbab: [
                    `<h1 class="text-2xl mb-4 font-bold">Anatomi Website</h1>
                    <div class="flex justify-center">
                        <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:1dd5084c0c0ba381a15f74c0428640e720230612145239.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                    </div>
                    <p class="mb-4">Gambar diatas adalah salah satu website untuk melakukan pengeditan foto. Tentu, ada beberapa komponen yang dimanfaatkan agar website dapat berjalan dengan baik dan interaktif. Nah, sebelum terjun dalam cara pembuatan website, kita akan berkenalan terlebih dahulu dengan beberapa komponen tersebut. Ini merupakan pengetahuan penting yang perlu diketahui dan dipahami bagi seorang web developer</p>`,
                    `<h1 class="text-2xl mb-4 font-bold">Pondasi Website</h1>
                    <p class="mb-4">Pada dasarnya, website dibangun dengan tiga buah fondasi utama:</p>
                    <ul class="mb-4 list-disc">
                        <li>HTML: sebuah markup language yang menentukan struktur atau kerangka dari halaman web;</li>
                        <li>CSS: sebuah markup language yang memberikan gaya atau styling agar halaman web ditampilkan lebih menarik; dan</li>
                        <li>JavaScript: satu-satunya programming language yang didukung oleh browser untuk meningkatkan interaktivitas pada halaman web.</li>
                    </ul>
                    <p class="mb-4">Perlu ditekankan bahwa ketiga komponen tersebut termasuk hal vital dalam pembangunan web. Sebenarnya, kita bisa saja membangun halaman web tanpa CSS dan JavaScript. Namun, website akan terlihat tidak menarik dan membosankan.</p>
                    <p class="mb-4">Saat ini, hampir tidak ada website yang dibangun tanpa menggunakan styling dan script (JavaScript). Oleh karena itu, jika salah satu dari ketiga komponen tersebut dihilangkan, hasil website yang disajikan terasa tidak lengkap.</p>`,
                    `<h1 class="text-2xl mb-4 font-bold">Analogi Website Terhadap Hewan</h1>
                    <p class="mb-4">Untuk lebih memudahkan penggambaran, berikut adalah analogi dari penerapan tiga pondasi website</p>
                    <div class="flex justify-center">
                        <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:82a2e7f86e16cae4a3719f391c2ebc8f20230612145356.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                    </div>
                    <p className="mb-4">Sebagaimana tubuh hewan yang disusun dari kerangka tulang, HTML pada website berperan sebagai kerangka dasar yang digunakan dalam menampilkan visual pada website. Namun, jika hanya sebatas kerangka, hewan tersebut akan terlihat seram dan aneh, bukan? Oleh karena itu, untuk mempercantik sosoknya, kita membutuhkan sebuah kulit, bulu, warna bulu, dsb. Di sinilah peran CSS.</p>
                    <p class="mb-4">Setelah memiliki kulit dan tampak cantik, selanjutnya kita membutuhkan interaktivitas pada kucing agar dapat bergerak dan berinteraksi. Ibarat dalam kasus ini, JavaScript-lah yang berperan dalam membuat website menjadi dinamis dan interaktif.</p>`,
                ],
            },
        ]},
        {title: 'Pengantar HTML', bab: [
            {
                title: 'Pengantar HTML',
                subbab: [
                    `<h1 class="text-2xl mb-4 font-bold">Pengantar HTML</h1>
                    <p class="mb-4">Pada modul sebelumnya, Anda sudah belajar banyak hal sebagai penuntun Anda memasuki front-end web development. Ada banyak pengetahuan yang telah diserap, seperti cara internet bekerja, website dan halaman web, web server, dan web browser. Selain itu, kamu juga sudah memahami anatomi dari website sehingga memahami komponen vital pembangun website. Nah, saat ini, seharusnya Anda sudah siap untuk memulai gathering knowledge tentang teknik pembangunan aplikasi web.</p>
                    <div class="flex justify-center">
                        <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:3456ae4a1c774455d6ad47b7c432b26120230614143148.png" alt="html" class="mb-4 lg:w-1/4" />
                    </div>
                    <p class="mb-4">HTML merupakan satu-satunya bahasa markup untuk membangun struktur halaman website. Sebagaimana telah dipelajari sebelumnya, HTML dianalogikan seperti kerangka hewan yang menentukan bentuk tubuhnya. Hal ini menjadikan setiap hewan memiliki bentuk yang bermacam-macam.</p>
                    <div class="flex justify-center">
                        <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:ad47a99a0b01267a96f8b33b9e54769a20230614143039.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                    </div>
                    <p class="mb-4">Gambar diatas adalah contoh halaman website yang dibuat hanya dengan menggunakan HTML.</p>`,
                ]
            },
            {
                title: 'Membangun Halaman Web Pertama',
                subbab: [
                    `<h1 class="text-2xl mb-4 font-bold">Membangun Halaman Web Pertama</h1>
                    <p class="mb-4">Sebelumnya, Anda sudah berkenalan dengan HTML yang merupakan satu-satunya bahasa pembangun halaman web. Langkah berikutnya, sebelum belajar lebih jauh dengan HTML, kita akan berlatih membuat halaman web untuk yang pertama kalinya.</p>`,
                    `<h1 class="text-2xl mb-4 font-bold">Tujuan</h1>
                    <p class="mb-4">Dalam membuat halaman web pertama, tentunya bersinggungan dengan HTML. Kita akan mencoba membuatnya dari nol dengan menggunakan code editor yang tersedia.</p>
                    <p class="mb-4">Berikut adalah hasil yang didapat pada akhir latihan ini.</p>
                    <div class="flex justify-center">
                        <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:df82468a75ee5dff2f7d22c94313225520230614143258.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                    </div>`,
                    `<h1 class="text-2xl mb-4 font-bold">Alur Latihan</h1>
                    <p class="mb-4">Berikut adalah alur latihan yang akan kita lakukan.</p>
                    <ul class="mb-4 list-decimal">
                        <li>Membuka code editor bawaan sistem operasi.</li>
                        <li>Menuliskan struktur konten (kode) halaman web pada code editor.</li>
                        <li>Menyimpan kode yang telah ditulis dalam bentuk HTML.</li>
                        <li>Menjalankan berkas HTML dalam browser (Google Chrome).</li>
                    </ul>`,
                    `<h1 class="text-2xl mb-4 font-bold">Latihan Membangun Halaman Web Pertama</h1>
                    <ul class="mb-4 list-decimal">
                        <li>Bukan code editor yang akan kita gunakan</li>
                        <li>Selanjutnya, kita akan mulai menuliskan konten untuk halaman web kita. Sebetulnya, ada struktur yang disepakati untuk menuliskan halaman web. Saat ini masih dalam tahap awal membuat halaman web, jadi kita akan menuliskan kontennya secara langsung. Silakan isi dengan konten berikut pada code editor.</li>
                    </ul>`
                ]
            },
        ]},
        {title: 'Pendalaman HTML', bab: [
            // 'Pengantar Pendalaman HTML',
            // 'Paragraf',
            // 'Heading',
            // 'List',
            // 'Menambahkan List pada Halaman Profil',
            // 'Gambar',
            // 'Menambahkan Gambar pada Halaman Profil',
            // 'Inline Formatting Text',
            // 'Menerapkan Elemen Anchor ada Halaman Profil',
            // 'Semantic HTML',
            // 'Generic Element',
            // 'Tabel',
            // 'Struktur Dasar Tabel',
            // 'Spanning Cell',
            // 'Elemen dan Atribut pada Tabel',
            // 'Input User',
            // 'Atribut pada Elemen Input',
            // 'Mengirim Data Formulir',
            // 'Special Character',
        ]},
    ],
    shadowColor: 'rgba(242,102,37,1)',
},
{
    title: 'css',
    image: css,
    shadowColor: 'rgba(37,171,226,1)',
},
{
    title: 'javascript',
    image: javascript,
    shadowColor: 'rgb(239,218,79)',
}];

export default materi;
