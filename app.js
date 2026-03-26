const accordionItems = [
  {
    title: "What is digital sovereignty?",
    body:
      "Digital sovereignty is a country's capacity to govern digital systems, infrastructure, and data in line with its own laws, institutions, and strategic interests. It is about decision-making power inside networked systems rather than complete separation from the global digital economy.",
  },
  {
    title: "What does control mean in a digital context?",
    body:
      "Control does not mean absolute ownership of every technology layer. It usually means having enough legal, technical, economic, and institutional leverage to shape outcomes, set rules, negotiate dependencies, and protect public interests when infrastructure or platforms are externally controlled.",
  },
  {
    title: "Why is digital sovereignty important today?",
    body:
      "Today, states rely on digital systems for public administration, communications, commerce, cultural distribution, and security. When key services are governed elsewhere, questions of jurisdiction, resilience, competition, and democratic accountability become more consequential.",
  },
  {
    title: "What are the key dimensions of sovereignty?",
    body:
      "Digital sovereignty is shaped by several overlapping dimensions:",
    list: [
      "physical infrastructure such as cloud, cables, data centres, and satellites",
      "legal jurisdiction over data, contracts, and enforcement powers",
      "economic capacity to build firms, capture value, and support domestic ecosystems",
      "platform governance over search, social, app stores, and digital markets",
      "strategic technological capability in fields such as AI, quantum, and advanced communications",
    ],
  },
];

const matters = [
  {
    title: "News and information access",
    description:
      "Digital platforms shape what information people encounter and how news circulates. That gives platform design and ranking systems broad social and political significance.",
    icon: "news",
  },
  {
    title: "Economic fairness",
    description:
      "Global digital markets affect who captures value, revenue, and leverage. Sovereignty debates often reflect concerns about bargaining power within highly concentrated markets.",
    icon: "economy",
  },
  {
    title: "Cultural visibility",
    description:
      "Platforms influence the visibility of domestic media and cultural content. That matters for discoverability, representation, and the terms on which local creators reach audiences.",
    icon: "culture",
  },
  {
    title: "Data governance and control",
    description:
      "Data flows raise questions about jurisdiction, privacy, public capacity, and strategic dependence. Governance choices determine how data is stored, accessed, and used.",
    icon: "data",
  },
];

const capacities = [
  {
    title: "Cohere",
    description:
      "Cohere is a Canada-founded AI company focused on enterprise large language models and applied AI tools. The paper notes a valuation of about $7 billion after raising roughly $1.6 billion, which makes it a concrete example of Canadian AI scale.",
    link: "https://cohere.com/",
  },
  {
    title: "Telesat Lightspeed",
    description:
      "Telesat Lightspeed is a low Earth orbit satellite network initiative designed to expand secure and resilient connectivity. The paper highlights more than $2.5 billion in government backing and frames it as a sovereign communications asset.",
    link: "https://www.telesat.com/leo-satellites/",
  },
  {
    title: "Canadian Photonics Fabrication Centre",
    description:
      "The Canadian Photonics Fabrication Centre supports prototyping and fabrication for photonics-enabled technologies. The paper describes it as the only indium phosphide foundry in North America, which gives it outsized strategic significance.",
    link: "https://nrc.canada.ca/en/research-development/nrc-facilities/canadian-photonics-fabrication-centre",
  },
  {
    title: "D-Wave",
    description:
      "D-Wave is a quantum computing company with Canadian roots and a long-standing presence in the national innovation ecosystem. The paper points to its March 2025 quantum milestone as evidence of real domestic depth in frontier computing.",
    link: "https://www.dwavesys.com/",
  },
];

const policies = [
  {
    title: "Online Streaming Act (Bill C-11)",
    does:
      "Brings major streaming services into Canada's broadcasting framework.",
    date: "Royal Assent: April 2023",
    matters:
      "It extends cultural policy into platform-based media markets.",
  },
  {
    title: "Online News Act (Bill C-18)",
    does:
      "Creates a bargaining framework between large platforms and eligible news businesses.",
    date: "Royal Assent: June 2023",
    matters:
      "It responds to platform power and supports Canadian news sustainability.",
  },
  {
    title: "Digital Services Tax",
    does:
      "Targets certain revenues earned by large digital firms in Canadian digital markets.",
    date: "Federal tax tool tied to the 2024 calendar year",
    matters:
      "It uses taxation as a market tool while also creating cross-border political pressure. Halted in 2025 due to US pressure.",
  },
];

