import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ts-index')
export class TsIndex extends LitElement {
  render() {
    return html`<p>Hello World</p> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ts-index': TsIndex;
  }
}
