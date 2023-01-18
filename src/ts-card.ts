import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { rootStyles } from './rootStyles';
import { Repository } from './repository';
import { capitaliseFirstLetterOfWord } from './util';

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
    topics: []
  };

  connectedCallback(): void {
    super.connectedCallback();
    this.repo = JSON.parse(this.repository);
    this.repo.name = capitaliseFirstLetterOfWord(this.repo.name);
  }

  static styles = [
    rootStyles,
    css`
      .card {
        box-shadow: 0 2px 6px 0 rgb(0 0 0 / 14%), 0 1px 2px 0 rgb(0 0 0 / 8%),
          0 0 1px 0 rgb(0 0 0 / 6%), 0 0 0 0 rgb(0 0 0 / 4%);
        background-color: var(--background-color);
        border-radius: 1rem;
        list-style: none;
        color: var(--font-color);
        height: 100%;
        transform: translateY(0);
        transition: transform 0.3s ease-in-out;
      }
      .card-link {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 1rem;
        padding: 1rem;
        text-decoration: none;
      }
      .card:hover {
        box-shadow: 0 6px 10px 0 rgb(0 0 0 / 14%), 0 3px 4px 0 rgb(0 0 0 / 8%),
          0 2px 3px 0 rgb(0 0 0 / 6%), 0 2px 2px 0 rgb(0 0 0 / 4%);
        transform: translateY(-0.5rem);
        transition: transform 0.2s ease-in-out;
      }
      h3 {
        font: var(--ts-headline-3);
        color: var(--font-color);
        flex: 1;
      }
      p {
        font: var(--ts-copy);
        color: var(--font-color);
        flex: 1;
      }
      ul {
        display: flex;
        gap: 0.5rem;
      }
      li:not(.card) {
        list-style: none;
        font-size: 1rem;
      }
      @media (prefers-color-scheme: dark) {
        .card {
          box-shadow: none;
          border: 1px solid var(--ts-gray-700);
        }
        .card:hover {
          border-color: var(--ts-white);
        }
      }
    `
  ];

  render() {
    return html`
      <li class='card'>
        <a class='card-link' href='${this.repo.html_url}'>
          <h3>${this.repo.name}</h3>
          <p>${this.repo.description}</p>
        </a>
      </li>`;
  }
}
