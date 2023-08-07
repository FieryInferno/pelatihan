import HeaderContent from "@/components/HeaderContent";
import Content from "@/components/Content";
import FooterContent from "@/components/FooterContent";
import ContentProvider from "@/data/ContentProvider";

export default function Page() {
    return (
        <>
            <ContentProvider>
                <div className="px-4 lg:px-16">
                    <HeaderContent />
                    <Content />
                    <FooterContent />
                </div>
            </ContentProvider>
        </>
    );
}
