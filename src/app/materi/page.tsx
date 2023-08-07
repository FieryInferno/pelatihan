import BackButton from "@/components/BackButton";
import ModuleDescription from "@/components/ModuleDescription";
import Submodules from "@/components/Submodules";

export default function Page() {
    return (
        <>
            <div className="m-4 lg:mx-80">
                {/* Tombol kembali  */}
                <BackButton />

                {/* Deskripsi module */}
                <ModuleDescription />

                {/* Submodule materi */}
                <Submodules />
            </div>
        </>
    );
}
