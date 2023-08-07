import Image from "next/image"
import loading from "../../public/loading.svg";

export default function Loading() {
    return (
        <>
            <div className="hidden absolute bg-[rgb(12,14,15)] inset-0 justify-center">
                <Image src={loading} alt="loading"/>
            </div>
        </>
    );
}
