import HeaderContent from "@/components/HeaderContent";
import Content from "@/components/Content";
import FooterContent from "@/components/FooterContent";
import ContentProvider from "@/data/ContentProvider";

export default () => <>
    <ContentProvider>
        <div className="px-4">
            <HeaderContent />
            <Content />
            <FooterContent />
        </div>
    </ContentProvider>
</>;
