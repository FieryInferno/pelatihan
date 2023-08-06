'use client'

import { ReactNode, createContext, useState, useEffect } from "react";

export const MateriContext = createContext<any>({});
export default ({ children } : {children: ReactNode}) => {
    const [materi, setMateri] = useState<object | null>(null);
    const newSetMateri = (materi: object) => {
        setMateri(materi);
        localStorage.setItem('materi', JSON.stringify(materi));
    }

    useEffect(() => {
        const storedMateri = localStorage.getItem('materi');

        if (storedMateri) setMateri(JSON.parse(storedMateri));
    }, []);

    return (
        <>
            <MateriContext.Provider value={{materi, newSetMateri}}>{children}</MateriContext.Provider>
        </>
    );
}
