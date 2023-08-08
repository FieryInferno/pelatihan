export default function Input(props: {type: string, placeholder: string}) {
    return (
        <input className="border border-[#DBDFE9] pl-2 py-[0.4rem] rounded-[0.3rem] mb-4" {...props} />
    );
}
