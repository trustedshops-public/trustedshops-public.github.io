import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Repository } from './ts-main';

import './ts-card.ts';
import { rootStyles } from './rootStyles';

@customElement('ts-section')
export class TsSection extends LitElement {
  @property()
  list: string = '';
  @property()
  title: string = '';
  @state()
  repositories: Repository[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.repositories = JSON.parse(this.list);
    this.title = JSON.parse(this.title);
  }

  static styles = [
    rootStyles,
    css`
      h2 {
        font: var(--ts-headline-2);
      }
      section {
        padding: var(--font-size-lg) calc((100vw - 1000px) / 2);
      }
    `,
  ];

  render() {
    return html`<section>
      <h2>${this.title}</h2>
      <ul>
        ${this.repositories.map((repository) => {
          return html` <ts-card
            repository=${JSON.stringify(repository)}
          ></ts-card>`;
        })}
      </ul>
    </section>`;
  }
}
