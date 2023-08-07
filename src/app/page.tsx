import MateriCard from '@/components/MateriCard';
import materi from '@/data/materi'; 

export default () => <>
  <div className="py-12 px-2 lg:px-40">
    <div className="uppercase font-bold text-center mb-12 text-2xl">pelatihan</div>
    <div className="grid grid-cols-2 gap-2 gap-y-4 lg:grid-cols-6 lg:gap-16">
      {materi.map((mat, index) => <MateriCard key={`materi-card${index}`} {...mat} />)}
    </div>
  </div>
</>;
