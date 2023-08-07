'use client'

import { useContext } from "react";
import { ContentContext } from "@/data/ContentProvider";
import { useSearchParams } from "next/navigation";
import { MateriContext } from "./MateriProvider";

export default () => {
    const { index, setIndex } = useContext(ContentContext);
    const searchParams = useSearchParams();
    const indexSubmodule = searchParams.get('subModule');
    const indexBab = searchParams.get('bab');
    const { materi } = useContext(MateriContext);
    const bab = materi?.submodules[indexSubmodule!].bab[indexBab!];

    return { index, setIndex, bab };
}
