'use client'

import { ReactNode, createContext, useState } from "react";

interface Content {
    index: number;
    setIndex: Function;
}

export const ContentContext = createContext<Content>({index: 0, setIndex: () => {}});
export default function ContentProvider({children} : {children: ReactNode}) {
    const [index, setIndex] = useState(0);
    return <ContentContext.Provider value={{index: index, setIndex: setIndex}}>{children}</ContentContext.Provider>
}
