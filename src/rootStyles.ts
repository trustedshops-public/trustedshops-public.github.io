import { css, CSSResultGroup } from 'lit';

export const rootStyles = css`
  :host {
    /* Base Colors */
    --ts-blue-300: #0dbedc;
    --ts-pineapple-500: #ffdc0f;
    --ts-white: #ffffff;
    --ts-black: #000000;

    /* Supporting Gradations */
    --ts-blue-700: #005aa0;
    --ts-blue-500: #1c8dc6;

    --ts-pineapple-400: #ffee58;
    --ts-pineapple-600: #fec704;

    --ts-gray-50: #efefef;
    --ts-gray-100: #e5e5e5;
    --ts-gray-500: #808080;
    --ts-gray-700: #4d4d4d;
    --ts-gray-900: #1a1a1a;

    /* Signal Colors */
    --ts-green-500: #4db85f; /* Go */
    --ts-orange-500: #ffae00; /* Noun */
    --ts-red-500: #d63339; /* Stop */

    /* Applying Colors */
    --font-color: var(--ts-black);
    --background-color: var(--ts-white);
    --link-color: var(--ts-blue-700);

    --status-ok: var(--ts-green-500);
    --status-info: var(--ts-orange-500);
    --status-error: var(--ts-red-500);

    /* Font */
    --ts-font-family: 'Roboto', 'Arial', sans-serif;
    --ts-font-weight-bold: 700;
    --ts-font-weight-regular: 400;
    --ts-font-style-regular: normal;
    --ts-font-style-italic: italic;

    --font-size-3xl: 5.625rem;
    --font-size-2xl: 2.5rem;
    --font-size-xl: 1.625rem;
    --font-size-lg: 1.375rem;
    --font-size-md: 1.125rem;

    --line-height-3xl: 5.625rem;
    --line-height-2xl: normal;
    --line-height-xl: normal;
    --line-height-lg: 2rem;
    --line-height-md: normal;

    --ts-headline-1: normal normal var(--ts-font-weight-bold) normal
      var(--font-size-3xl) / var(--line-height-3xl) var(--ts-font-family);
    --ts-headline-2: normal normal var(--ts-font-weight-bold) normal
      var(--font-size-2xl) / var(--line-height-2xl) var(--ts-font-family);
    --ts-headline-3: normal normal var(--ts-font-weight-regular) normal
      var(--font-size-xl) / var(--font-size-xl) var(--ts-font-family);

    --ts-subheading: normal normal var(--ts-font-weight-regular) normal
      var(--font-size-lg) / var(--line-height-lg) var(--ts-font-family);

    --ts-copy: normal normal var(--ts-font-weight-regular) normal
      var(--font-size-md) / var(--line-height-md) var(--ts-font-family);

    --column-count: 3;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --font-color: var(--ts-gray-100);
      --background-color: var(--ts-gray-900);
    }
  }

  /*
  tablet specific
  */
  @media (max-width: 1200px) {
    :host {
      --column-count: 2;
    }
  }

  /*
      mobile specific
    */
  @media (max-width: 600px) {
    :host {
      --font-size-3xl: 2.75rem;
      --font-size-2xl: 1.5rem;
      --font-size-xl: 1.125rem;
      --font-size-lg: 1.125rem;
      --font-size-md: 1rem;

      --line-height-3xl: 2.75rem;
      --line-height-2xl: normal;
      --line-height-xl: normal;
      --line-height-lg: 1.5rem;
      --line-height-md: 1.5rem;
      --column-count: 1;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: var(--ts-copy);
  }
` as CSSResultGroup;
