import Image, { StaticImageData } from "next/image";

export default ({image, title} : {image: StaticImageData, title: string}) => <>
    <div className="p-4 bg-[rgb(27,29,30)] flex flex-col justify-center items-center cursor-pointer border border-[rgb(57,61,64)] shadow-[rgba(82,98,119,0.5)_0_4px_0] transition-all duration-300 hover:-translate-y-2 h-[200px]">
        <div className="w-1/2 mb-4">
            <Image src={image} alt="HTML" className="rounded-full"/>
        </div>
        <div className="font-bold uppercase">{title}</div>
    </div>
</>;
