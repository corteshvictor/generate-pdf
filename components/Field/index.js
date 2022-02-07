import styles from './styles';

const Field = ({ label, value }) => {
  return (
    <>
      <div>
        <p>{label}</p>
        <h4>{value}</h4>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default Field;
