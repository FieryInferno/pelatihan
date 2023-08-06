
import BackButton from "@/components/BackButton";
import ModuleDescription from "@/components/ModuleDescription";
import Submodules from "@/components/Submodules";

export default () => <>
    <div className="m-4">
        {/* Tombol kembali  */}
        <BackButton />

        {/* Deskripsi module */}
        <ModuleDescription />

        {/* Submodule materi */}
        <Submodules />
    </div>
</>;
