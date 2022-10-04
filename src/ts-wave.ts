import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

type WaveDirection = 'top' | 'bottom';

const DEVICE_VIEWBOX = {
  mobile: '0 0 320 64',
  tablet: '0 0 768 71',
  desktop: '0 0 1920 122',
} as const;

type SvgDevice = keyof typeof DEVICE_VIEWBOX;

@customElement('ts-wave')
export class TsWave extends LitElement {
  @property({ type: String })
  direction: WaveDirection = 'top';

  @state()
  device: SvgDevice = 'desktop';

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', () => {
      const { matches: isMobile } = window.matchMedia('(max-width: 600px');
      const { matches: isTablet } = window.matchMedia('(max-width: 1200px');

      if (isMobile) {
        this.device = 'mobile';
      } else if (isTablet) {
        this.device = 'tablet';
      } else {
        this.device = 'desktop';
      }
    });
  }

  static styles = css`
    svg {
      display: block;
    }
  `;

  render() {
    if (this.direction === 'bottom') {
      return html` <svg
        viewBox=${DEVICE_VIEWBOX[this.device]}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" stroke-width="1" fill-rule="evenodd">
          <defs>
            <path
              id="bottom-wave-desktop"
              d="M960,41 C1120,68 1280,81.5 1440,81.5 C1600,81.5 1760,68 1920,41 L1920,122 L0,122 L0,41 C160,13.6666667 320,0 480,0 C640,0 800,13.6666667 960,41 Z"
              transform="translate(960.000000, 61.000000) scale(1, -1) translate(-960.000000, -61.000000) "
            ></path>
            <path
              id="bottom-wave-tablet"
              d="M384,23.5 C448,39.3333333 512,47.25 576,47.25 C640,47.25 704,39.3333333 768,23.5 L768,71 L0,71 L0,23.5 C64,7.83333333 128,0 192,0 C256,0 320,7.83333333 384,23.5 Z"
              transform="translate(384.000000, 35.500000) scale(1, -1) translate(-384.000000, -35.500000) "
            ></path>
            <path
              id="bottom-wave-mobile"
              d="M0,52.0718184 C23.1785656,60.2244933 47.8532981,64.3008307 74.0241975,64.3008307 C100.195097,64.3008307 127.702288,60.2244933 156.545771,52.0718184 C186.84494,42.3484447 215.489146,37.4867579 242.478388,37.4867579 C269.46763,37.4867579 295.308168,42.3484447 320,52.0718184 L320,-8.52651283e-14 L0,-8.52651283e-14 L0,52.0718184 Z"
              transform="translate(160.000000, 32.150415) scale(-1, 1) translate(-160.000000, -32.150415) "
            ></path>
          </defs>
        </g>

        <use href="#bottom-wave-${this.device}" fill="#FFDC0F" />
      </svg>`;
    }

    return html`<svg
      viewBox=${DEVICE_VIEWBOX[this.device]}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <defs>
          <path
            id="top-wave-desktop"
            d="M960,41 C1120,68 1280,81.5 1440,81.5 C1600,81.5 1760,68 1920,41 L1920,122 L-3.54702934e-11,122 L-3.54702934e-11,41 C160,13.6666667 320,0 480,0 C640,0 800,13.6666667 960,41 Z"
            transform="translate(960.000000, 61.000000) scale(-1, 1) translate(-960.000000, -61.000000) "
          ></path>
          <path
            id="top-wave-tablet"
            d="M384,23.5 C448,39.3333333 512,47.25 576,47.25 C640,47.25 704,39.3333333 768,23.5 L768,71 L5.22959454e-12,71 L5.22959454e-12,23.5 C64,7.83333333 128,0 192,0 C256,0 320,7.83333333 384,23.5 Z"
            transform="translate(384.000000, 35.500000) scale(-1, 1) translate(-384.000000, -35.500000) "
          ></path>
          <path
            id="top-wave-mobile"
            d="M0,52.0718184 C23.1785656,60.2244933 47.8532981,64.3008307 74.0241975,64.3008307 C100.195097,64.3008307 127.702288,60.2244933 156.545771,52.0718184 C186.84494,42.3484447 215.489146,37.4867579 242.478388,37.4867579 C269.46763,37.4867579 295.308168,42.3484447 320,52.0718184 L320,-8.52651283e-14 L0,-8.52651283e-14 L0,52.0718184 Z"
            transform="translate(160.000000, 32.150415) scale(1, -1) translate(-160.000000, -32.150415) "
          ></path>
        </defs>

        <use href="#top-wave-${this.device}" fill="#FFDC0F" />
      </g>
    </svg>`;
  }
}
