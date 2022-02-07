import css from 'styled-jsx/css';

export default css`
  article {
    display: grid;
    grid-template-columns: 8% 24% 1fr;
    row-gap: 20%;
    padding: 15px 20px;
    margin-bottom: 10px;
  }

  article > :global(div:last-child) {
    grid-column-start: 3;
  }
`;
