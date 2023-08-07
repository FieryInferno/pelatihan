'use client'

import useContent from "@/data/useContent";

export default () => {
    const { index, setIndex, bab } = useContent();

    return (
        <>
            <div className="fixed bottom-0 inset-x-0 bg-[rgb(15,18,20)] py-8 px-4 border-t border-[rgb(51,57,59)] flex justify-between">
                <button className={`text-[rgb(46,161,241)] border border-[rgb(7,97,159)] px-8 py-2 rounded-lg ${index <= 0 ? 'invisible' : ''} ml-[25rem]`} onClick={() => setIndex((prevIndex: number) => prevIndex - 1)}>Back</button>
                <button className={`bg-[rgb(11,113,183)] px-8 py-2 rounded-lg ${index + 1 >= bab?.subbab.length ? 'invisible' : ''} mr-[25rem]`} onClick={() => setIndex((prevIndex: number) => prevIndex + 1)}>Continue</button>
            </div>
        </>
    );
}
