import htmlImage from "../../public/html.png";
import css from "../../public/css.webp";
import javascript from "../../public/javascript.png";

export interface Bab {
    title: string;
    subbab: Array<string>;
}

const materi = [
    {
        title: 'html',
        image: htmlImage,
        description: 'Dalam module ini kita akan mempelajari materi - materi dasar seputar pemrograman website, struktur pembentuk website, proses pembuatan dokumen HTML, struktur dasar HTML dan elemen - elemen HTML sepeti paragraf, heading, list, image, semantic HTML, generic HTML dan berbagai atribut didalamnya.',
        submodules: [
            {
                title: 'Persiapan Belajar',
                bab: [
                    {
                        title: 'Requirement Tools',
                        subbab: [
                            `<h1 class="title">Peralatan yang Dibutuhkan</h1>
                            <p class="mb-4">Sebelum memulai pada pelajaran pemrograman, ada 2 hal yang harus kita siapkan terlebih dahulu. Yaitu Code Editor atau IDE dan Browser</p>`,
                            `<h1 class="title">Code Editor atau IDE</h1>
                            <p class="mb-4">Dalam mengembangkan aplikasi, baik website maupun platform lainnya, sudah pasti developer akan menuliskan kode-kode dalam bentuk HTML, CSS, maupun JavaScript. Semakin besar aplikasi maka semakin banyak kode yang akan dituliskan. Oleh karena itu, kita membutuhkan Code Editor atau Integrated Development Environment (IDE).</p>
                            <p class="mb-4">Sebenarnya, beberapa Sistem Operasi sudah menyediakan text editor usungannya masing-masing. Contohnya, Windows OS memiliki Notepad, Linux OS memiliki Text Editors, dan Mac OS memiliki TextEdit. Ketiga aplikasi tersebut dapat digunakan untuk menuliskan kode dalam pembuatan aplikasi website. Namun, tidak disarankan untuk menggunakan text editor tersebut karena tidak kaya akan fitur-fitur seperti IDE yang dapat mempercepat proses pengembangan web.</p>
                            `,
                            `<h1 class="title">WebStorm (Jetbrains)</h1>
                                <div class="flex justify-center">
                                    <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:ac5bc58f36846832d1917ccd72fdb00a20221228185950.png' alt="html" class="mb-4 lg:w-1/4" />
                                </div>
                                <p class="mb-4">Salah satu produk milik Jetbrains yang berfokus pada pengembangan web seperti HTML, CSS, dan JavaScript. Berbagai framework JavaScript juga didukung, seperti React, Vue, Angular, dsb. IDE ini tidaklah gratis. Namun, IDE ini dapat diperoleh secara percuma dengan memanfaatkan Student License jika Anda seorang pelajar, mahasiswa, atau dosen. Silakan simak selengkapnya pada jetbrains.com/webstorm.</p>
                            `,
                            `<h1 class="title">Visual Studio Code</h1>
                                <div class="flex justify-center">
                                    <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:91f04139a6d06cbf401bb52e74cc2b5b20221228190029.png' alt="html" class="mb-4 lg:w-1/4" />
                                </div>
                                <p class="mb-4">Visual Studio Code merupakan sebuah text editor yang dikembangkan oleh Microsoft. Code editor ini memiliki banyak fitur seperti debugging, version control integration, syntax highlighting, code search, code completion, code snippets, code refactoring, dan yang tak kalah penting adalah extensions/plugins. Extension dapat memperkaya fitur code editor sehingga dapat memudahkan penulisan kode. Visual Studio Code tersedia untuk sistem operasi Windows, Mac, dan Linux. Selain itu, tentunya code editor ini dapat kita gunakan secara gratis. Silakan kunjungi pada code.visualstudio.com.</p>
                            `,
                            `<h1 class="title">Brackets</h1>
                                <div class="flex justify-center">
                                    <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:f0abc93421cb7aa50c41d8ebaa1a8c3a20221228190556.png' alt="html" class="mb-4 lg:w-1/4" />
                                </div>
                                <p class="mb-4">Brackets merupakan text editor modern yang ringan dan cukup powerful untuk digunakan. Pada brackets terdapat fitur live preview sehingga Anda dapat melihat perubahan yang dilakukan tanpa harus reload browser. Brackets juga merupakan project open-source yang mendapat banyak dukungan dari para pelaku komunitas aktif. Untuk mengunduhnya, silakan kunjungi brackets.io.</p>
                            `,
                            `<h1 class="title">Web Browser</h1>
                                <p class="mb-4">Dalam mengakses halaman web, user akan membutuhkan web browser. Developer pun memerlukannya untuk melihat hasil website yang dikembangkan. Berikut beberapa web browser dari berbagai vendor yang dapat digunakan.</p>
                            `,
                            `<h1 class="title">Mozilla Firefox</h1>
                                <div class="flex justify-center">
                                    <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:a57d2b9a4121a85e497b0e3d22601be620221228192003.png' alt="html" class="mb-4 lg:w-1/4" />
                                </div>
                                <p class="mb-4">Firefox merupakan web browser usungan Mozilla. Browser ini memiliki keunggulan pada kesehatan internet dan menjaga privasi pengguna. Firefox juga dilengkapi berbagai fitur untuk meningkatkan produktivitas pengguna seperti Picture-in-Picture, sinkronisasi dengan perangkat mobile, tangkap gambar layar, dsb. Silakan simak pada mozilla.org/firefox/new.</p>
                            `,
                            `<h1 class="title">Google Chrome</h1>
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
                            `<h1 class="title">Materi Pembelajaran</h1>
                            <ul style="list-style: disc;margin-left: 1rem;">
                                <li>Materi Bacaan Elektronik</li>
                                <p>Materi yang ada dalam kelas ini mayoritas berupa teks atau tulisan. Karena proses belajar di bidang pemrograman, bentuk materi pembelajaran yang paling efektif untuk diingat, dimengerti, dan dipraktikkan adalah dalam bentuk teks.</p>
                                <li>Video</li>
                                <p>Coming soon</p>
                                <li>Forum Diskusi</li>
                                <p>Untuk forum disuki, tanya jawab dan share materi kita bisa menggunakan grup telegram yang sudah tersedia</p>
                            </ul>`,
                            `<h1 class="title">Evaluasi Pembelajaran</h1>
                            <p class="mb-4">
                                Untuk evaluasi pembelajaran, akan disediakan latihan untuk peserta lalu hasil dari latihan tersebut akan dipresentasikan ketika pertemuan.
                            </p>`,
                        ],
                    },
                    {
                        title: 'Materi yang akan Dipelajari',
                        subbab: [
                            `<h1 class="title">Materi yang akan Dipelajar</h1>
                            <p class="mb-4">Kita akan mempelajari materi-materi dasar seputar HTML. Materi dalam kelas ini dibagi menjadi 3 modul. Berikut adalah modul-modul yang akan dicakup dalam kelas ini.</p>`,
                            `<h1 class="title">1. Pengenalan Website</h1>
                            <p class="mb-4">Pada modul ini kita akan mempelajari berbagai hal seputar website seperti pengertian website, sejarah website secara singkat, struktur pembentuk website dan client dan server.</p>`,
                            `<h1 class="title">2. Pengenalan HTML</h1>
                            <p class="mb-4">Pada modul ini kita akan mengenal apa itu HTML, proses pembuatan dokumen HTML, struktur dasar dokumen HTML, dan cara mengidentifikasi elemen yang tepat pada konten website.</p>`,
                            `<h1 class="title">3. Pendalaman HTML</h1>
                            <p class="mb-4">Modul ini merupakan modul lanjutan dari modul sebelumnya yang membahas secara lebih dalam mengenai elemen-elemen HTML. Contohnya attribute pada elemen, paragraf, heading, list, image, teks terformat (quote, anchor, bold, dll), semantic HTML, generic element, table, special character, dan sebagainya.</p>`,
                        ],
                    },
                    {
                        title: 'Daftar Referensi',
                        subbab: [
                            `<h1 class="title">Daftar Referensi</h1>
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
                ],
            },
            {
                title: 'Pendahuluan',
                bab: [
                    {
                        title: 'Website dan Halaman Web',
                        subbab: [
                            `<h1 class="title">Website dan Halaman Web</h1>
                            <p class="mb-4">
                                Pada zaman modern sekarang ini pasti banyak dari kalian yang sudah mengenal apa itu website. Bahkan kita sekarang sedang mengakses sebuah website. Kita akan menggali memahami tentang website dan halaman web dan juga perbedaan diantara keduanya.
                            </p>`,
                            `<h1 class="title">Halaman Web</h1>
                            <p class="mb-4">Halaman web merupakan halaman tunggal yang menampilkan informasi, baik berupa teks, gambar, maupun media lainnya. Tidak hanya media yang ditampilkan, halaman web yang dibangun dapat ditambahkan interaktivitas menggunakan kode (JavaScript).</p>
                            <div class="flex justify-center">
                                <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:01534503eeb7bfc20b9ae9741e43e70120230612143110.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                            </div>
                            <p class="mb-4">Halaman web di atas berisi banyak media yang disajikan hingga interaktivitas pengguna yang banyak. Halaman web yang diakses akan ditampilkan oleh browser menggunakan beberapa komponen pembangunnya. Kita akan membahas komponen-komponen ini pada materi Anatomi Website.</p>`,
                            `<h1 class="title">Website</h1>
                            <p class="mb-4">Jika sebelumnya Anda belajar halaman web berupa halaman tunggal, website adalah sekumpulan halaman web yang saling terhubung. Website bersifat unik karena setiap halaman dapat saling terhubung dengan menggunakan hipertaut (hyperlink), baik dalam domain yang sama maupun berbeda.</p>
                            <p class="mb-4">Umumnya website memuat informasi yang disediakan secara perorangan, kelompok, atau organisasi. Semua informasi yang tersedia pada halaman website disimpan pada server. Kita akan membahas mengenai server pada materi berikutnya.</p>`,
                        ],
                    },
                    {
                        title: 'Anatomi Wesite',
                        subbab: [
                            `<h1 class="title">Anatomi Website</h1>
                            <div class="flex justify-center">
                                <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:1dd5084c0c0ba381a15f74c0428640e720230612145239.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                            </div>
                            <p class="mb-4">Gambar diatas adalah salah satu website untuk melakukan pengeditan foto. Tentu, ada beberapa komponen yang dimanfaatkan agar website dapat berjalan dengan baik dan interaktif. Nah, sebelum terjun dalam cara pembuatan website, kita akan berkenalan terlebih dahulu dengan beberapa komponen tersebut. Ini merupakan pengetahuan penting yang perlu diketahui dan dipahami bagi seorang web developer</p>`,
                            `<h1 class="title">Pondasi Website</h1>
                            <p class="mb-4">Pada dasarnya, website dibangun dengan tiga buah fondasi utama:</p>
                            <ul class="mb-4 list-disc">
                                <li>HTML: sebuah markup language yang menentukan struktur atau kerangka dari halaman web;</li>
                                <li>CSS: sebuah markup language yang memberikan gaya atau styling agar halaman web ditampilkan lebih menarik; dan</li>
                                <li>JavaScript: satu-satunya programming language yang didukung oleh browser untuk meningkatkan interaktivitas pada halaman web.</li>
                            </ul>
                            <p class="mb-4">Perlu ditekankan bahwa ketiga komponen tersebut termasuk hal vital dalam pembangunan web. Sebenarnya, kita bisa saja membangun halaman web tanpa CSS dan JavaScript. Namun, website akan terlihat tidak menarik dan membosankan.</p>
                            <p class="mb-4">Saat ini, hampir tidak ada website yang dibangun tanpa menggunakan styling dan script (JavaScript). Oleh karena itu, jika salah satu dari ketiga komponen tersebut dihilangkan, hasil website yang disajikan terasa tidak lengkap.</p>`,
                            `<h1 class="title">Analogi Website Terhadap Hewan</h1>
                            <p class="mb-4">Untuk lebih memudahkan penggambaran, berikut adalah analogi dari penerapan tiga pondasi website</p>
                            <div class="flex justify-center">
                                <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:82a2e7f86e16cae4a3719f391c2ebc8f20230612145356.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                            </div>
                            <p class="mb-4">Sebagaimana tubuh hewan yang disusun dari kerangka tulang, HTML pada website berperan sebagai kerangka dasar yang digunakan dalam menampilkan visual pada website. Namun, jika hanya sebatas kerangka, hewan tersebut akan terlihat seram dan aneh, bukan? Oleh karena itu, untuk mempercantik sosoknya, kita membutuhkan sebuah kulit, bulu, warna bulu, dsb. Di sinilah peran CSS.</p>
                            <p class="mb-4">Setelah memiliki kulit dan tampak cantik, selanjutnya kita membutuhkan interaktivitas pada kucing agar dapat bergerak dan berinteraksi. Ibarat dalam kasus ini, JavaScript-lah yang berperan dalam membuat website menjadi dinamis dan interaktif.</p>`,
                        ],
                    },
                ],
            },
            {
                title: 'Pengantar HTML',
                bab: [
                    {
                        title: 'Pengantar HTML',
                        subbab: [
                            `<h1 class="title">Pengantar HTML</h1>
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
                            `<h1 class="title">Membangun Halaman Web Pertama</h1>
                            <p class="mb-4">Sebelumnya, Anda sudah berkenalan dengan HTML yang merupakan satu-satunya bahasa pembangun halaman web. Langkah berikutnya, sebelum belajar lebih jauh dengan HTML, kita akan berlatih membuat halaman web untuk yang pertama kalinya.</p>`,
                            `<h1 class="title">Tujuan</h1>
                            <p class="mb-4">Dalam membuat halaman web pertama, tentunya bersinggungan dengan HTML. Kita akan mencoba membuatnya dari nol dengan menggunakan code editor yang tersedia.</p>
                            <p class="mb-4">Berikut adalah hasil yang didapat pada akhir latihan ini.</p>
                            <div class="flex justify-center">
                                <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:df82468a75ee5dff2f7d22c94313225520230614143258.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                            </div>`,
                            `<h1 class="title">Alur Latihan</h1>
                            <p class="mb-4">Berikut adalah alur latihan yang akan kita lakukan.</p>
                            <ul class="mb-4 list-decimal">
                                <li>Membuka code editor bawaan sistem operasi.</li>
                                <li>Menuliskan struktur konten (kode) halaman web pada code editor.</li>
                                <li>Menyimpan kode yang telah ditulis dalam bentuk HTML.</li>
                                <li>Menjalankan berkas HTML dalam browser (Google Chrome).</li>
                            </ul>`,
                            `
                            <h1 class="title">Latihan Membangun Halaman Web Pertama</h1>
                            <ul class="mb-4 list-decimal">
                                <li>Buat sebuah folder</li>
                                <li>Buka code editor yang akan kita gunakan dan buka folder yang sudah dibuat</li>
                                <li>Buat sebuah file dengan nama index.html</li>
                                <li>
                                    Selanjutnya, kita akan mulai menuliskan konten untuk halaman web kita. Sebetulnya, ada struktur yang disepakati untuk menuliskan halaman web. Saat ini masih dalam tahap awal membuat halaman web, jadi kita akan menuliskan kontennya secara langsung. Silakan isi dengan konten berikut pada code editor.
                                    <div class="flex justify-center my-4">
                                        <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                            <div class="rounded-lg bg-black">
                                                <ol class="code">
                                                    <li><span class="pln">Bandung</span></p>
                                                    <li><span class="pln">Kota metropolitan terbesar di Provinsi Jawa Barat, sekaligus menjadi ibu kota provinsi tersebut.</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">Sejarah</span></p>
                                                    <li><span class="pln">Kata Bandung berasal dari kata bendung atau bendungan karena terbendungnya sungai Citarum oleh lava Gunung Tangkuban Parahu yang lalu membentuk telaga. Legenda yang diceritakan oleh orang-orang tua di Bandung mengatakan bahwa nama Bandung diambil dari sebuah kendaraan air yang terdiri dari dua perahu yang diikat berdampingan yang disebut perahu bandung yang digunakan oleh Bupati Bandung, R.A. Wiranatakusumah II, untuk melayari Ci Tarum dalam mencari tempat kedudukan kabupaten yang baru untuk menggantikan ibu kota yang lama di Dayeuhkolot.</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">Berdasarkan filosofi Sunda, kata Bandung juga berasal dari kalimat Nga-Bandung-an Banda Indung, yang merupakan kalimat sakral dan luhur karena mengandung nilai ajaran Sunda. Nga-Bandung-an artinya menyaksikan atau bersaksi. Banda adalah segala sesuatu yang berada di alam hidup yaitu di bumi dan atmosfer, baik makhluk hidup maupun benda mati. Sinonim dari banda adalah harta. Indung berarti Ibu atau Bumi, disebut juga sebagai Ibu Pertiwi tempat Banda berada.</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">Geografis</span></p>
                                                    <li><span class="pln">Kota Bandung dikelilingi oleh pegunungan, sehingga bentuk morfologi wilayahnya bagaikan sebuah mangkok raksasa, secara geografis kota ini terletak di tengah-tengah provinsi Jawa Barat, serta berada pada ketinggian &plusmn;768 m di atas permukaan laut, dengan titik tertinggi di berada di sebelah utara dengan ketinggian 1.050 meter di atas permukaan laut dan sebelah selatan merupakan kawasan rendah dengan ketinggian 675 meter di atas permukaan laut.</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">Kota Bandung dialiri dua sungai utama, yaitu Sungai Cikapundung dan Sungai Citarum beserta anak-anak sungainya yang pada umumnya mengalir ke arah selatan dan bertemu di Sungai Citarum. Dengan kondisi yang demikian, Bandung selatan sangat rentan terhadap masalah banjir terutama pada musim hujan.</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">Wisata</span></p>
                                                    <li><span class="pln">Sejak dibukanya Jalan Tol Cipularang, kota Bandung telah menjadi tujuan utama dalam menikmati liburan akhir pekan terutama dari masyarakat yang berasal dari Jakarta sekitarnya. Selain menjadi kota wisata belanja, kota Bandung juga dikenal dengan sejumlah besar bangunan lama berarsitektur peninggalan Belanda.</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">Farm House Lembang</span></p>
                                                    <li><span class="pln">Berada di jalur utama Bandung-Lembang, Farm House menjadi objek wisata yang tidak pernah sepi pengunjung. Selain karena letaknya strategis, kawasan ini juga menghadirkan nuansa wisata khas Eropa. Semua itu diterapkan dalam bentuk spot swafoto Instagramable.</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">&nbsp;</span></p>
                                                    <li><span class="pln">Observatorium Bosscha</span></p>
                                                    <li><span class="pln">Memiliki beberapa teleskop, antara lain, Refraktor Ganda Zeiss, Schmidt Bimasakti, Refraktor Bamberg, Cassegrain GOTO, dan Teleskop Surya. Refraktor Ganda Zeiss adalah jenis teleskop terbesar untuk meneropong bintang. Benda ini diletakkan pada atap kubah sehingga saat teropong digunakan, atap tersebut harus dibuka. Observatorium Bosscha boleh dikunjungi oleh siapa pun, tanpa tiket. Namun, bagi yang ingin menggunakan teleskop Zeiss, wajib mendaftarkan diri. Untuk instansi atau lembaga pendidikan, diberikan jadwal hari Selasa sampai Jumat. Sementara itu, kunjungan individu dibuka setiap hari Sabtu.</span></p>
                                                </ol>
                                                <p>&nbsp;</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>Save dengan menggunakan CTRL + S</li>
                                <li>
                                    Selanjutnya untuk melihat hasilnya, silakan buka berkas HTML tersebut dengan menggunakan browser, Cara yang paling mudah adalah dobel klik berkas tersebut dan hasilnya akan tampak seperti berikut
                                    <div class="flex justify-center">
                                        <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:d64c674cd98d7b9da4f1c8d98e01b1c520230614144041.jpeg' alt="html" class="mb-4 lg:w-1/2" />
                                    </div>
                                </li>
                            </ul>`,
                        ]
                    },
                    {
                        title: 'Identifikasi Elemen pada Halaman Profil',
                        subbab: [
                            `<h4 class="title"><strong>Tujuan</strong></h4>
                            <p class="mb-4">Pada latihan sebelumnya, konten halaman web ditampilkan dengan berantakan dan tidak mudah dibaca. Kita tidak berekspektasi pada browser bahwa tampilan halaman web akan mengikuti kode yang dituliskan pada code editor. Hal ini termasuk jika kita menambahkan baris baru dan karakter spasi pada code editor karena browser tidak akan membacanya.</p>
                            <p class="mb-4">Agar browser dapat mengenal setiap konten dan menampilkannya dengan rapi, kita akan memberinya elemen yang sesuai. Judul akan menggunakan elemen heading, paragraf akan menggunakan elemen paragraf, dsb.</p>`,
                            `<h4 class="title"><strong>Alur Latihan</strong></h4>
                            <p class="mb-4">Berikut adalah alur latihan kali ini.</p>
                            <ol class="mb-4 list-decimal">
                                <li>Membuka hasil akhir dari latihan sebelumnya.</li>
                                <li>Menuliskan struktur dasar dokumen HTML pada berkas index.html.</li>
                                <li>Menempatkan seluruh konten pada elemen body.</li>
                                <li>Membungkus setiap bagian dari artikel dengan elemen yang tepat.</li>
                                <li>Menjalankan dokumen HTML pada browser.</li>
                            </ol>`,
                            `<h4 class="title"><strong>Identifikasi Elemen pada Halaman Website</strong></h4>
                            <p class="mb-4">Silakan ikuti beberapa langkah latihan berikut.</p>
                            <ol class="mb-4 list-decimal">
                                <li>Membuka hasil akhir pada latihan sebelumnya.</li>
                                <li>
                                    Pada berkas index.html, silakan tambahkan struktur dasar dokumen HTML di posisi teratas.
                                    <div class="flex justify-center my-4">
                                        <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                            <div class="rounded-lg bg-black">
                                                <ol class="code">
                                                    <li><span class="dec">&lt;!DOCTYPE html&gt;</span></li>
                                                    <li><span class="tag">&lt;html&gt;</span></li>
                                                    <li style="padding-left: 30px;"><span class="tag">&lt;head&gt;&lt;/head&gt;</span></li>
                                                    <li style="padding-left: 30px;"><span class="tag">&lt;body&gt;</span></li>
                                                    <li style="padding-left: 30px;"><span class="tag">&lt;/body&gt;</span></li>
                                                    <li><span class="tag">&lt;/html&gt;</span></li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>Karena seluruh konten yang ditampilkan ada dalam elemen &lt;body&gt;, silakan masukkan seluruh konten artikel padanya</li>
                                <li>Selanjutnya, kita akan mengidentifikasi konten artikel ini. Carilah konten yang paling penting atau topik utama pembahasan dari artikel serta bungkus konten tersebut dengan elemen &lt;h1&gt;; lalu, konten yang merupakan pemaparan dari topik tersebut serta bungkus konten tersebut dengan elemen &lt;p&gt;; dan seterusnya.</li>
                                <li>
                                    Sehingga kodenya akan menjadi seperti ini.
                                    <div class="flex justify-center my-4">
                                        <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                            <div class="rounded-lg bg-black">
                                                <ol class="code">
                                                    <li><span class="dec">&lt;!DOCTYPE html&gt;</span></li>
                                                    <li><span class="tag">&lt;html&gt;</span></li>
                                                    <li style="padding-left: 30px;"><span class="tag">&lt;head&gt;&lt;/head&gt;</span></p>
                                                    <li style="padding-left: 30px;"><span class="tag">&lt;body&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;h1&gt;</span><span class="pln">Bandung</span><span class="tag">&lt;/h1&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Kota metropolitan terbesar di Provinsi Jawa Barat, sekaligus menjadi ibu</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> kota provinsi tersebut.</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;/p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln">&nbsp;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln">&nbsp;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;h2&gt;</span><span class="pln">Sejarah</span><span class="tag">&lt;/h2&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Kata Bandung berasal dari kata bendung atau bendungan karena terbendungnya</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> sungai Citarum oleh lava Gunung Tangkuban Parahu yang lalu membentuk</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> telaga. Legenda yang diceritakan oleh orang-orang tua di Bandung</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> mengatakan bahwa nama Bandung diambil dari sebuah kendaraan air yang</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> terdiri dari dua perahu yang diikat berdampingan yang disebut perahu</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> bandung yang digunakan oleh Bupati Bandung, R.A. Wiranatakusumah II, untuk</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> melayari Ci Tarum dalam mencari tempat kedudukan kabupaten yang baru untuk</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> menggantikan ibu kota yang lama di Dayeuhkolot.</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;/p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Berdasarkan filosofi Sunda, kata Bandung juga berasal dari kalimat</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Nga-Bandung-an Banda Indung, yang merupakan kalimat sakral dan luhur</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> karena mengandung nilai ajaran Sunda. Nga-Bandung-an artinya menyaksikan</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> atau bersaksi. Banda adalah segala sesuatu yang berada di alam hidup yaitu</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> di bumi dan atmosfer, baik makhluk hidup maupun benda mati. Sinonim dari</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> banda adalah harta. Indung berarti Ibu atau Bumi, disebut juga sebagai Ibu</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Pertiwi tempat Banda berada.</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;/p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln">&nbsp;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln">&nbsp;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;h2&gt;</span><span class="pln">Geografis</span><span class="tag">&lt;/h2&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Kota Bandung dikelilingi oleh pegunungan, sehingga bentuk morfologi</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> wilayahnya bagaikan sebuah mangkok raksasa, secara geografis kota ini</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> terletak di tengah-tengah provinsi Jawa Barat, serta berada pada</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> ketinggian &plusmn;768 m di atas permukaan laut, dengan titik tertinggi di berada</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> di sebelah utara dengan ketinggian 1.050 meter di atas permukaan laut dan</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> sebelah selatan merupakan kawasan rendah dengan ketinggian 675 meter di</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> atas permukaan laut.</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;/p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Kota Bandung dialiri dua sungai utama, yaitu Sungai Cikapundung dan Sungai</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Citarum beserta anak-anak sungainya yang pada umumnya mengalir ke arah</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> selatan dan bertemu di Sungai Citarum. Dengan kondisi yang demikian,</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Bandung selatan sangat rentan terhadap masalah banjir terutama pada musim</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> hujan.</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;/p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln">&nbsp;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln">&nbsp;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;h2&gt;</span><span class="pln">Wisata</span><span class="tag">&lt;/h2&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Sejak dibukanya Jalan Tol Cipularang, kota Bandung telah menjadi tujuan</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> utama dalam menikmati liburan akhir pekan terutama dari masyarakat yang</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> berasal dari Jakarta sekitarnya. Selain menjadi kota wisata belanja, kota</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Bandung juga dikenal dengan sejumlah besar bangunan lama berarsitektur</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> peninggalan Belanda.</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;/p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln">&nbsp;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;h3&gt;</span><span class="pln">Farm House Lembang</span><span class="tag">&lt;/h3&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Berada di jalur utama Bandung-Lembang, Farm House menjadi objek wisata</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> yang tidak pernah sepi pengunjung. Selain karena letaknya strategis,</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> kawasan ini juga menghadirkan nuansa wisata khas Eropa. Semua itu</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> diterapkan dalam bentuk spot swafoto Instagramable.</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;/p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln">&nbsp;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;h3&gt;</span><span class="pln">Observatorium Bosscha</span><span class="tag">&lt;/h3&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;p&gt;</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Memiliki beberapa teleskop, antara lain, Refraktor Ganda Zeiss, Schmidt</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Bimasakti, Refraktor Bamberg, Cassegrain GOTO, dan Teleskop Surya.</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> Refraktor Ganda Zeiss adalah jenis teleskop terbesar untuk meneropong</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> bintang. Benda ini diletakkan pada atap kubah sehingga saat teropong</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> digunakan, atap tersebut harus dibuka. Observatorium Bosscha boleh</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> dikunjungi oleh siapapun, tanpa tiket. Namun, bagi yang ingin menggunakan</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> teleskop Zeiss, wajib mendaftarkan diri. Untuk instansi atau lembaga</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> pendidikan, diberikan jadwal hari Selasa sampai Jumat. Sementara itu,</span></p>
                                                    <li style="padding-left: 60px;"><span class="pln"> kunjungan individu dibuka setiap hari Sabtu.</span></p>
                                                    <li style="padding-left: 60px;"><span class="tag">&lt;/p&gt;</span></p>
                                                    <li style="padding-left: 30px;"><span class="tag">&lt;/body&gt;</span></p>
                                                    <li><span class="tag">&lt;/html&gt;</span></li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    Silakan save perubahan yang terjadi pada berkas HTML dan buka pada browser. Seharusnya, halaman web akan terlihat seperti berikut.
                                    <div class="flex justify-center">
                                        <video
                                            src="https://raw.githubusercontent.com/dicodingacademy/a123-webdasar-labs/099-shared-files/shared-media/module-02/02-hasil-akhir-identifikasi-elemen.webm"
                                            autoPlay
                                            loop
                                            muted
                                            class="mb-4 lg:w-1/2"
                                        ></video>
                                    </div>
                                </li>
                                <li>
                                    Kita belum selesai sampai di sini. Tidak hanya elemen &lt;body&gt;, untuk memperlengkap dokumen ini, kita akan melengkapi elemen dalam elemen &lt;head&gt;. Silakan tambahkan kode bercetak tebal berikut pada index.html.
                                    <div class="flex justify-center my-4">
                                        <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                            <div class="rounded-lg bg-black">
                                                <ol class="code">
                                                    <li><span class="dec">&lt;!DOCTYPE html&gt;</span></li>
                                                    <li><span class="tag">&lt;html&gt;</span></li>
                                                    <li style="padding-left: 30px;"><strong> <span class="tag">&lt;head&gt;</span></strong></li>
                                                    <li style="padding-left: 60px;"><strong> <span class="tag">&lt;meta</span> <span class="atn">charset</span><span class="pun">=</span><span class="atv">"utf-8"</span><span class="tag">&gt;</span></strong></li>
                                                    <li style="padding-left: 60px;"><strong> <span class="tag">&lt;title&gt;</span><span class="pln">Halaman Profil Bandung</span><span class="tag">&lt;/title&gt;</span></strong></li>
                                                    <li style="padding-left: 30px;"><strong> <span class="tag">&lt;/head&gt;</span></strong></li>
                                                    <li style="padding-left: 30px;"><span class="tag">&lt;body&gt;</span></li>
                                                    <li style="padding-left: 60px;"><span class="com">&lt;!-- Kode lainnya disembunyikan... --&gt;</span></li>
                                                    <li style="padding-left: 30px;"><span class="tag">&lt;/body&gt;</span></li>
                                                    <li><span class="tag">&lt;/html&gt;</span></li>
                                                    <li>&nbsp;</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    Seharusnya tab browser Anda akan menampilkan judul webpage dengan baik.
                                    <div class="flex justify-center">
                                        <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:7becadfcb801031858dec3be376f5d8420230614150617.jpeg" class="mb-4 lg:w-1/2" />
                                    </div>
                                </li>
                            </ol>`,
                        ],
                    },
                    {
                        title: 'Anatomi HTML',
                        subbab: [
                            `<h3 class="title">Apa Itu Elemen HTML</h3>
                            <p class="mb-4">Elemen adalah salah satu bagian dari HTML dalam membangun halaman web. Ini digunakan untuk mendefinisikan konten-konten yang ditampilkan dalam halaman web. Contohnya, kita bisa menggunakan elemen paragraf dalam menampilkan media teks sebagai kontennya.</p>
                            <p class="mb-4">
                                <div class="flex justify-center">
                                    <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:0b14e710caec66414bac5c077733ffed20230614155217.jpeg" alt="html" class="mb-4 lg:w-1/4" />
                                </div>
                            </p>
                            <p class="mb-4">Gambar di atas adalah salah satu contoh elemen untuk menampilkan paragraf dalam halaman web. Bagaimana dengan judul? Tentunya, HTML memiliki elemen khusus untuk hal tersebut. HTML memiliki segudang elemen untuk mendukung kita dalam membuat halaman web yang baik.</p>
                            <p class="mb-4">Jika gambar di atas dijalankan, hasilnya seperti berikut.</p>
                            <p class="mb-4">
                                <div class="flex justify-center">
                                    <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:7bc1b73b5f5d85da19bb918925d8ee5f20230614155217.jpeg" alt="html" class="mb-4 lg:w-1/4" />
                                </div>
                            </p>`,
                            `<p class="mb-4">Apabila sekilas dilihat, sebetulnya tidak ada bedanya jika kita menuliskannya tanpa elemen HTML, yaitu menuliskan teks dalam berkas secara langsung.</p>
                            <p class="mb-4">Berikut adalah perbedaan teks yang ditulis secara langsung dan teks yang ditulis didalam tag &lt;p&gt;.
                                <div class="flex justify-center">
                                    <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:1116b3212db1f6e636b39610415b38f820230614155555.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                                </div>
                            </p>
                            <p class="mb-4">Untuk melihat seperti yang ditunjukkan gambar di atas, Anda dapat membuka Developer Tools (Inspect Elements) dan tab Elements serta Styles pada browser yang digunakan. Cara yang paling singkat untuk membukanya adalah menekan tombol F12.</p>`,
                            `<p class="mb-4">Silakan Anda perhatikan kedua window Browser pada gambar di atas, lebih tepatnya DevTools pada bagian tab <strong>Styles</strong>. Kita melihat ada kotak yang berwarna jingga, kuning, hijau, dan biru (bagian kotak terdalam). Warna-warna tersebut merupakan margin, border, padding, dan konten (contohnya teks yang akan ditampilkan). Kotak ini merupakan hasil representasi dari seluruh elemen HTML.</p>
                            <p class="mb-4">Berbicara mengenai perbedaan antara menggunakan elemen HTML maupun tidak, kita melihat ada perbedaan dari sisi styling. Teks yang dibungkus dengan elemen paragraf memiliki margin vertikal sebesar 16 piksel secara bawaan, sedangkan teks yang tidak dibungkus sama sekali tidak akan memiliki style apa pun, kecuali styling yang dimiliki oleh elemen &lt;body&gt;.</p>
                            <p class="mb-4">Dalam membangun halaman web, penggunaan elemen HTML sangatlah penting. Sebagaimana disebutkan sebelumnya, browser akan memahami hal yang dituliskan jika kita menggunakan elemen yang tepat. Selain itu, browser memiliki pengaturan khusus bagi masing-masing elemen HTML, seperti styling yang diterapkan, aksesibilitas, dsb. Dibandingkan tanpa elemen, konten yang ditampilkan pun tidak memiliki arti apa pun oleh browser.</p>`,
                            `<h3 class="title">Anatomi Elemen HTML</h3>
                            <p class="mb-4">Kita semua sudah melihat secara sekilas rupa dari elemen HTML. Namun, ada beberapa hal untuk membangun elemen HTML itu sendiri. Secara garis besar, berikut adalah bagan dari anatomi elemen HTML.</p>
                            <p class="mb-4">
                                <div class="flex justify-center">
                                    <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:2a2139da159f243ece570f1c900d1e8a20230620095323.png" alt="html" class="mb-4 lg:w-1/2" />
                                </div>
                            </p>`,
                            `<p class="mb-4">Pada gambar sebelumnya, kita dapat melihat bahwa elemen HTML terdapat dua tag, yaitu tag pembuka <span style="padding: 2px 4px; color: #c7254e; background-color: #f9f2f4;">&lt;&gt;</span> dan tag penutup <span style="padding: 2px 4px; color: #c7254e; background-color: #f9f2f4;">&lt;/&gt;</span>. Di antara tag pembuka dan penutup, kita dapat meletakkan sebuah konten.</p>
                            <div class="flex justify-center mb-4">
                                <table class="table text-left text-gray-400">
                                    <thead class="uppercase bg-gray-700 text-gray-400">
                                        <tr>
                                            <th style="text-align: center; width: 109.767px;" class="px-6 py-3">
                                                <p dir="ltr"><strong>Item</strong></p>
                                            </th>
                                            <th style="text-align: center; width: 544.733px;" class="px-6 py-3">
                                                <p dir="ltr"><strong>Keterangan</strong></p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b bg-gray-800 border-gray-700">
                                            <td style="width: 109.767px;" class="px-6 py-4">
                                                <p dir="ltr">Tag pembuka</p>
                                            </td>
                                            <td style="width: 544.733px;" class="px-6 py-4">
                                                <p dir="ltr">Berisi nama dari elemen yang akan dibuat dan dibungkus dengan tanda kurung siku(&lt;&gt;). Contohnya adalah &lt;p&gt; untuk membuat elemen paragraf yang menggunakan p sebagai nama elemennya&ndash;singkatan dari kata paragraf dalam bahasa inggris (paragraph).</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 109.767px;" class="px-6 py-4">
                                                <p dir="ltr">Konten</p>
                                            </td>
                                            <td style="width: 544.733px;" class="px-6 py-4">
                                                <p dir="ltr">Konten dari elemen. Contohnya teks sebagai konten dari elemen paragraf.</p>
                                            </td>
                                        </tr>
                                        <tr class="border-b bg-gray-800 border-gray-700">
                                            <td style="width: 109.767px;" class="px-6 py-4">
                                                <p dir="ltr">Tag penutup</p>
                                            </td>
                                            <td style="width: 544.733px;" class="px-6 py-4">
                                                <p dir="ltr">Mirip seperti tag pembuka, tetapi terdapat garis miring sebelum nama elemennya. Ini menandakan akhir dari elemen HTML. Biasanya, kesalahan bagi web programmer pemula adalah melupakan tag ini sehingga menyebabkan elemen tidak valid.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>`,
                            `<h3 class="title">Elemen dalam Elemen</h3>
                            <p class="mb-4">Selain memiliki teks sebagai konten, elemen dapat memiliki elemen lain di dalamnya atau biasa disebut dengan&nbsp;<em>child-element</em>. Contohnya, kita memiliki elemen paragraf dengan teks sebagai konten di dalamnya. Kami ingin memberikan format teks miring atau tebal pada beberapa kata. Berikut adalah hasil implementasinya.</p>
                            <p class="mb-4">
                                <div class="flex justify-center">
                                    <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:d40aae4c01ab2e421d1efc8ceda0c94d20230614155838.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                                </div>
                            </p>
                            <p class="mb-4">Hasilnya berikut.</p>
                            <p class="mb-4">
                                <div class="flex justify-center">
                                    <img src="https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:405b915f20c0264765e7fd8d6915d62820230614155838.jpeg" alt="html" class="mb-4 lg:w-1/2" />
                                </div>
                            </p>
                            <p class="mb-4">Elemen ini memiliki peran yang sangat besar terhadap browser agar informasi-informasi dapat ditampilkan dengan baik. Untuk menambah wawasan, ada sumber artikel yang menyebutkan elemen HTML. Anda dapat membuka <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" class="text-blue-500"><u>HTML elements reference dari MDN</u></a>.</p>`,
                        ],
                    },
                    {
                        title: 'Attribute di Element HTML',
                        subbab: [
                            `<p class="mb-4">Dalam membuat elemen HTML, ada satu hal yang dapat dilakukan, yaitu memberi atribut. Atribut dapat memberi informasi-informasi tambahan untuk elemen HTML. Informasi ini tidak akan tampil dalam halaman web, tetapi ia dapat menentukan perilaku elemen biasanya.</p>`,
                            `<p class="mb-4">Contohnya, ada satu elemen yang berfungsi untuk menampilkan gambar sebagai konten halaman web, yaitu&nbsp;&lt;img&gt;. Nah, kita perlu menyertakan informasi pada elemen tersebut, yaitu alamat dari gambar yang akan ditampilkan.</p>
                            <p class="mb-4">
                                <div class="flex justify-center">
                                    <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:ca7c120f553eff399206116e79d0e4b020230614160049.jpeg' alt="html" class="mb-4 lg:w-1/2 " />
                                </div>
                            </p>
                            <p class="mb-4">Pada gambar di atas, atribut&nbsp;<span style="padding: 2px 4px; color: #c7254e; background-color: #f9f2f4;">src</span> menentukan lokasi gambar yang akan ditampilkan pada halaman web.</p>`,
                            `<p class="mb-4">Dari contoh sebelumnya, mungkin Anda sudah terbayang bentuk penerapan atribut HTML. Namun, berikut adalah anatomi dari atribut elemen untuk memperjelas pemahaman Anda.</p>
                            <p class="mb-4">
                                <div class="flex justify-center">
                                    <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:3ce8a0457c8eb4b99e54aaaf57775b8c20230620095546.png' alt="html" class="mb-4 lg:w-1/2 " />
                                </div>
                            </p>
                            <p class="mb-4">Pada gambar di atas, kita memiliki atribut&nbsp;<span style="padding: 2px 4px; color: #c7254e; background-color: #f9f2f4;">class</span>. Secara singkat, atribut ini merupakan sebuah nama identitas yang digunakan untuk menargetkan elemen dengan kode styling. Untuk pembahasan styling akan dicakup pada modul terpisah.</p>`,
                            `<p class="mb-4">Ada dua hal yang dilakukan untuk menambahkan atribut pada elemen HTML, yaitu nama atribut dan nilainya. Ada banyak atribut yang disediakan oleh HTML. Salah satu yang terlihat sebelumnya adalah <span style="padding: 2px 4px; color: #c7254e; background-color: #f9f2f4;">class</span> dan&nbsp;<span style="padding: 2px 4px; color: #c7254e; background-color: #f9f2f4;">src</span>. Terkait nilainya, Anda dapat menulisnya dengan membungkus dengan tanda kutip satu atau dua setelah karakter sama dengan (=).</p>`,
                            `<p class="mb-4">Berikut adalah beberapa atribut yang tersedia di HTML.</p>
                            <div class="table-responsive">
                            <table class="table" cellspacing="0">
                            <thead>
                            <tr>
                            <th style="text-align: center;">
                            <p class="mb-4"><strong>Attribute</strong></p>
                            </th>
                            <th style="text-align: center;">
                            <p class="mb-4"><strong>Description</strong></p>
                            </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">accesskey</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan tombol shortcut untuk mengaktifkan/memfokuskan pada sebuah element.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">class</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan satu atau lebih classname untuk sebuah elemen.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">contenteditable</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan konten dari elemen merupakan konten yang dapat diubah atau tidak.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">data-*</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menyimpan sebuah data pribadi khusus ke halaman atau aplikasi.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">dir</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan arah teks untuk konten pada suatu elemen.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">draggable</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan suatu elemen dapat di-<em>drag</em> atau tidak.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">dropzone</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan data yang di-<em>drag&nbsp;</em>adalah data yang disalin, dipindahkan, atau ditautkan saat dijatuhkan.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">hidden</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan suatu elemen ditampilkan atau tidak pada browser.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">id</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menetapkan id pada elemen.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">lang</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan bahasa pada konten elemen.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">spellcheck</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan elemen harus diperiksa ejaannya dan tata bahasanya atau tidak.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">style</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan styling secara satu baris untuk suatu elemen.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">tabindex</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan urutan dari suatu elemen.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">title</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan informasi tambahan tentang suatu elemen.</p>
                            </td>
                            </tr>
                            <tr>
                            <td style="width: 15.1101%;">
                            <p class="mb-4">translate</p>
                            </td>
                            <td style="width: 84.8899%;">
                            <p class="mb-4">Menentukan konten elemen harus diterjemahkan atau tidak.</p>
                            </td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="mb-4">Itulah pembahasan mengenai anatomi elemen HTML. Elemen ini memiliki peran yang sangat besar terhadap browser agar informasi-informasi dapat ditampilkan dengan baik. Untuk menambah wawasan, ada artikel yang menyebutkan atribut-atribut yang dapat digunakan. Silakan kunjungi <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"><u>HTML attribute reference dari MDN</u></a>.</p>`,
                        ],
                    },
                    {
                        title: 'Anatomi di Dokumen HTML',
                        subbab: [
                            `<h2 class="title">Anatomi Dokumen HTML</h2>
                            <p class="mb-4">Website serupa dengan dokumen konvensional yang ada. Serupa dalam arti memiliki struktur konten layaknya dokumen konvensional pada umumnya. Contohnya koran, majalah, atau buku. Selain itu, tidak jarang juga kita sering melihat artikel. Artikel memiliki beberapa komponen atau elemen, seperti judul, gambar, paragraf, dan sebagainya. Terkadang, jika konten artikel sangat panjang, pengelompokan akan dilakukan pada setiap bahasan menjadi beberapa bagian dengan memanfaatkan subjudul.</p>
                            <p class="mb-4">Judul dan subjudul pada sebuah dokumen menggambarkan suatu hierarki informasi. Misalnya, judul tingkat tertinggi merupakan judul utama dalam sebuah konten. Kemudian, diikuti dengan judul tingkat lebih rendah dan menjelaskan informasi dengan lebih rinci lagi.</p>`,
                            `<p class="mb-4">Pada dasarnya, dokumen HTML memerlukan struktur dasar untuk menampilkan halaman web dengan baik. Halaman web seharusnya memiliki susunan elemen HTML yang tampak seperti berikut.</p>
                            <p class="mb-4">
                                <div class="flex justify-center">
                                    <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:1fff210dfc27c1acce236c7ace7f775720230614154432.jpeg' alt="html" class="mb-4 lg:w-1/2" />
                                </div>
                            </p>`,
                            `<p class="mb-4">Pada pembahasan materi sebelumnya, kita mengetahui bahwa elemen dapat menjadi anak dari elemen lain atau biasa disebut child-element. Nah, contoh nyata yang dapat kita lihat adalah struktur dasar halaman web di atas. Contohnya, elemen &lt;head&gt; dan &lt;body&gt; merupakan child-element dari &lt;html&gt;. Lalu, elemen &lt;head&gt; memiliki child-element &lt;title&gt; yang memiliki konten berupa teks dari judul halaman yang ditampilkan. Elemen &lt;body&gt; memiliki child-element &lt;h1&gt; untuk menampilkan heading dan &lt;p&gt; untuk menampilkan paragraf.</p>`,
                            `<p class="mb-4">Hal di atas sebetulnya akan membentuk sebuah hierarki elemen atau biasa disebut dengan DOM Tree (pohon DOM). Ini dapat Anda analogikan seperti silsilah keluarga.</p>
                            <p class="mb-4">
                                <div class="flex justify-center">
                                    <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:4847f4456d343857a8446ae1fca98e0320230620095727.png' alt="html" class="mb-4 lg:w-1/2" />
                                </div>
                            </p>`,
                            `<h3 class="title">Doctype HTML</h3>
                            <p class="mb-4">Sederhananya, doctype dimaksudkan sebagai format atau versi HTML dan berisi sekumpulan aturan-aturan yang perlu diikuti dalam membangun halaman web yang baik. Pada waktu lampau, dokumen HTML disusun seperti berikut.</p>
                            <div class="flex justify-center my-4">
                                <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                    <div class="rounded-lg bg-black">
                                        <ol class="code">
                                            <li class="L0"><span class="dec">&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;</span></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <p class="mb-4">Versi HTML yang digunakan dari kode di atas adalah 4. Selain itu, penulisannya pun sangat panjang dan sulit dihafal. Sekarang, kita dapat menggunakan HTML versi 5 dengan cara yang sangat mudah dan valid.</p>
                            <div class="flex justify-center my-4">
                                <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                    <div class="rounded-lg bg-black">
                                        <ol class="code">
                                            <li class="L0"><span class="dec">&lt;!DOCTYPE html&gt;</span></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>`,
                            `<h3 class="title">Elemen &lt;html&gt;</h3>
                            <p class="mb-4">Hierarki elemen teratas dari halaman web adalah elemen &lt;html&gt;. Elemen ini digunakan untuk memberitahu browser bahwa ia merupakan sebuah berkas HTML sekaligus menjadi root dari halaman web. Seluruh elemen lain tentunya dituliskan di dalam elemen ini (child-element).</p>
                            <h3 class="title">Elemen &lt;head&gt;</h3>
                            <p class="mb-4">Elemen &lt;head&gt; berfungsi sebagai tempat disimpannya informasi dari dokumen HTML. Informasi dapat berupa elemen meta, style, favicon, atau link. Selain itu, kita bisa memberikan judul dari halaman web (tab browser). Berikut adalah beberapa contoh elemen yang biasanya diletakkan dalam elemen ini.</p>
                            <ul class="list-disc mb-4">
                                <li>&lt;title&gt;&nbsp;</li>
                                <li>&lt;style&gt;</li>
                                <li>&lt;base&gt;</li>
                                <li>&lt;link&gt;</li>
                                <li>&lt;meta&gt;</li>
                                <li>&lt;script&gt;</li>
                                <li>&lt;noscript&gt;</li>
                            </ul>`,
                            `<p class="mb-4">Pada HTML versi 4.01, elemen &lt;head&gt; wajib ada dalam sebuah berkas HTML. Berikut adalah contoh pembuatan elemen &lt;head&gt; beserta kontennya.</p>
                            <div class="flex justify-center my-4">
                                <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                    <div class="rounded-lg bg-black">
                                        <ol class="code">
                                            <li class="L0"><span class="tag">&lt;head&gt;</span></li>
                                            <li class="L1"><span class="pln">&nbsp; </span><span class="tag">&lt;meta</span> <span class="atn">charset</span><span class="pun">=</span><span class="atv">"utf-8"</span><span class="tag">&gt;</span></li>
                                            <li class="L2"><span class="pln">&nbsp; </span><span class="tag">&lt;title&gt;</span><span class="pln">Judul Halaman Anda</span><span class="tag">&lt;/title&gt;</span></li>
                                            <li class="L3"><span class="pln">&nbsp; </span><span class="tag">&lt;style&gt;</span></li>
                                            <li class="L4"><span class="pln">&nbsp; &nbsp; </span><span class="com">/* Kode CSS anda */</span></li>
                                            <li class="L5"><span class="pln">&nbsp; </span><span class="tag">&lt;/style&gt;</span></li>
                                            <li class="L6"><span class="tag">&lt;/head&gt;</span></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <p class="mb-4">Namun, penggunaan &lt;head&gt; dapat dihilangkan sejak HTML5. Jadi, struktur dasar berkas HTML menjadi seperti berikut.</p>
                            <div class="flex justify-center my-4">
                                <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                    <div class="rounded-lg bg-black">
                                        <ol class="code">
                                            <li class="L0"><span class="dec">&lt;!DOCTYPE html&gt;</span></li>
                                            <li class="L1"><span class="tag">&lt;html&gt;</span></li>
                                            <li class="L2"><span class="pln">&nbsp; </span><span class="tag">&lt;meta</span> <span class="atn">charset</span><span class="pun">=</span><span class="atv">"utf-8"</span><span class="tag">&gt;</span></li>
                                            <li class="L3"><span class="pln">&nbsp; </span><span class="tag">&lt;title&gt;</span><span class="pln">Judul Halaman</span><span class="tag">&lt;/title&gt;</span></li>
                                            <li class="L4"><span class="pln">&nbsp; </span><span class="tag">&lt;style&gt;</span></li>
                                            <li class="L5"><span class="pln">&nbsp; &nbsp; </span><span class="com">/* style */</span></li>
                                            <li class="L6"><span class="pln">&nbsp; </span><span class="tag">&lt;/style&gt;</span></li>
                                            <li class="L7"><span class="pln">&nbsp;</span></li>
                                            <li class="L8"><span class="pln">&nbsp; </span><span class="tag">&lt;body&gt;</span></li>
                                            <li class="L9"><span class="pln">&nbsp; &nbsp; </span><span class="tag">&lt;h1&gt;</span><span class="pln">Judul Utama</span><span class="tag">&lt;/h1&gt;</span></li>
                                            <li class="L0"><span class="pln">&nbsp; &nbsp; </span><span class="tag">&lt;p&gt;</span><span class="pln">Sebuah paragraf</span><span class="tag">&lt;/p&gt;</span></li>
                                            <li class="L1"><span class="pln">&nbsp; </span><span class="tag">&lt;/body&gt;</span></li>
                                            <li class="L2"><span class="tag">&lt;/html&gt;</span></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>`,
                            `<h3 dir="ltr" class="title">Elemen &lt;body&gt;</h3>
                            <p dir="ltr">Tahukah kamu, bagaimana konten dapat ditampilkan dan di mana peletakannya? Setiap konten atau elemen dalam elemen &lt;body&gt; akan ditampilkan dalam halaman web. Elemen apa pun, baik gambar, judul, daftar barang, paragraf, dsb., yang diletakkan dalam elemen ini akan muncul. Bahkan, teks yang tak dibungkus oleh elemen sekalipun.&nbsp;</p>
                            <p dir="ltr">Silakan tuliskan kode berikut, simpan dalam format HTML, dan jalankan pada browser.</p>
                            <div class="flex justify-center my-4">
                                <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                    <div class="rounded-lg bg-black">
                                        <ol class="code">
                                            <li class="L0"><span class="dec">&lt;!DOCTYPE html&gt;</span></li>
                                            <li class="L1"><span class="tag">&lt;html&gt;</span></li>
                                            <li class="L2"><span class="pln">&nbsp; </span><span class="tag">&lt;head&gt;</span></li>
                                            <li class="L3"><span class="pln">&nbsp; &nbsp; </span><span class="tag">&lt;title&gt;</span><span class="pln">Judul Dokumen HTML</span><span class="tag">&lt;/title&gt;</span></li>
                                            <li class="L4"><span class="pln">&nbsp; </span><span class="tag">&lt;/head&gt;</span></li>
                                            <li class="L5"><span class="pln">&nbsp; </span><span class="tag">&lt;body&gt;</span></li>
                                            <li class="L6"><span class="pln">&nbsp; &nbsp; </span><span class="tag">&lt;h1&gt;</span><span class="pln">Heading yang Diletakkan dalam Elemen Body</span><span class="tag">&lt;/h1&gt;</span></li>
                                            <li class="L7"><span class="pln">&nbsp; &nbsp; </span><span class="tag">&lt;p&gt;</span><span class="pln">Ini merupakan sebuah paragraf yang juga diletakkan pada elemen body. Konten ini dapat dilihat oleh pengguna pada jendela browser.</span><span class="tag">&lt;/p&gt;</span></li>
                                            <li class="L8"><span class="pln">&nbsp; </span><span class="tag">&lt;/body&gt;</span></li>
                                            <li class="L9"><span class="tag">&lt;/html&gt;</span></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>`,
                            `<p class="mb-4">Ini hasil dari code tersebut</p>
                            <p class="mb-4">
                                <div class="flex justify-center">
                                    <img src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:3734d4cee71ea05411752cd1b477885e20230614154717.jpeg' alt="html" class="mb-4 lg:w-1/2" />
                                </div>
                            </p>
                            <p class="mb-4">Seluruh konten yang dituliskan pada body akan ditampilkan. Namun, ada kode yang tidak akan ditampilkan. Kode atau fitur yang dimaksud adalah komentar. Jika ingin menuliskan keterangan tambahan pada struktur dokumen HTML, kita perlu menggunakan commenting tag. Ini dituliskan dengan simbol <span style="padding: 2px 4px; color: #c7254e; background-color: #f9f2f4;">&lt;!--</span> sebagai pembuka dan <span style="padding: 2px 4px; color: #c7254e; background-color: #f9f2f4;">--&gt;</span> sebagai penutupnya.</p>`,
                            `<p class="mb-4">Semua yang dituliskan di antara tag komentar tidak akan memberikan pengaruh apa pun, termasuk tampilan di jendela browser. Berikut adalah contoh implementasi dari tag komentar.</p>
                            <div class="flex justify-center my-4">
                                <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                    <div class="rounded-lg bg-black">
                                        <ol class="code">
                                            <li class="L0"><span class="com">&lt;!-- Ini merupakan sebuah komentar --&gt;</span></li>
                                            <li class="L1"><span class="com">&lt;!-- Ini merupakan</span></li>
                                            <li class="L2"><span class="com">&nbsp; sebuah komentar yang</span></li>
                                            <li class="L3"><span class="com"> terdiri lebih dari satu baris --&gt;</span></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <p class="mb-4">Komentar berguna untuk memberikan label dan mengorganisasi sebuah dokumen yang panjang, terlebih ketika bekerja secara tim.</p>`,
                            `<h3 class="title">Lorem Ipsum Generator</h3>
                            <p class="mb-4">Lorem ipsum adalah teks standar yang ditempatkan untuk mendemonstrasikan elemen grafis atau presentasi visual, seperti font, tipografi, dan tata letak. Tujuan penggunaan lorem ipsum sebagai berikut.</p>
                            <ol class="list-decimal">
                                <li>Sebagai pengisi sementara jika belum ada konten teks.</li>
                                <li>Jika ingin menunjukkan hasil website sementara yang mana audiens diharapkan lebih fokus kepada elemen desain yang dipresentasikan, bukan pada isinya (teks).</li>
                            </ol>
                            <p class="mb-4">Penggunaan lorem ipsum biasanya digunakan pada proses pengembangan (development).</p>`,
                            `<p class="mb-4">Berbagai cara untuk membuat teks lorem ipsum dijelaskan pada poin-poin berikut.</p>
                            <ol class="list-decimal">
                                <li>
                                    <strong>Menggunakan Microsoft Word</strong><br />Buat dokumen baru dan ketiklah kode berikut pada lembar kerja.<br /><br />
                                    <div class="flex justify-center my-4">
                                        <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                            <div class="rounded-lg bg-black">
                                                <ol class="code">
                                                    <li class="L0"><span class="pun">=</span><span class="pln">lorem</span><span class="pun">()</span></li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="mb-4"><br />Kemudian, tekan tombol enter pada keyboard. Teks lorem ipsum akan muncul secara otomatis. Kamu juga dapat mengatur jumlah teks yang muncul dengan cara ketik kode berikut.<br /><br /></p>
                                    <div class="flex justify-center my-4">
                                        <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                            <div class="rounded-lg bg-black">
                                                <ol class="code">
                                                    <li class="L0"><span class="pun">=</span><span class="pln">lorem</span><span class="pun">(</span><span class="str">"angka_paragraf"</span><span class="pun">,</span> <span class="str">"angka_kalimat_pada_setiap_paragraf"</span><span class="pun">)</span></li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <br />Contohnya, jika mengetik =lorem(3,4), teks lorem ipsum akan muncul sebanyak 3 paragraf dan masing-masing paragraf terdapat 4 kalimat.<br /><br />
                                    <div class="flex justify-center">
                                        <video
                                            class="fr-draggable fr-fvc fr-dvi w-1/2"
                                            autoplay="autoplay"
                                            loop="loop"
                                            muted="muted"
                                            width="300"
                                            height="150"
                                            src="https://raw.githubusercontent.com/dicodingacademy/a123-webdasar-labs/099-shared-files/shared-media/module-02/04-lorem-ipsum-in-ms-word.webm"
                                        ></video>
                                    </div>
                                </li>
                                <li>
                                    <strong>Generator Online</strong><br />Tersedia banyak situs generator lorem ipsum gratis, seperti <a href="https://id.lipsum.com/"><u>id.lipsum.com</u></a> dan <a href="https://loremipsum.io/"><u>loremipsum.io</u></a>.<br /><br />
                                    <div class="flex justify-center">
                                        <video
                                            class="fr-draggable fr-fvc fr-dvi w-1/2"
                                            autoplay="autoplay"
                                            loop="loop"
                                            muted="muted"
                                            width="300"
                                            height="150"
                                            src="https://raw.githubusercontent.com/dicodingacademy/a123-webdasar-labs/099-shared-files/shared-media/module-02/03-lipsum-com-example.webm"
                                        ></video>
                                    </div>
                                </li>
                            </ol>`,
                        ],
                    },
                ],
            },
            {
                title: 'Pendalaman HTML',
                bab: [
                    {
                        title: 'Pengantar Pendalaman HTML',
                        subbab: [
                            `<h1 class="title">Pengantar Pendalaman HTML</h1>
                            <p class="mb-4">Pada modul sebelumnya, kita telah mempelajari permukaan dari HTML. Pengetahuan tersebut sangat dibutuhkan sebagai fondasi untuk mempelajari materi selanjutnya. Tidak kalah penting juga, itu sangat dibutuhkan dalam membangun halaman web yang baik dan benar.</p>
                            <p class="mb-4">Selain mempelajari HTML, kita juga sudah berlatih dalam membangun halaman web sederhana, mulai dari tanpa struktur dasar dokumen HTML hingga mengidentifikasi dan menerapkan elemen-elemen yang sesuai dengan konten yang ditampilkan. Pada modul ini, kita akan menyelam lebih dalam dengan variasi elemen pada HTML. Harapannya, kita dapat memilih elemen yang sesuai dalam menampilkan konten, terutama ketika mengembangkan proyek latihan kita.</p>
                            <p class="mb-4">Beberapa hal yang akan kita pelajari sebagai berikut.</p>
                            <ul class="list-decimal">
                                <li class="mb-4">Variasi elemen seperti paragraf, heading, list, gambar, dan teks terformat.</li>
                                <li class="mb-4">Membangun halaman web dengan semantic HTML.</li>
                                <li class="mb-4">Mengelompokkan elemen dengan generic elemen.</li>
                                <li class="mb-4">Membuat tabel pada HTML.</li>
                                <li class="mb-4">Mengetahui berbagai macam elemen input untuk membuat formulir dalam halaman web.</li>
                            </ul>
                            <p>Pada akhir modul, kita akan melanjutkan pengembangan proyek Halaman Profil dengan variasi elemen yang telah dipelajari. Berikut adalah hasil akhir dari latihan modul ini.</p>
                            <div class="flex justify-center">
                                <img src="https://lh4.googleusercontent.com/xqaF3ej_LkuRBUTKphtBB9TZL_yr5HuHTM-VFhQ5S6-3DMPAn3aF8AmyQUtVc8Rhm2uU3MDz1MTCzM2Lgs_agZ3cM8YRjGA1nkrVdNAdPy3Q5qJxYWTlERHOIGSog8jEK6RmSH2mq1X5RqDtiKsz_90" alt="html" class="my-4 lg:w-1/2" />
                            </div>`,
                        ],
                    },
                    {
                        title: 'Paragraf',
                        subbab: [
                            `
                            <h2 class="title">Paragraf</h2>
                            <p>Paragraf adalah elemen paling mendasar dari sebuah dokumen teks. Pada HTML, kita bisa menunjukkan sebuah paragraf dengan menggunakan elemen &lt;p&gt;. Contohnya berikut.</p>
                            <div class="flex justify-center my-4">
                                <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                    <div class="rounded-lg bg-black">
                                        <ol class="code">
                                            <li>&lt;p&gt;</li>
                                            <p style="padding-left: 30px;">Kata Bandung berasal dari kata bendung atau bendungan karena terbendungnya sungai Citarum oleh lava Gunung Tangkuban Parahu yang lalu membentuk telaga...</p>
                                            <li>&lt;/p&gt;</li>
                                            <li>&lt;p&gt;</li>
                                            <p style="padding-left: 30px;">Berdasarkan filosofi Sunda, kata Bandung juga berasal dari kalimat Nga-Bandung-an Banda Indung, yang merupakan kalimat sakral dan luhur karena mengandung nilai ajaran Sunda. Nga-Bandung-an artinya menyaksikan atau bersaksi...</p>
                                            <li>&lt;/p&gt;</li>
                                        <ol>
                                    </div>
                                </div>
                            </div>
                            <p class="mb-4"><span class="fr-video fr-fvc fr-dvb fr-draggable">Ketika menggunakan elemen paragraf, browser akan menampilkannya dalam baris baru dan sedikit jarak (<em>space</em>) di bawah elemen. Dalam CSS, ini disebut sebagai margin. Singkatnya, ia merupakan bagian dari elemen yang mengatur jarak antar elemen. Margin akan kita bahas dan atur pada penerapan styling.</span></p>
                            <p class="mb-4">Elemen paragraf tidak melulu menampilkan teks. Ia dapat berisi elemen lain yang memiliki sifat inline, seperti elemen gambar, input, dan sebagainya. Anda akan menemukan bahasan elemen inline pada materi-materi berikutnya.</p>
                            <p class="mb-4">Pada modul sebelumnya, Anda sudah berlatih mengidentifikasi elemen pada Halaman Profil Bandung. Sebagai catatan, gunakanlah elemen paragraf untuk konten bertipe paragraf. Bagi teks yang bersifat sebagai judul, jangan gunakan elemen ini meskipun tidak menjadi error. Hal ini karena ada elemen lain yang lebih cocok untuk hal tersebut. Namun, tidak perlu risau. Kita akan membahas elemen lainnya secara lengkap pada materi berikutnya.</p>
                            <blockquote>
                            <p class="mb-4"><strong>Catatan:</strong><br />Pastikan kita selalu gunakan elemen HTML dalam menampilkan seluruh teks (konten) yang ada pada dokumen HTML. Teks yang ditampilkan tanpa dibungkus elemen disebut anonymous text.</p>
                            </blockquote>`,
                        ],
                    },
                    {
                        title: 'Heading',
                        subbab: [
                            `
                            <h2 class="title">Heading</h2>
                            <p class="my-4">Pada modul sebelumnya, kita sudah melihat contoh penggunaan heading yang diterapkan pada konten yang kita siapkan. Kita menggunakan &lt;h1&gt; dan &lt;h2&gt; dalam mengindikasi judul dan subjudul pada kontennya. Pada HTML, ada elemen &lt;h1&gt; hingga &lt;h6&gt; elemen heading yang dapat kita gunakan.</p>
                            <p class="my-4">Ketika kita menambahkan heading pada konten, ia merepresentasikan garis besar halaman pada sebuah browser. Alat bantu baca seperti <em>screen reader</em> membaca garis besar halaman untuk bantu memetakan dan mengarahkan pengguna selama menjelajahi halaman. Selain itu, heading juga merupakan elemen yang dicari oleh mesin pencarian, contohnya Google Search.</p>
                            <p class="my-4">Ini contoh penerapan heading empat level pada sebuah dokumen. Tiap level heading dituliskan dengan cara yang sama.</p>
                            <div class="flex justify-center">
                                <img src="https://d17ivq9b7rppb3.cloudfront.net/original/academy/20191203175534e2e2c35a984e223d39b72943d064e196.png" alt="html" class="my-4 lg:w-1/2" />
                            </div>
                            <p dir="ltr">Pada browser, standarnya heading akan ditampilkan dengan tulisan&nbsp;<strong>tebal</strong> (<em>bolded text</em>), dimulai dari h1 dengan ukuran teks paling besar kemudian berurutan sesuai dengan&nbsp;<em>level heading-</em>nya.</p>
                            <div class="flex justify-center">
                                <img src="https://d17ivq9b7rppb3.cloudfront.net/original/academy/20191203175711565dc6e641dc11a4a0005593d1a44727.png" alt="html" class="my-4 lg:w-1/2" />
                            </div>`,
                        ]
                    },
                    {
                        title: 'List',
                        subbab: [
                            `<h2 class="title">List</h2>
                            <p class="my-4">Sebagaimana yang sudah disebutkan pada pembahasan paragraf, tidak semua teks dibungkus oleh paragraf, salah satunya list. Kita pun terbiasa membuat list dalam kehidupan sehari-hari, baik membuat <em>to-do list</em> maupun daftar yang terstruktur sekalipun.&nbsp;</p>
                            <p class="my-4">Pada HTML terdapat tiga tipe list.</p>
                            <ol class="list-decimal mb-4">
                                <li><em>Unordered lists</em>: daftar yang ditampilkan tidak memiliki urutan.&nbsp;</li>
                                <li><em>Ordered lists</em>: daftar yang ditampilkan secara terurut.</li>
                                <li><em>Description lists</em>: daftar yang terbuat dari beberapa istilah diikuti dengan deskripsi dari istilah tersebut.</li>
                            </ol>`,
                            `<h3 class="title">Unordered List</h3>
                            <p class="my-4">Seperti namanya, unordered list merupakan daftar yang tidak mementingkan urutan. Standarnya, unordered list menampilkan bullet pada tiap item list-nya (tetapi kita bisa mengubahnya dengan styling).</p>
                            <p class="my-4">Untuk menetapkan konten sebagai unordered list kita gunakan &lt;ul&gt;&lt;/ul&gt; kemudian di dalam elemen tersebut kita gunakan tags &lt;li&gt;&lt;/li&gt; untuk menetapkan item pada list tersebut. Contoh penerapannya sebagai berikut.</p>
                            <p class="my-4"><iframe class="fr-draggable" title="Dicoding Sandpack" src="https://academy-sandpack.dicoding.dev/a123/92-list-sample?theme=dark" width="100%" height="600"></iframe></p>
                            <p class="my-4">Di antara tag elemen &lt;li&gt;, kita dapat mengisikan konten apa pun termasuk elemen HTML lain. Contohnya, kita dapat memasukkan sebuah <em>heading</em> atau paragraf pada item.</p>
                            <div class="prettyprint-wrapper">&nbsp;</div>
                            <div class="prettyprint-wrapper">
                            <ol class="linenums">
                            <li class="L0"><span class="tag">&lt;ul&gt;</span></li>
                            <li class="L1"><span class="pln">&nbsp;&nbsp;</span><span class="tag">&lt;li&gt;&lt;h1&gt;</span><span class="pln">Sebuah Heading sebagai item list</span><span class="tag">&lt;/h1&gt;&lt;/li&gt;</span></li>
                            <li class="L2"><span class="pln">&nbsp;&nbsp;</span><span class="tag">&lt;li&gt;&lt;h2&gt;</span><span class="pln">Sebuah Heading level 2 sebagai item list</span><span class="tag">&lt;/h2&gt;&lt;/li&gt;</span></li>
                            <li class="L3"><span class="pln">&nbsp; </span><span class="tag">&lt;li&gt;&lt;p&gt;</span><span class="pln">Sebuah paragraf sebagai item list</span><span class="tag">&lt;/p&gt;&lt;/li&gt;</span></li>
                            <li class="L4"><span class="tag">&lt;/ul&gt;</span></li>
                            </ol>
                            </div>
                            <p class="my-4">Sebagaimana kita sudah ketahui, list item akan menampilkan seperti format heading.</p>
                            <div class="flex justify-center">
                                <img src='https://d17ivq9b7rppb3.cloudfront.net/original/academy/20191203180246d0af3ff194fa3c9137548f850f613dc2.jpeg' alt="html" class="mb-4 lg:w-1/2" />
                            </div>
                            <p class="my-4">Kita juga bisa menambahkan elemen &lt;ul&gt; lagi dalam <em>list item</em> untuk membuat <em>nested list</em>.</p>
                            <p class="my-4"><iframe class="fr-draggable" title="Dicoding Sandpack" src="https://academy-sandpack.dicoding.dev/a123/07-list-sample?theme=dark" width="100%" height="600"></iframe></p>
                            <p class="my-4">&nbsp;</p>`,
                            `<h3 class="title">Ordered List</h3>
                            <p class="my-4"><em>Ordered list</em> digunakan untuk membuat list yang mementingkan urutan. Contohnya, membuat daftar instruksi langkah demi langkah sehingga dibutuhkan urutan yang sesuai. Ordered list bekerja seperti unordered list, tetapi perbedaannya adalah pada tiap item menampilkan angka bukan sebuah <em>bullet</em>. Angka yang ditampilkan, otomatis berurut tiap item-nya sehingga kita tidak perlu menuliskan secara kasar urutan nomornya. Hal ini tentu mempermudah kita untuk mengorganisasi tiap itemnya.</p>
                            <p class="my-4">Untuk menetapkan konten sebagai ordered list kita gunakan &lt;ol&gt;&lt;/ol&gt;. Sama seperti unordered list, tiap item dalam list ditetapkan dengan menggunakan tags &lt;li&gt;&lt;/li&gt;.</p>
                            <p class="my-4"><iframe class="fr-draggable" title="Dicoding Sandpack" src="https://academy-sandpack.dicoding.dev/a123/08-list-sample?theme=dark" width="100%" height="600"></iframe></p>`,
                            `<p class="my-4">Sebagaimana unordered list, di antara tag elemen &lt;li&gt;, kita dapat mengisikan konten apa pun termasuk elemen HTML lain.</p>
                            <p class="my-4">Pada ordered list, tipe urutan angkanya dapat kita atur melalui sebuah atribut <em>type</em>. Contohnya, selain nomor, urutan angka dapat diganti dengan alfabet ataupun angka romawi.</p>
                            <div class="flex">
                                <div class="flex justify-center my-4 basis-1/2">
                                    <div class="px-8 py-4 bg-black border border-gray-800 rounded-lg w-3/4 max-h-[28rem] h-full overflow-auto">
                                        <div class="rounded-lg bg-black">
                                            <ol class="code">
                                                <li class="L0"><span class="tag">&lt;ol</span> <span class="atn">type</span><span class="pun">=</span><span class="atv">"I"</span><span class="tag">&gt;</span></li>
                                                <li class="L1"><span class="pln">&nbsp; </span><span class="tag">&lt;li&gt;</span><span class="pln">Langkah pertama</span><span class="tag">&lt;/li&gt;</span></li>
                                                <li class="L2"><span class="pln">&nbsp; </span><span class="tag">&lt;li&gt;</span><span class="pln">Langkah kedua</span><span class="tag">&lt;/li&gt;</span></li>
                                                <li class="L3"><span class="pln">&nbsp; </span><span class="tag">&lt;li&gt;</span><span class="pln">Langkah ketiga</span><span class="tag">&lt;/li&gt;</span></li>
                                                <li class="L4"><span class="pln">&nbsp; </span><span class="tag">&lt;li&gt;</span><span class="pln">Langkah selanjutnya</span><span class="tag">&lt;/li&gt;</span></li>
                                                <li class="L5"><span class="tag">&lt;/ol&gt;</span></li>
                                                <li class="L6"><span class="pln">&nbsp;</span></li>
                                                <li class="L7"><span class="tag">&lt;ol</span> <span class="atn">type</span><span class="pun">=</span><span class="atv">"A"</span><span class="tag">&gt;</span></li>
                                                <li class="L8"><span class="pln">&nbsp; </span><span class="tag">&lt;li&gt;</span><span class="pln">Langkah pertama</span><span class="tag">&lt;/li&gt;</span></li>
                                                <li class="L9"><span class="pln">&nbsp; </span><span class="tag">&lt;li&gt;</span><span class="pln">Langkah kedua</span><span class="tag">&lt;/li&gt;</span></li>
                                                <li class="L0"><span class="pln">&nbsp; </span><span class="tag">&lt;li&gt;</span><span class="pln">Langkah ketiga</span><span class="tag">&lt;/li&gt;</span></li>
                                                <li class="L1"><span class="pln">&nbsp; </span><span class="tag">&lt;li&gt;</span><span class="pln">Langkah selanjutnya</span><span class="tag">&lt;/li&gt;</span></li>
                                                <li class="L2"><span class="tag">&lt;/ol&gt;</span></li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-center basis-1/2">
                                    <img src='hasil.png' alt="html" class="mb-4 lg:w-1/2" />
                                </div>
                            </div>`,
                            `<p class="my-4">Berikut adalah nilai-nilai yang dapat digunakan pada atribut type pada elemen &lt;ol&gt;.</p>
                            <div class="flex justify-center mb-4">
                                <table class="table text-left text-gray-400">
                                    <thead class="uppercase bg-gray-700 text-gray-400">
                                        <tr>
                                            <th style="text-align: center; width: 109.767px;" class="px-6 py-3">
                                                <p dir="ltr"><strong>Nilai</strong></p>
                                            </th>
                                            <th style="text-align: center; width: 544.733px;" class="px-6 py-3">
                                                <p dir="ltr"><strong>Deskripsi</strong></p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b bg-gray-800 border-gray-700">
                                            <td style="width: 109.767px;" class="px-6 py-4">
                                                <p dir="ltr">1</p>
                                            </td>
                                            <td style="width: 544.733px;" class="px-6 py-4">
                                                <p dir="ltr">Menggunakan angka dalam urutan item (default)</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 109.767px;" class="px-6 py-4">
                                                <p dir="ltr">a</p>
                                            </td>
                                            <td style="width: 544.733px;" class="px-6 py-4">
                                                <p dir="ltr">Menggunakan huruf kecil dalam urutan item.</p>
                                            </td>
                                        </tr>
                                        <tr class="border-b bg-gray-800 border-gray-700">
                                            <td style="width: 109.767px;" class="px-6 py-4">
                                                <p dir="ltr">A</p>
                                            </td>
                                            <td style="width: 544.733px;" class="px-6 py-4">
                                                <p dir="ltr">Menggunakan huruf besar dalam urutan item</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 109.767px;" class="px-6 py-4">
                                                <p dir="ltr">i</p>
                                            </td>
                                            <td style="width: 544.733px;" class="px-6 py-4">
                                                <p dir="ltr">Menggunakan huruf romawi kecil dalam urutan item.</p>
                                            </td>
                                        </tr>
                                        <tr class="border-b bg-gray-800 border-gray-700">
                                            <td style="width: 109.767px;" class="px-6 py-4">
                                                <p dir="ltr">I</p>
                                            </td>
                                            <td style="width: 544.733px;" class="px-6 py-4">
                                                <p dir="ltr">Menggunakan huruf romawi besar dalam urutan item</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="my-4">Selain tipe angka pada urutan, kita juga bisa menetapkan nilai awal pada sebuah <em>ordered list</em> dengan menggunakan atribut <em>start</em><strong>.&nbsp;</strong>Contohnya, jika kita ingin memulai sebuah list dari angka 7, kita tetapkan atribut start dengan nilai 7 pada elemen &lt;ol&gt;.</p>
                            <p class="my-4"><iframe class="fr-draggable" title="Dicoding Sandpack" src="https://academy-sandpack.dicoding.dev/a123/09-list-sample?theme=dark" width="100%" height="600"></iframe></p>`,
                            `<p class="my-4">Secara default, urutan list diawali dengan urutan paling rendah. Namun, kita dapat menambahkan atribut reversed pada elemen &lt;ol&gt; untuk membuat urutan dalam sebuah list terbalik. Atribut ini berbeda dengan atribut yang lain (yang sudah dibahas sebelumnya), atribut ini tidak memerlukan sebuah nilai ketika menggunakannya. Atribut ini hanya menandakan sebuah list untuk membalikkan urutan angka pada tiap item-nya. Berikut contoh penggunaannya.</p>
                            <p class="my-4"><iframe class="fr-draggable" title="Dicoding Sandpack" src="https://academy-sandpack.dicoding.dev/a123/10-list-sample?theme=dark" width="100%" height="600"></iframe></p>
                            <p class="my-4">&nbsp;</p>
                            <p class="my-4">&nbsp;</p>`,
                        ]
                    },
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
                ],
            },
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
    }
];

export default materi;
