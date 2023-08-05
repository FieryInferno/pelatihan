import { StaticImageData } from "next/image";
import RoundedImage from "./RoundedImage";
import Link from "next/link";

export default ({image, title} : {image: StaticImageData, title: string}) => <>
    <Link href={`materi?materi=${title}`}>
        <div className="p-4 bg-[rgb(27,29,30)] flex flex-col justify-center items-center border border-[rgb(57,61,64)] shadow-[rgba(82,98,119,0.5)_0_4px_0] transition-all duration-300 hover:-translate-y-2 h-[200px] rounded-lg">
            <div className="w-1/2 mb-4">
                <RoundedImage image={image} alt="html" />
            </div>
            <div className="font-bold uppercase">{title}</div>
        </div>
    </Link>
</>;
