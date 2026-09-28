(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const moveFocus = (items, current, key) => {
    const index = items.indexOf(current);
    if (index < 0) return false;

    let nextIndex = index;
    if (key === "ArrowRight" || key === "ArrowDown") nextIndex = (index + 1) % items.length;
    if (key === "ArrowLeft" || key === "ArrowUp") nextIndex = (index - 1 + items.length) % items.length;
    if (key === "Home") nextIndex = 0;
    if (key === "End") nextIndex = items.length - 1;
    if (nextIndex === index && key !== "Home" && key !== "End") return false;

    items[nextIndex].focus();
    return true;
  };

  const atlasMap = document.querySelector("[data-atlas-map]");
  const atlasNodes = Array.from(document.querySelectorAll("[data-location-node]"));
  const atlasDetail = document.querySelector("[data-atlas-detail]");

  if (atlasMap && atlasNodes.length && atlasDetail) {
    const detailFields = {
      status: atlasDetail.querySelector("[data-detail-status]"),
      title: atlasDetail.querySelector("[data-detail-title]"),
      summary: atlasDetail.querySelector("[data-detail-summary]"),
      owner: atlasDetail.querySelector("[data-detail-owner]"),
      difference: atlasDetail.querySelector("[data-detail-difference]"),
      proof: atlasDetail.querySelector("[data-detail-proof]"),
    };

    const selectLocation = (node) => {
      atlasNodes.forEach((item) => {
        const selected = item === node;
        item.setAttribute("aria-pressed", String(selected));
        item.tabIndex = selected ? 0 : -1;
      });

      atlasMap.classList.add("has-selection");
      atlasMap.querySelectorAll(".atlas-branch").forEach((path) => {
        path.classList.toggle("is-active", path.dataset.path === node.dataset.location);
      });

      Object.entries(detailFields).forEach(([name, field]) => {
        if (field) field.textContent = node.dataset[name] || "";
      });
    };

    const clearLocation = () => {
      atlasMap.classList.remove("has-selection");
      atlasMap.querySelectorAll(".atlas-branch").forEach((path) => path.classList.remove("is-active"));
      atlasNodes.forEach((node, index) => {
        node.setAttribute("aria-pressed", "false");
        node.tabIndex = index === 0 ? 0 : -1;
      });
      atlasNodes[0].focus();
    };

    atlasNodes.forEach((node) => {
      node.addEventListener("click", () => selectLocation(node));
      node.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          clearLocation();
          return;
        }
        if (moveFocus(atlasNodes, node, event.key)) event.preventDefault();
      });
    });

    atlasNodes.forEach((node, index) => {
      node.setAttribute("aria-pressed", "false");
      node.tabIndex = index === 0 ? 0 : -1;
    });
  }

  const matrixFilters = Array.from(document.querySelectorAll("[data-matrix-filter]"));
  const matrixRows = Array.from(document.querySelectorAll("[data-matrix-state]"));

  matrixFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const state = filter.dataset.matrixFilter;
      matrixFilters.forEach((item) => item.setAttribute("aria-pressed", String(item === filter)));
      matrixRows.forEach((row) => {
        row.hidden = state !== "all" && row.dataset.matrixState !== state;
      });
    });

    filter.addEventListener("keydown", (event) => {
      if (moveFocus(matrixFilters, filter, event.key)) event.preventDefault();
    });
  });

  const briefPaper = document.querySelector("[data-brief-paper]");
  const briefRows = Array.from(document.querySelectorAll("[data-brief-row]"));

  if (briefPaper && briefRows.length) {
    const closeRows = () => {
      briefRows.forEach((button) => {
        button.setAttribute("aria-expanded", "false");
        button.closest(".brief-row")?.classList.remove("is-open");
        button.nextElementSibling?.setAttribute("aria-hidden", "true");
      });
      briefPaper.classList.remove("has-focus");
    };

    const openRow = (button) => {
      const wasOpen = button.getAttribute("aria-expanded") === "true";
      closeRows();
      if (wasOpen) return;
      button.setAttribute("aria-expanded", "true");
      button.nextElementSibling?.setAttribute("aria-hidden", "false");
      button.closest(".brief-row")?.classList.add("is-open");
      briefPaper.classList.add("has-focus");
      if (!reducedMotion) button.closest(".brief-row")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    briefRows.forEach((button) => {
      button.addEventListener("click", () => openRow(button));
      button.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          closeRows();
          button.focus();
          return;
        }
        if (moveFocus(briefRows, button, event.key)) event.preventDefault();
      });
    });

    closeRows();
  }

  const decisionToggle = document.querySelector("[data-decision-toggle]");
  const decisionDrawer = document.querySelector("[data-decision-drawer]");

  if (decisionToggle && decisionDrawer) {
    const setDrawer = (open) => {
      decisionToggle.setAttribute("aria-expanded", String(open));
      decisionToggle.textContent = open ? "Close decision" : "Review decision";
      decisionDrawer.setAttribute("aria-hidden", String(!open));
      decisionDrawer.classList.toggle("is-open", open);
    };

    decisionToggle.addEventListener("click", () => {
      setDrawer(decisionToggle.getAttribute("aria-expanded") !== "true");
    });

    decisionDrawer.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      setDrawer(false);
      decisionToggle.focus();
    });

    setDrawer(false);
  }
})();
