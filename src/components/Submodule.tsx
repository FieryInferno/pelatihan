import Image from "next/image";
import arrowDown from "../../public/arrow-down.svg";
import lesson from "../../public/lesson.svg";

export default ({title} : {title: string}) => <>
    {/* flex justify-between border-b border-[rgb(61,66,68)] pb-6 mt-6 cursor-pointer */}
    <div className="flex justify-between pb-6 mt-6 cursor-pointer">
        <div className="text-[rgb(196,191,183)] font-bold">{title}</div>
        <div><Image src={arrowDown} alt="Arrow Down" /></div>
    </div>
    <div>
        <div className="flex items-center bg-[rgb(24,26,27)] p-4 rounded-lg">
            <div>
                <Image src={lesson} alt="Lesson" className="w-3/4"/>
            </div>
            <div>
                <div className="mb-2 text-xs text-[rgb(153,144,131)] font-bold">Pelajaran 1</div>
                <div className="text-[rgb(196,191,183)]">Requirement Tools</div>
            </div>
        </div>
    </div>
</>;