const timeline = [
  {
    period: "Legislative build-up",
    date: "2022",
    title: "Bill C-11 and Bill C-18 move through Parliament",
    description:
      "Digital governance debates become central to how Canada responds to platform concentration in media and communications.",
  },
  {
    period: "Streaming regulation",
    date: "Apr 2023",
    title: "Online Streaming Act receives Royal Assent",
    description:
      "Canada extends its broadcasting policy approach into the streaming era.",
  },
  {
    period: "News bargaining",
    date: "Jun 2023",
    title: "Online News Act receives Royal Assent",
    description:
      "A new bargaining framework is established around platform-news relations.",
  },
  {
    period: "Tax and trade pressure",
    date: "2024",
    title: "Digital Services Tax intensifies trade and diplomatic debate",
    description:
      "Tax policy, trade relations, and digital market governance become visibly linked. DST halted in 2025 due to US pressure.",
  },
];

const policyTags = [
  {
    title: "Data governance and localization debates",
    description:
      "Questions about where sensitive data is stored and how public bodies manage jurisdictional risk. These debates often turn on procurement choices, privacy expectations, and whether foreign-controlled infrastructure limits public-sector flexibility.",
  },
  {
    title: "Digital trade constraints",
    description:
      "Trade rules can shape how much room states have to pursue domestic digital policy goals. This matters when governments want to privilege local infrastructure, impose market rules, or require certain forms of data handling without triggering trade disputes.",
  },
  {
    title: "Canadian cultural policy in digital markets",
    description:
      "Discoverability, compensation, and platform obligations remain contested governance issues. The core challenge is whether cultural policy developed for older media systems can be translated effectively into algorithmic and on-demand environments.",
  },
  {
    title: "AI governance discussions",
    description:
      "Canada is balancing innovation goals with emerging debates on safety, accountability, and public oversight. This debate matters because sovereignty depends not only on having AI firms, but also on having institutions that can govern their social and economic impact.",
  },
  {
    title: "Public procurement and infrastructure strategy",
    description:
      "State purchasing decisions can influence resilience, standards, and long-term capability-building. Procurement can quietly shape sovereignty by determining which vendors, architectures, and contractual dependencies become normal across government systems.",
  },
];

const comparisons = [
  {
    title: "Canada",
    description:
      "Canada's approach is evolving and mixed, combining regulation, digital governance, and selective support for emerging capacity. The paper contrasts Canada's $2 billion AI Compute Strategy with much larger allied and competitor investments, underscoring a scale gap.",
    tags: ["Mixed model", "$2B AI Compute Strategy", "High integration with U.S."],
  },
  {
    title: "United States",
    description:
      "The United States holds strong positions in cloud, compute, platforms, and semiconductors. Its model is reinforced by scale, private-sector dominance, and industrial strategy measures such as roughly $8 billion in CHIPS Act incentives highlighted in the paper.",
    tags: ["Cloud and platform ownership", "CHIPS Act scale", "Industrial policy"],
  },
  {
    title: "European Union",
    description:
      "The European Union emphasizes regulation, competition policy, platform governance, and digital rights. The paper points to the EU Chips Act's 43 billion euro mobilization and a target of 20% of global semiconductor production by 2030.",
    tags: ["Regulatory power", "EUR43B Chips Act", "Market rules"],
  },
  {
    title: "China",
    description:
      "China pursues a more state-led, full-stack approach across infrastructure, industrial policy, platforms, and digital systems. The paper highlights nearly $100 billion in annual AI investment and more than $100 billion deployed through its semiconductor 'Big Fund.'",
    tags: ["State-led strategy", "Near $100B AI spend", "Industrial depth"],
  },
];

