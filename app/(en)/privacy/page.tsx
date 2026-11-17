import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { common } from "@/content/en/common";
import { CookieSettingsButton } from "@/components/ConsentBanner";
import { analyticsEnabled } from "@/lib/consent";
import "@/styles/legal.css";

/**
 * Privacy and cookies notice.
 *
 * Company, ICO, phone and email details come from site.config.ts, so they stay
 * in step with the footer. The email line appears automatically once
 * siteConfig.email is set.
 *
 * If the business changes how it handles information (new tools, call
 * recording, different retention periods), update this page and the
 * "Last updated" date. If cookies change, update the cookie table too.
 */

const LAST_UPDATED = "17 November 2026";

const title = "Privacy and cookies";
const description =
  "How McKenzie Friend Pro collects, uses and protects your information, how long it is kept, your rights, and the cookies this website uses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title: `${title} | ${siteConfig.brandName}`, description, url: "/privacy" },
};

export default function PrivacyPage() {
  const { company, phone, email, brandName, analytics } = siteConfig;
  const gaCookieSuffix = analytics.ga4Id ? analytics.ga4Id.replace(/^G-/, "") : "";

  return (
    <article className="legal">
      <div className="container legal__inner">
        <header className="legal__header">
          <h1>{title}</h1>
          <p className="legal__lead">
            This page explains what information we collect, why we need it, who we share it with, how long we keep it
            and the choices you have.
          </p>
          <p className="legal__updated">Last updated: {LAST_UPDATED}</p>
        </header>

        <section aria-labelledby="who-we-are">
          <h2 id="who-we-are">Who we are</h2>
          <p>
            {brandName} is a trading name of {company.legalName}, a company registered in {company.registeredIn}{" "}
            (company number {company.number}). Our registered office is {company.registeredOffice}.
          </p>
          <p>
            We are registered with the Information Commissioner&apos;s Office (ICO), reference {company.icoReference}.
          </p>
          <p>
            We are the &ldquo;controller&rdquo; of your information. This means we decide how it is used, and we are
            responsible for looking after it.
          </p>
        </section>

        <section aria-labelledby="contact-us">
          <h2 id="contact-us">How to contact us about your information</h2>
          <ul>
            <li>
              By phone or WhatsApp: <a href={`tel:${phone.e164}`}>{phone.display}</a>
            </li>
            {email ? (
              <li>
                By email: <a href={`mailto:${email}`}>{email}</a>
              </li>
            ) : null}
            <li>
              By post: {company.legalName}, {company.registeredOffice}. Please mark your letter &ldquo;Privacy&rdquo;.
            </li>
          </ul>
        </section>

        <section aria-labelledby="what-we-collect">
          <h2 id="what-we-collect">What information we collect</h2>
          <h3>When you call or message us</h3>
          <p>
            Your name, phone number, WhatsApp details, the language you&apos;d like to use, and anything you choose to
            tell us about your situation. We don&apos;t record phone or video calls.
          </p>
          <h3>When we help you with your case</h3>
          <p>
            Details of your case, court forms and papers, statements, evidence, and notes we make before, during and
            after hearings.
          </p>
          <p>Because of the kind of cases we help with, this can include very sensitive information, such as:</p>
          <ul>
            <li>information about children</li>
            <li>health, including mental health</li>
            <li>allegations of domestic abuse or other criminal behaviour</li>
            <li>religion, ethnicity or relationships, where they matter to the case</li>
          </ul>
          <p>
            It can also include information about other people in your case, such as the other party, children,
            family members and witnesses. This comes from you, or from court papers.
          </p>
          <p>
            You don&apos;t have to give us any information, but without it we may not be able to help with your case.
          </p>
          <h3>When you visit this website</h3>
          <p>
            If you say yes to cookies, Google Analytics collects information about how the site is used (see{" "}
            <a href="#cookies">Cookies</a> below). If you say no, it collects nothing. Our website host also handles
            basic technical information, such as your device&apos;s IP address, to deliver the website and keep it
            secure.
          </p>
        </section>

        <section aria-labelledby="why-we-use-it">
          <h2 id="why-we-use-it">Why we use it, and the law that allows us to</h2>
          <div className="legal__table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">What we do</th>
                  <th scope="col">Why the law allows it</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reply to your call or message, and talk through how we can help</td>
                  <td>You&apos;ve asked us to, before any agreement (steps before a contract)</td>
                </tr>
                <tr>
                  <td>Help you with your case</td>
                  <td>To carry out our agreement with you (contract)</td>
                </tr>
                <tr>
                  <td>Use sensitive information, and information about criminal allegations, in your case</td>
                  <td>
                    It&apos;s needed for legal proceedings: establishing, exercising or defending legal claims (UK GDPR
                    Article 9(2)(f), and the Data Protection Act 2018, Schedule 1, paragraph 33)
                  </td>
                </tr>
                <tr>
                  <td>Use information about other people in your case</td>
                  <td>
                    Our legitimate interest, and yours, in preparing your case properly. We only use what the case
                    needs.
                  </td>
                </tr>
                <tr>
                  <td>Keep business, accounting and tax records</td>
                  <td>We have to by law (legal obligation)</td>
                </tr>
                <tr>
                  <td>Understand how the website is used</td>
                  <td>Only if you agree (consent)</td>
                </tr>
                <tr>
                  <td>Keep the website working and secure</td>
                  <td>Our legitimate interest in running a safe website</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="sharing">
          <h2 id="sharing">Who we share it with</h2>
          <p>We never sell your information. We only share it when we need to:</p>
          <ul>
            <li>with an interpreter or translator, only if your case needs one and you agree</li>
            <li>
              with the services we use to run the business, such as phone, WhatsApp, email and cloud storage
              providers, and our website host. They can only use it to provide their service to us.
            </li>
            <li>with Google, for website analytics, if you say yes to cookies</li>
            <li>
              when the law requires it, such as a court order, or to protect someone from serious harm, such as a
              concern about a child&apos;s safety
            </li>
          </ul>
          <p>
            Court papers are different: you sign and send your own papers, and anything you file with the court is
            shared with the court and the other party under the court&apos;s rules.
          </p>
        </section>

        <section aria-labelledby="outside-uk">
          <h2 id="outside-uk">Information sent outside the UK</h2>
          <p>
            Some of the services we use, such as Google, WhatsApp and our website host, may store or handle
            information outside the UK, for example in the United States. When they do, it is protected in the ways UK
            law requires, such as UK government &ldquo;adequacy&rdquo; decisions or approved contract terms.
          </p>
        </section>

        <section aria-labelledby="how-long">
          <h2 id="how-long">How long we keep it</h2>
          <div className="legal__table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Information</th>
                  <th scope="col">How long</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Calls and messages that don&apos;t lead to us working together</td>
                  <td>Up to 6 months</td>
                </tr>
                <tr>
                  <td>Case papers: statements, bundles, evidence, messages and notes about your case</td>
                  <td>12 months after your case ends, then deleted or returned to you</td>
                </tr>
                <tr>
                  <td>A basic business record: your name and contact details, dates, the work we did, invoices and payments</td>
                  <td>6 years, for tax and legal reasons</td>
                </tr>
                <tr>
                  <td>Website analytics (only if you said yes to cookies)</td>
                  <td>No more than 14 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="keeping-safe">
          <h2 id="keeping-safe">Keeping it safe and confidential</h2>
          <p>
            We take appropriate steps to keep your information secure, and only people who need it to help you can
            see it. We don&apos;t share what you tell us without your permission, unless the law requires it or someone
            is at risk of serious harm.
          </p>
        </section>

        <section aria-labelledby="your-rights">
          <h2 id="your-rights">Your rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>ask for a copy of the information we hold about you</li>
            <li>ask us to correct anything that&apos;s wrong</li>
            <li>ask us to delete your information, or to stop or limit how we use it</li>
            <li>object to how we use it</li>
            <li>ask us to send it to you, or to someone else, in a common format</li>
            <li>change your mind about cookies at any time</li>
          </ul>
          <p>We don&apos;t make decisions about you using computers alone.</p>
          <p>
            It&apos;s free to ask, and we&apos;ll reply within one month. Some rights have limits; for example, we may
            need to keep business records for tax. If so, we&apos;ll explain why.
          </p>
          <p>
            If you&apos;re unhappy with how we&apos;ve handled your information, please tell us first so we can put it
            right. You can also complain to the Information Commissioner&apos;s Office: visit{" "}
            <a href="https://ico.org.uk/make-a-complaint/" rel="noopener noreferrer">
              ico.org.uk/make-a-complaint
            </a>{" "}
            or call <a href="tel:03031231113">0303 123 1113</a>.
          </p>
        </section>

        <section aria-labelledby="cookies">
          <h2 id="cookies">Cookies</h2>
          <p>
            Cookies are small files a website saves on your device. This site only uses cookies from Google Analytics,
            to help us understand how the site is used, and only if you say yes. If you say no, no Google cookies are
            set and nothing is sent to Google.
          </p>
          {/* On phones this table stacks into one card per cookie (see legal.css). */}
          <div className="legal__table-wrap">
            <table className="legal__stack">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">What it does</th>
                  <th scope="col">How long</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Name">
                    <code>mfp-cookie-consent</code>
                  </td>
                  <td data-label="What it does">
                    Remembers whether you said yes or no to cookies. It stays in your browser and is never sent to us or
                    to Google.
                  </td>
                  <td data-label="How long">12 months</td>
                </tr>
                <tr>
                  <td data-label="Name">
                    <code>_ga</code>
                  </td>
                  <td data-label="What it does">Google Analytics: tells one visitor apart from another</td>
                  <td data-label="How long">Up to 2 years</td>
                </tr>
                {gaCookieSuffix ? (
                  <tr>
                    <td data-label="Name">
                      <code>_ga_{gaCookieSuffix}</code>
                    </td>
                    <td data-label="What it does">Google Analytics: keeps track of your visit</td>
                    <td data-label="How long">Up to 2 years</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
          {analyticsEnabled() ? (
            <p className="legal__cookie-action">
              <CookieSettingsButton label="Change your cookie settings" className="btn btn--navy" />
            </p>
          ) : null}
          <p>You can also delete cookies or block them in your browser&apos;s settings.</p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes">Changes to this page</h2>
          <p>
            If we change how we use your information, we&apos;ll update this page and the date at the top.
          </p>
        </section>
      </div>
    </article>
  );
}
