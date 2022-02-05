import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .MobileCardWrapper {
    color: #aec0cf !important;
    border-radius: $borderRadius;
    box-shadow: $boxShadow;
    width: 100%;
    margin-bottom: 10px;
    p {
      color: #aec0cf !important;
    }
    span {
      color: #aec0cf !important;
    }
    &__symbol--inner {
      color: #aec0cf !important;
      padding: 10px 15px;
    }

    &__content {
      padding: 10px 15px 20px;
      color: #aec0cf !important;
    }

    .TokenIcon__name {
      color: #aec0cf !important;
      max-width: 250px;
      b {
        font-size: $medium;
        color: #aec0cf !important;
      }
    }

    .Row .Row__title,
    .Value .SubValue,
    .TextWithModal__text {
      font-size: $medium;
      color: #aec0cf !important;
    }

    .Row__center {
      align-items: center;
      color: #aec0cf !important;
    }

    .DefaultButton {
      color: #aec0cf !important;
      width: 120px;
      min-height: 36px;
      font-size: $small;
    }
  }
`;

export default staticStyles;
