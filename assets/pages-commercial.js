(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const stampRows = document.querySelectorAll("[data-stamp]");
  if (stampRows.length) {
    const stamp = () => stampRows.forEach((row, index) => {
      window.setTimeout(() => row.classList.add("is-stamped"), reducedMotion ? 0 : index * 180);
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      stamp();
    } else {
      const ledgerObserver = new IntersectionObserver(([entry], observer) => {
        if (!entry.isIntersecting) return;
        stamp();
        observer.disconnect();
      }, { threshold: 0.25 });
      ledgerObserver.observe(stampRows[0].closest(".scope-sheet"));
    }
  }

  const workingTable = document.querySelector("#working-table");
  const workflow = document.querySelector("#workflow");
  const workflowField = document.querySelector("[data-workflow-target]");
  const noteButtons = [...document.querySelectorAll("[data-note]")];

  const drawNoteLines = () => {
    if (!workingTable || !workflowField || window.innerWidth <= 820) return;
    const tableRect = workingTable.getBoundingClientRect();
    const targetRect = workflowField.getBoundingClientRect();
    const targetX = targetRect.left - tableRect.left + 8;
    const targetY = targetRect.top - tableRect.top + targetRect.height / 2;

    noteButtons.forEach((button, index) => {
      const path = workingTable.querySelector(`[data-line="${button.dataset.note}"]`);
      if (!path) return;
      const noteRect = button.getBoundingClientRect();
      const startX = noteRect.right - tableRect.left;
      const startY = noteRect.top - tableRect.top + noteRect.height / 2;
      const bend = startX + Math.max(25, (targetX - startX) * (0.4 + index * 0.08));
      path.setAttribute("d", `M ${startX} ${startY} C ${bend} ${startY}, ${bend} ${targetY}, ${targetX} ${targetY}`);
    });
  };

  if (workingTable) {
    const settleTable = () => window.requestAnimationFrame(() => {
      workingTable.classList.add("is-settled");
      window.requestAnimationFrame(drawNoteLines);
      if (!reducedMotion) window.setTimeout(drawNoteLines, 760);
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      settleTable();
    } else {
      const tableObserver = new IntersectionObserver(([entry], observer) => {
        if (!entry.isIntersecting) return;
        settleTable();
        observer.disconnect();
      }, { threshold: 0.15 });
      tableObserver.observe(workingTable);
    }
    window.addEventListener("resize", drawNoteLines, { passive: true });
  }

  noteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!workflow) return;
      const prompt = button.dataset.prompt || "";
      const separator = workflow.value.trim() ? "\n" : "";
      workflow.value += `${separator}${prompt}`;
      workflow.focus();
      workflow.setSelectionRange(workflow.value.length, workflow.value.length);
      workflowField?.classList.remove("is-prompted");
      window.requestAnimationFrame(() => workflowField?.classList.add("is-prompted"));
    });
  });

  const assessmentForm = document.querySelector("#demo-form");
  const assessmentSuccess = document.querySelector("#demo-success");
  assessmentForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!assessmentForm.checkValidity()) {
      assessmentForm.reportValidity();
      return;
    }

    const data = new FormData(assessmentForm);
    const get = (key) => (data.get(key) || "").toString().trim();
    const subject = `RevvOS workflow demo - ${get("company") || get("first")}`;
    const body = [
      "New RevvOS Multi-Shop Operating Gap Assessment request",
      "",
      `Name: ${get("first")} ${get("last")}`,
      `Company: ${get("company")}`,
      `Role: ${get("role")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Primary shop-management system: ${get("system")}`,
      `Locations: ${get("locations")}`,
      `Baseline readiness: ${get("baseline")}`,
      `First use case: ${get("use_case")}`,
      "",
      "Workflow or recurring problem:",
      get("workflow"),
    ].join("\r\n");
    window.location.href = `mailto:team@simplufy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    assessmentForm.hidden = true;
    assessmentSuccess?.classList.add("is-visible");
  }, { capture: true });

  const tabs = [...document.querySelectorAll('[role="tab"][aria-controls]')];
  const selectTab = (tab, moveFocus = true) => {
    tabs.forEach((item) => {
      const selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(item.getAttribute("aria-controls"));
      if (!panel) return;
      panel.hidden = !selected;
      panel.classList.toggle("is-entering", selected);
      if (selected && !reducedMotion) {
        window.setTimeout(() => panel.classList.remove("is-entering"), 450);
      }
    });
    if (moveFocus) tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab, false));
    tab.addEventListener("keydown", (event) => {
      let nextIndex;
      if (["ArrowDown", "ArrowRight"].includes(event.key)) nextIndex = (index + 1) % tabs.length;
      if (["ArrowUp", "ArrowLeft"].includes(event.key)) nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (nextIndex === undefined) return;
      event.preventDefault();
      selectTab(tabs[nextIndex]);
    });
  });

  const highlights = document.querySelectorAll(".highlighter");
  if (highlights.length) {
    if (reducedMotion || !("IntersectionObserver" in window)) {
      highlights.forEach((mark) => mark.classList.add("is-marked"));
    } else {
      const markObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-marked");
          markObserver.unobserve(entry.target);
        });
      }, { threshold: 0.8 });
      highlights.forEach((mark) => markObserver.observe(mark));
    }
  }

  const contentLinks = [...document.querySelectorAll(".guide-contents a")];
  const articleSections = contentLinks.map((link) => document.querySelector(link.hash)).filter(Boolean);
  if (contentLinks.length && articleSections.length && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!visible) return;
      contentLinks.forEach((link) => link.toggleAttribute("aria-current", link.hash === `#${visible.target.id}`));
    }, { rootMargin: "-20% 0px -65%", threshold: 0 });
    articleSections.forEach((section) => sectionObserver.observe(section));
  }
})();
