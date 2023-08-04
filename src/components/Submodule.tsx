import Image from "next/image";
import arrowDown from "../../public/arrow-down.svg";

export default ({title} : {title: string}) => <>
    <div className="flex justify-between border-b border-[rgb(61,66,68)] pb-6 mt-6">
        <div className="text-[rgb(196,191,183)] font-bold">{title}</div>
        <div><Image src={arrowDown} alt="Arrow Down" /></div>
    </div>
</>;
