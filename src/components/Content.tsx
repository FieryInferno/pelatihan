'use client'

import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useRef } from "react";
import { MateriContext } from "@/data/MateriProvider";
import { ContentContext } from "@/data/ContentProvider";

export default function Content() {
    const searchParams = useSearchParams();
    const indexSubmodule = searchParams.get('subModule');
    const indexBab = searchParams.get('bab');
    const { materi } = useContext(MateriContext);
    const { index } = useContext(ContentContext);
    const subbab = materi?.submodules[indexSubmodule!].bab[indexBab!].subbab[index];
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) contentRef.current.innerHTML = subbab;
        // if (contentRef.current) contentRef.current.innerHTML = ``;
    }, [contentRef, subbab]);

    return <div className="my-40" ref={contentRef}></div>;
}
