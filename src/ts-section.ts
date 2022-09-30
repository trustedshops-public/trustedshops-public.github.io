import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Repository } from './ts-main';

import './ts-card.ts';

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

  render() {
    return html`<section>
      <h3>${this.title}</h3>
      <ul>
        ${this.repositories.map((repository) => {
          return html` <li>
            <ts-card repository=${JSON.stringify(repository)}></ts-card>
          </li>`;
        })}
      </ul>
    </section>`;
  }
}
