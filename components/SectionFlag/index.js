import ItemSectionFlag from 'components/ItemSectionFlag';
import Title from 'components/Title';
import styles from './styles';

const SectionFlag = () => {
  return (
    <>
      <section>
        <Title title={'Red flags'} viewIcon />
        <ItemSectionFlag />
        <ItemSectionFlag />
      </section>

      <style jsx>{styles}</style>
    </>
  );
};

export default SectionFlag;
