'use client'

import Image from "next/image";
import close from "../../public/close.svg";
import { useRouter } from "next/navigation";

export default () => {
    const router = useRouter();

    return (
        <>
            <div className="cursor-pointer" onClick={() => router.back()}>
                <Image src={close} alt="close" />
            </div>
        </>
    );
}
