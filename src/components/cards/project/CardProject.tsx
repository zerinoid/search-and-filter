import Image, { ImageLoaderProps } from 'next/image';
import styles from './CardProject.module.css';

type statuses = 'done' | 'planning' | 'inprogress';
type areas = 'Architecture' | 'Music' | 'Painting' | 'Poetry' | 'Cinema';
type programs = 'Endorsement' | 'Internship' | 'Scholarship' | 'Integration';
type scores = 1 | 2 | 3 | 4 | 5;

export interface IProject {
  id?: number;
  title: string;
  responsible: string;
  manager: string;
  description: string;
  status: statuses;
  year: number;
  score: scores;
  area: areas;
  program: programs;
}

interface ICardProject extends IProject {
  imageWidth: number;
  imageHeight: number;
}

const CardProject: React.FC<ICardProject> = ({
  imageWidth,
  imageHeight,
  title,
  responsible,
  manager,
  description,
  status,
  year,
  score,
  area,
  program
}) => {
  const imageLoader = ({ src, width }: ImageLoaderProps) => {
    return `https://via.placeholder.com/${width}x${width / 1.777}?text=${src}`;
  };

  return (
    <div className={styles.container}>
      <Image
        loader={imageLoader}
        src={title}
        alt={title}
        width={imageWidth}
        height={imageHeight}
      />
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>
          {status}. {score}/5
        </p>
        <p>
          {area} / {program}
        </p>
        <p>
          By: {responsible}, {manager}. {year}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardProject;
