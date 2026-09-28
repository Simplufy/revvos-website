(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const activateButton = (buttons, activeButton) => {
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button === activeButton));
    });
  };

  const addArrowNavigation = (container, selector, onSelect) => {
    container?.addEventListener("keydown", (event) => {
      if (!event.target.matches(selector)) return;
      const buttons = [...container.querySelectorAll(selector)];
      const current = buttons.indexOf(event.target);
      let next = current;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (current + 1) % buttons.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (current - 1 + buttons.length) % buttons.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = buttons.length - 1;
      if (next === current) return;

      event.preventDefault();
      buttons[next].focus();
      onSelect(buttons[next]);
    });
  };

  const locationData = {
    north: {
      location: "Summit Repair",
      issue: "Hours mismatch",
      detail: "Checked Jul 21 using Google Business Profile and the manager's shop schedule. Hours do not match. Google rank: Top 3.",
      current: "Google: Mon-Fri 8:00 AM-5:00 PM",
      proposed: "Review shop hours: 7:30 AM-5:30 PM",
      status: "Person review needed"
    },
    market: {
      location: "Northline Collision",
      issue: "Service page gap",
      detail: "Checked Jul 21 using the website and Google Business Profile. Collision repair appears in the directory, but its service page is missing. Google rank: Top 10.",
      current: "Directory listed / service page missing",
      proposed: "Review collision repair page brief",
      status: "Marketing review needed"
    },
    river: {
      location: "Apex Detailing",
      issue: "Citation unverified",
      detail: "Checked Jul 21 using an automotive directory. The listing is unverified and the phone number does not match. Google rank: Not ranking yet.",
      current: "Directory citation: unverified / mismatched",
      proposed: "Verify name, phone, and service area",
      status: "Shop verification needed"
    },
    hill: {
      location: "Clearview Glass",
      issue: "Local-map rank movement",
      detail: "Checked Jul 21 using a local map search. The location moved from Top 10 to Top 3 on Google and appears in the directory. A person verifies the live result before closing the item.",
      current: "Top 10 / Jul 14",
      proposed: "Verify Top 3 on Google / Jul 21",
      status: "Rank source review"
    }
  };

  const mapButtons = [...document.querySelectorAll("[data-location]")];
  const locationDesk = document.querySelector("[data-location-desk]");

  const selectLocation = (button) => {
    const key = button.dataset.location;
    const data = locationData[key];
    if (!data) return;

    mapButtons.forEach((candidate) => {
      candidate.setAttribute("aria-pressed", String(candidate.dataset.location === key));
    });
    document.querySelectorAll("[data-location-name]").forEach((node) => { node.textContent = data.location; });
    document.querySelectorAll("[data-location-issue]").forEach((node) => { node.textContent = data.issue; });
    document.querySelectorAll("[data-location-detail]").forEach((node) => { node.textContent = data.detail; });
    document.querySelectorAll("[data-location-current]").forEach((node) => { node.textContent = data.current; });
    document.querySelectorAll("[data-location-proposed]").forEach((node) => { node.textContent = data.proposed; });
    document.querySelectorAll("[data-location-status]").forEach((node) => { node.textContent = data.status; });

    const status = document.querySelector("[data-map-status]");
    if (status) status.textContent = `${data.location} selected. ${data.issue}.`;
  };

  mapButtons.forEach((button) => button.addEventListener("click", () => selectLocation(button)));
  addArrowNavigation(document.querySelector("[data-map-buttons]"), "[data-location]", selectLocation);
  addArrowNavigation(locationDesk, "[data-location]", selectLocation);

  const storyTrack = document.querySelector("[data-story-track]");
  const storyButtons = [...document.querySelectorAll("[data-story]")];

  const selectStory = (button) => {
    activateButton(storyButtons, button);
    button.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center"
    });
    const status = document.querySelector("[data-story-status]");
    if (status) status.textContent = `${button.dataset.story} selected and centered.`;
  };

  storyButtons.forEach((button) => button.addEventListener("click", () => selectStory(button)));
  addArrowNavigation(storyTrack, "[data-story]", selectStory);

  const relayButtons = [...document.querySelectorAll("[data-relay-source]")];
  const timelineSource = document.querySelector("[data-timeline-source]");
  const timelineMessage = document.querySelector("[data-timeline-message]");
  const relayContent = {
    call: ["Call", "Verbal quote noted; customer asked for time to review the $1,240 brake estimate."],
    text: ["Text", "Customer asked whether the rear brake work could wait until next month."],
    form: ["Form", "The customer shared a preferred callback time and vehicle details with the estimate request."]
  };

  const selectRelaySource = (button) => {
    const content = relayContent[button.dataset.relaySource];
    if (!content) return;
    activateButton(relayButtons, button);
    if (timelineSource) timelineSource.textContent = content[0];
    if (timelineMessage) timelineMessage.textContent = content[1];
    const status = document.querySelector("[data-relay-status]");
    if (status) status.textContent = `${content[0]} shown in the estimate context.`;
  };

  relayButtons.forEach((button) => button.addEventListener("click", () => selectRelaySource(button)));
  addArrowNavigation(document.querySelector("[data-relay-controls]"), "[data-relay-source]", selectRelaySource);

  const ownerButtons = [...document.querySelectorAll("[data-owner]")];
  const slip = document.querySelector("[data-next-slip]");
  const ownerName = document.querySelector("[data-owner-name]");
  const slipAction = document.querySelector("[data-slip-action]");
  const slipLocation = document.querySelector("[data-slip-location]");
  const ownerContent = {
    location: ["Service advisor", "Review prepared nudge for the $1,240 brake estimate", "Summit Repair"],
    manager: ["Service advisor", "Review prepared reframe for the verbal brake quote", "Summit Repair"],
    care: ["Service advisor", "Review last-call draft for the callback owed", "Summit Repair"]
  };

  const selectOwner = (button) => {
    const content = ownerContent[button.dataset.owner];
    if (!content || !slip) return;
    activateButton(ownerButtons, button);
    slip.style.setProperty("--owner-slot", button.dataset.ownerSlot);
    if (ownerName) ownerName.textContent = content[0];
    if (slipAction) slipAction.textContent = content[1];
    if (slipLocation) slipLocation.textContent = content[2];
    const status = document.querySelector("[data-owner-status]");
    if (status) status.textContent = `${button.querySelector("strong")?.textContent || "Prepared follow-up"} routed to ${content[0]} for review.`;
  };

  ownerButtons.forEach((button) => button.addEventListener("click", () => selectOwner(button)));
  addArrowNavigation(document.querySelector("[data-owner-lanes]"), "[data-owner]", selectOwner);
})();
