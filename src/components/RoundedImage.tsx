import Image, { StaticImageData } from "next/image";

export default ({image, alt} : {image: StaticImageData, alt: string}) => <>
    <Image src={image} alt={alt} className="rounded-full"/>
</>;
