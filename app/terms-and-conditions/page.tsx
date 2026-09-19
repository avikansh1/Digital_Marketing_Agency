import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/site/breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms & Conditions | GrowthGrid Digital',
  description:
    'Read the terms and conditions for using the GrowthGrid Digital website and engaging our digital marketing services.',
  alternates: {
    canonical: 'https://digital-marketing-agency-pi.vercel.app/terms-and-conditions',
  },
};

const sections = [
  {
    heading: 'Introduction',
    body: [
      'These Terms and Conditions ("Terms") govern your use of the GrowthGrid Digital website and the services we provide. By accessing this website or engaging our services, you agree to be bound by these Terms.',
      'This is placeholder text and should be reviewed and replaced with a final version before the website goes live.',
    ],
  },
  {
    heading: 'Use of This Website',
    body: [
      'You may use this website for lawful purposes only. You agree not to use the site in any way that could damage, disable, or impair it, or interfere with another person\'s use. Unauthorized attempts to access or modify content, introduce malicious code, or scrape data are prohibited.',
    ],
  },
  {
    heading: 'Services',
    body: [
      'GrowthGrid Digital provides digital marketing services including but not limited to search engine optimization (SEO), local SEO, Google Ads management, social media marketing, content marketing, website analytics, and conversion rate optimization.',
      'The scope, deliverables, timeline, and pricing of any engagement will be defined in a separate agreement or proposal. These Terms do not override any signed contract or proposal. We reserve the right to decline or terminate engagements that conflict with our policies or values.',
    ],
  },
  {
    heading: 'Intellectual Property',
    body: [
      'All content on this website, including text, graphics, logos, and design elements, is the property of GrowthGrid Digital unless otherwise stated. You may not reproduce, distribute, or use this content without prior written permission.',
      'Upon full payment for services rendered, clients receive ownership of deliverables specifically created for them, such as written content and design assets, unless otherwise agreed in writing. We retain the right to use completed work for portfolio and promotional purposes unless the client requests otherwise in writing.',
    ],
  },
  {
    heading: 'Client Responsibilities',
    body: [
      'Clients are responsible for providing accurate information, timely feedback, and access to necessary accounts or platforms required to deliver services. Delays caused by client-side factors may affect project timelines and outcomes.',
    ],
  },
  {
    heading: 'Payment Terms',
    body: [
      'Payment terms, including amounts, due dates, and accepted methods, are specified in individual service agreements. Invoices are typically due within 15 days of issuance unless otherwise agreed. Late payments may result in suspension of services.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    body: [
      'GrowthGrid Digital is not liable for indirect, incidental, or consequential damages arising from the use of this website or our services. We do not guarantee specific search rankings, traffic volumes, or business outcomes, as these depend on factors outside our control, including search engine algorithms and market conditions.',
      'Our total liability for any claim arising from our services is limited to the amount paid by the client for the service in question during the three months preceding the claim.',
    ],
  },
  {
    heading: 'Third-Party Links and Tools',
    body: [
      'This website may contain links to third-party websites or reference third-party tools such as Google Analytics and Google Ads. We are not responsible for the content, policies, or practices of these external sites or services.',
    ],
  },
  {
    heading: 'Confidentiality',
    body: [
      'We treat client information as confidential and do not disclose it to third parties except as required by law or as necessary to deliver services. A separate non-disclosure agreement may be provided upon request.',
    ],
  },
  {
    heading: 'Termination',
    body: [
      'Either party may terminate a service engagement with written notice as specified in the service agreement. Upon termination, the client is responsible for payment of services rendered up to the termination date.',
    ],
  },
  {
    heading: 'Changes to These Terms',
    body: [
      'We may update these Terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the website or services after changes constitutes acceptance of the revised Terms.',
    ],
  },
  {
    heading: 'Contact Us',
    body: [
      'If you have questions about these Terms, please contact us at hello@growthgriddigital.in or write to us at Hazratganj, Lucknow, Uttar Pradesh 226001, India.',
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="container-page">
        <Breadcrumbs items={[{ name: 'Terms & Conditions', url: '/terms-and-conditions' }]} />
      </div>

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Legal
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: September 2025
            </p>
            <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              This is placeholder legal text provided as a starting point. It should be reviewed
              and replaced with a final version reviewed by a qualified legal professional before
              the website goes live.
            </p>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-heading text-2xl font-bold text-balance">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((paragraph, index) => (
                      <p key={index} className="leading-7 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
