'use client'

import Image from "next/image";
import close from "../../public/close.svg";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import useContent from "@/data/useContent";

export default () => {
    const router = useRouter();
    const sliderRef = useRef<HTMLDivElement>(null);
    const {index, bab} = useContent();
    const length = bab?.subbab.length;
    const newIndex = index + 1;

    useEffect(() => {
        if (newIndex >= 2 && sliderRef.current) sliderRef.current.style.left = newIndex / length * 98 + '%';
    }, [index, sliderRef]);

    return (
        <>
            <div className="fixed bg-[rgb(15,18,20)] inset-x-0 top-0 px-4 pt-16 pb-12">
                <div className="text-[rgb(157,146,132)] flex items-center gap-2">
                    <div className="cursor-pointer" onClick={() => router.back()}>
                        <Image src={close} alt="close" />
                    </div>
                    <div>{bab?.title}</div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="bg-green-500 basis-10/12 rounded-2xl h-2 relative">
                        <div className="w-2 h-2 top-1/2 bg-white rounded-[50%] absolute -translate-y-1/2 left-0 transition-all duration-300" ref={sliderRef}></div>
                    </div>
                    <div>{newIndex} / {length}</div>
                </div>
            </div>
        </>
    );
}
