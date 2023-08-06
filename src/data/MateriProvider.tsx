'use client'

import { ReactNode, createContext, useState } from "react";

export const MateriContext = createContext<any>({});
export default ({ children } : {children: ReactNode}) => {
    const [materi, setMateri] = useState<object | null>(JSON.parse(localStorage.getItem('materi') as string));
    const newSetMateri = (materi: object) => {
        setMateri(materi);
        localStorage.setItem('materi', JSON.stringify(materi));
    }

    return (
        <>
            <MateriContext.Provider value={{materi, newSetMateri}}>{children}</MateriContext.Provider>
        </>
    );
}
