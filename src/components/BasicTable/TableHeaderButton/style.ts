import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .TableHeaderButton.TableHeaderButton__sort {
    color: red;

    p {
      color: #fff !important;
    }
    span {
      color: #fff !important;
    }
    svg {
      transform: rotate(180deg);
    }
  }

  .TableHeaderButton {
    font-size: $regular;
    font-weight: 400;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: none;
    position: relative;

    p {
      color: #76899b !important;
    }
    span {
      color: #76899b !important;
    }

    svg {
      margin-left: 5px;
      position: absolute;
      right: -10px;
      bottom: 3px;
    }

    @include respond-to(xl) {
      font-size: $medium;
    }
    @include respond-to(sm) {
      font-size: $small;
    }
    &__small {
      @include respond-to(sm) {
        font-size: $extraSmall;
      }
    }

    span {
      font-size: $medium;
      @include respond-to(xl) {
        font-size: $extraSmall;
      }
      @include respond-to(sm) {
        font-size: 8px;
      }
    }

    &__withSort {
      p {
        display: inline;
        position: relative;
      }
    }

    &__desk {
      p {
        &:after {
          border-width: 0 5px 8px 5px;
          border-color: transparent;
          @include respond-to(sm) {
            border-width: 0 3px 5px 3px;
          }
        }
      }
    }

    &__withSubTitle {
      flex-direction: column;
    }
  }
`;

export default staticStyles;
