'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

const apps = [
  { id: 'feedmapperpro', name: 'FeedMapper PRO' },
  { id: 'backorderpro', name: 'BackorderPRO' },
];

export default function PrivacyPageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const currentApp = pathname.split('/').pop() || 'backorderpro';

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-8 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {locale === 'en' ? 'Privacy Policy' : 'Privacybeleid'}
          </h1>
          <p className="text-gray-400">
            {locale === 'en' 
              ? 'Select an app to view its privacy policy'
              : 'Selecteer een app om het privacybeleid te bekijken'}
          </p>
        </div>
      </section>

      {/* App Tabs */}
      <section className="border-b border-circuit/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {apps.map((app) => (
              <Link
                key={app.id}
                href={`/${locale}/privacy/${app.id}`}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  currentApp === app.id
                    ? 'border-pike text-pike bg-pike/5'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-circuit/50'
                }`}
              >
                {app.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentApp === 'feedmapperpro' && <FeedMapperProPrivacy locale={locale} />}
          {currentApp === 'backorderpro' && <BackorderProPrivacy locale={locale} />}
        </div>
      </section>
    </div>
  );
}

function BackorderProPrivacy({ locale: _locale }: { locale: Locale }) {
  void _locale;
  return (
    <article className="prose prose-invert prose-lg max-w-none">
      <style jsx global>{`
        .prose h1, .prose h2, .prose h3, .prose h4 {
          color: white;
          font-weight: 600;
        }
        .prose p, .prose li {
          color: #9ca3af;
        }
        .prose strong {
          color: white;
        }
        .prose a {
          color: #4DC3E0;
        }
        .prose table {
          width: 100%;
        }
        .prose th {
          color: white;
          background: rgba(30, 58, 95, 0.5);
          padding: 12px;
          text-align: left;
        }
        .prose td {
          color: #9ca3af;
          padding: 12px;
          border-bottom: 1px solid rgba(77, 195, 224, 0.1);
        }
        .prose hr {
          border-color: rgba(77, 195, 224, 0.2);
          margin: 2rem 0;
        }
        .prose code {
          color: #4DC3E0;
          background: rgba(77, 195, 224, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .prose blockquote {
          border-left-color: rgba(77, 195, 224, 0.4);
          color: #9ca3af;
        }
      `}</style>

      <h1>Privacy Statement — BackorderPro</h1>

      <p><strong>Last updated:</strong> 1 June 2026</p>

      <p>
        This Privacy Statement explains what data the BackorderPro app (&quot;BackorderPro&quot;,
        &quot;the app&quot;, &quot;we&quot;, &quot;us&quot;) processes, why we process it, how long we keep it, and
        the rights you and your customers have. BackorderPro is a Shopify app that helps
        merchants manage backorders, pre-orders, supplier feeds, purchasing advice,
        AI-assisted inventory analysis, and optional backorder/delivery-update emails.
      </p>

      <blockquote>
        <p>
          <strong>Operator / data controller for the app:</strong> SnoekByte, Netherlands.
          Trading as <strong>SnoekByte</strong>.
          <br />
          <strong>Contact:</strong>{' '}
          <a href="mailto:support@snoekbyte.nl">support@snoekbyte.nl</a>
        </p>
      </blockquote>

      <hr />

      <h2>1. Roles: who is responsible for what</h2>

      <ul>
        <li>
          For the <strong>merchant&apos;s own store data and their customers&apos; personal data</strong>,
          the <strong>merchant</strong> (the Shopify store owner who installs BackorderPro) is the
          <strong> data controller</strong>. BackorderPro acts as a <strong>data processor</strong> that processes
          this data on the merchant&apos;s behalf and only on their instructions (the
          settings they choose in the app).
        </li>
        <li>
          For <strong>account and operational data about the merchant</strong> (e.g. shop domain,
          subscription, support correspondence), SnoekByte acts as a <strong>controller</strong>.
        </li>
      </ul>

      <p>
        If you are a shopper and have a question about your data, please contact the
        store you purchased from — they are the controller for your order data.
      </p>

      <hr />

      <h2>2. What data we process</h2>

      <h3>2.1 Store &amp; configuration data (merchant)</h3>
      <ul>
        <li>Shopify shop domain and the access token/session needed to operate the app.</li>
        <li>
          App settings: timezones, schedules, delivery/pre-order settings, retention
          preferences, feature toggles, locale.
        </li>
        <li>Subscription/plan information synced from Shopify Billing.</li>
        <li>
          Supplier feed configuration and <strong>supplier credentials</strong> (FTP / form logins),
          which are <strong>encrypted at rest using AES-256-GCM</strong>.
        </li>
      </ul>

      <h3>2.2 Product &amp; inventory data</h3>
      <ul>
        <li>Variant-level metafields in the <code>snoek_bpo</code> namespace.</li>
        <li>
          Product titles, SKUs, variant IDs, vendor names, prices, and inventory levels
          at the time of an order.
        </li>
      </ul>

      <h3>2.3 Backorder &amp; sales data (optional — only when &quot;Backorder Sales Tracking&quot; is on)</h3>
      <ul>
        <li>Order IDs and order numbers (e.g. <code>#1234</code>).</li>
        <li>Order line items, quantities, totals and currency.</li>
        <li>
          Inventory level at the time of order; what the customer saw at checkout
          (e.g. the pre-order/expected-stock message) and any promised delivery date.
        </li>
      </ul>

      <p>
        We do <strong>not</strong> store customer <strong>names</strong>, <strong>phone numbers</strong>,{' '}
        <strong>shipping/billing addresses</strong>, or <strong>payment/card details</strong>.
      </p>

      <h3>2.4 Customer contact data (optional — only when you enable email notifications)</h3>
      <p>If, and only if, the merchant turns on backorder/delivery-update emails:</p>
      <ul>
        <li>The affected customer&apos;s <strong>email address</strong>, stored <strong>encrypted at rest</strong>.</li>
        <li>
          The customer&apos;s <strong>Shopify customer ID</strong> and <strong>locale</strong> (used to send the email
          in the right language).
        </li>
        <li>
          An <strong>email send log</strong>: recipient address, locale, which template was used,
          timestamp, and the email provider&apos;s message ID.
        </li>
      </ul>

      <p>
        This data is used <strong>solely</strong> to send the merchant&apos;s backorder/delivery-update
        emails to that customer. It is <strong>never</strong> used for marketing, <strong>never</strong> sold, and
        <strong> never</strong> shared with the AI analysis feature. Access to customer contact data
        requires Shopify&apos;s approval for <strong>Protected Customer Data</strong>.
      </p>

      <h3>2.5 AI Analyze data (optional — only with explicit, revocable consent)</h3>
      <p>
        The AI Analyze feature produces a plain-language inventory report. It only runs
        after the merchant explicitly opts in, and consent can be revoked at any time.
        When enabled, the following <strong>aggregated, non-personal</strong> data is sent to our AI
        sub-processor (OpenAI) to generate the report:
      </p>
      <ul>
        <li>
          Aggregated product performance (titles, SKUs, vendor names, units sold while
          in vs. out of stock, sales velocity, suggested reorder quantities).
        </li>
        <li>
          Vendor reliability metrics (open/overdue backorder counts, configured lead
          times).
        </li>
        <li>
          The merchant&apos;s configuration (global rules, feed settings, pre-order and
          delivery settings) and aggregated backorder statistics.
        </li>
      </ul>

      <p>
        <strong>No customer personal data</strong> (no names, emails, addresses, phone numbers),{' '}
        <strong>no individual orders or order numbers</strong>, and <strong>no payment data</strong> are ever sent
        to the AI model.
      </p>

      <hr />

      <h2>3. Why we process this data (purposes &amp; legal bases)</h2>

      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Data used</th>
            <th>Legal basis (GDPR Art. 6)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Provide core app functionality (inventory/backorder management, feeds)</td>
            <td>2.1–2.3</td>
            <td>Performance of a contract; legitimate interests</td>
          </tr>
          <tr>
            <td>Show analytics, purchasing advice and pre-order insights</td>
            <td>2.2–2.3</td>
            <td>Performance of a contract; legitimate interests</td>
          </tr>
          <tr>
            <td>Send backorder/delivery-update emails to customers</td>
            <td>2.4</td>
            <td>
              Merchant&apos;s instruction; controller&apos;s legal basis (typically legitimate interest or
              consent of the shopper, determined by the merchant)
            </td>
          </tr>
          <tr>
            <td>Generate the optional AI inventory report</td>
            <td>2.5</td>
            <td>Consent (explicit opt-in in the app)</td>
          </tr>
          <tr>
            <td>Billing, support, fraud/abuse prevention, security</td>
            <td>2.1, support data</td>
            <td>Performance of a contract; legitimate interests; legal obligation</td>
          </tr>
        </tbody>
      </table>

      <p>
        We never sell personal data and never use it for advertising or profiling
        beyond providing the features described here.
      </p>

      <hr />

      <h2>4. Sub-processors</h2>

      <p>
        BackorderPro relies on the following sub-processors. Each only receives the data
        necessary to perform its function:
      </p>

      <table>
        <thead>
          <tr>
            <th>Sub-processor</th>
            <th>Purpose</th>
            <th>Data shared</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Shopify</strong></td>
            <td>App platform; source of store, product, order and (with approval) customer data</td>
            <td>Store, product, order and customer data as authorised by the merchant</td>
          </tr>
          <tr>
            <td><strong>Fly.io</strong></td>
            <td>Application hosting &amp; database (EU region, Amsterdam)</td>
            <td>All data at rest, used to run the app</td>
          </tr>
          <tr>
            <td><strong>OpenAI</strong></td>
            <td>AI Analyze report generation (model: <code>gpt-4o-mini</code>)</td>
            <td>
              Only the aggregated, non-personal data in section 2.5, and only with consent.
              Per OpenAI&apos;s API data-usage policy, API data is not used to train their models
            </td>
          </tr>
          <tr>
            <td><strong>Resend</strong></td>
            <td>Sending backorder/delivery-update emails (only when enabled)</td>
            <td>Recipient email address and email content</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>5. Data retention</h2>

      <ul>
        <li>
          Backorder sales data, product sale events and execution logs are retained for
          a <strong>configurable window of 3–24 months</strong> (default <strong>24 months</strong>), which the
          merchant sets in <strong>Settings → Data &amp; Privacy</strong>. The plan may impose a maximum
          window.
        </li>
        <li>
          Old data beyond the retention window is <strong>automatically deleted</strong> by a daily
          cleanup job.
        </li>
        <li>
          Merchants can <strong>delete all backorder data at any time</strong> from the Settings
          page.
        </li>
        <li>
          Customer email addresses and customer IDs live on the backorder-sale records;
          deleting those records (via retention, manual purge, or a redaction request)
          removes the stored email.
        </li>
        <li>
          When the app is uninstalled, <strong>all shop data is deleted</strong> (within Shopify&apos;s
          required window) in response to the <code>shop/redact</code> webhook.
        </li>
      </ul>

      <hr />

      <h2>6. Security</h2>

      <ul>
        <li>Data is hosted on Fly.io infrastructure in the EU (Amsterdam region).</li>
        <li>
          <strong>Supplier credentials and stored customer email addresses are encrypted at
          rest using AES-256-GCM.</strong>
        </li>
        <li>Data in transit is protected with TLS/HTTPS.</li>
        <li>Access tokens and session data are stored securely and scoped to each shop.</li>
        <li>
          Access to production data is limited to what is necessary to operate and
          support the app.
        </li>
      </ul>

      <p>
        No method of transmission or storage is 100% secure; we work to protect data
        using industry-standard measures and continuously improve our safeguards.
      </p>

      <hr />

      <h2>7. International transfers</h2>

      <p>
        The app and its primary database are hosted in the EU. Some sub-processors
        (e.g. OpenAI, Resend) may process data outside the EU/EEA. Where that is the
        case, transfers are made under an appropriate safeguard such as the EU Standard
        Contractual Clauses or an adequacy decision.
      </p>

      <hr />

      <h2>8. Your rights (data subjects)</h2>

      <p>
        Depending on your location (e.g. under the GDPR), you may have the right to:
        access, rectify, erase, restrict or object to processing, data portability, and
        to withdraw consent at any time. For <strong>AI Analyze</strong>, consent can be withdrawn
        directly in the app (Analyze → AI Analyze → Revoke consent).
      </p>

      <ul>
        <li>
          <strong>Shoppers:</strong> please contact the store you bought from; they are the
          controller of your order data.
        </li>
        <li>
          <strong>Merchants:</strong> contact us at{' '}
          <a href="mailto:support@snoekbyte.nl"><strong>support@snoekbyte.nl</strong></a>.
        </li>
      </ul>

      <p>BackorderPro fully supports Shopify&apos;s mandatory privacy webhooks:</p>
      <ul>
        <li>
          <code>customers/data_request</code> — we provide the merchant with the data we hold that
          is linkable to the requested orders.
        </li>
        <li>
          <code>customers/redact</code> — we delete the customer-linkable backorder records (and
          the email addresses they contain) for the supplied orders.
        </li>
        <li>
          <code>shop/redact</code> — we delete all data for the shop after uninstall.
        </li>
      </ul>

      <hr />

      <h2>9. Children&apos;s data</h2>

      <p>
        BackorderPro is a business tool for merchants and is not directed at children.
        We do not knowingly process children&apos;s personal data.
      </p>

      <hr />

      <h2>10. Changes to this statement</h2>

      <p>
        We may update this Privacy Statement to reflect changes in the app or in legal
        requirements. The &quot;Last updated&quot; date at the top indicates the latest revision.
        Material changes will be communicated through the app where appropriate.
      </p>

      <hr />

      <h2>11. Contact</h2>

      <p>Questions about this Privacy Statement or BackorderPro&apos;s data practices:</p>

      <p>
        <strong>SnoekByte</strong> —{' '}
        <a href="mailto:support@snoekbyte.nl">support@snoekbyte.nl</a>
        <br />
        Website: <a href="https://snoekbyte.nl">https://snoekbyte.nl</a>
      </p>
    </article>
  );
}

function FeedMapperProPrivacy({ locale: _locale }: { locale: Locale }) {
  void _locale;
  return (
    <article className="prose prose-invert prose-lg max-w-none">
      <style jsx global>{`
        .prose h1, .prose h2, .prose h3, .prose h4 { color: white; font-weight: 600; }
        .prose p, .prose li { color: #9ca3af; }
        .prose strong { color: white; }
        .prose a { color: #4DC3E0; }
        .prose table { width: 100%; }
        .prose th { color: white; background: rgba(30, 58, 95, 0.5); padding: 12px; text-align: left; }
        .prose td { color: #9ca3af; padding: 12px; border-bottom: 1px solid rgba(77, 195, 224, 0.1); }
        .prose hr { border-color: rgba(77, 195, 224, 0.2); margin: 2rem 0; }
        .prose code { color: #4DC3E0; background: rgba(77, 195, 224, 0.1); padding: 2px 6px; border-radius: 4px; }
      `}</style>

      <h1>Privacy Policy - FeedMapper PRO</h1>
      
      <p><strong>Last Updated: January 20, 2026</strong></p>
      
      <p>This Privacy Policy describes how SnoekByte (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares information when you use the FeedMapper PRO application (&quot;App&quot;) available through the Shopify App Store.</p>
      
      <hr />
      
      <h2>1. Introduction</h2>
      
      <p>FeedMapper PRO is a Shopify application that helps merchants export and manage product feeds for advertising platforms like Google Shopping, Facebook, Amazon, and more. We are committed to protecting your privacy and handling your data in an open and transparent manner.</p>
      
      <hr />
      
      <h2>2. Information We Collect</h2>
      
      <h3>2.1 Merchant Information</h3>
      
      <p>When you install FeedMapper PRO, we collect and store:</p>
      
      <table>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Purpose</th>
            <th>Retention</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shop domain</td>
            <td>Identify your store</td>
            <td>Until app uninstall + 48 hours</td>
          </tr>
          <tr>
            <td>Access tokens</td>
            <td>API authentication</td>
            <td>Until app uninstall</td>
          </tr>
          <tr>
            <td>Feed configurations</td>
            <td>Generate product feeds</td>
            <td>Until app uninstall</td>
          </tr>
          <tr>
            <td>Field mappings & rules</td>
            <td>Transform product data</td>
            <td>Until app uninstall</td>
          </tr>
        </tbody>
      </table>
      
      <h3>2.2 Product Information</h3>
      
      <p>To generate feeds, we process:</p>
      
      <table>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Purpose</th>
            <th>Retention</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product titles, descriptions</td>
            <td>Include in feed output</td>
            <td>Cached until next sync</td>
          </tr>
          <tr>
            <td>Product prices & variants</td>
            <td>Include in feed output</td>
            <td>Cached until next sync</td>
          </tr>
          <tr>
            <td>Product images & URLs</td>
            <td>Include in feed output</td>
            <td>Cached until next sync</td>
          </tr>
          <tr>
            <td>Inventory levels</td>
            <td>Determine availability status</td>
            <td>Cached until next sync</td>
          </tr>
          <tr>
            <td>SKUs, GTINs, MPNs</td>
            <td>Product identification</td>
            <td>Cached until next sync</td>
          </tr>
        </tbody>
      </table>
      
      <h3>2.3 What We Do NOT Collect</h3>
      
      <p><strong>We explicitly do NOT collect or store:</strong></p>
      
      <ul>
        <li>❌ Customer names or email addresses</li>
        <li>❌ Customer shipping or billing addresses</li>
        <li>❌ Payment information</li>
        <li>❌ Order or customer data</li>
        <li>❌ Any personally identifiable information (PII) of your customers</li>
      </ul>
      
      <hr />
      
      <h2>3. How We Use Your Information</h2>
      
      <p>We use the collected information solely to:</p>
      
      <ol>
        <li><strong>Generate Feeds</strong> - Create product feeds in various formats (CSV, XML) for advertising platforms</li>
        <li><strong>Apply Transformations</strong> - Process your rules and mappings to transform product data</li>
        <li><strong>Validate Data</strong> - Check feeds for compliance with platform requirements</li>
        <li><strong>Schedule Updates</strong> - Run automated feed generation at configured intervals</li>
        <li><strong>Provide Analytics</strong> - Show quality scores and error statistics</li>
      </ol>
      
      <hr />
      
      <h2>4. Feed URLs & Access</h2>
      
      <p>When you generate a feed, we create a unique URL for that feed. This URL:</p>
      
      <ul>
        <li>Contains a unique, unguessable identifier</li>
        <li>Can optionally be password-protected</li>
        <li>Is intended to be shared with advertising platforms</li>
        <li>Only exposes product data you have configured in the feed</li>
      </ul>
      
      <hr />
      
      <h2>5. Data Storage & Security</h2>
      
      <h3>5.1 Security Measures</h3>
      
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Encryption at rest</td>
            <td>All data encrypted on disk</td>
          </tr>
          <tr>
            <td>Secure transmission</td>
            <td>All data via HTTPS/TLS</td>
          </tr>
          <tr>
            <td>Unique feed URLs</td>
            <td>Unguessable identifiers</td>
          </tr>
          <tr>
            <td>Optional password</td>
            <td>Additional feed protection</td>
          </tr>
        </tbody>
      </table>
      
      <hr />
      
      <h2>6. Data Deletion on Uninstall</h2>
      
      <p>When you uninstall FeedMapper PRO:</p>
      <ul>
        <li>Your session data is immediately deleted</li>
        <li>Within 48 hours, all feed configurations are permanently deleted</li>
        <li>All cached product data is removed</li>
        <li>Feed URLs become invalid</li>
      </ul>
      
      <hr />
      
      <h2>7. Your Rights (GDPR)</h2>
      
      <p>Under GDPR, you have the right to:</p>
      
      <ul>
        <li><strong>Access</strong> - Request a copy of your data</li>
        <li><strong>Rectification</strong> - Correct inaccurate data</li>
        <li><strong>Erasure</strong> - Delete your data (uninstall the app)</li>
        <li><strong>Portability</strong> - Export your data</li>
      </ul>
      
      <p>Contact us at <strong>privacy@snoekbyte.nl</strong> to exercise these rights.</p>
      
      <hr />
      
      <h2>8. Contact Us</h2>
      
      <p><strong>SnoekByte</strong></p>
      <ul>
        <li>Email: privacy@snoekbyte.nl</li>
        <li>Website: https://snoekbyte.nl</li>
      </ul>
      
      <hr />
      
      <h2>Summary</h2>
      
      <p>FeedMapper PRO is designed with privacy in mind:</p>
      <ul>
        <li>✅ No customer PII collected</li>
        <li>✅ GDPR compliant</li>
        <li>✅ Automatic data deletion on uninstall</li>
        <li>✅ Optional password-protected feeds</li>
        <li>✅ Product data only (no orders or customers)</li>
        <li>✅ Transparent data practices</li>
      </ul>
    </article>
  );
}

