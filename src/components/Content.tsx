'use client'

import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useRef } from "react";
import { MateriContext } from "@/data/MateriProvider";

export default () => {
    const searchParams = useSearchParams();
    const indexSubmodule = searchParams.get('subModule');
    const indexBab = searchParams.get('bab');
    const { materi } = useContext(MateriContext);
    const subbab = materi?.submodules[indexSubmodule!].bab[indexBab!].subbab;
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) contentRef.current.innerHTML = subbab;
    }, [contentRef, subbab]);

    return (
        <>
            <div className="mt-40 mb-24" ref={contentRef}>
            </div>
        </>
    );
}
