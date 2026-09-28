(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const updateLaneCounts = (wall) => {
    wall.querySelectorAll("[data-lane]").forEach((lane) => {
      const count = lane.querySelectorAll(".dispatch-ticket").length;
      const output = lane.closest(".dispatch-lane")?.querySelector(".lane-count");
      if (output) output.textContent = String(count);
    });
  };

  const dispatchWall = document.querySelector("[data-dispatch-wall]");
  if (dispatchWall) {
    const movingTicket = dispatchWall.querySelector("[data-moving-ticket]");
    const blockedTicket = dispatchWall.querySelector("[data-blocked-ticket]");
    const status = document.querySelector("[data-dispatch-status]");
    const route = ["ready", "waiting", "location", "check"];
    let routeIndex = 0;

    const moveTicket = (ticket, destination, message) => {
      if (!ticket || !destination) return;
      ticket.classList.add("is-moving");
      window.setTimeout(() => {
        destination.append(ticket);
        ticket.classList.remove("is-moving");
        updateLaneCounts(dispatchWall);
        if (status) status.textContent = message;
      }, reducedMotion.matches ? 0 : 220);
    };

    document.querySelector("[data-advance-ticket]")?.addEventListener("click", (event) => {
      routeIndex = (routeIndex + 1) % route.length;
      const nextLane = dispatchWall.querySelector(`[data-lane="${route[routeIndex]}"]`);
      moveTicket(movingTicket, nextLane, `Opening check moved to ${route[routeIndex]}.`);
      event.currentTarget.textContent = routeIndex === route.length - 1 ? "Reset ticket" : "Advance ticket";
    });

    document.querySelector("[data-divert-ticket]")?.addEventListener("click", (event) => {
      const tray = document.querySelector("[data-exception-drop]");
      if (!blockedTicket || !tray) return;
      moveTicket(blockedTicket, tray, "Freezer repair diverted to the exception tray for regional help.");
      event.currentTarget.disabled = true;
      event.currentTarget.textContent = "Sent to help";
    });

    updateLaneCounts(dispatchWall);
  }

  const proofDesk = document.querySelector("[data-proof-desk]");
  if (proofDesk) {
    const approveButton = proofDesk.querySelector("[data-proof-action]");
    const proofStatus = document.querySelector("[data-proof-status]");
    const align = () => proofDesk.classList.add("is-aligned");

    if (reducedMotion.matches) {
      align();
    } else {
      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        align();
        observer.disconnect();
      }, { threshold: 0.3 });
      observer.observe(proofDesk);
    }

    approveButton?.addEventListener("click", () => {
      const approved = proofDesk.classList.toggle("is-approved");
      approveButton.setAttribute("aria-pressed", String(approved));
      approveButton.textContent = approved ? "Approved for local use" : "Check final proof";
      if (proofStatus) {
        proofStatus.textContent = approved
          ? "Final proof approved. The keyline marks the approved brand sheet."
          : "Approval removed. Final proof is ready to check.";
      }
    });
  }

  document.querySelectorAll("[data-case-file]").forEach((caseFile) => {
    const tabs = Array.from(caseFile.querySelectorAll('[role="tab"]'));
    const panels = Array.from(caseFile.querySelectorAll('[role="tabpanel"]'));

    const selectTab = (tab, moveFocus = false) => {
      tabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      panels.forEach((panel) => {
        panel.hidden = panel.id !== tab.getAttribute("aria-controls");
      });
      if (moveFocus) tab.focus();
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => selectTab(tab));
      tab.addEventListener("keydown", (event) => {
        let nextIndex = null;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;
        if (nextIndex === null) return;
        event.preventDefault();
        selectTab(tabs[nextIndex], true);
      });
    });

    const showRoute = () => caseFile.classList.add("is-routed");
    if (reducedMotion.matches) {
      showRoute();
    } else {
      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        showRoute();
        observer.disconnect();
      }, { threshold: 0.35 });
      observer.observe(caseFile);
    }
  });
})();
