'use client'

import { MateriContext } from "@/data/MateriProvider";
import { useContext } from "react";
import Submodule from "./Submodule";

export default () => {
    const {materi} = useContext(MateriContext);

    return (
        materi?.submodules ? <>{materi?.submodules.map((submodule: { title: string; bab: string[]; }, index: number) => <Submodule key={`submodule${index}`} {...submodule} />)}</> : ''
    );
}
