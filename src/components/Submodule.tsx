'use client'

import Image from "next/image";
import arrowDown from "../../public/arrow-down.svg";
import lesson from "../../public/lesson.svg";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Bab } from "@/data/materi";

export default function Submodule({indexSubmodule, title, bab} : {indexSubmodule: number, title: string, bab: Array<Bab>}) {
    const materiRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const subModule = materiRef.current?.children[0];
        const handleClick = () => {
            const bab = materiRef.current?.children[1] as HTMLElement;

            if (bab?.style.maxHeight) {
                bab.style.maxHeight = '';
            } else {
                bab.style.maxHeight = bab.scrollHeight + 'px';
            }

            bab?.classList.toggle('active');
        }

        if (subModule) subModule.addEventListener('click', handleClick);

        return () => {
            if (subModule) subModule.removeEventListener('click', handleClick);
        }
    }, [materiRef]);

    return (
        <>
            <div className="materi" ref={materiRef}>
                <div className="sub-module">
                    <div className="text-[rgb(196,191,183)] font-bold">{title}</div>
                    <div><Image src={arrowDown} alt="Arrow Down" /></div>
                </div>
                <div className="bab">
                    {bab.map(({title}, index) => <Link href={`submodule?subModule=${indexSubmodule}&bab=${index}`} key={`bab${index}`}>
                            <div className="flex items-center bg-[rgb(27,29,30)] p-4 rounded-lg mb-4 cursor-pointer">
                                <div>
                                    <Image src={lesson} alt="Lesson" className="w-3/4"/>
                                </div>
                                <div>
                                    <div className="mb-2 text-xs text-[rgb(153,144,131)] font-bold">Pelajaran</div>
                                    <div className="text-[rgb(196,191,183)]">{title}</div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}
