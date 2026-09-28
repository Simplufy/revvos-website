(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const recordData = [
    {
      name: "Signal",
      title: "$1,240 brake estimate at Summit Repair",
      text: "The shop system shows an open brake estimate with no recorded response for 8 days.",
      owner: "Service advisor",
      asOf: "Tuesday, 7:10 AM",
      state: "Signal received",
    },
    {
      name: "Exception",
      title: "$1,240 estimate is 8 days old",
      text: "Needs You Now shows the stale estimate because there is no newer customer response.",
      owner: "Service advisor",
      asOf: "Tuesday, 7:10 AM",
      state: "Needs You Now",
    },
    {
      name: "Draft",
      title: "Customer follow-up is prepared",
      text: "The draft uses the estimate and recent customer activity. The service advisor can edit it before deciding.",
      owner: "Service advisor",
      asOf: "Tuesday, 7:10 AM",
      state: "Draft ready",
    },
    {
      name: "Review",
      title: "Waiting for your OK",
      text: "A person can edit, approve, defer, or decline. Approval records or queues the decision; it does not universally send the follow-up.",
      owner: "Service advisor",
      asOf: "Tuesday, 7:10 AM",
      state: "Human review",
    },
    {
      name: "Handled",
      title: "The review decision becomes the handled state",
      text: "RevvOS records the person's decision. Any external sending or execution depends on the group's configured workflows.",
      owner: "Service advisor",
      asOf: "Tuesday, 7:10 AM",
      state: "Decision recorded",
    },
  ];

  const recordTabs = [...document.querySelectorAll("[data-record-stage]")];
  const storyButtons = [...document.querySelectorAll("[data-story-stage]")];
  const setRecordStage = (index) => {
    const item = recordData[index];
    if (!item) return;
    recordTabs.forEach((button, buttonIndex) => button.setAttribute("aria-selected", String(buttonIndex === index)));
    storyButtons.forEach((button, buttonIndex) => button.setAttribute("aria-selected", String(buttonIndex === index)));
    document.querySelector("[data-record-title]")?.replaceChildren(item.title);
    document.querySelector("[data-record-text]")?.replaceChildren(item.text);
    document.querySelector("[data-record-owner]")?.replaceChildren(item.owner);
    document.querySelector("[data-record-proof]")?.replaceChildren(item.asOf);
    document.querySelector("[data-record-state]")?.replaceChildren(item.state);
    document.querySelector("[data-record-name]")?.replaceChildren(item.name);
    document.querySelector("[data-record-count]")?.replaceChildren(`Stage ${index + 1} of ${recordData.length}`);
    document.querySelector("[data-story-label]")?.replaceChildren(`${String(index + 1).padStart(2, "0")} / ${item.name}`);
    document.querySelector("[data-story-title]")?.replaceChildren(item.title);
    document.querySelector("[data-story-text]")?.replaceChildren(item.text);
  };
  recordTabs.forEach((button, index) => button.addEventListener("click", () => setRecordStage(index)));
  storyButtons.forEach((button, index) => button.addEventListener("click", () => setRecordStage(index)));

  const lanes = [...document.querySelectorAll("[data-lane]")];
  const slip = document.querySelector("[data-moving-slip]");
  const previousButton = document.querySelector("[data-slip-previous]");
  const nextButton = document.querySelector("[data-slip-next]");
  const slipPosition = document.querySelector("[data-slip-position]");
  let laneIndex = 0;
  const moveSlip = (nextIndex) => {
    if (!slip || !lanes[nextIndex]) return;
    laneIndex = nextIndex;
    lanes[laneIndex].querySelector(".dispatch-slot")?.append(slip);
    if (!reducedMotion) {
      slip.classList.remove("is-advancing");
      window.requestAnimationFrame(() => slip.classList.add("is-advancing"));
    }
    const laneName = lanes[laneIndex].dataset.lane || "";
    const viewName = lanes[laneIndex].querySelector(".lane-head")?.textContent || laneName;
    slipPosition?.replaceChildren(`View ${laneIndex + 1} of ${lanes.length}: ${viewName}`);
    previousButton?.toggleAttribute("disabled", laneIndex === 0);
    nextButton?.toggleAttribute("disabled", laneIndex === lanes.length - 1);
    slip.setAttribute("data-state", laneName);
  };
  previousButton?.addEventListener("click", () => moveSlip(Math.max(0, laneIndex - 1)));
  nextButton?.addEventListener("click", () => moveSlip(Math.min(lanes.length - 1, laneIndex + 1)));
  if (slip) moveSlip(0);

  const workday = document.querySelector("[data-workday]");
  const updateDayMarker = () => {
    if (!workday) return;
    const rect = workday.getBoundingClientRect();
    const travel = rect.height + window.innerHeight;
    const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / travel));
    workday.style.setProperty("--day-progress", progress.toFixed(3));
  };
  if (workday) {
    updateDayMarker();
    window.addEventListener("scroll", updateDayMarker, { passive: true });
  }

  const lensScene = document.querySelector("[data-lens-scene]");
  const lensBack = document.querySelector("[data-lens-back]");
  const lensForward = document.querySelector("[data-lens-forward]");
  const lensMapItems = [...document.querySelectorAll("[data-lens-map]")];
  const lensData = [
    ["All Shops", "From your shop systems. Last updated Tuesday at 7:10 AM."],
    ["Northline Collision", "From the group view. Last updated Tuesday at 7:10 AM. One aging repair order needs attention."],
    ["Aging repair order", "From the shop system. Last updated Tuesday at 7:10 AM. The reason for the delay is unavailable."],
    ["11 days in stage", "From the repair-order history. Last updated Tuesday at 7:10 AM. RevvOS does not change the record."],
    ["Recommended manager follow-up", "Based on the repair-order history. Last updated Tuesday at 7:10 AM. Ready for a person to review."],
  ];
  let lensDepth = 0;
  const setLensDepth = (nextDepth) => {
    if (!lensScene) return;
    lensDepth = Math.min(lensData.length - 1, Math.max(0, nextDepth));
    lensScene.style.setProperty("--lens-depth", String(lensDepth));
    document.documentElement.style.setProperty("--lens-depth", String(lensDepth));
    document.querySelector("[data-lens-title]")?.replaceChildren(lensData[lensDepth][0]);
    document.querySelector("[data-lens-text]")?.replaceChildren(lensData[lensDepth][1]);
    document.querySelector("[data-lens-level]")?.replaceChildren(`Focus ${lensDepth + 1} of ${lensData.length}`);
    lensBack?.toggleAttribute("disabled", lensDepth === 0);
    lensForward?.toggleAttribute("disabled", lensDepth === lensData.length - 1);
    lensMapItems.forEach((item, index) => item.classList.toggle("is-current", index === lensDepth));
  };
  lensBack?.addEventListener("click", () => setLensDepth(lensDepth - 1));
  lensForward?.addEventListener("click", () => setLensDepth(lensDepth + 1));
  if (lensScene) setLensDepth(0);

  const lensChapters = [...document.querySelectorAll("[data-lens-chapter]")];
  if (lensScene && lensChapters.length && !reducedMotion) {
    const lensObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setLensDepth(Number(visible.target.dataset.lensChapter));
    }, { rootMargin: "-28% 0px -45%", threshold: [0, .25, .5] });
    lensChapters.forEach((chapter) => lensObserver.observe(chapter));
  }
})();
