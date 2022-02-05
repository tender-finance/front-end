import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css.global`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .BasicTable {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-x: auto;
    overflow-y: hidden;
    width: calc(100% + 30px);
    margin: 0 0 0 -15px;
    position: relative;
    z-index: 1;
    @include respond-to(sm) {
      flex: none;
      display: block;
      margin: 0;
      width: 100%;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin: 0 auto;
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      position: relative;
      padding: 0 15px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
      flex: auto;
      height: auto;
      min-height: 542px;
      border-radius: 15px;
      overflow: hidden;
      @include respond-to(sm) {
        height: auto;
      }
    }

    &__content-inner {
      display: block;
      padding: 0;
      @include respond-to(sm) {
        padding: 5px 5px 12px;
      }
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 15px;
      padding: 0 45px;
      @include respond-to(xl) {
        padding: 0 40px;
      }
      @include respond-to(lg) {
        padding: 0 25px;
      }
      @include respond-to(sm) {
        padding: 0 15px;
        margin-bottom: 0;
      }
    }
  }
`;

export default staticStyles;
