import Image from "next/image";
import close from "../../../public/close.svg";
import html from "../../../public/html.png";

export default () => <>
    <div className="px-4">
        <div className="fixed bg-[rgb(15,18,20)] inset-x-0 top-0 px-4 pt-16 pb-12">
            <div className="text-[rgb(157,146,132)] flex items-center gap-2">
                <div><Image src={close} alt="close" /></div>
                <div>Requirements tool</div>
            </div>
            <div className="flex gap-4 items-center">
                <div className="bg-green-500 basis-full rounded-2xl h-2 relative">
                    <div className="w-2 h-2 top-1/2 bg-white rounded-[50%] absolute -translate-y-1/2 left-1/3"></div>
                </div>
                <div>14</div>
            </div>
        </div>
        <div className="mt-40 mb-24">
            <div>
                <h1>Welcome to HTML!</h1>
                <p>HTML is at the core of every web page. Behind every web page you've ever visited there is HTML code that your web browser uses to display elements like text, images and tables.</p>
                <Image src={html} alt="html" width={100} height={100} />
                <p>In this course, you'll work with HTML code to control the structure and the elements of a web page.</p>
            </div>
            <div>
                <h1>Welcome to HTML!</h1>
                <p>HTML is at the core of every web page. Behind every web page you've ever visited there is HTML code that your web browser uses to display elements like text, images and tables.</p>
                <Image src={html} alt="html" width={100} height={100} />
                <p>In this course, you'll work with HTML code to control the structure and the elements of a web page.</p>
            </div>
            <div>
                <h1>Welcome to HTML!</h1>
                <p>HTML is at the core of every web page. Behind every web page you've ever visited there is HTML code that your web browser uses to display elements like text, images and tables.</p>
                <Image src={html} alt="html" width={100} height={100} />
                <p>In this course, you'll work with HTML code to control the structure and the elements of a web page.</p>
            </div>
        </div>
        <div className="fixed bottom-0 inset-x-0 bg-[rgb(15,18,20)] py-8 px-4 border-t border-[rgb(51,57,59)] flex justify-between">
            <button className="text-[rgb(46,161,241)] border border-[rgb(7,97,159)] px-8 py-2 rounded-lg">Back</button>
            <button className="bg-[rgb(11,113,183)] px-8 py-2 rounded-lg">Continue</button>
        </div>
    </div>
</>;
