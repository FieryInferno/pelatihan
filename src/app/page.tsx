import MateriCard from '@/components/MateriCard';
import materi from '@/data/materi'; 

export default () => <>
  <div className="py-12 px-2">
    <div className="uppercase font-bold text-center mb-12 text-2xl">pelatihan</div>
    <div className="grid grid-cols-2 gap-2 gap-y-4">
      {materi.map((mat, index) => <MateriCard key={`materi-card${index}`} {...mat} />)}
    </div>
  </div>
</>;