const insights = [
  {
    title: "Infrastructure dependence shapes state capacity",
    description:
      "When foundational systems are controlled elsewhere, governments have less room to set terms on their own. Capacity depends partly on who owns and operates essential digital layers.",
  },
  {
    title: "Platform power influences policy outcomes",
    description:
      "Large platforms affect news markets, cultural visibility, competition, and the circulation of information. Their scale can shape what policy tools are practical or contested.",
  },
  {
    title: "Sovereignty depends on both capacity and governance",
    description:
      "Building domestic capability matters, but so does governance over contracts, rules, standards, and public institutions. Sovereignty is strengthened when technical and legal capacity move together.",
  },
];

const resources = [
  {
    title: "Canadian Shield Institute",
    description:
      "Policy and research organization working on national resilience, security, and digital-era governance questions.",
    link: "https://www.canadianshieldinstitute.com/",
  },
  {
    title: "Government of Canada Digital Sovereignty Framework",
    description:
      "A federal framing document connecting digital sovereignty to public-sector decision-making and digital policy strategy.",
    link: "https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/cloud-services/digital-sovereignty/digital-sovereignty-framework-improve-digital-readiness.html",
  },
  {
    title: "UBC article on digital divide and data sovereignty",
    description:
      "A UBC-published article connecting access, archival power, and Indigenous data governance in the Canadian context.",
    link: "https://beyond.ubc.ca/what-is-indigenous-data-sovereignty-and-why-does-it-matter/",
  },
  {
    title: "World Economic Forum article on Europe and digital sovereignty",
    description:
      "A concise overview of how European actors frame sovereignty in relation to technology policy and strategic autonomy.",
    link: "https://www.weforum.org/stories/2023/07/europe-digital-sovereignty/",
  },
  {
    title: "Policy Options article on digital sovereignty in Canada",
    description:
      "An accessible policy discussion about what digital sovereignty means in the Canadian context and why it matters.",
    link: "https://policyoptions.irpp.org/magazines/august-2023/digital-sovereignty-canada/",
  },
  {
    title: "Politico Europe on digital sovereignty in a fragmented world",
    description:
      "A journalistic piece exploring how the concept is being used across geopolitics, infrastructure, and regulatory debates.",
    link: "https://www.politico.eu/article/digital-sovereignty-fragmented-world-tech-geopolitics/",
  },
  {
    title: "Global Government Forum on Canada's digital sovereignty approach",
    description:
      "Reporting on how digital sovereignty is being integrated into Canadian government thinking and operational decision-making.",
    link: "https://www.globalgovernmentforum.com/canada-integrates-digital-sovereignty-into-government-decision-making/",
  },
];

const seedWords = [
  "capacity",
  "governance",
  "resilience",
  "jurisdiction",
  "autonomy",
  "infrastructure",
  "platforms",
  "privacy",
  "innovation",
  "strategy",
];

const actualFigures = {
  canada: 5.8,
  us: 10.2,
};

function iconMarkup(name) {
  const icons = {
    news: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11a2 2 0 0 1 2 2v9.5A3.5 3.5 0 0 1 14.5 19H8a3 3 0 0 1-3-3Zm3 4v2h7V8Zm0 4v2h5v-2Zm10-2h1a2 2 0 0 1 2 2v3.5A3.5 3.5 0 0 1 17.5 19H16a4.48 4.48 0 0 0 2-3.5Z"/></svg>`,
    economy: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a1 1 0 0 1 1 1v1.08a4.76 4.76 0 0 1 3.13 1.4l-1.42 1.42A2.81 2.81 0 0 0 12.7 7H11a1.5 1.5 0 0 0 0 3h2a3.5 3.5 0 0 1 0 7H13V20h-2v-3.08A4.76 4.76 0 0 1 7.87 15.5l1.42-1.42A2.81 2.81 0 0 0 11.3 15H13a1.5 1.5 0 0 0 0-3h-2a3.5 3.5 0 0 1 0-7h0V4a1 1 0 0 1 1-1Z"/></svg>`,
    culture: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 14.7 9l5.8.84-4.2 4.1.99 5.8L12 16.9 6.71 19.7l.99-5.8-4.2-4.1L9.3 9Z"/></svg>`,
    data: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4c4.97 0 8 1.79 8 4s-3.03 4-8 4-8-1.79-8-4 3.03-4 8-4Zm-8 6.5c1.55 1.4 4.44 2.25 8 2.25s6.45-.85 8-2.25V14c0 2.21-3.58 4-8 4s-8-1.79-8-4Zm0 5.25C5.55 17.15 8.44 18 12 18s6.45-.85 8-2.25V19c0 2.21-3.58 4-8 4s-8-1.79-8-4Z"/></svg>`,
  };

  return icons[name] || "";
}

