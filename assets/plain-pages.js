(() => {
  const sharedFaqs = {
    replace: ["Does RevvOS replace our current software?", "No. RevvOS works beside the shop, customer, finance, and marketing tools you already use."],
    automatic: ["Does RevvOS act without a person?", "Only when your business has approved and set up that exact action. Customer, money, safety, policy, and reputation decisions can stay behind a human checkpoint."],
    missing: ["What happens when information is missing?", "RevvOS says what is missing and sends the item to a person. It does not invent an answer."]
  };

  const pages = {
    "/platform": {
      visual: "signal-sorter",
      section: "Platform",
      eyebrow: "The whole system",
      title: "RevvOS finds work your shops are about to miss.",
      lede: "It watches the tools your team already uses. When something needs attention, it prepares the next step and gives it to the right person.",
      before: "People check several systems, build side lists, and rely on memory to catch unfinished work.",
      after: "The important item, the reason it matters, and a ready next step arrive together.",
      scenario: {
        title: "An estimate has gone quiet",
        source: "Shop management system",
        item: "$1,240 brake estimate",
        signal: "The estimate is still open after eight days, with no recent customer reply.",
        notice: "RevvOS spots the age and missing reply, then puts the estimate on today’s attention list.",
        agent: "Estimate Follow-up Agent",
        work: "It gathers the estimate and recent contact notes, then writes a short follow-up draft.",
        human: "The service advisor checks the history and chooses to text, call, wait, or close the item.",
        result: "The choice is saved with the estimate, so the team can see what happened next."
      },
      outcomes: [["One list", "Important work from connected tools appears in one place."], ["A ready next step", "The useful details and first draft arrive together."], ["A clear record", "The owner, decision, and result stay with the work."]],
      revvos: ["Watch connected information", "Find work that may be missed", "Prepare a useful next step", "Keep the status visible"],
      people: ["Check the real-world details", "Change or reject the suggestion", "Approve sensitive actions", "Handle judgment calls"],
      faqs: [sharedFaqs.replace, sharedFaqs.automatic, sharedFaqs.missing]
    },
    "/solutions/multi-location": {
      visual: "location-radar",
      section: "Solutions",
      eyebrow: "For groups with several shops",
      title: "See which shop needs help first.",
      lede: "RevvOS compares the work across your locations and points leaders to the shop, job, or customer issue that needs attention now.",
      before: "Leaders chase updates from each manager and compare different spreadsheets after the fact.",
      after: "Every shop is seen the same way, and the location that needs help rises to the top.",
      scenario: {
        title: "One shop is falling behind on estimates",
        source: "Connected shop systems",
        item: "14 old estimates at Westside",
        signal: "Three shops have unanswered estimates. Westside has the oldest group and the most money waiting.",
        notice: "RevvOS compares the locations and shows why Westside needs attention first.",
        agent: "Group Operations Agent",
        work: "It prepares the estimate list and sends it to the manager responsible for Westside.",
        human: "The manager checks local details and decides how the advisors should follow up.",
        result: "Leadership can see who owns the work and whether the old estimates are being handled."
      },
      outcomes: [["Every shop together", "See important work across the group without another spreadsheet."], ["The reason is clear", "Open the exact jobs or estimates behind the warning."], ["Local ownership", "The next step goes to the manager closest to the work."]],
      revvos: ["Compare connected locations", "Rank what needs attention", "Show the records behind it", "Send the handoff"],
      people: ["Confirm the shop situation", "Choose the response", "Coach the local team", "Complete the work"],
      faqs: [["Do all shops need the same software?", "No. RevvOS can organize information from different tools when those connections are available."], ["What if one shop’s connection is down?", "That shop is marked as unavailable. RevvOS does not present old information as current."], ["Do local managers stay in control?", "Yes. Group leaders gain a shared view while local managers keep local decisions."]]
    },
    "/solutions/daily-operations": {
      visual: "day-board",
      section: "Solutions",
      eyebrow: "For today’s work",
      title: "Give every manager a short list for today.",
      lede: "RevvOS pulls out the jobs, estimates, parts, callbacks, and pickups that need help before they slow the day down.",
      before: "Managers start the day checking screens, asking questions, and rebuilding yesterday’s loose ends.",
      after: "They begin with a short, explained list of work that needs a decision or handoff.",
      scenario: {
        title: "Three loose ends need a manager",
        source: "Jobs, calls, and booking tools",
        item: "3 items waiting this morning",
        signal: "A part is late, an estimate needs a callback, and a finished vehicle is still waiting for pickup.",
        notice: "RevvOS groups the three items and explains what is holding up each one.",
        agent: "Daily Operations Agent",
        work: "It prepares the staff task or customer note needed for each item.",
        human: "The manager checks what changed, assigns the work, and approves anything going to a customer.",
        result: "Each loose end now has an owner, a next step, and a visible status."
      },
      outcomes: [["A calmer start", "Managers see the work that needs attention first."], ["Cleaner handoffs", "The issue, owner, and next step stay together."], ["Fewer loose ends", "Callbacks and pickups do not disappear into side notes."]],
      revvos: ["Collect unfinished work", "Sort it by urgency", "Explain what is stuck", "Prepare the handoff"],
      people: ["Confirm what changed", "Assign or approve", "Talk with customers", "Finish the shop work"],
      faqs: [["Is this a new dispatch system?", "No. It is a focused attention list that works beside the systems your team already uses."], ["What can appear on the list?", "Old estimates, delayed jobs, parts problems, callbacks, pickups, and other agreed items."], sharedFaqs.automatic]
    },
    "/solutions/executive-visibility": {
      visual: "executive-brief",
      section: "Solutions",
      eyebrow: "For senior leaders",
      title: "See the few decisions that truly need you.",
      lede: "RevvOS turns activity from every shop into a short owner brief. Routine work stays with the team; unusual or important items move up.",
      before: "Leaders read long reports or call managers just to learn where the real problem is.",
      after: "They see only the decisions that need leadership, with the supporting facts already attached.",
      scenario: {
        title: "A repair has been stuck for 11 days",
        source: "Shop and manager updates",
        item: "Repair order 1842",
        signal: "The job has not moved after the manager followed the normal process.",
        notice: "RevvOS raises it to the leadership brief and shows how long it has been stuck.",
        agent: "Leadership Brief Agent",
        work: "It writes a short summary, links the original record, and suggests who should act next.",
        human: "The leader checks the facts, makes the decision, or sends it to the right person.",
        result: "The decision returns to the local manager with a named owner and due date."
      },
      outcomes: [["A shorter brief", "See the few items that need leadership today."], ["Facts attached", "Open the shop and original record behind each item."], ["Decisions move", "Every answer goes back to a named person."]],
      revvos: ["Find unusual or important items", "Explain why they moved up", "Attach the supporting facts", "Suggest a next owner"],
      people: ["Check the facts", "Make the judgment call", "Assign the response", "Support the local manager"],
      faqs: [["Is this another report?", "No. It is a short list of decisions that need attention, with details available when you open an item."], ["Can I see where the information came from?", "Yes. Each item can show its source and when it was last updated."], ["Does RevvOS make the executive decision?", "No. It prepares the facts and a suggested next step. A leader decides."]]
    },
    "/roles/owner": {
      visual: "owner-brief",
      section: "Roles",
      eyebrow: "For owners",
      title: "Know where the business needs you today.",
      lede: "RevvOS gives you one short view of the money, customer, and shop issues that need an owner. Everything else stays with the team.",
      before: "You ask every manager for updates, then work out which problems actually need your attention.",
      after: "The few owner-level decisions are waiting with the facts, shop, and responsible person attached.",
      scenario: {
        title: "Your morning owner brief is ready",
        source: "All connected locations",
        item: "3 owner decisions",
        signal: "One shop has old estimates, one has a stalled job, and one has a serious customer issue.",
        notice: "RevvOS removes routine items and keeps the three that need owner attention.",
        agent: "Owner Brief Agent",
        work: "It summarizes each issue, shows where it came from, and suggests the right next owner.",
        human: "You decide, assign, or leave the item with the local manager.",
        result: "Each decision goes back to the shop, and your brief shows what is still open."
      },
      outcomes: [["Fewer status calls", "Start with the few items that truly need you."], ["No mystery numbers", "See the shop and source behind every issue."], ["Clear follow-through", "Every decision goes back to a named person."]],
      revvos: ["Prepare the owner brief", "Remove routine noise", "Keep proof with each item", "Track open decisions"],
      people: ["Choose where to step in", "Approve, decline, or assign", "Add business context", "Support managers"],
      faqs: [["Do I need to review everything?", "No. Routine work stays with the team. RevvOS raises only the items that match your rules for owner attention."], ["How current is the view?", "Each item can show where it came from and when it was last updated."], ["Can I send work back to a manager?", "Yes. Assigning the next step keeps local work with the right local person."]]
    },
    "/roles/operations": {
      visual: "ops-bottleneck",
      section: "Roles",
      eyebrow: "For operations leaders",
      title: "Catch stuck work before it becomes a fire.",
      lede: "RevvOS watches jobs, estimates, parts, callbacks, and handoffs across every shop, then shows operations where help is needed.",
      before: "Operations learns about delays through escalations, customer complaints, or end-of-day calls.",
      after: "Aging work appears early with the shop, reason, and next manager action together.",
      scenario: {
        title: "A late part is holding up a repair",
        source: "Repair order and parts updates",
        item: "Repair order 2716",
        signal: "The vehicle is waiting, the delivery time is missing, and the customer needs an update.",
        notice: "RevvOS connects the delayed job to the missing part update.",
        agent: "Operations Agent",
        work: "It prepares a manager check and a customer-update draft.",
        human: "Operations confirms the real part status and chooses the right response.",
        result: "The shop owns the next step, and operations can see whether the delay is moving."
      },
      outcomes: [["Problems appear sooner", "See aging work before a customer has to complain."], ["Managers get context", "Send the job, reason, and next step together."], ["Patterns stand out", "Notice the same delay across several shops."]],
      revvos: ["Watch for aging work", "Connect related details", "Prepare the manager handoff", "Show repeated patterns"],
      people: ["Confirm the shop situation", "Choose the response", "Coach the manager", "Fix the underlying process"],
      faqs: [sharedFaqs.replace, ["What belongs on the list?", "Only agreed work that needs attention, such as old estimates, delayed jobs, parts problems, callbacks, and pickups."], ["Can RevvOS change a repair order?", "Only if that exact action is connected and approved. The normal starting point is a reviewable recommendation."]]
    },
    "/roles/marketing": {
      visual: "marketing-content",
      section: "Roles",
      eyebrow: "For marketing teams",
      title: "Turn real shop moments into useful local content.",
      lede: "RevvOS keeps the photo, shop note, draft, and approval together so marketing can create faster without inventing the story.",
      before: "Good photos sit in text threads while marketing chases context and starts every post from scratch.",
      after: "A real shop moment arrives as a clear draft with its facts and reviewer attached.",
      scenario: {
        title: "A technician shares one brake photo",
        source: "Shop photo and technician note",
        item: "Photo of a worn brake rotor",
        signal: "The photo teaches something useful, but marketing does not have the repair context.",
        notice: "RevvOS keeps the image and the technician’s explanation together.",
        agent: "Local Content Agent",
        work: "It turns the real repair note into a short post draft in everyday language.",
        human: "Marketing checks the repair facts, customer privacy, and brand voice.",
        result: "The approved post is ready for the chosen channel, with its source material saved."
      },
      outcomes: [["More real stories", "Use work already happening in each shop."], ["Faster first drafts", "Begin with the photo, facts, and a useful draft."], ["Safer review", "Claims, offers, and customer details stay behind approval."]],
      revvos: ["Keep photos and notes together", "Write a plain first draft", "Send it to the right reviewer", "Track its status"],
      people: ["Check the repair facts", "Protect customer privacy", "Set the brand voice", "Approve publishing"],
      faqs: [["Does RevvOS invent shop stories?", "No. Drafts should begin with real photos, notes, reviews, and work from your shops."], ["Does it publish automatically?", "Only when your team has approved and set up that publishing process."], ["Can every shop contribute?", "Yes. The collection step can fit the way your locations already share photos and notes."]]
    },
    "/use-cases/reputation": {
      visual: "reputation-split",
      section: "Use cases",
      eyebrow: "Reviews and customer recovery",
      title: "Handle a bad review quickly—and carefully.",
      lede: "RevvOS brings the review to the right manager, drafts a calm reply, and keeps the private customer follow-up beside it.",
      before: "A serious review waits in an inbox while the team searches for the repair history and the right manager.",
      after: "The manager receives the review, context, public reply draft, and private recovery task together.",
      scenario: {
        title: "A two-star review mentions a return visit",
        source: "Review site and shop history",
        item: "Two-star customer review",
        signal: "The customer is frustrated and says the vehicle had to come back.",
        notice: "RevvOS sends the review to the manager responsible for that shop.",
        agent: "Review Response Agent",
        work: "It drafts a calm public reply and creates a separate private follow-up task.",
        human: "The manager checks what happened, edits the reply, and decides how to help the customer.",
        result: "The public response and private recovery work stay connected until both are handled."
      },
      outcomes: [["Faster awareness", "The right manager sees a serious review sooner."], ["A safer first draft", "Start with a calm reply that can be changed."], ["Real recovery work", "Keep the public reply and private follow-up connected."]],
      revvos: ["Spot important reviews", "Find the right shop owner", "Draft a public reply", "Create the private task"],
      people: ["Check what happened", "Choose the right tone", "Approve the public reply", "Handle the customer"],
      faqs: [["Does RevvOS post the reply by itself?", "Not unless your business has approved and set up that exact action. A person can review every public reply."], ["Can software fix the customer issue?", "No. RevvOS organizes the response; a person handles the relationship."], ["What about positive reviews?", "They can also be organized for replies or future content, with public work reviewed by a person."]]
    },
    "/use-cases/local-seo": {
      visual: "listing-check",
      section: "Use cases",
      eyebrow: "Local search",
      title: "Keep every shop’s online information correct.",
      lede: "RevvOS spots wrong hours, missing services, and mismatched contact details, then asks the person who knows the local answer.",
      before: "Wrong details stay online until a customer complains or someone remembers to check every listing.",
      after: "A mismatch creates one clear correction task for the local manager and brand team.",
      scenario: {
        title: "Holiday hours do not match",
        source: "Google listing and shop website",
        item: "Different closing times",
        signal: "Google shows 5 PM. The website shows 3 PM. The local manager knows the real schedule.",
        notice: "RevvOS flags the mismatch and shows both public sources side by side.",
        agent: "Local Search Agent",
        work: "It prepares the corrected hours and asks the shop manager to confirm them.",
        human: "The manager confirms the schedule; an authorized person makes the public update.",
        result: "The live listing is checked again and the corrected hours are recorded."
      },
      outcomes: [["Fewer wrong listings", "Find mismatched hours, phones, addresses, and services."], ["Local answers stay local", "Ask the manager who knows the shop."], ["The fix is checked", "Confirm the live result after the update."]],
      revvos: ["Compare public information", "Show what does not match", "Prepare the correction", "Check the result"],
      people: ["Confirm local facts", "Approve the change", "Update the authorized listing", "Handle unusual cases"],
      faqs: [["Does RevvOS change Google by itself?", "Only if your business has approved and connected that exact action. A person can review every change."], ["Can each shop confirm its own hours?", "Yes. The question can go to the local manager while the brand team keeps final control."], ["What can it check?", "Hours, phone numbers, addresses, services, website pages, directory listings, and other agreed public details."]]
    },
    "/use-cases/social-media": {
      visual: "social-story",
      section: "Use cases",
      eyebrow: "Social content",
      title: "Turn one shop photo into a ready post.",
      lede: "RevvOS keeps the real photo, technician note, first draft, and approval in one place.",
      before: "Photos get lost in messages, and marketing lacks the facts to turn them into useful posts.",
      after: "Each real shop moment becomes a reviewable draft without losing its source or owner.",
      scenario: {
        title: "A worn rotor tells a useful story",
        source: "Technician photo and note",
        item: "One brake repair photo",
        signal: "A technician shares the image and one sentence about what the customer should know.",
        notice: "RevvOS saves the photo and note as one content item.",
        agent: "Social Content Agent",
        work: "It writes a short post and asks for any missing detail or second photo.",
        human: "Marketing checks accuracy, privacy, tone, and the best time to publish.",
        result: "The approved post is ready to schedule, with the original shop material attached."
      },
      outcomes: [["Ideas stop getting lost", "Keep shop photos and notes together."], ["Posts stay useful", "Explain real repairs in words customers understand."], ["Sensitive details get checked", "Privacy, claims, and offers receive human review."]],
      revvos: ["Save the photo and note", "Draft the post", "Ask for missing details", "Route it for review"],
      people: ["Check facts and privacy", "Edit the brand voice", "Approve the post", "Choose where and when"],
      faqs: [["Who checks a sensitive post?", "A person chosen by your business reviews it before it goes public."], ["Does RevvOS publish the post?", "Only when your business has approved and set up that publishing process."], ["How do shops share material?", "They can use the photos, notes, and files they already create."]]
    },
    "/use-cases/customer-engagement": {
      visual: "estimate-engagement",
      section: "Use cases",
      eyebrow: "Estimate follow-up",
      title: "Follow up before a good estimate goes cold.",
      lede: "RevvOS finds open estimates with no answer, drafts a useful follow-up, and gives it to the advisor who knows the customer.",
      before: "Advisors remember follow-ups between calls and jobs, so good estimates can quietly age.",
      after: "The right estimate appears with recent customer context and a ready message.",
      scenario: {
        title: "A $1,240 brake estimate is still open",
        source: "Estimate and customer messages",
        item: "$1,240 brake estimate",
        signal: "The estimate was sent eight days ago and no customer decision appears in the connected tools.",
        notice: "RevvOS places the estimate on the assigned advisor’s follow-up list.",
        agent: "Customer Follow-up Agent",
        work: "It gathers the amount, service, and recent contact, then drafts a short message.",
        human: "The advisor checks the history and chooses to text, call, wait, or close the item.",
        result: "The choice and next follow-up date stay with the estimate."
      },
      outcomes: [["Old estimates stay visible", "See quotes that have waited too long."], ["Advisors start prepared", "The amount, notes, and draft stay together."], ["The conversation stays human", "The advisor chooses the message, timing, and channel."]],
      revvos: ["Find estimates with no answer", "Gather the useful context", "Draft the follow-up", "Track the choice"],
      people: ["Check customer history", "Choose text, call, or wait", "Edit the message", "Handle the conversation"],
      faqs: [["Does RevvOS contact customers without us?", "Only when your business has deliberately approved and set up that exact action."], ["What details can be included?", "The estimate, recent calls or texts, form details, and notes available to that follow-up."], ["Can the advisor call instead?", "Yes. The advisor can text, call, wait, or decide that no follow-up is appropriate."]]
    },
    "/use-cases/operational-visibility": {
      visual: "wip-focus",
      section: "Use cases",
      eyebrow: "Work in progress",
      title: "See the exact job that is stuck.",
      lede: "RevvOS starts with every shop, narrows down to the repair that needs help, and shows the manager what to check next.",
      before: "A group-level number looks wrong, but operations still has to ask each shop what caused it.",
      after: "The exact job, its age, the missing detail, and the next owner appear together.",
      scenario: {
        title: "A repair order has not moved in 11 days",
        source: "Shop management system",
        item: "Repair order 1842",
        signal: "The job is still in the same stage, and the connected record does not explain the delay.",
        notice: "RevvOS shows the aging job and clearly marks the reason as missing.",
        agent: "Work-in-Progress Agent",
        work: "It prepares a manager task to check the hold and update the customer.",
        human: "The manager opens the original repair order, confirms the real cause, and handles the next step.",
        result: "The reason and owner are recorded, and the group view reflects the current status."
      },
      outcomes: [["See the exact job", "Move from the group to the repair behind the problem."], ["Missing stays missing", "RevvOS does not invent a reason."], ["Managers know what to check", "The shop, job, age, and owner arrive together."]],
      revvos: ["Find aging work", "Show the original details", "Mark what is missing", "Prepare the manager task"],
      people: ["Open the original record", "Confirm the cause", "Update the customer", "Move the repair forward"],
      faqs: [["Is this another dashboard?", "It is a focused work list. It shows problems that need action instead of every normal job."], ["Does RevvOS move the repair order?", "Only if that action has been connected and approved. A manager can review without RevvOS changing the job."], sharedFaqs.missing]
    },
    "/use-cases/compliance": {
      visual: "compliance-proof",
      section: "Use cases",
      eyebrow: "Repeatable shop processes",
      title: "Make important checks easy to follow.",
      lede: "RevvOS gives the right person the approved steps, the needed files, and a clear place to record the result.",
      before: "Important checks rely on memory, separate documents, and follow-up messages.",
      after: "The approved checklist, evidence, reviewer, and result stay together.",
      scenario: {
        title: "A calibration check is due",
        source: "Repair order and calibration report",
        item: "Release check for vehicle 5821",
        signal: "The report must match the repair order before the vehicle is released.",
        notice: "RevvOS assigns the approved check to the qualified person and shows the required steps.",
        agent: "Process Check Agent",
        work: "It places the report, repair order, checklist, and review question together.",
        human: "A qualified person compares them, records the result, and returns anything that is wrong.",
        result: "The file, reviewer, answer, and date remain attached as the review record."
      },
      outcomes: [["The same steps everywhere", "Give each shop the approved process."], ["Checks have owners", "Assign a person and due time."], ["The record stays attached", "Keep the evidence, answer, reviewer, and date together."]],
      revvos: ["Show the approved checklist", "Attach the needed files", "Remind the assigned person", "Keep the review record"],
      people: ["Provide the real procedure", "Make the qualified judgment", "Correct failed items", "Approve release"],
      faqs: [["Does RevvOS create our safety or legal rules?", "No. Your business provides and approves the real procedure. RevvOS helps people follow and record it."], ["What can be attached?", "A report, photo, note, form, or other file your business uses."], ["Can a reviewer send an item back?", "Yes. A person can accept it, reject it, or ask for a correction."]]
    },
    "/integrations": {
      visual: "connection-board",
      section: "Platform",
      eyebrow: "Works with your current tools",
      title: "Keep your software. Connect the work.",
      lede: "RevvOS uses approved information from the tools you already have, then brings only what a person needs for the next step.",
      before: "The estimate lives in one system, the customer message in another, and the follow-up in someone’s memory.",
      after: "The useful details meet in one work item that still links back to the original tools.",
      scenario: {
        title: "One follow-up needs two systems",
        source: "Shop system and customer messages",
        item: "Open brake estimate",
        signal: "The estimate is in the shop system while the customer’s latest reply is in a messaging tool.",
        notice: "RevvOS brings the available details together and keeps links to both original records.",
        agent: "Estimate Follow-up Agent",
        work: "It prepares one advisor task with the amount, service, and latest customer context.",
        human: "The advisor checks the original tools and decides what to do.",
        result: "The team sees one owner and status without replacing either system."
      },
      outcomes: [["No forced replacement", "Keep your shop, customer, finance, and marketing tools."], ["Clear connection status", "See what is current and what is unavailable."], ["One useful handoff", "Bring only the details needed for the next decision."]],
      revvos: ["Read approved information", "Connect related details", "Link to the original record", "Prepare the work item"],
      people: ["Choose what to connect", "Confirm the information", "Control access", "Complete work in the proper tool"],
      faqs: [sharedFaqs.replace, ["Does every logo mean a connection is live?", "No. Each connection must be confirmed for your business before anyone treats it as live."], ["What if a connection stops?", "RevvOS marks the information as unavailable instead of showing an old value as current."]]
    },
    "/security": {
      visual: "permission-gates",
      section: "Platform",
      eyebrow: "Control and review",
      title: "Choose what RevvOS can see and do.",
      lede: "Start with one job, the smallest useful set of information, and a named person for every sensitive decision.",
      before: "Automation rules are vague, so people cannot tell what software can do or who is responsible.",
      after: "Access, allowed actions, human checkpoints, and missing-data rules are named before launch.",
      scenario: {
        title: "A customer message needs approval",
        source: "Approved customer and repair details",
        item: "Promise-sensitive reply",
        signal: "There is enough information to draft a response, but it could create a customer promise.",
        notice: "RevvOS keeps the message in draft and shows the information used to write it.",
        agent: "Customer Message Agent",
        work: "It prepares the reply and sends it to the reviewer chosen by your business.",
        human: "The reviewer edits, approves, rejects, or asks for more information.",
        result: "The draft, reviewer, decision, and time remain together in the history."
      },
      outcomes: [["Only what is needed", "Begin with the smallest useful access."], ["Clear checkpoints", "Name the decisions that always need a person."], ["No guessing", "Stop and ask for help when information is missing."]],
      revvos: ["Use only approved information", "Follow allowed actions", "Stop at human checkpoints", "Keep the decision history"],
      people: ["Choose access", "Name reviewers", "Approve sensitive actions", "Test failure cases"],
      faqs: [sharedFaqs.automatic, sharedFaqs.missing, ["What should we test before launch?", "Test who can see the work, who can approve it, what happens when a connection fails, and what record remains."]]
    },
    "/pricing": {
      visual: "pilot-scope",
      section: "Pricing",
      eyebrow: "Start with one real problem",
      title: "Start small. Prove one job works.",
      lede: "We price a clear first use case: the shops involved, the tools needed, the people reviewing, and the result you want to measure.",
      before: "You buy a large promise before anyone agrees on the first useful job or how success will be measured.",
      after: "One small pilot has a clear scope, human owner, result, and decision date.",
      scenario: {
        title: "A two-shop estimate pilot",
        source: "Two shop systems",
        item: "47 old estimates",
        signal: "Both shops want to learn whether a prepared follow-up list will help advisors handle old estimates.",
        notice: "The pilot defines which estimates count, which data is available, and which advisors will review them.",
        agent: "Pilot Follow-up Agent",
        work: "It prepares the agreed estimate list and follow-up drafts for the pilot period.",
        human: "Advisors review the work, and leaders compare the result with the agreed measure.",
        result: "The team can continue, change, or stop based on a visible pilot result."
      },
      outcomes: [["Clear starting point", "Begin with one job everyone understands."], ["No surprise scope", "Agree on shops, tools, reviewers, and measures first."], ["A real decision", "Use the pilot result to choose what happens next."]],
      revvos: ["Support the agreed job", "Show work and review status", "Keep the pilot measure visible", "Produce a clear result"],
      people: ["Choose the problem", "Provide access and reviewers", "Use the pilot", "Decide whether to expand"],
      faqs: [["Why is there not one price for every shop?", "The first cost depends on the shops, connections, people, and job being tested."], ["Do we need to start everywhere?", "No. The recommended first step is one useful job with a small, clear scope."], ["What comes after the first conversation?", "A recommended pilot scope, including what is included and any connection work that may be needed."]]
    },
    "/demo": {
      visual: "problem-mapper",
      section: "Demo",
      eyebrow: "Bring one recurring problem",
      title: "Show us the work your team keeps chasing.",
      lede: "We will use one real example to show what RevvOS could notice, prepare, send to a person, and keep visible.",
      before: "You sit through a feature tour that never reaches the problem your shops actually have.",
      after: "You see your own recurring job mapped into a simple RevvOS work path.",
      scenario: {
        title: "What a useful demo looks like",
        source: "Your real recurring problem",
        item: "One missed handoff",
        signal: "You explain one job that is often lost, delayed, or rebuilt by hand.",
        notice: "Together, we find where the information lives and where the work currently stops.",
        agent: "A Job-Specific Agent",
        work: "We show the list, draft, check, or manager handoff RevvOS could prepare.",
        human: "We name who reviews the work, what they can decide, and what must stay manual.",
        result: "You leave with a practical pilot idea—or a clear reason not to proceed."
      },
      outcomes: [["Your problem first", "Begin with work your team already understands."], ["A clear before and after", "See today’s handoff beside a simpler version."], ["An honest next step", "Leave with a practical pilot idea or a clear no."]],
      revvos: ["Organize the example", "Show a possible next step", "Explain the limits", "Define what can be measured"],
      people: ["Bring the real problem", "Explain today’s process", "Name the reviewer", "Choose a useful result"],
      faqs: [["What should I bring?", "One recurring problem, the tools involved, and the people who handle it today."], ["Do I need technical details?", "No. Explain the problem in normal shop language."], ["Is this a feature tour?", "No. It is a working conversation about one real job and whether RevvOS can help."]],
      form: true
    },
    "/case-studies": {
      visual: "scenario-film",
      section: "Examples",
      eyebrow: "Illustrative shop scenarios",
      title: "See one RevvOS job from start to finish.",
      lede: "These fictional examples use common shop situations to show what the software prepares and where a person stays in control.",
      before: "A product claim describes an outcome without showing the actual work between the problem and the result.",
      after: "Each example shows the source, agent work, human decision, and recorded result.",
      scenario: {
        title: "An eight-day-old estimate",
        source: "Fictional shop system",
        item: "$1,240 brake estimate",
        signal: "The customer has not answered, and the advisor has several other calls and jobs.",
        notice: "RevvOS places the estimate on the advisor’s follow-up list.",
        agent: "Estimate Follow-up Agent",
        work: "It prepares a short message using the estimate and fictional recent notes.",
        human: "The advisor chooses to text, call, wait, or close the item.",
        result: "The choice is recorded so the next person can see what happened."
      },
      outcomes: [["See the problem", "Every example begins with a shop situation."], ["See the prepared work", "The draft, task, or check is shown clearly."], ["See the human decision", "The person who owns the result is named."]],
      revvos: ["Find the missed item", "Gather the useful details", "Prepare the next step", "Keep the status visible"],
      people: ["Check the real details", "Choose the response", "Complete the work", "Confirm the result"],
      faqs: [["Are these customer case studies?", "No. They are fictional examples built from common automotive shop situations."], ["Do they promise the same result for every shop?", "No. Results depend on the information, process, connections, and people involved."], ["Can we use our own example?", "Yes. Bring one recurring problem to a demo and we can map it in the same format."]]
    },
    "/resources": {
      visual: "handoff-map",
      section: "Resources",
      eyebrow: "A practical starting point",
      title: "Find one place where work gets stuck.",
      lede: "Follow a real item from its original tool to the person responsible. Then write down the smallest next step that would keep it moving.",
      before: "The team says communication is the problem, but no one follows one real item closely enough to see where it stops.",
      after: "One specific handoff has a source, owner, next step, and time to check the result.",
      scenario: {
        title: "Map one missed handoff",
        source: "Any real shop tool",
        item: "One old estimate or delayed job",
        signal: "Choose a real item that everyone agrees is stuck.",
        notice: "Write where it lives, when it last changed, and who is responsible now.",
        agent: "The RevvOS version",
        work: "RevvOS can watch those same facts and prepare the smallest useful next step.",
        human: "Name who should review it, what that person can decide, and when to check back.",
        result: "You now have one clear job that can be tested before attempting a larger rollout."
      },
      outcomes: [["A specific problem", "Replace a broad complaint with one real item."], ["A visible handoff", "See where the work changes people or tools."], ["A named next owner", "Finish with one person, next step, and check-in time."]],
      revvos: ["Watch the agreed facts", "Keep the item and next step together", "Show who is waiting", "Track the status"],
      people: ["Choose the starting item", "Confirm the facts", "Name the owner", "Decide whether the process improved"],
      faqs: [["Do we need to download anything?", "No. Use the questions on this page with a note, whiteboard, or spreadsheet."], ["Which problem should we choose?", "Pick one that happens often, matters to customers or money, and has a clear owner."], ["What should we have at the end?", "One sentence naming what the tool shows, what needs to happen, who reviews it, and by when."]]
    }
  };

  const renderSharedHero = (page) => `
    <aside class="os-system os-reveal" aria-labelledby="os-system-title">
      <div class="os-system-head">
        <span class="os-live-dot" aria-hidden="true"></span>
        <p id="os-system-title">RevvOS in one picture</p>
      </div>
      <div class="os-system-flow">
        <div class="os-system-node os-system-source">
          <small>1 · Watch</small>
          <strong>Your existing tools</strong>
          <span>${page.scenario.source}</span>
        </div>
        <span class="os-system-arrow" aria-hidden="true">↓</span>
        <div class="os-system-node os-system-core">
          <img src="/assets/logos/revvos-mark.svg?v=3" alt="">
          <div><small>2 · Prepare</small><strong>RevvOS agents</strong><span>Software teammates, each assigned one repeatable job</span></div>
        </div>
        <span class="os-system-arrow" aria-hidden="true">↓</span>
        <div class="os-system-node os-system-human">
          <small>3 · Decide when needed</small>
          <strong>The right person</strong>
          <span>Checks judgment calls and sensitive actions</span>
        </div>
        <span class="os-system-arrow" aria-hidden="true">↓</span>
        <div class="os-system-node os-system-result">
          <small>4 · Know what happened</small>
          <strong>Work moves. The result stays visible.</strong>
        </div>
      </div>
    </aside>
  `;

  const renderPrototypeHero = (page) => {
    if (page.visual === "signal-sorter") {
      return `
        <aside class="prototype-scene scene-sorter os-reveal" data-scene aria-labelledby="sorter-title">
          <div class="scene-head">
            <div><span class="os-live-dot" aria-hidden="true"></span><p id="sorter-title">Live signal sorter</p></div>
            <button class="scene-replay" type="button" data-scene-replay>Replay</button>
          </div>
          <div class="sorter-board">
            <div class="sorter-column sorter-inputs">
              <small>Connected tools</small>
              <article class="sorter-card sorter-card-a"><span>Shop system</span><strong>Estimate · 8 days old</strong></article>
              <article class="sorter-card sorter-card-b"><span>Customer messages</span><strong>No recent reply</strong></article>
              <article class="sorter-card sorter-card-c"><span>Review site</span><strong>New 2-star review</strong></article>
            </div>
            <div class="sorter-engine" aria-label="RevvOS sorts each signal">
              <img src="/assets/logos/revvos-mark.svg?v=3" alt="">
              <strong>RevvOS</strong>
              <span>Watches · understands · routes</span>
              <i class="sorter-scan" aria-hidden="true"></i>
            </div>
            <div class="sorter-column sorter-results">
              <small>What happens next</small>
              <article class="sorter-result sorter-result-a"><span>Agent working</span><strong>Follow-up draft</strong><em>Estimate Agent</em></article>
              <article class="sorter-result sorter-result-b"><span>Needs a person</span><strong>Customer review</strong><em>Shop manager</em></article>
              <article class="sorter-result sorter-result-c"><span>Routine</span><strong>Nothing to chase</strong><em>Stays out of the way</em></article>
            </div>
          </div>
          <p class="scene-caption"><strong>The point:</strong> RevvOS separates routine activity from work that needs an agent or a person.</p>
        </aside>
      `;
    }

    if (page.visual === "location-radar") {
      return `
        <aside class="prototype-scene scene-radar os-reveal" data-scene aria-labelledby="radar-title">
          <div class="scene-head">
            <div><span class="os-live-dot" aria-hidden="true"></span><p id="radar-title">Six-shop attention radar</p></div>
            <button class="scene-replay" type="button" data-scene-replay>Replay</button>
          </div>
          <div class="radar-summary"><span>Group view</span><strong>1 shop needs help</strong><small>Updated from connected shop systems</small></div>
          <div class="radar-grid">
            <article class="radar-shop"><span>Northside</span><strong>On track</strong><i>2 open items</i></article>
            <article class="radar-shop"><span>Downtown</span><strong>On track</strong><i>1 open item</i></article>
            <article class="radar-shop radar-shop-focus"><span>Westside</span><strong>14 old estimates</strong><i>$18,600 waiting</i><b>Needs help first</b></article>
            <article class="radar-shop"><span>Riverside</span><strong>On track</strong><i>3 open items</i></article>
            <article class="radar-shop"><span>Eastgate</span><strong>On track</strong><i>0 open items</i></article>
            <article class="radar-shop"><span>Airport</span><strong>On track</strong><i>2 open items</i></article>
          </div>
          <p class="scene-caption"><strong>The point:</strong> leaders see the location that needs help without reading six separate reports.</p>
        </aside>
      `;
    }

    if (page.visual === "reputation-split") {
      return `
        <aside class="prototype-scene scene-reputation os-reveal" data-scene aria-labelledby="reputation-title">
          <div class="scene-head">
            <div><span class="os-live-dot" aria-hidden="true"></span><p id="reputation-title">One review. Two kinds of work.</p></div>
            <button class="scene-replay" type="button" data-scene-replay>Replay</button>
          </div>
          <article class="review-signal">
            <span class="review-stars" aria-label="Two out of five stars">★★☆☆☆</span>
            <strong>“I had to bring the vehicle back.”</strong>
            <small>New review · Westside shop</small>
          </article>
          <div class="review-split" aria-hidden="true"><i></i><span>RevvOS separates the work</span><i></i></div>
          <div class="review-lanes">
            <article class="review-lane review-lane-public"><span>Public lane</span><strong>Calm reply draft</strong><p>Acknowledge the concern without making an unapproved promise.</p><em>Waiting for manager approval</em></article>
            <article class="review-lane review-lane-private"><span>Private lane</span><strong>Customer recovery task</strong><p>Check the repair history and contact the customer directly.</p><em>Assigned to shop manager</em></article>
          </div>
          <p class="scene-caption"><strong>The point:</strong> the public reply and the real customer recovery never get confused.</p>
        </aside>
      `;
    }

    if (page.visual === "day-board") {
      return `
        <aside class="prototype-scene scene-day os-reveal" data-scene aria-labelledby="day-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="day-title">Today at a glance</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="day-track">
            <div class="day-hours" aria-hidden="true"><span>7 AM</span><span>9 AM</span><span>11 AM</span><span>1 PM</span><span>3 PM</span></div>
            <i class="day-now" aria-hidden="true"></i>
            <article class="day-event day-a"><small>Opening</small><strong>Part delivery time missing</strong><em>Manager check</em></article>
            <article class="day-event day-b"><small>8:20 AM</small><strong>Estimate callback due</strong><em>Advisor review</em></article>
            <article class="day-event day-c"><small>10:45 AM</small><strong>Vehicle waiting for pickup</strong><em>Customer note</em></article>
          </div>
          <div class="day-summary"><span>RevvOS prepared the morning</span><strong>3 items · 3 owners · 0 mystery tasks</strong></div>
          <p class="scene-caption"><strong>The point:</strong> managers see today’s loose ends before the day gets away from them.</p>
        </aside>
      `;
    }

    if (page.visual === "executive-brief") {
      return `
        <aside class="prototype-scene scene-executive os-reveal" data-scene aria-labelledby="executive-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="executive-title">Noise becomes a brief</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="executive-filter">
            <div class="signal-cloud" aria-label="Routine shop activity"><span>42 jobs moving</span><span>18 calls handled</span><span>9 parts received</span><span>6 reviews answered</span><span>31 appointments</span><span>12 estimates closed</span><span>4 pickups ready</span><span>8 invoices paid</span></div>
            <div class="brief-filter"><img src="/assets/logos/revvos-mark.svg?v=3" alt=""><span>Only what needs leadership</span></div>
            <div class="leader-brief"><small>Owner brief · Today</small><article><b>01</b><span>Stalled repair</span><em>11 days</em></article><article><b>02</b><span>Customer recovery</span><em>Needs approval</em></article><article><b>03</b><span>Estimate backlog</span><em>Assign owner</em></article></div>
          </div>
          <p class="scene-caption"><strong>The point:</strong> ordinary activity stays out of the way; three leadership decisions remain.</p>
        </aside>
      `;
    }

    if (page.visual === "owner-brief") {
      return `
        <aside class="prototype-scene scene-owner os-reveal" data-scene aria-labelledby="owner-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="owner-title">Your morning owner brief</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="owner-paper">
            <div class="owner-paper-head"><span>Thursday · 7:00 AM</span><strong>Good morning, Alex.</strong><small>Three decisions need you.</small></div>
            <div class="owner-issue owner-a"><b>Money</b><span>14 old estimates at Westside</span><em>Assign follow-up</em></div>
            <div class="owner-issue owner-b"><b>Operations</b><span>Repair order stalled 11 days</span><em>Review escalation</em></div>
            <div class="owner-issue owner-c"><b>Customer</b><span>Two-star return-visit review</span><em>Approve response</em></div>
            <div class="owner-routine"><span>Routine work kept with your team</span><strong>128 items moving normally</strong></div>
          </div>
          <p class="scene-caption"><strong>The point:</strong> the owner sees only the work that truly needs owner judgment.</p>
        </aside>
      `;
    }

    if (page.visual === "ops-bottleneck") {
      return `
        <aside class="prototype-scene scene-bottleneck os-reveal" data-scene aria-labelledby="bottleneck-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="bottleneck-title">Live repair flow</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="repair-lane">
            <div class="repair-stage"><span>Inspect</span><i></i><b>3 moving</b></div>
            <div class="repair-stage repair-blocked"><span>Waiting on parts</span><i></i><b>RO 2716 · 4 days</b><em>Delivery time missing</em></div>
            <div class="repair-stage"><span>Repair</span><i></i><b>5 moving</b></div>
            <div class="repair-stage"><span>Ready</span><i></i><b>2 pickups</b></div>
            <div class="repair-car" aria-hidden="true">RO 2716</div>
          </div>
          <div class="bottleneck-action"><span>Operations Agent</span><strong>Manager check + customer update prepared</strong></div>
          <p class="scene-caption"><strong>The point:</strong> the exact blockage appears before it becomes a customer complaint.</p>
        </aside>
      `;
    }

    if (page.visual === "marketing-content") {
      return `
        <aside class="prototype-scene scene-contact-sheet os-reveal" data-scene aria-labelledby="contact-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="contact-title">Today’s shop stories</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="contact-sheet">
            <article class="contact-frame"><i class="photo-brakes" aria-hidden="true"></i><span>Westside</span><strong>Worn brake rotor</strong></article>
            <article class="contact-frame"><i class="photo-team" aria-hidden="true"></i><span>Downtown</span><strong>Technician milestone</strong></article>
            <article class="contact-frame"><i class="photo-detail" aria-hidden="true"></i><span>Riverside</span><strong>Before and after</strong></article>
            <article class="contact-frame contact-selected"><i class="photo-tire" aria-hidden="true"></i><span>Eastgate</span><strong>Why tread depth matters</strong><b>Selected for a draft</b></article>
          </div>
          <div class="contact-draft"><span>Local Content Agent</span><strong>“This tire looked fine at a glance. Here’s what the tread measurement showed…”</strong><em>Facts and photo remain attached</em></div>
          <p class="scene-caption"><strong>The point:</strong> real shop moments become useful content without inventing the story.</p>
        </aside>
      `;
    }

    if (page.visual === "listing-check") {
      return `
        <aside class="prototype-scene scene-listing os-reveal" data-scene aria-labelledby="listing-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="listing-title">Listing mismatch scanner</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="listing-table">
            <div class="listing-head"><span>Public detail</span><span>Google</span><span>Shop website</span></div>
            <div class="listing-row"><strong>Phone</strong><span>(555) 010-2481</span><span>(555) 010-2481</span><em>Match</em></div>
            <div class="listing-row listing-mismatch"><strong>Holiday hours</strong><span>Closes 5 PM</span><span>Closes 3 PM</span><em>Mismatch</em></div>
            <div class="listing-row"><strong>Address</strong><span>82 West Ave.</span><span>82 West Ave.</span><em>Match</em></div>
          </div>
          <div class="listing-question"><span>Sent to Westside manager</span><strong>What time does the shop actually close?</strong></div>
          <p class="scene-caption"><strong>The point:</strong> RevvOS shows the exact disagreement and asks the person who knows the answer.</p>
        </aside>
      `;
    }

    if (page.visual === "social-story") {
      return `
        <aside class="prototype-scene scene-storyboard os-reveal" data-scene aria-labelledby="storyboard-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="storyboard-title">Photo-to-post storyboard</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="storyboard">
            <article class="story-frame"><span>1 · Shop photo</span><i class="story-photo" aria-hidden="true"></i><strong>Worn brake rotor</strong></article>
            <article class="story-frame"><span>2 · Technician note</span><blockquote>“Customer heard grinding. The inner pad was gone.”</blockquote></article>
            <article class="story-frame"><span>3 · Clear draft</span><p>Grinding brakes can mean the pad has worn past its safe surface.</p></article>
            <article class="story-frame story-approved"><span>4 · Human review</span><strong>Facts ✓ Privacy ✓ Tone ✓</strong><em>Ready to schedule</em></article>
          </div>
          <p class="scene-caption"><strong>The point:</strong> the final post never loses the real photo and technician context behind it.</p>
        </aside>
      `;
    }

    if (page.visual === "estimate-engagement") {
      return `
        <aside class="prototype-scene scene-cooling os-reveal" data-scene aria-labelledby="cooling-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="cooling-title">Estimate temperature</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="cooling-list">
            <article><span>Alignment</span><strong>2 days</strong><i style="--age:22%"></i><em>Recent</em></article>
            <article><span>Suspension</span><strong>5 days</strong><i style="--age:48%"></i><em>Watch</em></article>
            <article class="cooling-caught"><span>Brake estimate · $1,240</span><strong>8 days</strong><i style="--age:78%"></i><em>Caught before cold</em></article>
            <article><span>Cooling system</span><strong>11 days</strong><i style="--age:100%"></i><em>Needs review</em></article>
          </div>
          <div class="cooling-draft"><span>Customer Follow-up Agent</span><strong>Estimate and recent messages are ready for the advisor.</strong></div>
          <p class="scene-caption"><strong>The point:</strong> a good estimate becomes visible before it disappears into the week.</p>
        </aside>
      `;
    }

    if (page.visual === "wip-focus") {
      return `
        <aside class="prototype-scene scene-focus os-reveal" data-scene aria-labelledby="focus-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="focus-title">Operational focus lens</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="focus-stack">
            <article class="focus-level focus-group"><span>All shops</span><strong>186 active repairs</strong><small>One location is aging</small></article>
            <article class="focus-level focus-shop"><span>Northline Collision</span><strong>7 aging repairs</strong><small>One has not moved</small></article>
            <article class="focus-level focus-job"><span>Repair order 1842</span><strong>11 days in one stage</strong><small>Reason unavailable</small></article>
            <i class="focus-lens" aria-hidden="true"></i>
          </div>
          <div class="focus-next"><span>Next manager check</span><strong>Open the original repair order and confirm the hold.</strong></div>
          <p class="scene-caption"><strong>The point:</strong> a group-level warning ends at the exact job that needs a person.</p>
        </aside>
      `;
    }

    if (page.visual === "compliance-proof") {
      return `
        <aside class="prototype-scene scene-binder os-reveal" data-scene aria-labelledby="binder-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="binder-title">Release-check evidence binder</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="binder">
            <div class="binder-tabs"><span>Checklist</span><span>Report</span><span>Repair order</span><span>Review</span></div>
            <div class="binder-page">
              <div class="binder-title"><small>Vehicle 5821 · Calibration check</small><strong>Confirm before release</strong></div>
              <ul><li class="is-done">Calibration report attached</li><li class="is-done">Repair-order number matches</li><li>Qualified reviewer comparison</li></ul>
              <div class="binder-files"><span>CAL-5821.pdf</span><span>RO-5821.pdf</span></div>
              <em>Waiting for qualified review</em>
            </div>
          </div>
          <p class="scene-caption"><strong>The point:</strong> the approved steps, evidence, reviewer, and result live in one record.</p>
        </aside>
      `;
    }

    if (page.visual === "connection-board") {
      return `
        <aside class="prototype-scene scene-connections os-reveal" data-scene aria-labelledby="connections-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="connections-title">Connection board</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="connection-map">
            <div class="connection-sources"><article><span>Shop system</span><strong>Estimates and repairs</strong></article><article><span>Customer messages</span><strong>Calls and replies</strong></article><article><span>Accounting</span><strong>Approved financial data</strong></article><article class="connection-off"><span>Review site</span><strong>Unavailable</strong></article></div>
            <div class="connection-core"><img src="/assets/logos/revvos-mark.svg?v=3" alt=""><strong>RevvOS</strong><span>Connected work</span></div>
            <article class="connection-output"><small>One useful work item</small><strong>Brake estimate needs follow-up</strong><p>Amount, recent reply, source links, and advisor owner.</p><em>Review site data not required</em></article>
          </div>
          <p class="scene-caption"><strong>The point:</strong> RevvOS connects the work without hiding where each detail came from.</p>
        </aside>
      `;
    }

    if (page.visual === "permission-gates") {
      return `
        <aside class="prototype-scene scene-permissions os-reveal" data-scene aria-labelledby="permissions-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="permissions-title">Permission rings</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="permission-rings">
            <div class="permission-ring ring-access"><span>Approved information only</span></div>
            <div class="permission-ring ring-action"><span>Allowed actions only</span></div>
            <div class="permission-ring ring-human"><span>Human checkpoint</span></div>
            <article class="permission-center"><small>Customer reply</small><strong>Draft ready</strong><em>Cannot send yet</em></article>
          </div>
          <div class="permission-rule"><span>Current rule</span><strong>Customer promises always require a manager.</strong></div>
          <p class="scene-caption"><strong>The point:</strong> the action stops exactly where your business says a person must decide.</p>
        </aside>
      `;
    }

    if (page.visual === "pilot-scope") {
      return `
        <aside class="prototype-scene scene-scope os-reveal" data-scene aria-labelledby="scope-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="scope-title">Pilot scope builder</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="scope-builder">
            <div class="scope-parts"><article><span>Shops</span><strong>Westside + Downtown</strong></article><article><span>One job</span><strong>Old estimate follow-up</strong></article><article><span>Connections</span><strong>Shop system + messages</strong></article><article><span>Reviewers</span><strong>4 service advisors</strong></article></div>
            <div class="scope-boundary"><small>Bounded pilot</small><strong>2 shops · 30 days</strong><p>Measure reviewed follow-ups and advisor handling.</p><em>No wider rollout included</em></div>
          </div>
          <p class="scene-caption"><strong>The point:</strong> scope is visible before price or commitment grows.</p>
        </aside>
      `;
    }

    if (page.visual === "problem-mapper") {
      return `
        <aside class="prototype-scene scene-problem os-reveal" data-scene aria-labelledby="problem-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="problem-title">Turn one problem into a demo</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <blockquote class="problem-sentence">“Good estimates sit too long because advisors are busy.”</blockquote>
          <div class="problem-pieces">
            <article><span>Where?</span><strong>Shop system</strong></article><article><span>What gets missed?</span><strong>Old estimates</strong></article><article><span>Agent job</span><strong>Prepare follow-up</strong></article><article><span>Person</span><strong>Service advisor</strong></article><article><span>Useful result</span><strong>Reviewed follow-ups</strong></article>
          </div>
          <p class="scene-caption"><strong>The point:</strong> a useful demo begins with your real work, not a tour of every feature.</p>
        </aside>
      `;
    }

    if (page.visual === "scenario-film") {
      return `
        <aside class="prototype-scene scene-film os-reveal" data-scene aria-labelledby="film-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="film-title">One scenario in five frames</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="filmstrip">
            <article><b>01</b><span>Problem</span><strong>Estimate is 8 days old</strong></article><article><b>02</b><span>Signal</span><strong>No customer reply</strong></article><article><b>03</b><span>Agent</span><strong>Draft is prepared</strong></article><article><b>04</b><span>Person</span><strong>Advisor chooses</strong></article><article><b>05</b><span>Record</span><strong>Decision stays visible</strong></article>
          </div>
          <div class="film-note"><span>Illustrative example</span><strong>No customer result is being claimed.</strong></div>
          <p class="scene-caption"><strong>The point:</strong> every example shows the work between the starting problem and the ending status.</p>
        </aside>
      `;
    }

    if (page.visual === "handoff-map") {
      return `
        <aside class="prototype-scene scene-handoff os-reveal" data-scene aria-labelledby="handoff-title">
          <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p id="handoff-title">Handoff highlighter</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
          <div class="handoff-path">
            <article><span>1 · Tool</span><strong>Estimate created</strong><small>Monday</small></article><i aria-hidden="true">→</i>
            <article><span>2 · Advisor</span><strong>Customer contacted</strong><small>Tuesday</small></article><i class="handoff-gap" aria-hidden="true">?</i>
            <article class="handoff-stuck"><span>3 · Missing owner</span><strong>No next follow-up</strong><small>Eight days pass</small></article><i aria-hidden="true">→</i>
            <article><span>4 · Needed</span><strong>Name the next owner</strong><small>And check-in time</small></article>
          </div>
          <div class="handoff-answer"><span>Gap found</span><strong>The work loses ownership after the first customer contact.</strong></div>
          <p class="scene-caption"><strong>The point:</strong> one real item makes a vague “communication problem” specific enough to fix.</p>
        </aside>
      `;
    }

    return renderSharedHero(page);
  };

  const renderPrototypeStory = (page, stageMarkup) => {
    if (page.visual === "signal-sorter") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">The agent workbench</p><h2 id="os-job-title">Different jobs go to different software teammates.</h2><p>Each agent has one repeatable responsibility. The destination stays obvious before any work moves.</p></header>
            <div class="prototype-wide scene-workbench" data-scene>
              <div class="scene-head">
                <div><span class="os-live-dot" aria-hidden="true"></span><p>Three real jobs moving at once</p></div>
                <button class="scene-replay" type="button" data-scene-replay>Replay</button>
              </div>
              <div class="workbench-head"><span>Work that arrived</span><span>Assigned agent</span><span>Ready next step</span></div>
              <div class="workbench-row workbench-row-a">
                <article><small>Estimate · Westside</small><strong>No answer for 8 days</strong></article><i aria-hidden="true">→</i>
                <article class="workbench-agent"><small>Estimate Agent</small><strong>Checks context and drafts</strong></article><i aria-hidden="true">→</i>
                <article class="workbench-ready"><small>Advisor review</small><strong>Follow-up draft ready</strong></article>
              </div>
              <div class="workbench-row workbench-row-b">
                <article><small>Repair · Downtown</small><strong>Part delivery missing</strong></article><i aria-hidden="true">→</i>
                <article class="workbench-agent"><small>Operations Agent</small><strong>Connects the delay</strong></article><i aria-hidden="true">→</i>
                <article class="workbench-ready"><small>Manager task</small><strong>Part check ready</strong></article>
              </div>
              <div class="workbench-row workbench-row-c">
                <article><small>Review · Riverside</small><strong>New 2-star review</strong></article><i aria-hidden="true">→</i>
                <article class="workbench-agent"><small>Review Agent</small><strong>Prepares both responses</strong></article><i aria-hidden="true">→</i>
                <article class="workbench-ready workbench-human"><small>Human checkpoint</small><strong>Manager decides</strong></article>
              </div>
            </div>
            <p class="os-agent-note"><strong>What is an agent?</strong> Software assigned to one repeatable job—not a general chatbot deciding everything.</p>
          </div>
        </section>
      `;
    }

    if (page.visual === "location-radar") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">From the group to the exact work</p><h2 id="os-job-title">See why Westside needs help.</h2><p>The overview is only useful when a leader can reach the real work behind it.</p></header>
            <div class="prototype-wide scene-zoom" data-scene>
              <div class="scene-head">
                <div><span class="os-live-dot" aria-hidden="true"></span><p>Three levels of the same problem</p></div>
                <button class="scene-replay" type="button" data-scene-replay>Replay</button>
              </div>
              <div class="zoom-path">
                <article class="zoom-level zoom-group">
                  <small>1 · Group</small><strong>6 shops</strong><p>Westside has the oldest unanswered estimate group.</p>
                  <div class="zoom-mini-shops" aria-hidden="true"><i></i><i></i><i class="is-hot"></i><i></i><i></i><i></i></div>
                </article>
                <span class="zoom-arrow" aria-hidden="true">→</span>
                <article class="zoom-level zoom-shop">
                  <small>2 · Location</small><strong>Westside</strong><p>14 estimates · $18,600 waiting</p>
                  <div class="zoom-manager"><span>Owner</span><b>Jamie · Shop manager</b></div>
                </article>
                <span class="zoom-arrow" aria-hidden="true">→</span>
                <article class="zoom-level zoom-work">
                  <small>3 · Exact work</small><strong>Estimate list</strong>
                  <ul><li><span>Brake estimate</span><b>12 days</b></li><li><span>Suspension estimate</span><b>10 days</b></li><li><span>Cooling estimate</span><b>9 days</b></li></ul>
                </article>
              </div>
              <div class="zoom-handoff"><span>Next step</span><strong>Jamie receives the list, customer context, and advisor owners.</strong></div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "reputation-split") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">Context before response</p><h2 id="os-job-title">The draft arrives with the facts behind it.</h2><p>RevvOS gathers the useful context and makes missing information obvious before a manager answers.</p></header>
            <div class="prototype-wide scene-context" data-scene>
              <div class="scene-head">
                <div><span class="os-live-dot" aria-hidden="true"></span><p>Response context assembly</p></div>
                <button class="scene-replay" type="button" data-scene-replay>Replay</button>
              </div>
              <div class="context-layout">
                <div class="context-sources">
                  <article class="context-source context-a"><span>Review</span><strong>Two stars · return visit</strong></article>
                  <article class="context-source context-b"><span>Repair history</span><strong>Brake repair · 6 days ago</strong></article>
                  <article class="context-source context-c"><span>Location</span><strong>Westside · Jamie manages</strong></article>
                  <article class="context-source context-d"><span>Missing detail</span><strong>Reason for return not recorded</strong></article>
                </div>
                <div class="context-connector" aria-hidden="true"><span>→</span></div>
                <article class="context-pack">
                  <small>Manager response pack</small>
                  <strong>What we know</strong>
                  <ul><li>Review and repair are connected</li><li>Right manager is assigned</li><li>Public reply draft is ready</li><li class="context-missing">Return reason still needs a person</li></ul>
                  <em>Waiting for Jamie’s review</em>
                </article>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "day-board") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">A day people can follow</p><h2 id="os-job-title">The right work moves to Now, Next, or Watch.</h2><p>The board changes as the day changes, so the manager always knows what deserves attention first.</p></header>
            <div class="prototype-wide scene-priority" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Manager priority board</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="priority-board">
                <div class="priority-lane priority-now"><span>Now</span><article class="priority-card priority-a"><small>Customer waiting</small><strong>Confirm part arrival</strong><em>Jamie · 10 min</em></article></div>
                <div class="priority-lane priority-next"><span>Next</span><article class="priority-card priority-b"><small>Estimate follow-up</small><strong>Review prepared message</strong><em>Priya · by noon</em></article></div>
                <div class="priority-lane priority-watch"><span>Watch</span><article class="priority-card priority-c"><small>Pickup</small><strong>Vehicle still on site</strong><em>Check at 3 PM</em></article></div>
              </div>
              <div class="priority-update"><span>11:05 AM · part arrival confirmed</span><strong>Customer update moves to Now.</strong></div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "executive-brief") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">One decision, visible follow-through</p><h2 id="os-job-title">A leader decision reaches the right shop.</h2><p>Everyone sees the same direction, the local owner, and the update that closes the loop.</p></header>
            <div class="prototype-wide scene-ripple" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Decision ripple</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="ripple-path">
                <article class="ripple-step ripple-leader"><small>1 · Leader</small><strong>Prioritize old estimates this week.</strong><em>Decision recorded</em></article><i aria-hidden="true">→</i>
                <article class="ripple-step ripple-manager"><small>2 · Regional manager</small><strong>Westside gets the first follow-up list.</strong><em>Jamie owns it</em></article><i aria-hidden="true">→</i>
                <article class="ripple-step ripple-shop"><small>3 · Shop update</small><strong>12 customers contacted.</strong><em>8 replies · 3 booked</em></article>
              </div>
              <div class="ripple-result"><span>Closed loop</span><strong>The leader sees what changed without asking for another report.</strong></div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "owner-brief") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">Escalation without overload</p><h2 id="os-job-title">Routine work stays local. Owner decisions travel up.</h2><p>RevvOS does not turn every shop update into an owner notification.</p></header>
            <div class="prototype-wide scene-local-filter" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>What stays local</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="local-filter">
                <div class="local-stream"><article><span>Routine</span><strong>Part received</strong></article><article><span>Routine</span><strong>Pickup confirmed</strong></article><article class="local-escalate"><span>Owner decision</span><strong>Approve customer recovery</strong></article><article><span>Routine</span><strong>Estimate assigned</strong></article></div>
                <div class="local-gate"><strong>Needs owner?</strong><span>Only policy, money, or risk</span></div>
                <div class="local-destinations"><article><small>Shop team</small><strong>3 routine items stay here</strong></article><article class="local-owner-card"><small>Owner brief</small><strong>1 decision arrives</strong><em>Approve recovery plan</em></article></div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "ops-bottleneck") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">Find the repeat, not just the incident</p><h2 id="os-job-title">The same delay across shops becomes one fixable pattern.</h2><p>Operations can see when separate repair problems share the same missing handoff.</p></header>
            <div class="prototype-wide scene-pattern" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Three-shop pattern finder</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="pattern-grid">
                <article><span>Westside</span><i></i><strong>Part ETA missing</strong><em>4 days</em></article>
                <article><span>Downtown</span><i></i><strong>Part ETA missing</strong><em>3 days</em></article>
                <article><span>Eastgate</span><i></i><strong>Part ETA missing</strong><em>5 days</em></article>
              </div>
              <div class="pattern-match"><span>Repeated gap found</span><strong>Require a delivery time before “waiting on parts” can sit overnight.</strong></div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "marketing-content") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">The facts never leave the draft</p><h2 id="os-job-title">A real shop moment becomes a clear local story.</h2><p>The photo, technician note, and location stay pinned beside the words a customer will read.</p></header>
            <div class="prototype-wide scene-facts-draft" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Facts-to-draft desk</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="facts-desk">
                <div class="fact-pins"><article><span>Photo</span><i class="fact-photo" aria-hidden="true"></i><strong>Uneven tire wear</strong></article><article><span>Technician note</span><strong>“Inner edge worn first.”</strong></article><article><span>Location</span><strong>Eastgate · Bay 3</strong></article></div>
                <article class="draft-page"><small>Local post draft</small><strong>Why a tire can look fine from the outside</strong><p>Uneven wear can hide along the inner edge. A quick tread check helps catch it before the tire loses safe grip.</p><em>Facts ✓ Location ✓ Plain language ✓</em></article>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "listing-check") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">A correction you can trust</p><h2 id="os-job-title">The right detail moves from question to verified listing.</h2><p>No public information changes until the shop confirms it.</p></header>
            <div class="prototype-wide scene-correction" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Holiday-hours correction</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="correction-path">
                <article class="correction-step correction-confirm"><b>1</b><span>Manager confirms</span><strong>Close at 3 PM</strong></article><i aria-hidden="true">→</i>
                <article class="correction-step correction-update"><b>2</b><span>Approved update</span><strong>Listing change sent</strong></article><i aria-hidden="true">→</i>
                <article class="correction-step correction-live"><b>3</b><span>Live check</span><strong>3 PM appears publicly</strong><em>Verified</em></article>
              </div>
              <p class="correction-note">Source answer, approval, public update, and verification stay together.</p>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "social-story") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">A calendar built from real work</p><h2 id="os-job-title">Approved stories settle into a useful weekly rhythm.</h2><p>The team sees what is ready, where it came from, and when it will publish.</p></header>
            <div class="prototype-wide scene-calendar" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Approved content calendar</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="calendar-week">
                <article><span>Monday</span><div class="calendar-slot calendar-a"><small>Care tip</small><strong>Brake noise</strong><em>Westside</em></div></article>
                <article><span>Tuesday</span><div class="calendar-empty">Open</div></article>
                <article><span>Wednesday</span><div class="calendar-slot calendar-b"><small>Team story</small><strong>10-year milestone</strong><em>Downtown</em></div></article>
                <article><span>Thursday</span><div class="calendar-slot calendar-c"><small>Shop lesson</small><strong>Tread depth</strong><em>Eastgate</em></div></article>
                <article><span>Friday</span><div class="calendar-empty">Open</div></article>
              </div>
              <div class="calendar-ready"><span>3 approved posts</span><strong>Each one links back to its photo and facts.</strong></div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "estimate-engagement") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">One customer, one useful picture</p><h2 id="os-job-title">The estimate and recent conversation arrive together.</h2><p>The advisor can respond with context instead of searching across tools first.</p></header>
            <div class="prototype-wide scene-conversation" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Conversation builder</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="conversation-build">
                <div class="conversation-sources"><article class="conversation-estimate"><span>Estimate</span><strong>Brake service · $1,240</strong><small>8 days old</small></article><article class="conversation-message"><span>Text</span><strong>“I need to check my schedule.”</strong><small>6 days ago</small></article><article class="conversation-call"><span>Call</span><strong>No answer</strong><small>3 days ago</small></article></div>
                <article class="conversation-pack"><small>Advisor follow-up</small><strong>Customer has the price and needed time to plan.</strong><p>Prepared next step: ask whether this week or next week works better.</p><em>Review before sending</em></article>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "wip-focus") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">See work stop moving</p><h2 id="os-job-title">One stuck repair stands out from healthy work in progress.</h2><p>The lane shows where each job sits and which one has stayed too long.</p></header>
            <div class="prototype-wide scene-wip-lanes" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Work-in-progress lanes</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="wip-board">
                <div><span>Inspect</span><article>RO 1838 <em>Today</em></article><article>RO 1846 <em>Today</em></article></div>
                <div><span>Waiting</span><article class="wip-stuck">RO 1842 <strong>11 days</strong><em>No reason recorded</em></article></div>
                <div><span>Repair</span><article>RO 1831 <em>2 days</em></article><article>RO 1841 <em>1 day</em></article></div>
                <div><span>Ready</span><article>RO 1829 <em>Pickup set</em></article></div>
              </div>
              <div class="wip-alert"><span>Manager check</span><strong>Confirm why RO 1842 has not moved.</strong></div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "compliance-proof") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">A review trail anyone can read</p><h2 id="os-job-title">Every check, correction, and approval stays visible.</h2><p>The record shows what happened without asking people to reconstruct it later.</p></header>
            <div class="prototype-wide scene-review-trail" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Release review trail</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <ol class="review-trail">
                <li class="trail-submit"><b>1</b><span>Submitted</span><strong>Calibration report attached</strong><em>9:14 AM</em></li>
                <li class="trail-check"><b>2</b><span>Checked</span><strong>Vehicle number mismatch found</strong><em>9:19 AM</em></li>
                <li class="trail-correct"><b>3</b><span>Corrected</span><strong>Right report attached</strong><em>9:31 AM</em></li>
                <li class="trail-approve"><b>4</b><span>Approved</span><strong>Qualified reviewer signed</strong><em>9:37 AM</em></li>
              </ol>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "connection-board") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">Two systems, one job</p><h2 id="os-job-title">The estimate and customer message become one next step.</h2><p>RevvOS joins only the details needed for the work, while keeping each source visible.</p></header>
            <div class="prototype-wide scene-two-systems" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Connected customer follow-up</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="two-systems">
                <article class="system-card system-estimate"><small>Shop system</small><strong>$1,240 brake estimate</strong><span>8 days old</span></article>
                <article class="system-card system-message"><small>Message system</small><strong>“I need to check my schedule.”</strong><span>6 days ago</span></article>
                <div class="system-merge" aria-hidden="true"><i></i><b>+</b><i></i></div>
                <article class="system-work"><small>One RevvOS work item</small><strong>Ask which week works better</strong><p>Estimate amount, message, advisor, and source links included.</p><em>Human review before sending</em></article>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "permission-gates") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">Clear action boundaries</p><h2 id="os-job-title">Every action has a visible permission gate.</h2><p>Teams decide in advance what can happen automatically, what needs approval, and what software may never do.</p></header>
            <div class="prototype-wide scene-action-gates" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Action gate</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="gate-board">
                <article class="gate-auto"><span>Automatic</span><strong>Organize a follow-up list</strong><em>Allowed</em></article>
                <article class="gate-approve"><span>Approval required</span><strong>Send a customer message</strong><em>Manager decides</em></article>
                <article class="gate-never"><span>Never allowed</span><strong>Change repair or payment records</strong><em>Blocked</em></article>
              </div>
              <div class="gate-audit"><span>Every attempt recorded</span><strong>Rule · person · time · outcome</strong></div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "pilot-scope") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">A small, honest starting line</p><h2 id="os-job-title">A pilot has a beginning, a finish, and a decision.</h2><p>You agree on the problem and proof before any work starts.</p></header>
            <div class="prototype-wide scene-runway" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Pilot runway</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="runway">
                <article><b>1</b><span>Baseline</span><strong>Count old estimates</strong></article><article><b>2</b><span>Connect</span><strong>Read approved sources</strong></article><article><b>3</b><span>Run</span><strong>One shop · 30 days</strong></article><article><b>4</b><span>Review</span><strong>Compare the result</strong></article>
              </div>
              <div class="runway-decisions"><span>Continue</span><span>Change</span><span>Stop</span><strong>No lock-in decision</strong></div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "problem-mapper") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">Start with ordinary language</p><h2 id="os-job-title">A messy complaint becomes one clear workflow.</h2><p>You bring the sentence your team already says. Together, we make the gap specific.</p></header>
            <div class="prototype-wide scene-whiteboard" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Messy-to-clear whiteboard</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="whiteboard">
                <article class="messy-note"><small>What we hear</small><strong>“Customers keep falling through the cracks.”</strong></article>
                <div class="whiteboard-arrow" aria-hidden="true">→</div>
                <article class="clear-flow"><small>What we can test</small><div><span>Trigger</span><strong>Estimate reaches 5 days</strong></div><div><span>Owner</span><strong>Assigned advisor</strong></div><div><span>Next step</span><strong>Review follow-up draft</strong></div><div><span>Proof</span><strong>Reply or appointment</strong></div></article>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "scenario-film") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">A safe way to compare choices</p><h2 id="os-job-title">See how one decision changes the outcome.</h2><p>The branches are clearly marked as examples—not predictions or customer promises.</p></header>
            <div class="prototype-wide scene-branches" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Decision branches · hypothetical example</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="branch-tree">
                <article class="branch-start"><span>8-day estimate</span><strong>What happens next?</strong></article>
                <div class="branch-options">
                  <article class="branch-call"><span>Call</span><strong>Advisor reaches customer</strong><em>Appointment considered</em></article>
                  <article class="branch-text"><span>Text</span><strong>Prepared message reviewed</strong><em>Customer replies later</em></article>
                  <article class="branch-wait"><span>Wait</span><strong>No new contact</strong><em>Estimate keeps aging</em></article>
                  <article class="branch-close"><span>Close</span><strong>Reason recorded</strong><em>No further follow-up</em></article>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (page.visual === "handoff-map") {
      return `
        <section class="os-job prototype-section" id="watch-one-job" aria-labelledby="os-job-title">
          <div class="wrap">
            <header class="os-section-head"><p class="os-eyebrow">Turn friction into a pilot candidate</p><h2 id="os-job-title">Repeated gaps show where a small workflow can help.</h2><p>The map makes the handoff, frequency, and business effect easy to discuss.</p></header>
            <div class="prototype-wide scene-friction" data-scene>
              <div class="scene-head"><div><span class="os-live-dot" aria-hidden="true"></span><p>Friction map</p></div><button class="scene-replay" type="button" data-scene-replay>Replay</button></div>
              <div class="friction-line">
                <article><b>1</b><span>Estimate made</span></article><i></i><article><b>2</b><span>First contact</span></article><i class="friction-hot"></i><article class="friction-gap"><b>3</b><span>No next owner</span><em>Repeats 14× monthly</em></article><i></i><article><b>4</b><span>Customer decides</span></article>
              </div>
              <div class="friction-candidate"><span>Pilot candidate</span><strong>Name the next owner and check-in time after first contact.</strong><em>Small scope · measurable result</em></div>
            </div>
          </div>
        </section>
      `;
    }

    return `
      <section class="os-job" id="watch-one-job" aria-labelledby="os-job-title">
        <div class="wrap">
          <header class="os-section-head os-reveal">
            <p class="os-eyebrow">Watch one job happen</p>
            <h2 id="os-job-title">${page.scenario.title}</h2>
            <p>Nothing is hidden. Follow the same five steps RevvOS uses to turn shop information into handled work.</p>
          </header>
          <div class="os-job-layout" data-os-demo>
            <aside class="os-ticket" aria-label="Example work item">
              <div class="os-ticket-top"><span>Live example</span><strong data-os-state>Signal found</strong></div>
              <div class="os-ticket-body"><small>${page.scenario.source}</small><h3>${page.scenario.item}</h3><p data-os-detail>${page.scenario.signal}</p></div>
              <div class="os-ticket-progress" aria-hidden="true"><span data-os-progress></span></div>
              <div class="os-ticket-foot"><span data-os-count>Step 1 of 5</span><button type="button" data-os-play aria-label="Pause the example">Pause</button><button type="button" data-os-replay>Replay</button></div>
            </aside>
            <div class="os-stages" aria-label="Five steps in this RevvOS job">${stageMarkup}</div>
          </div>
          <p class="os-agent-note"><strong>What is an agent?</strong> It is simply software assigned to one repeatable job—like watching old estimates, reviews, or delayed repairs.</p>
        </div>
      </section>
    `;
  };

  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const page = pages[path];
  const main = document.querySelector("main");
  if (!page || !main) return;

  const list = (items) => items.map((item) => `<li>${item}</li>`).join("");
  const outcomes = page.outcomes.map(([title, copy], index) => `
    <article class="os-outcome os-reveal" style="--delay:${index * 80}ms">
      <span>0${index + 1}</span>
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `).join("");
  const questions = page.faqs.map(([question, answer]) => `
    <details class="os-question">
      <summary>${question}</summary>
      <p>${answer}</p>
    </details>
  `).join("");
  const stages = [
    ["1", "A real signal arrives", page.scenario.source, page.scenario.signal],
    ["2", "RevvOS notices", "Why it needs attention", page.scenario.notice],
    ["3", "One agent prepares the work", page.scenario.agent, page.scenario.work],
    ["4", "A person steps in", "Human checkpoint", page.scenario.human],
    ["5", "The result stays visible", "Done and recorded", page.scenario.result]
  ];
  const stageMarkup = stages.map(([number, title, label, copy], index) => `
    <button class="os-stage${index === 0 ? " is-active" : ""}" type="button" data-os-stage="${index}" aria-current="${index === 0 ? "step" : "false"}">
      <span class="os-stage-number">${number}</span>
      <span class="os-stage-copy">
        <small>${label}</small>
        <strong>${title}</strong>
        <span>${copy}</span>
      </span>
    </button>
  `).join("");
  const form = page.form ? `
    <form class="os-demo-form" id="os-demo-form">
      <div><label for="os-name">Your name</label><input id="os-name" name="name" autocomplete="name" required></div>
      <div><label for="os-company">Company</label><input id="os-company" name="company" autocomplete="organization" required></div>
      <div><label for="os-email">Work email</label><input id="os-email" name="email" type="email" autocomplete="email" required></div>
      <div class="os-form-wide"><label for="os-problem">What keeps getting stuck?</label><textarea id="os-problem" name="problem" rows="4" placeholder="For example: Good estimates sit too long without a follow-up." required></textarea></div>
      <button class="btn btn-primary" type="submit">Send demo request <span class="arrow">→</span></button>
      <p class="os-form-note">This opens a ready-to-send email to the RevvOS team.</p>
    </form>
  ` : "";

  main.className = "os-story-main";
  main.innerHTML = `
    <section class="os-hero">
      <div class="wrap">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>${page.section}</span></nav>
        <div class="os-hero-grid">
          <div class="os-hero-copy os-reveal">
            <p class="os-eyebrow">${page.eyebrow}</p>
            <h1>${page.title}</h1>
            <p class="os-lede">${page.lede}</p>
            <p class="os-definition"><strong>RevvOS is an AI work system for automotive service groups.</strong> It catches unfinished work, gets the next step ready, and keeps people in charge of important decisions.</p>
            <div class="os-actions">
              <a class="btn btn-primary" href="${page.form ? "#demo-request" : "/demo/"}">${page.form ? "Tell us the problem" : "Book a demo"} <span class="arrow">→</span></a>
              <a class="btn btn-secondary" href="#watch-one-job">Watch one job happen</a>
            </div>
          </div>
          ${renderPrototypeHero(page)}
        </div>
      </div>
    </section>

    <section class="os-contrast" aria-labelledby="os-contrast-title">
      <div class="wrap">
        <p class="os-eyebrow">The difference</p>
        <h2 id="os-contrast-title">Less chasing. One clear path.</h2>
        <div class="os-contrast-grid">
          <article class="os-before os-reveal"><span>Without RevvOS</span><p>${page.before}</p></article>
          <div class="os-contrast-arrow" aria-hidden="true">→</div>
          <article class="os-after os-reveal"><span>With RevvOS</span><p>${page.after}</p></article>
        </div>
      </div>
    </section>

    ${renderPrototypeStory(page, stageMarkup)}

    <section class="os-boundary" aria-labelledby="os-boundary-title">
      <div class="wrap os-boundary-layout">
        <header class="os-section-head os-reveal">
          <p class="os-eyebrow">Who does what</p>
          <h2 id="os-boundary-title">Software handles the busywork. People keep the judgment.</h2>
          <p>The handoff is visible, especially when work affects a customer, money, safety, policy, or your reputation.</p>
        </header>
        <article class="os-owner-card os-owner-software os-reveal"><span>RevvOS</span><h3>Software can</h3><ul>${list(page.revvos)}</ul></article>
        <article class="os-owner-card os-owner-human os-reveal"><span>Your team</span><h3>People decide</h3><ul>${list(page.people)}</ul></article>
      </div>
    </section>

    <section class="os-outcomes" aria-labelledby="os-outcomes-title">
      <div class="wrap">
        <header class="os-section-head os-reveal"><p class="os-eyebrow">What changes</p><h2 id="os-outcomes-title">The result is practical.</h2></header>
        <div class="os-outcome-grid">${outcomes}</div>
      </div>
    </section>

    <section class="os-faq" aria-labelledby="os-faq-title">
      <div class="wrap os-faq-layout">
        <header class="os-section-head os-reveal"><p class="os-eyebrow">Straight answers</p><h2 id="os-faq-title">What people ask first.</h2></header>
        <div class="os-questions">${questions}</div>
      </div>
    </section>

    <section class="os-cta" id="demo-request">
      <div class="wrap os-cta-inner">
        <div><p class="os-eyebrow">Start with one real problem</p><h2>${page.form ? "Tell us what your team keeps chasing." : "See this with work from your own shops."}</h2><p>${page.form ? "Normal shop language is enough. No technical preparation needed." : "Bring one missed handoff, old estimate, delayed job, or recurring customer problem."}</p></div>
        ${form || `<a class="btn btn-primary" href="/demo/">Book a demo <span class="arrow">→</span></a>`}
      </div>
    </section>
  `;

  document.title = `${page.title} | RevvOS`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = page.lede;
  const openGraphDescription = document.querySelector('meta[property="og:description"]');
  if (openGraphDescription) openGraphDescription.content = page.lede;
  const schema = document.querySelector('script[type="application/ld+json"]');
  if (schema) {
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer }
      }))
    });
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.toggle("os-reduced-motion", reducedMotion);
  const revealItems = document.querySelectorAll(".os-reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const scenes = [...document.querySelectorAll("[data-scene]")];
  const sceneTimers = new WeakMap();
  const playScene = (scene) => {
    if (reducedMotion) return;
    scene.classList.remove("is-running");
    void scene.offsetWidth;
    scene.classList.add("is-running");
    scene.dataset.sceneCycle = String(Number(scene.dataset.sceneCycle || 0) + 1);
  };
  const stopSceneLoop = (scene) => {
    const timer = sceneTimers.get(scene);
    if (timer) window.clearInterval(timer);
    sceneTimers.delete(scene);
    scene.dataset.sceneLooping = "false";
  };
  const startSceneLoop = (scene) => {
    if (reducedMotion || sceneTimers.has(scene)) return;
    const duration = Number(scene.dataset.sceneDuration || 8500);
    playScene(scene);
    scene.dataset.sceneLooping = "true";
    sceneTimers.set(scene, window.setInterval(() => playScene(scene), duration));
  };
  scenes.forEach((scene) => {
    scene.dataset.sceneBound = "true";
    const replay = scene.querySelector("[data-scene-replay]");
    if (reducedMotion) {
      scene.classList.add("is-static");
      scene.dataset.sceneLooping = "false";
      if (replay) replay.hidden = true;
    } else {
      replay?.addEventListener("click", () => {
        stopSceneLoop(scene);
        startSceneLoop(scene);
      });
    }
  });
  if (!reducedMotion && scenes.length) {
    if ("IntersectionObserver" in window) {
      const sceneObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startSceneLoop(entry.target);
          } else {
            stopSceneLoop(entry.target);
          }
        });
      }, { threshold: 0.28 });
      scenes.forEach((scene) => sceneObserver.observe(scene));
    } else {
      scenes.forEach(startSceneLoop);
    }
  }

  const demo = document.querySelector("[data-os-demo]");
  if (demo) {
    const stageButtons = [...demo.querySelectorAll("[data-os-stage]")];
    const state = demo.querySelector("[data-os-state]");
    const detail = demo.querySelector("[data-os-detail]");
    const count = demo.querySelector("[data-os-count]");
    const progress = demo.querySelector("[data-os-progress]");
    const play = demo.querySelector("[data-os-play]");
    const replay = demo.querySelector("[data-os-replay]");
    const stateLabels = ["Signal found", "Needs attention", `${page.scenario.agent} working`, "Waiting for a person", "Handled and visible"];
    let active = 0;
    let timer = null;
    let hasStarted = false;

    const setStage = (next) => {
      active = Math.max(0, Math.min(next, stages.length - 1));
      stageButtons.forEach((button, index) => {
        button.classList.toggle("is-active", index === active);
        button.classList.toggle("is-complete", index < active || (reducedMotion && index <= active));
        button.setAttribute("aria-current", index === active ? "step" : "false");
      });
      state.textContent = stateLabels[active];
      detail.textContent = stages[active][3];
      count.textContent = `Step ${active + 1} of ${stages.length}`;
      progress.style.width = `${((active + 1) / stages.length) * 100}%`;
    };
    const stop = () => {
      window.clearInterval(timer);
      timer = null;
      play.textContent = "Play";
      play.setAttribute("aria-label", "Play the example");
    };
    const start = (restart = false) => {
      if (reducedMotion) return;
      if (restart || active === stages.length - 1) setStage(0);
      window.clearInterval(timer);
      timer = window.setInterval(() => {
        if (active >= stages.length - 1) {
          stop();
          return;
        }
        setStage(active + 1);
      }, 1400);
      play.textContent = "Pause";
      play.setAttribute("aria-label", "Pause the example");
    };

    stageButtons.forEach((button, index) => button.addEventListener("click", () => {
      stop();
      setStage(index);
    }));
    play.addEventListener("click", () => timer ? stop() : start());
    replay.addEventListener("click", () => start(true));

    setStage(reducedMotion ? stages.length - 1 : 0);
    if (reducedMotion) {
      play.hidden = true;
      replay.hidden = true;
    } else if ("IntersectionObserver" in window) {
      const demoObserver = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || hasStarted) return;
        hasStarted = true;
        start();
        demoObserver.disconnect();
      }, { threshold: 0.35 });
      demoObserver.observe(demo);
    } else {
      start();
    }
  }

  const demoForm = document.querySelector("#os-demo-form");
  demoForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!demoForm.checkValidity()) {
      demoForm.reportValidity();
      return;
    }
    const data = new FormData(demoForm);
    const subject = `RevvOS demo request - ${data.get("company")}`;
    const body = [
      "New RevvOS demo request",
      "",
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      "",
      "Problem the team keeps chasing:",
      data.get("problem")
    ].join("\r\n");
    window.location.href = `mailto:team@simplufy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
