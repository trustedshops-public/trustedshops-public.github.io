import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Repository } from './ts-main';

@customElement('ts-card')
export class TsCard extends LitElement {
  @property()
  repository: string = '';
  @state()
  repo: Repository = {
    id: -1,
    name: '',
    html_url: '',
    description: '',
    created_at: '',
    updated_at: '',
    topics: [],
  };

  connectedCallback(): void {
    super.connectedCallback();
    this.repo = JSON.parse(this.repository);
  }

  render() {
    return html`<li>
      <h4>${this.repo.name}</h4>
      <p>${this.repo.description}</p>
      <ul>
        ${this.repo.topics.map((topic) => html`<li>${topic}</li>`)}
      </ul>
    </li>`;
  }
}
