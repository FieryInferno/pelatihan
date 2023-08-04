import Image from "next/image";
import html from "../../public/html.png";

export default () => <>
  <div className="bg-[rgb(30,32,34)] h-screen h-max-screen py-12 px-2">
    <div className="uppercase font-bold text-center mb-12 text-2xl">pelatihan</div>
    <div className="grid grid-cols-2 gap-2">
      <div className="p-4 bg-[rgb(27,29,30)] flex flex-col justify-center items-center cursor-pointer border border-[rgb(57,61,64)] shadow-[rgba(82,98,119,0.5)_0_4px_0] transition-all duration-300 hover:-translate-y-2 h-[200px]">
        <div className="w-1/2 mb-4">
          <Image src={html} alt="HTML" className="rounded-full"/>
        </div>
        <div className="font-bold">HTML</div>
      </div>
    </div>
  </div>
</>;
