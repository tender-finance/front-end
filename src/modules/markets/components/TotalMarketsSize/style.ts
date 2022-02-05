import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .TotalMarketsSize {
    display: block;
    margin-right: 100px;
    min-width: 250px;
    p {
      font-weight: 600;
      font-size: 20px;
      letter-spacing: -0.04em;
      color: #ffffff;
    }
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 40px;
      letter-spacing: -0.04em;
      color: #ffffff;
    }
  }
`;

export default staticStyles;
