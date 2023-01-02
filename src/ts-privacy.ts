import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import { rootStyles } from './rootStyles';

@customElement('ts-privacy')
export class TsPrivacy extends LitElement {
  @state()
  content: string = '';

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
    const response = await fetch('/privacy.md');
    const text = await response.text();

    this.content = marked.parse(text);
  }

  static styles = [
    rootStyles,
    css`
      main {
        max-width: 1200px;
        margin: auto;
        position: relative;
      }
      p {
        color: var(--font-color);
      }
      h2 {
        font: var(--ts-headline-2);
        color: var(--font-color);
      }
      p,
      h2 {
        margin-bottom: 1em;
      }
      a {
        color: var(--link-color);
        font-size: 1em;
      }
      .intro {
        background-color: var(--background-color);
        border-radius: 40px 40px 0 0;
        margin-top: -100px;
        padding: 40px;
        padding-top: 80px;
        padding-bottom: 120px;
        position: relative;
        box-shadow: -30px -20px 30px -30px rgb(0 0 0 / 50%),
          30px -20px 30px -30px rgb(0 0 0 / 50%);
      }
    `,
  ];

  render() {
    return html`<main>
      <div class="intro">${unsafeHTML(this.content)}</div>
    </main> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ts-privacy': TsPrivacy;
  }
}
