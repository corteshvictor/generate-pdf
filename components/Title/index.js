import Flag from '../icons/Flag';
import styles from './styles';

const Title = ({ title, viewIcon }) => {
  return (
    <>
      <div>
        {viewIcon && <Flag />}
        {title}
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default Title;
