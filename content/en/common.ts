/**
 * Words shared by every English page: navigation, buttons, footer.
 * Translations copy this file's shape into content/ur, content/hi, content/pa.
 */
export const common = {
  skipLink: "Skip to main content",
  homeLabel: "home",

  nav: [
    { href: "/services", label: "Services" },
    { href: "/family-court-help", label: "Family court help" },
    { href: "/languages", label: "Languages" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  urgentNav: { href: "/urgent-help", label: "Urgent help" },

  navLabel: "Main",
  menu: { label: "Menu", close: "Close menu", navLabel: "Menu" },
  languageSwitcher: { label: "Language" },

  cta: {
    call: "Speak to us", // REVISED: was "Speak to us free" (people could read the whole service as free)
    whatsapp: "WhatsApp us", // APPROVED COPY
    orCall: "Or call", // followed by the phone number, on screens wider than a phone
  },

  stickyBar: {
    label: "Contact us",
    call: "Call",
    whatsapp: "WhatsApp",
    message: "Message",
  },

  // The cookie banner. Accept and No thanks must stay equally easy to choose.
  consent: {
    title: "Is it okay if we use cookies?",
    body: "They help us make this site better. We'll only use them if you're happy for us to.",
    moreLabel: "More info",
    more: "These cookies are provided by Google. They record things like which parts of the page are used and the type of device, and can last up to 2 years. You can change your mind at any time with \\u201cCookie settings\\u201d at the bottom of the page.",
    accept: "Accept",
    reject: "No thanks",
    statusAccepted: "At the moment, you're happy for us to use cookies.",
    statusRejected: "At the moment, you've said no to cookies.",
  },

  footer: {
    pagesHeading: "Pages",
    extraPages: [{ href: "/what-is-a-mckenzie-friend", label: "What is a McKenzie Friend?" }],

    contactHeading: "Contact",
    availability: "We are available 24 hours a day, 7 days a week.",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    messageLabel: "Send a message",
    coverage: "Anywhere in England and Wales, in person or by video.",

    helpHeading: "Other free help",
    emergency: "If you are in immediate danger, call 999.",
    helpLinks: [
      // `phone` is optional: add it only where a helpline number should be tappable.
      {
        label: "National Domestic Abuse Helpline",
        phone: { href: "tel:08082000247", display: "0808 2000 247" },
        detail: "free, 24 hours",
        href: "https://www.nationaldahelpline.org.uk/",
      },
      {
        label: "Men's Advice Line",
        phone: { href: "tel:08088010327", display: "0808 801 0327" },
        detail: "free",
        href: "https://mensadviceline.org.uk/",
      },
      {
        label: "Citizens Advice",
        detail: "free advice on debt, housing and legal problems",
        href: "https://www.citizensadvice.org.uk/",
      },
      {
        label: "Support Through Court",
        detail: "volunteers who help people facing court without a lawyer",
        href: "https://www.supportthroughcourt.org/",
      },
      {
        label: "Advocate",
        detail: "free help from volunteer barristers, if you qualify",
        href: "https://weareadvocate.org.uk/",
      },
      {
        label: "Shelter",
        detail: "housing and homelessness advice",
        href: "https://england.shelter.org.uk/",
      },
      {
        label: "GOV.UK",
        detail: "representing yourself in court",
        href: "https://www.gov.uk/represent-yourself-in-court",
      },
    ] as { label: string; detail: string; href: string; phone?: { href: string; display: string } }[],

    cookieSettings: "Cookie settings",
    legalLabel: "Legal",
    legalLinks: [
      { href: "/privacy", label: "Privacy" },
      { href: "/cookies", label: "Cookies" },
      { href: "/terms", label: "Terms" },
      { href: "/complaints", label: "Complaints" },
      { href: "/accessibility", label: "Accessibility" },
    ],

    // APPROVED COPY: footer disclaimer, every page.
    disclaimer:
      "McKenzie Friend Pro provides McKenzie Friend services. We are not solicitors or barristers and are not regulated by the SRA or BSB. We do not conduct litigation or represent clients in court. Information on this website is general and is not advice about your case.",
  },
};

export type CommonContent = typeof common;
