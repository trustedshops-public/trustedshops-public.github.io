import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Repository } from './ts-main';

import './ts-card.ts';
import { rootStyles } from './rootStyles';
import { capitaliseFirstLetterOfWord } from './util';

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
    this.title = capitaliseFirstLetterOfWord(JSON.parse(this.title));
  }

  static styles = [
    rootStyles,
    css`
      h2 {
        font: var(--ts-headline-2);
        margin-bottom: 1rem;
        margin-left: 1rem;
      }
      section {
        max-width: 1200px;
        margin: auto;
        padding: var(--font-size-lg);
        color: var(--font-color);
      }
      
      ul {
        display: grid;
        grid-template-columns: repeat(var(--column-count), minmax(0, 1fr));
        grid-auto-rows: 1fr;
        gap: 1.5rem;
      }
    `
  ];

  render() {
    return html`
      <section>
        <h2>${this.title}</h2>
        <ul>
          ${this.repositories.map((repository) => {
            return html`
              <ts-card
                repository='${JSON.stringify(repository)}'
              ></ts-card>`;
          })}
        </ul>
      </section>`;
  }
}
