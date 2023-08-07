import HeaderContent from "@/components/HeaderContent";
import Content from "@/components/Content";

export default () => <>
    <div className="px-4">
        <HeaderContent />
        <Content />
        <div className="fixed bottom-0 inset-x-0 bg-[rgb(15,18,20)] py-8 px-4 border-t border-[rgb(51,57,59)] flex justify-between">
            <button className="text-[rgb(46,161,241)] border border-[rgb(7,97,159)] px-8 py-2 rounded-lg">Back</button>
            <button className="bg-[rgb(11,113,183)] px-8 py-2 rounded-lg">Continue</button>
        </div>
    </div>
</>;
