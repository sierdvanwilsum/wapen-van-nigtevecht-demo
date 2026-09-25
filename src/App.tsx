import { useState } from 'react';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Over ons', href: '#over-ons' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reserveren', href: '#reserveren' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Contact', href: '#contact' },
];

const menuGroups = [
  { title: 'Lunch', items: ['[GERECHTNAAM]', '[GERECHTNAAM]'] },
  { title: 'Diner', items: ['[GERECHTNAAM]', '[GERECHTNAAM]'] },
  { title: 'Borrel', items: ['[HAPJE OF BORRELPLANK]', '[HAPJE OF BORRELPLANK]'] },
  { title: 'Dranken', items: ['[DRANKJE]', '[DRANKJE]'] },
];

const events = [
  { date: '[DATUM]', title: 'Live muziek', description: '[Korte omschrijving van de activiteit.]' },
  { date: '[DATUM]', title: 'Pubquiz', description: '[Korte omschrijving van de activiteit.]' },
  { date: '[DATUM]', title: 'Thema-avond', description: '[Korte omschrijving van de activiteit.]' },
  { date: '[DATUM]', title: 'Besloten evenement', description: '[Korte omschrijving van de activiteit.]' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Het Wapen van Nigtevecht, home">
          <span className="wordmark-small">Eetcafé</span>
          <span className="wordmark-name">Het Wapen</span>
          <span className="wordmark-place">van Nigtevecht</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav id="site-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Hoofdnavigatie">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-booking" href="#reserveren">Een tafel reserveren <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=85"
            alt="Voorbeeldfoto van een sfeervol restaurantinterieur; vervangen door [FOTO TERRAS] of eigen sfeerbeeld."
          />
          <div className="hero-scrim" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">Een warm welkom in Nigtevecht</p>
            <h1 id="hero-title">Het Wapen<br />van Nigtevecht</h1>
            <p className="hero-subtitle">Eten, drinken en ontmoeten in het hart van Nigtevecht.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#menu">Bekijk menu <span aria-hidden="true">↓</span></a>
              <a className="text-link text-link-light" href="#reserveren">Reserveren <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <span className="photo-caption">Sfeerbeeld ter vervanging van [FOTO TERRAS]</span>
          <a className="hero-side-note" href="#over-ons">Een plek om samen te komen <span aria-hidden="true">↓</span></a>
        </section>

        <section className="welcome section-wrap">
          <p className="eyebrow">Welkom bij Het Wapen</p>
          <h2>Goed gezelschap.<br />Een fijne plek.</h2>
          <div className="welcome-copy">
            <p>Een gastvrije plek voor lunch, diner, borrel en gezellig samenzijn.</p>
            <a className="text-link" href="#over-ons">Ontdek Het Wapen <span aria-hidden="true">↗</span></a>
          </div>
          <span className="section-number" aria-hidden="true">01</span>
        </section>

        <section className="about section-wrap" id="over-ons">
          <div className="about-photo photo-frame">
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
              alt="Voorbeeldfoto van horeca-interieur; vervangen door [FOTO INTERIEUR]."
              loading="lazy"
            />
            <span className="photo-tag">Vervangen door [FOTO INTERIEUR]</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">02 / Over ons</p>
            <h2>Van het dorp,<br />voor het dorp.</h2>
            <p className="placeholder-copy">[Hier komt het verhaal van Het Wapen van Nigtevecht. Vertel iets over de sfeer, de plek in het dorp en wat gasten hier kunnen verwachten.]</p>
            <a className="text-link" href="#contact">Vind ons in Nigtevecht <span aria-hidden="true">↗</span></a>
          </div>
          <p className="photo-note">Ruimte voor een eigen verhaal en fotografie van Het Wapen.</p>
        </section>

        <section className="menu-section" id="menu">
          <div className="section-wrap menu-inner">
            <div className="menu-heading">
              <div>
                <p className="eyebrow">03 / Eten & drinken</p>
                <h2>Op tafel</h2>
              </div>
              <p className="menu-notice">Voorbeeldmenu - definitieve gerechten en prijzen nog toevoegen.</p>
            </div>
            <div className="menu-groups">
              {menuGroups.map((group) => (
                <div className="menu-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item, index) => (
                      <li key={`${group.title}-${index}`}>
                        <span><span className="dish-name">{item}</span><span className="dish-description">[Korte omschrijving]</span></span>
                        <span className="dish-price">€ --,-</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="menu-bottom">
              <span>Met aandacht bereid, om samen van te genieten.</span>
              <button className="button button-outline" type="button" disabled title="Voeg later de menupdf toe">Download volledig menu (PDF)</button>
            </div>
          </div>
        </section>

        <section className="reservation section-wrap" id="reserveren">
          <div className="reservation-copy">
            <p className="eyebrow">04 / Schuif aan</p>
            <h2>Er is altijd<br />een plek aan tafel.</h2>
            <p>Reserveren kan telefonisch of via WhatsApp. Voor grotere groepen of speciale gelegenheden kunt u contact opnemen.</p>
            <div className="reservation-actions">
              <a className="button button-dark" href="#contact">Bel voor reservering <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#contact">Stuur WhatsApp <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#contact">Mail ons <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="reservation-image photo-frame">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
              alt="Voorbeeldfoto van een gedekte tafel; vervangen door [FOTO ETEN]."
              loading="lazy"
            />
            <span className="photo-tag">Vervangen door [FOTO ETEN]</span>
          </div>
        </section>

        <section className="agenda-section" id="agenda">
          <div className="section-wrap agenda-inner">
            <div className="agenda-heading">
              <div>
                <p className="eyebrow">05 / In het dorp</p>
                <h2>Agenda</h2>
              </div>
              <p>Voorbeeld - agenda kan later eenvoudig worden aangepast.</p>
            </div>
            <div className="event-list">
              {events.map((event) => (
                <article className="event-row" key={event.title}>
                  <span className="event-date">{event.date}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <span className="event-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-heading">
            <p className="eyebrow">06 / Contact</p>
            <h2>We zien u<br />graag.</h2>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Bezoek</h3>
              <p>[ADRES]<br />Nigtevecht</p>
            </div>
            <div className="contact-item">
              <h3>Neem contact op</h3>
              <p><a href="#reserveren">[TELEFOON]</a><br /><a href="#reserveren">[WHATSAPP]</a><br /><a href="#reserveren">[E-MAIL]</a></p>
            </div>
            <div className="contact-item">
              <h3>Openingstijden</h3>
              <p>[OPENINGSTIJDEN]</p>
            </div>
          </div>
          <div className="map-placeholder" role="img" aria-label="Google Maps kaart placeholder">
            <span className="map-marker" aria-hidden="true">+</span>
            <span>[GOOGLE MAPS KAART]</span>
            <span className="map-location">Nigtevecht</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="wordmark footer-wordmark" href="#home">
            <span className="wordmark-small">Eetcafé</span>
            <span className="wordmark-name">Het Wapen</span>
            <span className="wordmark-place">van Nigtevecht</span>
          </a>
          <div className="footer-contact">
            <p>[ADRES], Nigtevecht</p>
            <p>[TELEFOON]</p>
            <p>[E-MAIL]</p>
          </div>
          <nav className="footer-nav" aria-label="Footernavigatie">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#reserveren">Reserveren</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-social">
            <a href="#contact">Instagram <span aria-hidden="true">↗</span></a>
            <a href="#contact">Facebook <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© Het Wapen van Nigtevecht</span><a href="#home">Terug naar boven ↑</a></div>
      </footer>
    </>
  );
}

export default App;