import Image, { StaticImageData } from "next/image";

export default function RoundedImage({image, alt} : {image: StaticImageData, alt: string}) {
    return (
        <>
            <Image src={image} alt={alt} className="rounded-full"/>
        </>
    );
}
