import html from "../../../public/html.png";
import RoundedImage from "@/components/RoundedImage";
import Submodule from "@/components/Submodule";

const submodules = [
    {title: 'Persiapan Belajar'},
    {title: 'Pendahuluan'},
    {title: 'Pengantar HTML'},
    {title: 'Pendalaman HTML'},
];

export default () => <>
    <div className="m-4">
        <div className="bg-[rgb(24,26,27)] p-4 mb-12 rounded-lg">
            <div className="w-1/4">
                <RoundedImage image={html} alt="html" />
            </div>
            <div className="text-[rgb(196,191,183)] my-4 font-bold uppercase text-2xl">html</div>
            <div className="text-[rgb(153,144,131)]">Dalam module ini kita akan mempelajari materi - materi dasar seputar pemrograman website, struktur pembentuk website, proses pembuatan dokumen HTML, struktur dasar HTML dan elemen - elemen HTML sepeti paragraf, heading, list, image, semantic HTML, generic HTML dan berbagai atribut didalamnya..</div>
        </div>
        <div>
            {submodules.map(({title}, index) => <Submodule key={`submodule${index}`} title={title} />)}
        </div>
    </div>
</>;
