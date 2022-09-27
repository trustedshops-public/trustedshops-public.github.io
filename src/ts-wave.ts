import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type WaveDirection = 'top' | 'bottom';

@customElement('ts-wave')
export class TsWave extends LitElement {
  @property({ type: String })
  direction: WaveDirection = 'top';

  render() {
    return html`<svg
      viewBox="0 0 1920 122"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" stroke-width="1" fill="#FFDC0F" fill-rule="evenodd">
        <path
          d="M960,41 C1120,68 1280,81.5 1440,81.5 C1600,81.5 1760,68 1920,41 L1920,122 L-3.54702934e-11,122 L-3.54702934e-11,41 C160,13.6666667 320,0 480,0 C640,0 800,13.6666667 960,41 Z"
          transform="translate(960.000000, 61.000000) scale(-1, 1) translate(-960.000000, -61.000000) "
        ></path>
      </g>
    </svg>`;
  }
}
