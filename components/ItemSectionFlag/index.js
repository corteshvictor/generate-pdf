import Field from 'components/Field';
import Warning from 'components/Warning';
import styles from './styles';

const ItemSectionFlag = () => {
  return (
    <>
      <article>
        <Warning />
        <Field label={'Section'} value={'Provider demographics'} />
        <Field
          label={'Description'}
          value={
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sint labore tenetur et adipisci cupiditate non saepe doloremque debitis ea!'
          }
        />
        <Field
          label={'Provider explination'}
          value={'Here is a legal explination of the incidents from my lawyer'}
        />
      </article>

      <style jsx>{styles}</style>
    </>
  );
};

export default ItemSectionFlag;
