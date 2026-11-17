/**
 * Home page, English.
 *
 * Blocks marked APPROVED COPY are used exactly as supplied (line breaks only
 * adjusted). Do not reword them without sign-off. Everything else was written
 * to match that voice and can be edited freely.
 *
 * Blocks marked REVISED were changed at Shazad's request during review
 * (16 November 2026): lines that made a solicitor or barrister sound like the
 * better option, or that undersold what a McKenzie Friend does, were removed
 * or rewritten. Availability is 24 hours a day, 7 days a week. Nothing is
 * said about quotes, prices or fee structure until fees are set. "Free" is
 * used only for the first call, so nobody reads the whole service as free.
 * Wording such as "we'll tell you honestly whether we can help" is avoided,
 * and so are promises ("we'll start straight away").
 *
 * The "working with us" blocks live in site.config.ts, as the brief asks.
 */
import { placeholder } from "@/lib/site";

export const home = {
  meta: {
    title: "McKenzie Friend Pro: court support in England and Wales",
    description:
      "Can't afford a solicitor, or going to court without one? McKenzie Friend support for family and civil cases in England and Wales, in five languages. The first call is free.",
  },

  // REVISED: the headline now speaks to people who can't afford a solicitor,
  // and the lead keeps "going to court without a solicitor".
  // Was: "Going to court without a solicitor? You don't have to face it alone."
  hero: {
    titleLines: ["Can't afford a solicitor?", "You don't have to face court alone."],
    lead: "Going to court without a solicitor? Get professional McKenzie Friend support for family and civil cases, in English, Urdu, Hindi, Punjabi and Potohari. Speak directly to Shazad Akhtar, from your first call to your final hearing.",
    trust: [
      "Free first call",
      "Available 24/7", // REVISED: was "Available whenever you need us"
      "Anywhere in England and Wales",
      "In person or by video",
    ],
    // The hero visual: a court-ready checklist on a stack of papers, with the two chairs.
    sheet: {
      title: "Ready for court",
      items: [
        { text: "Forms filled in", codes: ["C100", "FL401", "C1A"] },
        { text: "Statement drafted", codes: [] },
        { text: "Bundle indexed and numbered", codes: [] },
        { text: "Explained in your own language", codes: [] },
        { text: "Someone beside you on the day", codes: [] },
      ],
    },
  },

  // "Call now." is the call link. REVISED: the last sentence was
  // "We'll tell you straight away whether we can help in time." It must not be a promise.
  urgent: {
    question: "Hearing in the next 14 days?",
    action: "Call now.",
    reassurance: "The sooner we talk, the more we can do.",
  },

  // NEW: lets people spot their own situation at a glance, by the name of the
  // order and the form number printed in the corner of the court form.
  recognise: {
    heading: "Is this what you're going through?",
    // Neutral on purpose: some readers are applying, others are responding or accused.
    intro: "Whether you're applying to the court or responding, if any of these sound familiar, you're in the right place.",
    formLabel: "Form",
    items: [
      {
        code: "C100",
        title: "Child arrangements",
        text: "Where a child lives and who they spend time with.",
        href: "/family-court-help#child-arrangements",
      },
      {
        code: "C100",
        title: "Prohibited steps order (PSO)",
        text: "An order to stop something specific, such as a child being taken abroad.",
        href: "/family-court-help#prohibited-steps",
      },
      {
        code: "FL401",
        title: "Non-molestation order (NMO)",
        text: "An order about harassment or abuse, whether you're asking for one or have been served with one.",
        href: "/family-court-help#non-molestation",
      },
      {
        code: "FL401",
        title: "Occupation order",
        text: "An order about who lives in the family home.",
        href: "/family-court-help#non-molestation",
      },
      {
        code: "C1A",
        title: "Domestic abuse allegations",
        text: "Whether you're raising allegations, or responding to allegations made about you.",
        href: "/family-court-help#fact-finding",
      },
      {
        code: "",
        title: "Financial remedy and divorce",
        text: "Sorting out money and property when a marriage or civil partnership ends.",
        href: "/family-court-help#financial-remedy",
      },
    ],
  },

  help: {
    heading: "What we help with", // APPROVED COPY
    cards: [
      {
        icon: "forms",
        title: "Court forms", // APPROVED COPY
        text: "C100, FL401, C1A and other court forms, filled in fully and clearly.",
        href: "/services#court-forms",
      },
      {
        icon: "documents",
        title: "Statements and bundles", // APPROVED COPY
        text: "Your written statement and your bundle (the indexed set of papers the court reads), set out clearly.",
        href: "/services#court-documents",
      },
      {
        icon: "factFinding",
        title: "Fact-finding hearings", // APPROVED COPY
        text: "Help getting ready for a hearing where the judge decides what happened.",
        href: "/services#fact-finding",
      },
      {
        icon: "onTheDay",
        title: "Support on the day", // APPROVED COPY
        text: "We sit beside you, take notes and quietly help you keep on track.",
        href: "/services#on-the-day",
      },
      {
        icon: "civil",
        title: "Civil disputes", // APPROVED COPY
        text: "Small claims, debt, housing and contract disputes.",
        href: "/services#civil-disputes",
      },
    ],
  },

  // REVISED twice: replaces "Honest about what we do". Now sets out the full
  // weight of what a McKenzie Friend does, with the client staying in control.
  role: {
    heading: "The bridge between going to court alone and hiring a legal team",
    lead: "Not everyone can walk into court alone, and not everyone can pay for a solicitor and a barrister. A McKenzie Friend gives you real, hands-on help with every part of your case, while you stay in control.",
    doLabel: "What we do:",
    do: [
      "Draft your statements and other court documents, ready for you to check and sign",
      "Prepare your court forms, such as the C100, FL401 and C1A",
      "Build your court bundle, indexed and page-numbered",
      "Get you ready for each hearing, including the questions you want asked",
      "Sit beside you in court, take notes and quietly guide you",
      "Explain what the judge decided, and plan the next step with you",
    ],
    controlLabel: "You stay in control:",
    control: [
      "You check and sign everything that goes to the court",
      "You speak for yourself in court, and we make sure you're ready",
      "It's your case and your words, set out clearly",
    ],
    // Rights of audience. Always the judge's decision, so this must never read as a promise.
    audience:
      "Sometimes the judge gives permission for a McKenzie Friend to speak on your behalf in court. This is called a right of audience, and when it's granted, we're ready.",
  },

  // APPROVED COPY (shortened, see below)
  languages: {
    heading: "Talk it through in the language you think in",
    list: ["English", "Urdu", "Hindi", "Punjabi", "Potohari"],
    // REVISED: the sentence about family members joining, and the interpreter
    // note, were removed. How court interpreters work is covered on the Languages page.
    body: "Court is hard enough in your first language. You can explain everything properly, ask every question and understand each step.",
    graphicAlt: "Speech bubbles saying English, Urdu, Hindi and Punjabi, each in its own script.",
  },

  working: {
    heading: "What working with us looks like", // APPROVED COPY
  },

  // APPROVED COPY
  comparison: {
    heading: "Court shouldn't depend on what you can afford",
    intro: "Lawyers can cost tens of thousands. Going in alone can cost you even more. There's a better middle ground.",
    ours: {
      badge: "Best fit for most people",
      title: "McKenzie Friend Pro",
      points: [
        "Your first call is free", // REVISED: was "Your first chat is free, then a fixed quote in writing"
        "Shazad, from start to finish",
        "Help in English, Urdu, Hindi, Punjabi or Potohari",
        "Available 24/7", // REVISED: was "Available whenever you need us"
        "You're never alone in court",
      ],
    },
    lawyers: {
      title: "Solicitor + barrister",
      costLabel: "What it can cost:",
      cost: "From thousands to tens of thousands of pounds",
      note: "Costs vary hugely from case to case. In complex cases, they can climb far higher.", // REVISED: was "complex children cases"
      points: [
        { text: "Usually charged by the hour, so costs can keep rising" },
        { text: "Senior solicitors' guideline rates: ", cost: "£288–£579 an hour" },
        { text: "Barrister fees added on top for hearings" },
      ],
    },
    alone: {
      title: "Going to court alone", // REVISED: was "Going it alone"
      points: [
        "Court fees only",
        "No one to help with forms, statements or bundles",
        "Facing the judge, and the other side, on your own",
      ],
    },
    // REVISED: the footnote now sits behind a small "About these figures" link
    // inside the solicitor + barrister card. {date} is filled from
    // comparisonCheckedDate in site.config.ts. The second footnote line
    // ("McKenzie Friend Pro is not a law firm. ...") was removed.
    figuresNote: {
      label: "About these figures",
      text: "Based on published solicitor and barrister fee estimates, MoneyHelper figures, reported court cases and the solicitors' guideline hourly rates from 1 January 2026 (GOV.UK). Every case is different. Figures checked {date}.",
    },
  },

  // Hidden for now (showMeet is false in site.config.ts).
  meet: {
    heading: "Meet Shazad", // APPROVED COPY
    body: placeholder(
      "2–3 sentences about Shazad, in his own words: his background, why he does this work and the languages he speaks",
    ),
    link: { href: "/about", label: "More about Shazad" },
  },

  /**
   * Hidden for now (showReviews is false in site.config.ts).
   * Add genuine reviews here when they are supplied: anonymised, and with
   * nothing that identifies children or parties. Each one looks like:
   *   { quote: "…", source: "Child arrangements, March 2026" }
   */
  reviews: {
    heading: "What clients say",
    items: [] as { quote: string; source: string }[],
  },

  // Hidden for now (showFaqs is false in site.config.ts).
  faqs: {
    heading: "Common questions",
    // APPROVED COPY
    items: [
      {
        question: "Will the judge let you sit with me?",
        answer:
          "Usually, yes. You ask the court at the start of the hearing, or beforehand. Judges normally agree, but the decision is theirs. We'll give you a short note to hand in.",
      },
      {
        question: "Can you speak for me in court?",
        answer:
          "Normally, no. You speak for yourself, and we help you prepare so you're ready. Occasionally a judge allows a McKenzie Friend to speak, but that's rare and always the judge's decision.",
      },
      {
        question: "Is what I tell you confidential?",
        answer: "Yes. We don't share your information without your permission, unless the law requires it.",
      },
    ],
    more: { href: "/what-is-a-mckenzie-friend", label: "More about what a McKenzie Friend does" },
  },

  // APPROVED COPY
  finalCta: {
    heading: "You don't have to work it out alone",
    // REVISED: was "Speak to Shazad free, in ... Potohari. Whenever you need us."
    body: "Speak to Shazad in English, Urdu, Hindi, Punjabi or Potohari. We are available 24 hours a day, 7 days a week.",
  },
};

export type HomeContent = typeof home;
