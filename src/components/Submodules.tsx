'use client'

import { MateriContext } from "@/data/MateriProvider";
import { useContext } from "react";
import Submodule from "./Submodule";
import { Bab } from "@/data/materi";

export default () => {
    const {materi} = useContext(MateriContext);

    return (
        materi?.submodules ? <>{materi?.submodules.map((submodule: { title: string; bab: Array<Bab>; }, index: number) => <Submodule key={`submodule${index}`} indexSubmodule={index} {...submodule} />)}</> : ''
    );
}