function populateAccordion() {
  const root = document.querySelector("#accordion-root");
  root.innerHTML = accordionItems
    .map(
      (item, index) => `
        <article class="accordion-item ${index === 0 ? "open" : ""}">
          <button class="accordion-trigger" type="button" aria-expanded="${index === 0}" aria-controls="panel-${index}" id="trigger-${index}">
            <span>${item.title}</span>
            <span class="accordion-icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-panel" id="panel-${index}" role="region" aria-labelledby="trigger-${index}">
            <div class="accordion-panel-inner">
              <p>${item.body}</p>
              ${item.list ? `<ul>${item.list.map((entry) => `<li>${entry}</li>`).join("")}</ul>` : ""}
            </div>
          </div>
        </article>
      `
    )
    .join("");

  root.querySelectorAll(".accordion-item").forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");

    if (item.classList.contains("open")) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      root.querySelectorAll(".accordion-item").forEach((other) => {
        other.classList.remove("open");
        other.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
        other.querySelector(".accordion-panel").style.maxHeight = "0px";
      });

      if (!isOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
}

function populateCards() {
  document.querySelector("#matters-grid").innerHTML = matters
    .map(
      (item) => `
        <article class="feature-card">
          <span class="card-icon">${iconMarkup(item.icon)}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");

  document.querySelector("#capacity-grid").innerHTML = capacities
    .map(
      (item) => `
        <article class="capacity-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a href="${item.link}" target="_blank" rel="noreferrer noopener">
            Visit official site
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      `
    )
    .join("");

  document.querySelector("#policy-grid").innerHTML = policies
    .map(
      (item) => `
        <article class="flip-card" tabindex="0" role="button" aria-pressed="false">
          <div class="flip-card-inner">
            <div class="flip-face front">
              <h3>${item.title}</h3>
            </div>
            <div class="flip-face back">
              <h3>${item.title}</h3>
              <p><strong>What it does:</strong> ${item.does}</p>
              <p><strong>${item.date}</strong></p>
              <p><strong>Why it matters:</strong> ${item.matters}</p>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelector("#timeline").innerHTML = timeline
    .map(
      (item) => `
        <article class="timeline-item" data-period="${item.period}">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelector("#tag-grid").innerHTML = policyTags
    .map(
      (item) => `
        <article class="tag-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");

  document.querySelector("#comparison-grid").innerHTML = comparisons
    .map(
      (item) => `
        <article class="comparison-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="comparison-meta">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  document.querySelector("#insight-grid").innerHTML = insights
    .map(
      (item) => `
        <article class="insight-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");

  document.querySelector("#resource-grid").innerHTML = resources
    .map(
      (item) => `
        <article class="resource-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a href="${item.link}" target="_blank" rel="noreferrer noopener">
            Visit resource
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      `
    )
    .join("");
}

function setupNav() {
  const toggle = document.querySelector("#mobile-nav-toggle");
  const sidebar = document.querySelector(".side-nav");
  const navLinks = [...document.querySelectorAll(".nav-link")];

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    sidebar.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === id);
        });
      });
    },
    { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupTimelineFilters() {
  const controls = document.querySelector("#timeline-controls");
  const items = [...document.querySelectorAll(".timeline-item")];
  const periods = [...new Set(timeline.map((entry) => entry.period))];
  const allPeriods = [...periods, "All periods"];

  controls.innerHTML = allPeriods
    .map(
      (period, index) => `
        <button
          class="timeline-filter ${period === "All periods" ? "active" : ""}"
          type="button"
          data-period="${period}"
          role="tab"
          aria-selected="${period === "All periods"}"
        >
          ${period}
        </button>
      `
    )
    .join("");

  const filters = [...controls.querySelectorAll(".timeline-filter")];

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const selectedPeriod = filter.dataset.period;

      filters.forEach((button) => {
        const isActive = button === filter;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
      });

      items.forEach((item) => {
        const show = selectedPeriod === "All periods" || item.dataset.period === selectedPeriod;
        item.style.display = show ? "grid" : "none";
      });
    });
  });
}

