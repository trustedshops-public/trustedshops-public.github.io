import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { rootStyles } from './rootStyles';

@customElement('ts-privacy')
export class TsPrivacy extends LitElement {
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
      p, h2 {
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
      <div class="intro">
        <h2>Datenschutzerklärung</h2>
        <p>
          <strong>Hosting</strong><br />Unser Hoster erhebt in sog. Logfiles
          folgende Daten, die Ihr Browser übermittelt:
        </p>
        <p>
          IP-Adresse, die Adresse der vorher besuchten Website (Referer
          Anfrage-Header), Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur
          Greenwich Mean Time, Inhalt der Anforderung, HTTP-Statuscode,
          übertragene Datenmenge, Website, von der die Anforderung kommt und
          Informationen zu Browser und Betriebssystem.
        </p>
        <p>
          Das ist erforderlich, um unsere Website anzuzeigen und die Stabilität
          und Sicherheit zu gewährleisten. Dies entspricht unserem berechtigten
          Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO.
        </p>
        <p>
          Es erfolgt kein Tracking und wir haben auf diese Daten keinen direkten
          Zugriff, sondern erhalten lediglich eine anonymisierte, statistische
          Zusammenfassung. Diese beinhaltet die Adresse der vorher besuchten
          Seite, die Häufigkeit der jeweils aufgerufenen Seiten und die Anzahl
          eindeutiger Besucher. Diese Daten führen wir nicht mit anderen Daten
          zusammen.
        </p>
        <p>
          Wir setzen für die Zurverfügungstellung unserer Website folgenden
          Hoster ein:
        </p>
        <p>
          GitHub Inc.<br />88 Colin P Kelly Jr St<br />San Francisco, CA
          94107<br />United States
        </p>
        <p>
          Dieser ist Empfänger Ihrer personenbezogenen Daten. Dies entspricht
          unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f
          DSGVO, selbst keinen Server in unseren Räumlichkeiten vorhalten zu
          müssen. Serverstandort ist USA.
        </p>
        <p>
          Weitere Informationen zu Widerspruchs- und Beseitigungsmöglichkeiten
          gegenüber GitHub finden Sie unter:
          <a
            href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages"
            >https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages</a
          >
        </p>
        <p>
          Sie haben das Recht der Verarbeitung zu widersprechen. Ob der
          Widerspruch erfolgreich ist, ist im Rahmen einer Interessenabwägung zu
          ermitteln.
        </p>
        <p>
          Die Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt.
        </p>
        <p>
          Die Verarbeitung der unter diesem Abschnitt angegebenen Daten ist
          weder gesetzlich noch vertraglich vorgeschrieben. Die
          Funktionsfähigkeit der Website ist ohne die Verarbeitung nicht
          gewährleistet.
        </p>
        <p>
          GitHub hat Compliance-Maßnahmen für internationale Datenübermittlungen
          umgesetzt. Diese gelten für alle weltweiten Aktivitäten, bei denen
          GitHub personenbezogene Daten von natürlichen Personen in der EU
          verarbeitet. Diese Maßnahmen basieren auf den
          EU-Standardvertragsklauseln (SCCs). Weitere Informationen finden Sie
          unter:
          <a
            href="https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1--the-standard-contractual-clauses-processors"
            >https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1--the-standard-contractual-clauses-processors</a
          >
        </p>
        <h2>Rechtliche Hinweise</h2>
        <p>
          Grundsätzlich ist ein Auftragsverarbeitungsvertrag mit dem Hoster
          abzuschließen. Das bayerische Landesamt für Datenschutzaufsicht hat
          für das Hosting rein statischer Websites eine Ausnahme gemacht. Für
          den Fall, dass die Webseite der Selbstdarstellung dient, z.B. von
          Vereinen oder Kleinunternehmen, keine personenbezogenen Daten an den
          Betreiber fließen und kein Tracking stattfindet, liegt keine
          Auftragsverarbeitung vor. Weiter heißt es: „Die Tatsache, dass auch
          beim Hosting von statischen Webseiten zwangsläufig IP-Adressen, d.h.
          personenbezogene Daten, verarbeitet werden müssen, führt nicht zur
          Annahme einer Auftragsverarbeitung. Das wäre nicht sachgerecht. Die
          (kurzfristige) IP-Adressenspeicherung ist vielmehr noch der
          TK-Zugangsvermittlung des Website-Hosters nach dem TKG zuzurechnen und
          dient in erster Linie Sicherheitszwecken des Hosters.“ (<a
            href="https://www.lda.bayern.de/media/veroeffentlichungen/FAQ_Hosting_keine_Auftragsverarbeitung.pdf"
            >https://www.lda.bayern.de/media/veroeffentlichungen/FAQ_Hosting_keine_Auftragsverarbeitung.pdf</a
          >) Wir gehen davon aus, dass diese Ausnahme auf GitHub Pages
          anzuwenden ist.
        </p>
      </div>
    </main> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ts-privacy': TsPrivacy;
  }
}
