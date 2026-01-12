'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

const apps = [
  { id: 'backorderpro', name: 'BackorderPRO' },
  // Future apps can be added here
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
          {currentApp === 'backorderpro' && <BackorderProPrivacy locale={locale} />}
        </div>
      </section>
    </div>
  );
}

function BackorderProPrivacy({ locale: _locale }: { locale: Locale }) {
  // locale available for future translations
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
      `}</style>

      <h1>Privacy Policy - BackorderPro</h1>
      
      <p><strong>Last Updated: January 12, 2026</strong></p>
      
      <p>This Privacy Policy describes how SnoekByte (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares information when you use the BackorderPro application (&quot;App&quot;) available through the Shopify App Store.</p>
      
      <hr />
      
      <h2>1. Introduction</h2>
      
      <p>BackorderPro is a Shopify application that helps merchants automatically manage their inventory backorder policies based on supplier feed data. We are committed to protecting your privacy and handling your data in an open and transparent manner.</p>
      
      <p>This Privacy Policy applies to merchants (&quot;you&quot; or &quot;Merchant&quot;) who install and use BackorderPro, as well as to the customers of those merchants (&quot;End Customers&quot;).</p>
      
      <hr />
      
      <h2>2. Information We Collect</h2>
      
      <h3>2.1 Merchant Information</h3>
      
      <p>When you install BackorderPro, we collect and store:</p>
      
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
            <td>Timezone settings</td>
            <td>Schedule synchronizations</td>
            <td>Until app uninstall</td>
          </tr>
          <tr>
            <td>Feed configurations</td>
            <td>Process supplier data</td>
            <td>Until app uninstall</td>
          </tr>
          <tr>
            <td>App preferences</td>
            <td>Personalize your experience</td>
            <td>Until app uninstall</td>
          </tr>
        </tbody>
      </table>
      
      <h3>2.2 Product & Order Information</h3>
      
      <p>To provide our services, we process:</p>
      
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
            <td>Product IDs & Variant IDs</td>
            <td>Match products with supplier feeds</td>
            <td>Until app uninstall</td>
          </tr>
          <tr>
            <td>Product titles & SKUs</td>
            <td>Display in logs and analytics</td>
            <td>Configurable (default 24 months)</td>
          </tr>
          <tr>
            <td>EAN/Barcodes</td>
            <td>Product matching</td>
            <td>Duration of sync process only</td>
          </tr>
          <tr>
            <td>Order IDs & Order names (#1234)</td>
            <td>Track backorder sales</td>
            <td>Configurable (default 24 months)</td>
          </tr>
          <tr>
            <td>Order quantities & prices</td>
            <td>Calculate backorder revenue</td>
            <td>Configurable (default 24 months)</td>
          </tr>
          <tr>
            <td>Inventory levels</td>
            <td>Determine backorder status</td>
            <td>Duration of sync process only</td>
          </tr>
        </tbody>
      </table>
      
      <h3>2.3 Supplier Feed Data</h3>
      
      <p>When you configure supplier feeds, we temporarily process:</p>
      
      <ul>
        <li>Feed URLs or FTP paths</li>
        <li>Authentication credentials (stored encrypted)</li>
        <li>CSV/Excel/XML file contents (processed, not permanently stored)</li>
        <li>Column mappings and rules you configure</li>
      </ul>
      
      <h3>2.4 What We Do NOT Collect</h3>
      
      <p><strong>We explicitly do NOT collect or store:</strong></p>
      
      <ul>
        <li>❌ Customer names</li>
        <li>❌ Customer email addresses</li>
        <li>❌ Customer shipping or billing addresses</li>
        <li>❌ Customer phone numbers</li>
        <li>❌ Payment information or credit card details</li>
        <li>❌ Customer IP addresses</li>
        <li>❌ Any other personally identifiable information (PII) of your customers</li>
      </ul>
      
      <hr />
      
      <h2>3. How We Use Your Information</h2>
      
      <p>We use the collected information solely to:</p>
      
      <ol>
        <li><strong>Provide the Service</strong> - Synchronize supplier feeds with your Shopify store and update inventory policies</li>
        <li><strong>Display Analytics</strong> - Show you backorder sales statistics and performance metrics</li>
        <li><strong>Maintain Logs</strong> - Record execution history for troubleshooting and transparency</li>
        <li><strong>Schedule Tasks</strong> - Run automated synchronizations at your configured times</li>
        <li><strong>Improve the App</strong> - Analyze aggregate usage patterns to improve functionality</li>
      </ol>
      
      <p>We do NOT:</p>
      <ul>
        <li>Sell your data to third parties</li>
        <li>Use your data for advertising</li>
        <li>Share your data with other merchants</li>
        <li>Access your store for any purpose other than providing the service</li>
      </ul>
      
      <hr />
      
      <h2>4. Data Storage & Security</h2>
      
      <h3>4.1 Where Data is Stored</h3>
      
      <p>Your data is stored on secure servers hosted by:</p>
      <ul>
        <li><strong>Fly.io</strong> (Cloud hosting provider) - Data centers in compliance with GDPR</li>
        <li><strong>SQLite database</strong> - Encrypted at rest</li>
      </ul>
      
      <h3>4.2 Security Measures</h3>
      
      <p>We implement industry-standard security measures:</p>
      
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
            <td>Database and sensitive credentials are encrypted</td>
          </tr>
          <tr>
            <td>Encrypted credentials</td>
            <td>FTP/OAuth passwords are encrypted using AES-256</td>
          </tr>
          <tr>
            <td>Secure transmission</td>
            <td>All data transmitted via HTTPS/TLS</td>
          </tr>
          <tr>
            <td>Access control</td>
            <td>Only authorized systems can access your data</td>
          </tr>
          <tr>
            <td>Webhook verification</td>
            <td>HMAC signature verification for all Shopify webhooks</td>
          </tr>
        </tbody>
      </table>
      
      <h3>4.3 Credential Storage</h3>
      
      <p>When you provide FTP or OAuth credentials for supplier feeds:</p>
      <ul>
        <li>Credentials are encrypted before storage using industry-standard encryption</li>
        <li>We cannot view your plain-text passwords</li>
        <li>Credentials are only decrypted momentarily during feed synchronization</li>
      </ul>
      
      <hr />
      
      <h2>5. Data Retention</h2>
      
      <h3>5.1 Default Retention Period</h3>
      
      <p>By default, we retain your data for <strong>24 months</strong> after creation. This includes:</p>
      <ul>
        <li>Backorder sales records</li>
        <li>Execution logs</li>
        <li>Analytics data</li>
      </ul>
      
      <h3>5.2 Configurable Retention</h3>
      
      <p>You can configure your data retention period in the App Settings:</p>
      <ul>
        <li>Minimum: 6 months</li>
        <li>Maximum: 36 months</li>
        <li>Changes apply to future cleanup cycles</li>
      </ul>
      
      <h3>5.3 Automatic Cleanup</h3>
      
      <p>Our data retention service automatically removes data older than your configured retention period. This runs periodically to ensure compliance.</p>
      
      <h3>5.4 Data Deletion on Uninstall</h3>
      
      <p>When you uninstall BackorderPro:</p>
      <ul>
        <li>Your session data is immediately deleted</li>
        <li>Within 48 hours, Shopify sends a <code>shop/redact</code> webhook</li>
        <li>Upon receiving this webhook, we permanently delete ALL your data including:
          <ul>
            <li>All backorder sales records</li>
            <li>All feed configurations and rules</li>
            <li>All execution logs</li>
            <li>All app settings</li>
          </ul>
        </li>
      </ul>
      
      <hr />
      
      <h2>6. Data Sharing</h2>
      
      <h3>6.1 Third-Party Services</h3>
      
      <p>We use the following third-party services:</p>
      
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Purpose</th>
            <th>Data Shared</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shopify</td>
            <td>Platform & API</td>
            <td>Product/order data as needed for functionality</td>
          </tr>
          <tr>
            <td>Fly.io</td>
            <td>Hosting</td>
            <td>All app data (encrypted)</td>
          </tr>
          <tr>
            <td>Your configured suppliers</td>
            <td>Feed retrieval</td>
            <td>Only the credentials you provide</td>
          </tr>
        </tbody>
      </table>
      
      <h3>6.2 We Do Not Share</h3>
      
      <ul>
        <li>We do not sell your data</li>
        <li>We do not share data with advertisers</li>
        <li>We do not provide data to other merchants</li>
        <li>We do not use your data for purposes unrelated to the App</li>
      </ul>
      
      <h3>6.3 Legal Requirements</h3>
      
      <p>We may disclose your information if required by law, such as:</p>
      <ul>
        <li>To comply with legal process</li>
        <li>To protect our rights or property</li>
        <li>To prevent fraud or security issues</li>
      </ul>
      
      <hr />
      
      <h2>7. Your Rights (GDPR)</h2>
      
      <p>Under the General Data Protection Regulation (GDPR) and similar laws, you have the right to:</p>
      
      <table>
        <thead>
          <tr>
            <th>Right</th>
            <th>Description</th>
            <th>How to Exercise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Access</strong></td>
            <td>Request a copy of your data</td>
            <td>Contact us at privacy@snoekbyte.nl</td>
          </tr>
          <tr>
            <td><strong>Rectification</strong></td>
            <td>Correct inaccurate data</td>
            <td>Update in App Settings or contact us</td>
          </tr>
          <tr>
            <td><strong>Erasure</strong></td>
            <td>Delete your data</td>
            <td>Uninstall the app or contact us</td>
          </tr>
          <tr>
            <td><strong>Portability</strong></td>
            <td>Export your data</td>
            <td>Contact us for a data export</td>
          </tr>
          <tr>
            <td><strong>Restriction</strong></td>
            <td>Limit processing</td>
            <td>Contact us</td>
          </tr>
          <tr>
            <td><strong>Objection</strong></td>
            <td>Object to processing</td>
            <td>Contact us</td>
          </tr>
        </tbody>
      </table>
      
      <p>To exercise any of these rights, please contact us at <strong>privacy@snoekbyte.nl</strong>.</p>
      
      <hr />
      
      <h2>8. End Customer Privacy</h2>
      
      <h3>8.1 Customer Data</h3>
      
      <p>BackorderPro does NOT process personal data of your customers. We only process:</p>
      <ul>
        <li>Order IDs (e.g., <code>gid://shopify/Order/12345</code>)</li>
        <li>Order names (e.g., <code>#1001</code>)</li>
        <li>Product quantities and prices</li>
      </ul>
      
      <p>This data cannot be used to identify individual customers.</p>
      
      <h3>8.2 GDPR Compliance for Customer Requests</h3>
      
      <p>When your customers exercise their GDPR rights:</p>
      <ul>
        <li><strong>Customer Data Request</strong>: We report that no personal customer data is stored</li>
        <li><strong>Customer Redact Request</strong>: We confirm no personal data needs deletion</li>
      </ul>
      
      <p>You remain the data controller for your customer data. BackorderPro acts as a data processor only for the limited, non-personal order metadata described above.</p>
      
      <hr />
      
      <h2>9. Cookies & Tracking</h2>
      
      <p>BackorderPro does NOT:</p>
      <ul>
        <li>Set any cookies on your customers&apos; browsers</li>
        <li>Use any tracking pixels or analytics on your storefront</li>
        <li>Collect any data from your customers directly</li>
      </ul>
      
      <p>The App operates entirely within the Shopify Admin and does not interact with your storefront or customers.</p>
      
      <hr />
      
      <h2>10. Children&apos;s Privacy</h2>
      
      <p>BackorderPro is a business application intended for use by merchants. We do not knowingly collect information from children under 16. If you believe we have collected information from a child, please contact us immediately.</p>
      
      <hr />
      
      <h2>11. International Data Transfers</h2>
      
      <p>Your data may be processed in countries outside your own. We ensure appropriate safeguards are in place:</p>
      <ul>
        <li>Standard Contractual Clauses (SCCs) with service providers</li>
        <li>Compliance with GDPR requirements for international transfers</li>
      </ul>
      
      <hr />
      
      <h2>12. Changes to This Policy</h2>
      
      <p>We may update this Privacy Policy from time to time. When we do:</p>
      <ul>
        <li>We will update the &quot;Last Updated&quot; date at the top</li>
        <li>For significant changes, we will notify you via the App or email</li>
        <li>Continued use of the App after changes constitutes acceptance</li>
      </ul>
      
      <hr />
      
      <h2>13. Contact Us</h2>
      
      <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
      
      <p><strong>SnoekByte</strong></p>
      <ul>
        <li>Email: privacy@snoekbyte.nl</li>
        <li>Website: https://snoekbyte.nl</li>
      </ul>
      
      <p>For Shopify-specific privacy concerns, you may also refer to <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer">Shopify&apos;s Privacy Policy</a>.</p>
      
      <hr />
      
      <h2>14. Legal Basis for Processing (GDPR)</h2>
      
      <p>We process your data based on the following legal grounds:</p>
      
      <table>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Legal Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Merchant account data</td>
            <td>Contract performance (providing the App service)</td>
          </tr>
          <tr>
            <td>Product/Order metadata</td>
            <td>Legitimate interest (App functionality)</td>
          </tr>
          <tr>
            <td>Analytics data</td>
            <td>Legitimate interest (improving the service)</td>
          </tr>
          <tr>
            <td>Execution logs</td>
            <td>Legitimate interest (troubleshooting & transparency)</td>
          </tr>
        </tbody>
      </table>
      
      <hr />
      
      <h2>15. Data Protection Officer</h2>
      
      <p>For data protection inquiries, contact our Data Protection Officer:</p>
      <ul>
        <li>Email: dpo@snoekbyte.nl</li>
      </ul>
      
      <hr />
      
      <p><em>This Privacy Policy is effective as of January 12, 2026.</em></p>
      
      <hr />
      
      <h2>Summary</h2>
      
      <p>BackorderPro is designed with privacy in mind:</p>
      <ul>
        <li>✅ No customer PII collected</li>
        <li>✅ GDPR compliant</li>
        <li>✅ Automatic data deletion on uninstall</li>
        <li>✅ Configurable data retention</li>
        <li>✅ Encrypted credential storage</li>
        <li>✅ Transparent data practices</li>
      </ul>
    </article>
  );
}
