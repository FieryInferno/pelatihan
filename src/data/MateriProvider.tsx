'use client'

import { ReactNode, createContext, useState } from "react";

export const MateriContext = createContext<any>({});
export default ({ children } : {children: ReactNode}) => {
    const [materi, setMateri] = useState<string | null>(null);
    
    return (
        <>
            <MateriContext.Provider value={{materi, setMateri}}>{children}</MateriContext.Provider>
        </>
    );
}
