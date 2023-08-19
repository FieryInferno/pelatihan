import MateriCard from '@/components/MateriCard';
import materi from '@/data/materi'; 

export default function Page() {
  return (
    <>
      <div className="my-12 mx-2 lg:mx-96">
        <div className="uppercase font-bold text-center mb-12 text-2xl">pelatihan</div>
        <div className="grid grid-cols-2 gap-2 gap-y-4 lg:grid-cols-3 lg:gap-0 lg:justify-items-center">
          {materi.map((mat, index) => <MateriCard key={`materi-card${index}`} {...mat} />)}
        </div>
      </div>
    </>
  );
}
