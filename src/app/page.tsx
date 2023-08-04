import html from "../../public/html.png";
import css from "../../public/css.webp";
import javascript from "../../public/javascript.png";
import MateriCard from '@/components/MateriCard';

const materi = [{title: 'html', image: html}, {title: 'css', image: css}, {title: 'javascript', image: javascript}];

export default () => <>
  <div className="bg-[rgb(30,32,34)] h-screen h-max-screen py-12 px-2">
    <div className="uppercase font-bold text-center mb-12 text-2xl">pelatihan</div>
    <div className="grid grid-cols-2 gap-2 gap-y-4">
      {materi.map(({title, image}, index) => <MateriCard key={`materi-card${index}`} image={image} title={title} />)}
    </div>
  </div>
</>;
