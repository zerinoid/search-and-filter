import Image, { ImageLoaderProps } from 'next/image';
import styles from './Gallery.module.css';

type statuses = 'done' | 'planning' | 'inprogress';
type areas = 'Architecture' | 'Music' | 'Painting' | 'Poetry' | 'Cinema';
type programs = 'Endorsement' | 'Internship' | 'Scholarship' | 'Integration';

export interface IProject {
  id: number;
  title: string;
  responsible: string;
  manager: string;
  description: string;
  status: statuses;
  year: number;
  score: 1 | 2 | 3 | 4 | 5;
  area: areas;
  program: programs;
}

export interface IGallery {
  projects: IProject[];
}

const Gallery: React.FC<IGallery> = ({ projects }) => {
  const imageLoader = ({ src, width }: ImageLoaderProps) => {
    return `https://via.placeholder.com/${width}x${width / 1.777}?text=${src}`;
  };

  return (
    <div className={styles.container}>
      {projects.map(image => (
        <div className={styles.item} key={image.id}>
          <Image
            loader={imageLoader}
            src={image.title}
            alt={image.title}
            width={300}
            height={200}
          />
          <h2>{image.title}</h2>
          <p>{image.responsible}</p>
          <p>{image.manager}</p>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
