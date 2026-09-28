(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  requestAnimationFrame(() => {
    document.body.classList.add("trust-ready");
  });

  const book = document.querySelector("[data-evidence-book]");
  if (book) {
    const tabs = Array.from(book.querySelectorAll('[role="tab"]'));
    const marker = book.querySelector(".calendar-tabs");

    const selectTab = (selected, moveFocus = true) => {
      tabs.forEach((tab) => {
        const isSelected = tab === selected;
        tab.setAttribute("aria-selected", String(isSelected));
        tab.tabIndex = isSelected ? 0 : -1;
        const panel = document.getElementById(tab.getAttribute("aria-controls"));
        if (panel) panel.hidden = !isSelected;
      });
      marker?.style.setProperty("--tab-offset", `${Number(selected.dataset.tabIndex) * 100}%`);
      if (moveFocus) selected.focus();
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => selectTab(tab, false));
      tab.addEventListener("keydown", (event) => {
        let nextIndex;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;
        if (nextIndex === undefined) return;
        event.preventDefault();
        selectTab(tabs[nextIndex]);
      });
    });

    const activeTab = tabs.find((tab) => tab.getAttribute("aria-selected") === "true");
    if (activeTab) marker?.style.setProperty("--tab-offset", `${Number(activeTab.dataset.tabIndex) * 100}%`);

    const slipButton = book.querySelector(".slip-toggle");
    const slip = document.getElementById("correction-slip");
    slipButton?.addEventListener("click", () => {
      const willOpen = slipButton.getAttribute("aria-expanded") !== "true";
      slipButton.setAttribute("aria-expanded", String(willOpen));
      slipButton.textContent = willOpen ? "Hide linked correction" : "Show linked correction";
      if (slip) slip.hidden = !willOpen;
    });
  }

  const boundary = document.querySelector("[data-authority-boundary]");
  const approveButton = boundary?.querySelector("[data-boundary-approve]");
  const approvalStatus = document.querySelector("#approval-status");
  approveButton?.addEventListener("click", () => {
    boundary.classList.add("is-approved");
    approveButton.textContent = "Example approved";
    approveButton.disabled = true;
    if (approvalStatus) approvalStatus.textContent = "A person approved the example. The request can now enter the final step.";
  });

  const switchyard = document.querySelector("[data-switchyard]");
  const runButton = switchyard?.querySelector("[data-switch-run]");
  const switchStatus = document.querySelector("#switch-status");
  let statusTimers = [];

  const clearStatusTimers = () => {
    statusTimers.forEach((timer) => window.clearTimeout(timer));
    statusTimers = [];
  };

  runButton?.addEventListener("click", () => {
    clearStatusTimers();
    switchyard.classList.remove("is-running");
    void switchyard.offsetWidth;
    switchyard.classList.add("is-running");

    if (reducedMotion.matches) {
      if (switchStatus) switchStatus.textContent = "Complete: packet A continued after review. Packet B moved to the exception lane.";
      return;
    }

    if (switchStatus) switchStatus.textContent = "Running: both packets are approaching the human check.";
    statusTimers.push(window.setTimeout(() => {
      if (switchStatus) switchStatus.textContent = "Paused: packet A is waiting for review. Packet B is missing a required detail.";
    }, 1450));
    statusTimers.push(window.setTimeout(() => {
      if (switchStatus) switchStatus.textContent = "Complete: packet A continued. Packet B was diverted to the exception lane.";
    }, 3450));
  });
})();
