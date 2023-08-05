'use client'

import Image from "next/image";
import arrowDown from "../../public/arrow-down.svg";
import { useRouter } from "next/navigation";

export default () => {
    const router = useRouter();
    
    return (
        <>
            <div className="flex gap-2 items-center mb-4 cursor-pointer" onClick={() => router.back()}>
                <div className="inline-block p-2 bg-[rgb(27,29,30)] rounded-[50%] rotate-90">
                    <Image src={arrowDown} alt="Arrow Down" />
                </div>
                <div className="inline-block">Kembali</div>
            </div>
        </>
    );
}
