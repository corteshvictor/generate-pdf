import css from 'styled-jsx/css';

export default css`
  div {
    background-color: #1d2121;
    display: flex;
    align-items: center;
    border-radius: 50px;
    padding: 10px 20px;
    color: #fefefe;
    margin-top: 20px;
  }

  div > :global(svg) {
    margin-right: 8px;
  }
`;
