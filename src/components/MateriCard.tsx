'use client'

import { StaticImageData } from "next/image";
import RoundedImage from "./RoundedImage";
import { useContext } from "react";
import { MateriContext } from "@/data/MateriProvider";
import { useRouter } from "next/navigation";

export default function MateriCard(materi : {image: StaticImageData, title: string, shadowColor: string}) {
    const { newSetMateri } = useContext(MateriContext);
    const router = useRouter();

    return (
        <>
            <div onClick={() => {
                newSetMateri(materi);
                router.push('materi');
            }} className={`cursor-pointer lg:max-w-[11rem] lg:w-44 hover:-translate-y-2 transition-all duration-300 rounded-lg`} style={{'boxShadow': `-1px 12px 29px 5px ${materi.shadowColor}`}}>
                <div className="p-4 bg-[rgb(27,29,30)] flex flex-col justify-center items-center border border-[rgb(57,61,64)] shadow-[rgba(82,98,119,0.5)_0_4px_0] h-[200px] rounded-lg">
                    <div className="w-1/2 mb-4">
                        <RoundedImage image={materi.image} alt="html" />
                    </div>
                    <div className="font-bold uppercase">{materi.title}</div>
                </div>
            </div>
        </>
    );
}
