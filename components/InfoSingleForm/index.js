import Field from 'components/Field';
import Title from 'components/Title';
import styles from './styles';

const InfoSingleForm = () => {
  return (
    <>
      <section>
        <Title title={'Provider locations'} />
        <article>
          <Field label={'legal name'} value={'john Doe'} />
          <Field label={'Date of birth'} value={'10/30/17'} />
          <Field label={'legal name'} value={'john Doe'} />
          <Field label={'Date of birth'} value={'10/30/17'} />
          <Field label={'legal name'} value={'john Doe'} />
          <Field label={'Date of birth'} value={'10/30/17'} />
          <Field label={'legal name'} value={'john Doe'} />
          <Field label={'Date of birth'} value={'10/30/17'} />
          <Field label={'legal name'} value={'john Doe'} />
          <Field label={'Date of birth'} value={'10/30/17'} />
        </article>
      </section>

      <style jsx>{styles}</style>
    </>
  );
};

export default InfoSingleForm;
