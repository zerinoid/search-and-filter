import styles from './Gallery.module.css';
import CardProject, { IProject } from '@/components/cards/project/CardProject';

export interface IGallery {
  projects: IProject[];
}

const Gallery: React.FC<IGallery> = ({ projects }) => {
  return projects.length > 0 ? (
    <div className={styles.container}>
      {projects.map(image => (
        <CardProject
          key={image.id}
          imageWidth={300}
          imageHeight={200}
          title={image.title}
          responsible={image.responsible}
          manager={image.manager}
          description={image.description}
          status={image.status}
          year={image.year}
          score={image.score}
          area={image.area}
          program={image.program}
        />
      ))}
    </div>
  ) : (
    <div className={styles.empty}>
      <p>No results where found :(</p>
    </div>
  );
};

export default Gallery;
