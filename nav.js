const currentPage = window.location.pathname.split('/').pop() || 'index.html';

function renderNav() {
  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'gardens.html', label: 'Gardens' },
    { href: 'events.html', label: 'Events' },
    { href: 'recipes.html', label: 'Recipes' },
    { href: 'members.html', label: 'Members' },
  ];
  return `
  <nav>
    <a href="index.html" class="nav-logo">Nottingham <span>Growing</span> Network</a>
    <div class="nav-links">
      ${links.map(l => `<a href="${l.href}" class="${currentPage === l.href ? 'active' : ''}">${l.label}</a>`).join('')}
    </div>
    <a href="getinvolved.html" class="nav-cta">Get Involved</a>
  </nav>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">Nottingham Growing Network</div>
        <p>Connecting 35 community food growing spaces across Nottingham. Growing together, sharing together.</p>
        <div class="social-links" style="margin-top:12px;">
          <a href="https://www.instagram.com" target="_blank" class="social-btn instagram">Instagram</a>
          <a href="https://www.facebook.com" target="_blank" class="social-btn facebook">Facebook</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick links</h4>
        <a href="about.html">About NGN</a>
        <a href="gardens.html">Find a Garden</a>
        <a href="events.html">Events</a>
        <a href="recipes.html">Recipes</a>
        <a href="getinvolved.html">Get Involved</a>
        <a href="members.html">Members Area</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="mailto:barbara@bulwellforestgarden.co.uk">barbara@bulwellforestgarden.co.uk</a>
        <a href="tel:07890557854">07890 557854</a>
        <p style="color:rgba(255,255,255,0.4);font-size:12px;margin-top:8px;">Registered with Companies House</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Nottingham Growing Network · All rights reserved</p>
      <p>Built by NTU Group 2 · ISYS20182</p>
    </div>
  </footer>`;
}

document.getElementById('nav-placeholder').innerHTML = renderNav();
document.getElementById('footer-placeholder').innerHTML = renderFooter();
