import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { rootStyles } from './rootStyles';
import { Repository } from './repository';
import { capitaliseFirstLetterOfWord } from './util';

@customElement('ts-card')
export class TsCard extends LitElement {
  @property()
  repository: string = '';
  @property({ type: Boolean, attribute: 'top-downloads' })
  topDownloads: boolean = false;
  @state()
  repo: Repository = {
    id: -1,
    name: '',
    html_url: '',
    description: '',
    created_at: '',
    updated_at: '',
    topics: [],
    stargazers_count: 0,
    lastActivityDate: '',
    type: 'fallback',
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
        box-shadow:
          0 2px 6px 0 rgb(0 0 0 / 14%),
          0 1px 2px 0 rgb(0 0 0 / 8%),
          0 0 1px 0 rgb(0 0 0 / 6%),
          0 0 0 0 rgb(0 0 0 / 4%);
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
        box-shadow:
          0 6px 10px 0 rgb(0 0 0 / 14%),
          0 3px 4px 0 rgb(0 0 0 / 8%),
          0 2px 3px 0 rgb(0 0 0 / 6%),
          0 2px 2px 0 rgb(0 0 0 / 4%);
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
      .top-downloads {
        font-weight: 700;
        background: linear-gradient(
          90deg,
          var(--ts-blue-300),
          var(--ts-pineapple-500),
          var(--ts-blue-300)
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: downloads-shimmer 3s linear infinite;
      }
      @keyframes downloads-shimmer {
        to {
          background-position: 200% center;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .top-downloads {
          animation: none;
        }
      }
      .card-footer {
        display: flex;
        gap: 1rem;
        margin-top: auto;
        padding-top: 0.75rem;
        border-top: 1px solid var(--ts-gray-100);
        color: var(--ts-gray-500);
      }
      .card-footer * {
        font-size: 0.875rem;
      }
      .card-footer svg {
        height: 100%;
        vertical-align: text-bottom;
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
    `,
  ];

  render() {
    const now = new Date();
    const date = new Date(this.repo.lastActivityDate);
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    let lastDate: string;
    if (seconds < 60) lastDate = 'just now';
    else if (seconds < 3600) lastDate = `${Math.floor(seconds / 60)}m ago`;
    else if (seconds < 86400) lastDate = `${Math.floor(seconds / 3600)}h ago`;
    else if (seconds < 2592000)
      lastDate = `${Math.floor(seconds / 86400)}d ago`;
    else if (seconds < 31536000)
      lastDate = `${Math.floor(seconds / 2592000)}mo ago`;
    else lastDate = `${Math.floor(seconds / 31536000)}y ago`;

    return html` <li class="card">
      <a class="card-link" href="${this.repo.html_url}">
        <div>
          <h3>${this.repo.name}</h3>
          <p>${this.repo.description}</p>
        </div>
        <footer class="card-footer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path d="M0 0h16v16H0z" fill="none" />
              <path
                fill="#59636e"
                d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25m0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45l2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084l2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456l-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183l-3.096-.45a.75.75 0 0 1-.564-.41z"
              />
            </svg>
            ${this.repo.stargazers_count}</span
          >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path d="M0 0h16v16H0z" fill="none" />
              <path
                fill="#59636e"
                d="M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 0 1 4.75 0M2.5 7.5v6.75c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V7.5Zm10.75-4H2.75a.25.25 0 0 0-.25.25V6h11V3.75a.25.25 0 0 0-.25-.25"
              />
            </svg>
            ${lastDate}</span
          >
          ${
            this.repo.releaseVersion
              ? html`<span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 0h16v16H0z" fill="none" />
                    <path
                      fill="#1a7f37"
                      d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775m1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
                    />
                  </svg>
                  ${this.repo.releaseVersion}</span
                >`
              : ''
          }
          ${
            this.repo.downloads
              ? html`<span class="${this.topDownloads ? 'top-downloads' : ''}">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 0h16v16H0z" fill="none" />
                    <path
                      fill="#59636e"
                      d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"
                    />
                    <path
                      fill="#59636e"
                      d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06z"
                    />
                  </svg>
                  ${this.repo.downloads}</span
                >`
              : ''
          }
          ${
            this.repo.language
              ? html`<span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      fill="#59636e"
                      d="M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H4.75a.75.75 0 0 1 0-1.5H19a.5.5 0 0 0 .5-.5V8.5h-4a2 2 0 0 1-2-2v-4H5a.5.5 0 0 0-.5.5v6.25a.75.75 0 0 1-1.5 0Zm12-.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5"
                    />
                    <path
                      fill="#59636e"
                      d="M4.53 12.24a.75.75 0 0 1-.039 1.06l-2.639 2.45l2.64 2.45a.75.75 0 1 1-1.022 1.1l-3.23-3a.75.75 0 0 1 0-1.1l3.23-3a.75.75 0 0 1 1.06.04m3.979 1.06a.75.75 0 1 1 1.02-1.1l3.231 3a.75.75 0 0 1 0 1.1l-3.23 3a.75.75 0 1 1-1.021-1.1l2.639-2.45l-2.64-2.45Z"
                    />
                  </svg>
                  ${this.repo.language}</span
                >`
              : ''
          }
        </footer>
      </a>
    </li>`;
  }
}
