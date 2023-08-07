'use client'

import { useContext } from "react";
import RoundedImage from "@/components/RoundedImage";
import { MateriContext } from "@/data/MateriProvider";

export default function ModuleDescription() {
    const { materi } = useContext(MateriContext);

    return (
        <>
            <div className="bg-[rgb(27,29,30)] p-4 mb-12 rounded-lg lg:flex lg:gap-4">
                <div className="w-1/4 lg:w-2/5 lg:mt-4">
                    <RoundedImage image={materi?.image} alt="html" />
                </div>
                <div>
                    <div className="text-[rgb(196,191,183)] my-4 font-bold uppercase text-2xl">{materi?.title}</div>
                    <div className="text-[rgb(153,144,131)]">{materi?.description}</div>
                </div>
            </div>
        </>
    );
}
