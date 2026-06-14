const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

let activeDrawer = null;

function openDrawer(id) {
  const drawer = document.getElementById(id);
  const backdrop = $("[data-backdrop]");
  if (!drawer) return;
  closeDrawer();
  activeDrawer = drawer;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  if (backdrop) backdrop.classList.add("is-visible");
  document.body.classList.add("no-scroll");
}

function closeDrawer() {
  if (activeDrawer) {
    activeDrawer.classList.remove("is-open");
    activeDrawer.setAttribute("aria-hidden", "true");
  }
  activeDrawer = null;
  const backdrop = $("[data-backdrop]");
  if (backdrop) backdrop.classList.remove("is-visible");
  document.body.classList.remove("no-scroll");
}

function setupDrawers() {
  $$("[data-open-drawer]").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.openDrawer));
  });

  $$("[data-close-drawer]").forEach((button) => {
    button.addEventListener("click", closeDrawer);
  });

  const backdrop = $("[data-backdrop]");
  if (backdrop) backdrop.addEventListener("click", closeDrawer);
}

function setupDemoPrompts() {
  const thread = $("[data-chat-thread]");
  if (!thread) return;
  const prompts = {
    fear: {
      question: "Rose, what does the Bible say when I feel afraid?",
      answer: "Psalm 23:4 and Isaiah 41:10 speak directly into fear. The Bible takes fear seriously and redirects your attention to God's presence.",
      ref: "Isaiah 41:10",
      verse: "Fear not, for I am with you."
    },
    forgive: {
      question: "Rose, how can I forgive someone?",
      answer: "Matthew 18 and Colossians 3 frame forgiveness as a response to God's forgiveness. It is not denial, but a path toward freedom.",
      ref: "Colossians 3:13",
      verse: "Forgive as the Lord forgave you."
    },
    purpose: {
      question: "Rose, how do I understand my calling?",
      answer: "Micah 6:8 and Romans 12 connect calling with justice, mercy, humility, and the gifts God has entrusted to you.",
      ref: "Micah 6:8",
      verse: "He has told you, O man, what is good."
    }
  };

  function render(prompt) {
    thread.innerHTML = `
      <article class="bubble user">
        <span>Voice question</span>
        <p>${prompt.question}</p>
      </article>
      <article class="bubble ai">
        <span>Rose</span>
        <p>${prompt.answer}</p>
      </article>
      <article class="verse-card">
        <strong>${prompt.ref}</strong>
        <p>${prompt.verse}</p>
      </article>
    `;
  }

  $$("[data-demo-prompt]").forEach((button) => {
    button.addEventListener("click", () => render(prompts[button.dataset.demoPrompt]));
  });
}

function setupVoicePulse() {
  const button = $("[data-voice-pulse]");
  const label = $("[data-voice-label]");
  if (!button || !label) return;

  button.addEventListener("click", () => {
    button.classList.toggle("is-listening");
    label.textContent = button.classList.contains("is-listening") ? "Listening..." : "Tap to speak";
  });
}

function setupPricingBilling() {
  const buttons = $$("[data-billing-option]");
  const price = $("[data-price-monthly]");
  const note = $("[data-price-note]");
  if (!buttons.length || !price || !note) return;

  function setBilling(cycle) {
    buttons.forEach((button) => {
      const isActive = button.dataset.billingOption === cycle;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    price.textContent = cycle === "monthly" ? price.dataset.priceMonthly : price.dataset.priceAnnual;
    note.textContent = cycle === "monthly" ? "" : " billed annually";
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => setBilling(button.dataset.billingOption));
  });
}

function setupFeaturePreview() {
  const target = $("[data-feature-image-target]");
  const buttons = $$("[data-feature-image]");
  if (!target || !buttons.length) return;

  function activate(button) {
    buttons.forEach((item) => {
      const isActive = item === button;
      item.setAttribute("aria-pressed", String(isActive));
      item.closest("li")?.classList.toggle("is-active", isActive);
    });

    const nextImage = button.dataset.featureImage;
    if (!nextImage || target.getAttribute("src") === nextImage) return;

    target.classList.add("is-changing");

    setTimeout(() => {
      target.src = nextImage;
      target.alt = button.dataset.featureAlt || "";

      const clearTransition = () => target.classList.remove("is-changing");
      target.addEventListener("load", clearTransition, { once: true });
      if (target.complete) setTimeout(clearTransition, 80);
    }, 90);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => activate(button));
    button.addEventListener("mouseenter", () => activate(button));
    button.addEventListener("focus", () => activate(button));
  });
}

function setupForms() {
  $$("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = $("button[type='submit']", form);
      if (!button) return;
      const oldText = button.textContent;
      button.textContent = "Thanks";
      setTimeout(() => {
        button.textContent = oldText;
      }, 1200);
    });
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawer();
});

setupDrawers();
setupDemoPrompts();
setupVoicePulse();
setupPricingBilling();
setupFeaturePreview();
setupForms();
