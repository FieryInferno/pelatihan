import htmlImage from "../../public/html.png";
import css from "../../public/css.webp";
import javascript from "../../public/javascript.png";

export interface Bab {
    title: string;
    subbab: Array<string>;
}

export default [{
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
                            <img
                                src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:ac5bc58f36846832d1917ccd72fdb00a20221228185950.png'
                                alt="html"
                                width={100}
                                height={100}
                                class="mb-4"
                            />
                        </div>
                        <p class="mb-4">Salah satu produk milik Jetbrains yang berfokus pada pengembangan web seperti HTML, CSS, dan JavaScript. Berbagai framework JavaScript juga didukung, seperti React, Vue, Angular, dsb. IDE ini tidaklah gratis. Namun, IDE ini dapat diperoleh secara percuma dengan memanfaatkan Student License jika Anda seorang pelajar, mahasiswa, atau dosen. Silakan simak selengkapnya pada jetbrains.com/webstorm.</p>
                    `,
                    `<h1 class="text-2xl mb-4 font-bold">Visual Studio Code</h1>
                        <div class="flex justify-center">
                            <img
                                src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:91f04139a6d06cbf401bb52e74cc2b5b20221228190029.png'
                                alt="html"
                                width={100}
                                height={100}
                                class="mb-4"
                            />
                        </div>
                        <p class="mb-4">Visual Studio Code merupakan sebuah text editor yang dikembangkan oleh Microsoft. Code editor ini memiliki banyak fitur seperti debugging, version control integration, syntax highlighting, code search, code completion, code snippets, code refactoring, dan yang tak kalah penting adalah extensions/plugins. Extension dapat memperkaya fitur code editor sehingga dapat memudahkan penulisan kode. Visual Studio Code tersedia untuk sistem operasi Windows, Mac, dan Linux. Selain itu, tentunya code editor ini dapat kita gunakan secara gratis. Silakan kunjungi pada code.visualstudio.com.</p>
                    `,
                    `<h1 class="text-2xl mb-4 font-bold">Brackets</h1>
                        <div class="flex justify-center">
                            <img
                                src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:f0abc93421cb7aa50c41d8ebaa1a8c3a20221228190556.png'
                                alt="html"
                                width={100}
                                height={100}
                                class="mb-4"
                            />
                        </div>
                        <p class="mb-4">Brackets merupakan text editor modern yang ringan dan cukup powerful untuk digunakan. Pada brackets terdapat fitur live preview sehingga Anda dapat melihat perubahan yang dilakukan tanpa harus reload browser. Brackets juga merupakan project open-source yang mendapat banyak dukungan dari para pelaku komunitas aktif. Untuk mengunduhnya, silakan kunjungi brackets.io.</p>
                    `,
                    `<h1 class="text-2xl mb-4 font-bold">Web Browser</h1>
                        <p class="mb-4">Dalam mengakses halaman web, user akan membutuhkan web browser. Developer pun memerlukannya untuk melihat hasil website yang dikembangkan. Berikut beberapa web browser dari berbagai vendor yang dapat digunakan.</p>
                    `,
                    `<h1 class="text-2xl mb-4 font-bold">Mozilla Firefox</h1>
                        <div class="flex justify-center">
                            <img
                                src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:a57d2b9a4121a85e497b0e3d22601be620221228192003.png'
                                alt="html"
                                width={100}
                                height={100}
                                class="mb-4"
                            />
                        </div>
                        <p class="mb-4">Firefox merupakan web browser usungan Mozilla. Browser ini memiliki keunggulan pada kesehatan internet dan menjaga privasi pengguna. Firefox juga dilengkapi berbagai fitur untuk meningkatkan produktivitas pengguna seperti Picture-in-Picture, sinkronisasi dengan perangkat mobile, tangkap gambar layar, dsb. Silakan simak pada mozilla.org/firefox/new.</p>
                    `,
                    `<h1 class="text-2xl mb-4 font-bold">Google Chrome</h1>
                        <div class="flex justify-center">
                            <img
                                src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:244511dfc97709d8fa46707c25e605da20221228192626.png'
                                alt="html"
                                width={100}
                                height={100}
                                class="mb-4"
                            />
                        </div>
                        <p class="mb-4">Google Chrome memiliki bermacam-macam fitur terutama dalam membantu web developer melakukan proses pengembangan website. Alat tersebut dinamakan dengan DevTools. Dengan DevTools, developer dapat mengubah halaman website melalui browser secara langsung dan cepat tanpa mengubah kode yang dituliskan. Selain itu, kita dapat menganalisis dengan mudah jika ada kesalahan atau bug yang terjadi. Silakan kunjungi halaman pada google.com/chrome.</p>
                    `,
                ],
            },
            // {
            //     title: 'Mekanisme Belajar',
            //     subbab: [
            //         <>
            //             <h1 class="text-2xl mb-4 font-bold">Peralatan yang Dibutuhkan</h1>
            //             <p class="mb-4">Sebelum memulai pada pelajaran pemrograman, ada 2 hal yang harus kita siapkan terlebih dahulu. Yaitu Code Editor atau IDE dan Browser</p>
            //         </>,
            //         <>
            //             <h1 class="text-2xl mb-4 font-bold">Code Editor atau IDE</h1>
            //             <p class="mb-4">Dalam mengembangkan aplikasi, baik website maupun platform lainnya, sudah pasti developer akan menuliskan kode-kode dalam bentuk HTML, CSS, maupun JavaScript. Semakin besar aplikasi maka semakin banyak kode yang akan dituliskan. Oleh karena itu, kita membutuhkan Code Editor atau Integrated Development Environment (IDE).</p>
            //             <p class="mb-4">Sebenarnya, beberapa Sistem Operasi sudah menyediakan text editor usungannya masing-masing. Contohnya, Windows OS memiliki Notepad, Linux OS memiliki Text Editors, dan Mac OS memiliki TextEdit. Ketiga aplikasi tersebut dapat digunakan untuk menuliskan kode dalam pembuatan aplikasi website. Namun, tidak disarankan untuk menggunakan text editor tersebut karena tidak kaya akan fitur-fitur seperti IDE yang dapat mempercepat proses pengembangan web.</p>
            //         </>,
            //         <>
            //             <h1 class="text-2xl mb-4 font-bold">WebStorm (Jetbrains)</h1>
            //             <div class="flex justify-center">
            //                 <img
            //                     src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:ac5bc58f36846832d1917ccd72fdb00a20221228185950.png'
            //                     alt="html"
            //                     width={100}
            //                     height={100}
            //                     class="mb-4"
            //                 />
            //             </div>
            //             <p class="mb-4">Salah satu produk milik Jetbrains yang berfokus pada pengembangan web seperti HTML, CSS, dan JavaScript. Berbagai framework JavaScript juga didukung, seperti React, Vue, Angular, dsb. IDE ini tidaklah gratis. Namun, IDE ini dapat diperoleh secara percuma dengan memanfaatkan Student License jika Anda seorang pelajar, mahasiswa, atau dosen. Silakan simak selengkapnya pada jetbrains.com/webstorm.</p>
            //         </>,
            //         <>
            //             <h1 class="text-2xl mb-4 font-bold">Visual Studio Code</h1>
            //             <div class="flex justify-center">
            //                 <img
            //                     src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:91f04139a6d06cbf401bb52e74cc2b5b20221228190029.png'
            //                     alt="html"
            //                     width={100}
            //                     height={100}
            //                     class="mb-4"
            //                 />
            //             </div>
            //             <p class="mb-4">Visual Studio Code merupakan sebuah text editor yang dikembangkan oleh Microsoft. Code editor ini memiliki banyak fitur seperti debugging, version control integration, syntax highlighting, code search, code completion, code snippets, code refactoring, dan yang tak kalah penting adalah extensions/plugins. Extension dapat memperkaya fitur code editor sehingga dapat memudahkan penulisan kode. Visual Studio Code tersedia untuk sistem operasi Windows, Mac, dan Linux. Selain itu, tentunya code editor ini dapat kita gunakan secara gratis. Silakan kunjungi pada code.visualstudio.com.</p>
            //         </>,
            //         <>
            //             <h1 class="text-2xl mb-4 font-bold">Brackets</h1>
            //             <div class="flex justify-center">
            //                 <img
            //                     src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:f0abc93421cb7aa50c41d8ebaa1a8c3a20221228190556.png'
            //                     alt="html"
            //                     width={100}
            //                     height={100}
            //                     class="mb-4"
            //                 />
            //             </div>
            //             <p class="mb-4">Brackets merupakan text editor modern yang ringan dan cukup powerful untuk digunakan. Pada brackets terdapat fitur live preview sehingga Anda dapat melihat perubahan yang dilakukan tanpa harus reload browser. Brackets juga merupakan project open-source yang mendapat banyak dukungan dari para pelaku komunitas aktif. Untuk mengunduhnya, silakan kunjungi brackets.io.</p>
            //         </>,
            //         <>
            //             <h1 class="text-2xl mb-4 font-bold">Web Browser</h1>
            //             <p class="mb-4">Dalam mengakses halaman web, user akan membutuhkan web browser. Developer pun memerlukannya untuk melihat hasil website yang dikembangkan. Berikut beberapa web browser dari berbagai vendor yang dapat digunakan.</p>
            //         </>,
            //         <>
            //             <h1 class="text-2xl mb-4 font-bold">Mozilla Firefox</h1>
            //             <div class="flex justify-center">
            //                 <img
            //                     src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:a57d2b9a4121a85e497b0e3d22601be620221228192003.png'
            //                     alt="html"
            //                     width={100}
            //                     height={100}
            //                     class="mb-4"
            //                 />
            //             </div>
            //             <p class="mb-4">Firefox merupakan web browser usungan Mozilla. Browser ini memiliki keunggulan pada kesehatan internet dan menjaga privasi pengguna. Firefox juga dilengkapi berbagai fitur untuk meningkatkan produktivitas pengguna seperti Picture-in-Picture, sinkronisasi dengan perangkat mobile, tangkap gambar layar, dsb. Silakan simak pada mozilla.org/firefox/new.</p>
            //         </>,
            //         <>
            //             <h1 class="text-2xl mb-4 font-bold">Google Chrome</h1>
            //             <div class="flex justify-center">
            //                 <img
            //                     src='https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:244511dfc97709d8fa46707c25e605da20221228192626.png'
            //                     alt="html"
            //                     width={100}
            //                     height={100}
            //                     class="mb-4"
            //                 />
            //             </div>
            //             <p class="mb-4">Google Chrome memiliki bermacam-macam fitur terutama dalam membantu web developer melakukan proses pengembangan website. Alat tersebut dinamakan dengan DevTools. Dengan DevTools, developer dapat mengubah halaman website melalui browser secara langsung dan cepat tanpa mengubah kode yang dituliskan. Selain itu, kita dapat menganalisis dengan mudah jika ada kesalahan atau bug yang terjadi. Silakan kunjungi halaman pada google.com/chrome.</p>
            //         </>,
            //     ],
            // },
            // 'Mekanisme Belajar',
            // 'Forum Diskusi',
            // 'Materi yang akan Dipelajari',
            // 'Daftar Referensi',
        ]},
        {title: 'Pendahuluan', bab: [
            // 'Pengantar Web Programming',
            // 'Website dan Halaman Web',
            // 'Anatomi Website',
        ]},
        {title: 'Pengantar HTML', bab: [
            // 'Pengantar HTML',
            // 'Membangun Halaman Web Pertama (Halaman Profil)',
            // 'Identifikasi Elemen pada Halaman Pertama',
            // 'Anatomi Elemen HTML',
            // 'Attribute di Elemen HTML',
            // 'Anatomi Dokumen HTML',
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
}, {title: 'css', image: css}, {title: 'javascript', image: javascript}];
