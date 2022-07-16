<!-- Lots of @, & that I need to study in here.
This is the CSS from Dash/Coupons

https://sass-lang.com/documentation/syntax#scss
The SCSS syntax uses the file extension .scss. With a few small exceptions, it’s a superset of CSS, which means essentially all valid CSS is valid SCSS as well. Because of its similarity to CSS, it’s the easiest syntax to get used to and the most popular.|

<style lang="scss" scoped>
@import '@styles/variables';
.coupons-submitted {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    @extend %nav-header;
  }
}

@extend 
/* https://sass-lang.com/documentation/at-rules/extend */
/* @extend 
    one selector should inherit the styles of another. 
*/

/* % */
/* Placeholder */
/* https://stackoverflow.com/questions/55195655/in-scss-what-does-symbol-indicate */
/* In SCSS, the % indicates a placeholder selector.
[Placeholders] are very similar to class selectors, but instead of using a period (.) at the start, the percent character (%) is used. Placeholder selectors have the additional property that they will not show up in the generated CSS, only the selectors that extend them will be included in the output.
So if you included this in your SCSS somewhere but never used (extended) it, it will not appear in your generated CSS. */

/* & */
https://css-tricks.com/the-sass-ampersand/
/*
        The & comes in handy when you’re nesting and you want to create a more specific selector, like an element that has *both* of two classes, like this:

        .some-class.another-class { }
        You can do this while nesting by using the &.

        .some-class {
          &.another-class {}
        }
*/


.wrapper {
  @extend %base-wrapper; 
  display: flex;
  flex-direction: column;
}

.section-header {
  @extend %section-header__submitted;

  .header-title {
    @extend %base-font;
    font-size: 1.05rem;
    height: 2.2rem;
    line-height: 2.2rem;
  }
  .icon-expand {
    margin-top: 0.75rem;
    position: relative;
    width: 0.9em;
    float: left;
    left: 0.75rem;
    bottom: 1px;
    transition: transform 0.15s ease;
    transform: rotate(-90deg);
  }
  .rotated {
    transform: rotate(0deg);
  }
  &.not-submitted:hover {
    transition: all 0.15s;
    background: $primary-dark;
    cursor: pointer;
  }
}
.table-header {
  font-weight: 600;
  text-transform: uppercase;
  color: $primary-dark;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  letter-spacing: 0.3px;
  font-style: italic;
}
.table-submitted {
  position: relative;
  text-align: left;
  border-collapse: collapse;
  margin: 0 auto;
  width: 70%;
  tbody tr {
    &:not(:last-child) {
      border-bottom: 1px solid $secondary-light;
    }
    &:hover {
      background: $hover-active;
    }
    td {
      padding: 0.25rem 0;

      &:first-child {
        font-weight: 600;
        width: 70%;
        padding-left: 1rem;
      }
      &:last-child {
        color: $tertiary;
        padding-right: 0.75rem;
      }
      &.missing {
        color: $error;
      }
    }
  }
  &.attribution {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
}

.table-unsubmitted {
  display: flex;
  flex-wrap: wrap;

  padding-left: 6.5rem;
  padding-right: auto;
  margin: 0 auto;
  margin-bottom: 1rem;

  max-height: 0;
  transition: all 0.1s ease-out;
  transform-origin: top;
  transform: scaleY(0);

  div {
    font-style: italic;
    font-weight: 400;
    text-align: left;
    width: 15rem;
    padding: 0.15rem;
  }
}
.table-expanded {
  transform: scaleY(1);
  max-height: 500px;
  transition: all 0.15s ease-in;
  margin-bottom: 3rem;
}

.buttons-row {
  display: flex;
  justify-content: center;
  gap: 2em;
  margin: 2em 0;

  button {
    @extend %base-button;
    @extend %base-button__hover;
  }
}
</style>