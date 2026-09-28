(() => {
  const header = document.querySelector(".site-header");
  const progress = document.querySelector(".progress");
  const nav = document.querySelector(".nav-links");
  const navActions = document.querySelector(".nav-actions");

  // Preserve each page's native <details> navigation. Some custom-domain
  // edge responses use a compact link-only header, so restore the dropdown
  // structure only when it is genuinely missing.
  if (nav && !nav.querySelector(".nav-group")) {
    nav.innerHTML = `
      <a href="/platform/">Platform</a>
      <details class="nav-group"><summary>Solutions</summary><div class="nav-menu"><a href="/solutions/multi-location/">Multi-location operations</a><a href="/solutions/daily-operations/">Daily operations</a><a href="/solutions/executive-visibility/">Executive visibility</a></div></details>
      <details class="nav-group"><summary>Roles</summary><div class="nav-menu"><a href="/roles/owner/">Owners</a><a href="/roles/operations/">Operations leaders</a><a href="/roles/marketing/">Marketing leaders</a></div></details>
      <details class="nav-group"><summary>Use cases</summary><div class="nav-menu"><a href="/use-cases/reputation/">Reputation</a><a href="/use-cases/local-seo/">Local SEO</a><a href="/use-cases/social-media/">Social media</a><a href="/use-cases/customer-engagement/">Customer engagement</a><a href="/use-cases/operational-visibility/">Operational visibility</a><a href="/use-cases/compliance/">Compliance</a></div></details>
      <a href="/resources/">Resources</a>
      <a href="/support/">Support</a>
    `;
  }

  // Keep the shared calls to action without touching the dropdown markup.
  if (navActions) {
    navActions.innerHTML = `
      <a class="btn btn-secondary" href="https://revvos-demo.pages.dev">Log in</a>
      <a class="btn btn-primary" href="/demo/">Book a demo</a>
      <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false"><span></span></button>
    `;
  }

  document.querySelectorAll('a[href="/demo"], a[href="/demo/"]').forEach((link) => {
    if (!/assessment/i.test(link.textContent)) return;
    const hasArrow = link.querySelector(".arrow") || link.textContent.includes("->");
    link.innerHTML = `Book a demo${hasArrow ? ' <span class="arrow">→</span>' : ""}`;
  });

  document.querySelectorAll(".arrow").forEach((arrow) => {
    if (arrow.textContent.trim() === "->") arrow.textContent = "→";
  });

  const footerAbout = document.querySelector(".footer-about p");
  if (footerAbout) {
    footerAbout.textContent = "RevvOS shows your team what needs attention, prepares the next step, and keeps people in control.";
  }

  const menuButton = document.querySelector(".menu-button");

  const updateScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
    if (!progress) return;
    const available = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${available > 0 ? (window.scrollY / available) * 100 : 0}%`;
  };

  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });

  menuButton?.addEventListener("click", () => {
    const open = nav?.classList.toggle("is-open") ?? false;
    menuButton.setAttribute("aria-expanded", String(open));
  });

  const navGroups = [...document.querySelectorAll(".nav-group")];
  const desktopHover = window.matchMedia("(min-width: 1021px)");
  const closeOtherGroups = (current) => {
    navGroups.forEach((group) => {
      if (group !== current) group.removeAttribute("open");
    });
  };

  navGroups.forEach((group) => {
    group.addEventListener("pointerenter", (event) => {
      if (!desktopHover.matches || event.pointerType !== "mouse") return;
      closeOtherGroups(group);
      group.setAttribute("open", "");
    });

    group.addEventListener("pointerleave", (event) => {
      if (desktopHover.matches && event.pointerType === "mouse") group.removeAttribute("open");
    });

    group.addEventListener("toggle", () => {
      if (group.open) closeOtherGroups(group);
    });
  });

  nav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", (event) => {
    document.querySelectorAll(".nav-group[open]").forEach((group) => {
      if (!group.contains(event.target)) group.removeAttribute("open");
    });
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
  }

  const form = document.querySelector("#demo-form");
  const success = document.querySelector("#demo-success");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const get = (key) => (data.get(key) || "").toString().trim();
    const subject = `RevvOS demo request - ${get("company") || get("first")}`;
    const body = [
      "New RevvOS workflow demo request",
      "",
      `Name: ${get("first")} ${get("last")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Locations: ${get("locations")}`,
      "",
      "Workflow to examine:",
      get("workflow"),
    ].join("\r\n");
    window.location.href = `mailto:team@simplufy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.hidden = true;
    success?.classList.add("is-visible");
  });
})();