function setupScrollCue() {
  const cue = document.querySelector("#scroll-cue");
  cue.addEventListener("click", () => {
    document.querySelector("#definition").scrollIntoView({ behavior: "smooth" });
  });
}

function setupLensSwitch() {
  const buttons = [...document.querySelectorAll(".lens-button")];
  const panels = [...document.querySelectorAll(".landscape-panel")];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const lens = button.dataset.lens;
      buttons.forEach((candidate) => {
        const selected = candidate === button;
        candidate.classList.toggle("active", selected);
        candidate.setAttribute("aria-selected", String(selected));
      });
      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.panel === lens);
      });
    });
  });
}

function setupFlipCards() {
  document.querySelectorAll(".flip-card").forEach((card) => {
    const toggle = () => {
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(flipped));
    };

    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });
}

function setupGraph() {
  const canadaSlider = document.querySelector("#canada-slider");
  const usSlider = document.querySelector("#us-slider");
  const canadaValue = document.querySelector("#canada-guess-value");
  const usValue = document.querySelector("#us-guess-value");
  const revealButton = document.querySelector("#reveal-button");
  const graphResults = document.querySelector("#graph-results");
  const canadaGuessBar = document.querySelector("#canada-guess-bar");
  const usGuessBar = document.querySelector("#us-guess-bar");
  const canadaActualBar = document.querySelector("#canada-actual-bar");
  const usActualBar = document.querySelector("#us-actual-bar");

  const updateLabels = () => {
    canadaValue.textContent = `${Number(canadaSlider.value).toFixed(1)}%`;
    usValue.textContent = `${Number(usSlider.value).toFixed(1)}%`;
    canadaGuessBar.style.width = `${Number(canadaSlider.value)}%`;
    usGuessBar.style.width = `${Number(usSlider.value)}%`;
  };

  updateLabels();
  canadaSlider.addEventListener("input", updateLabels);
  usSlider.addEventListener("input", updateLabels);

  revealButton.addEventListener("click", () => {
    graphResults.classList.add("revealed");
    canadaActualBar.style.width = `${actualFigures.canada}%`;
    usActualBar.style.width = `${actualFigures.us}%`;
  });
}

function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = Number(el.dataset.target);
        let current = 0;
        const tick = () => {
          current += 1;
          el.textContent = `${current}`;
          if (current < target) {
            requestAnimationFrame(tick);
          }
        };

        tick();
        observer.unobserve(el);
      });
    },
    { threshold: 0.8 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

function setupReveals() {
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

function setupWordCloud() {
  const STORAGE_KEY = "digital-sovereignty-cloud";
  const form = document.querySelector("#thought-form");
  const input = document.querySelector("#thought-input");
  const cloud = document.querySelector("#word-cloud");

  const loadWords = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return [...seedWords, ...stored];
    } catch {
      return [...seedWords];
    }
  };

  const saveWords = (words) => {
    const customWords = words.slice(seedWords.length);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customWords));
  };

  const renderCloud = (words) => {
    const counts = words.reduce((acc, word) => {
      const key = word.trim().toLowerCase();
      if (!key) return acc;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    cloud.innerHTML = Object.entries(counts)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([word, count], index) => {
        const size = 0.92 + Math.min(count, 5) * 0.18 + (index % 3) * 0.05;
        return `<span class="cloud-word" style="font-size:${size}rem">${word}</span>`;
      })
      .join("");
  };

  let words = loadWords();
  renderCloud(words);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    words = [...words, value];
    saveWords(words);
    renderCloud(words);
    input.value = "";
    input.focus();
  });
}

populateAccordion();
populateCards();
setupNav();
setupScrollCue();
setupLensSwitch();
setupFlipCards();
setupTimelineFilters();
setupGraph();
animateCounters();
setupReveals();
setupWordCloud();
