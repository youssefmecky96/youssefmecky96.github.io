(() => {
  const STORAGE_KEY = "ym-theme";
  const root = document.documentElement;

  const getStoredTheme = () => {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  };
  const storeTheme = (t) => {
    try { localStorage.setItem(STORAGE_KEY, t); } catch {}
  };

  const applyTheme = (theme) => {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  };

  const stored = getStoredTheme();
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(stored || (prefersDark ? "dark" : "light"));

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      storeTheme(next);
    });
  }

  // Active section highlight in nav
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const sectionMap = new Map();
  navLinks.forEach((a) => {
    const id = a.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    if (section) sectionMap.set(section, a);
  });

  if (sectionMap.size > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const link = sectionMap.get(entry.target);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.removeAttribute("aria-current"));
          link.setAttribute("aria-current", "true");
        }
      });
    }, {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0
    });
    sectionMap.forEach((_link, section) => observer.observe(section));
  }

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
