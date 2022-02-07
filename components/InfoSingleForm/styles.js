import css from 'styled-jsx/css';

export default css`
  section {
    margin-top: 50px;
  }

  article {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 20%;
    padding: 15px 20px;
    margin-bottom: 10px;
  }
`;
