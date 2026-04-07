// Shared nav and footer for all pages
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
    <div class="nav-logo">Nottingham <span>Growing</span> Network</div>
    <div class="nav-links">
      ${links.map(l => `<a href="${l.href}" class="${currentPage === l.href ? 'active' : ''}">${l.label}</a>`).join('')}
    </div>
    <a href="getinvolved.html"><button class="nav-cta">Get Involved</button></a>
  </nav>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="footer-logo">Nottingham Growing Network</div>
    <p>Growing community across Nottingham · Registered with Companies House</p>
    <p style="color:rgba(255,255,255,0.5);font-size:12px;">© 2026 NGN</p>
  </footer>`;
}

document.getElementById('nav-placeholder').innerHTML = renderNav();
document.getElementById('footer-placeholder').innerHTML = renderFooter();
