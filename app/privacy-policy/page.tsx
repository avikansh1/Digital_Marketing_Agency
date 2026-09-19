import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/site/breadcrumbs';

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | GrowthGrid Digital' },
  description:
    'Read the GrowthGrid Digital privacy policy. Learn what information we collect, how we use it, and how to contact us with questions.',
  alternates: {
    canonical: 'https://growthgriddigital.vercel.app/privacy-policy',
  },
};

const sections = [
  {
    heading: 'Introduction',
    body: [
      'This Privacy Policy explains how GrowthGrid Digital ("we", "us", or "our") collects, uses, and protects information when you visit our website or use our services. We are committed to being transparent about how your data is handled.',
      'By using this website, you agree to the practices described in this policy. This is placeholder text and should be reviewed and replaced with a final version before the website goes live.',
    ],
  },
  {
    heading: 'Information We Collect',
    body: [
      'We may collect the following types of information when you interact with our website:',
      'Contact details you provide voluntarily through our contact form, including your name, business name, email address, phone number, website URL, and any message content.',
      'Analytics data such as pages visited, time spent on pages, referral source, device type, and approximate geographic location. This data is collected through tools like Google Analytics and is used in aggregate, not to identify individuals.',
      'Cookies and similar technologies that help us understand how visitors use the site and improve the user experience. You can control cookies through your browser settings.',
    ],
  },
  {
    heading: 'How We Use Information',
    body: [
      'The information we collect is used for the following purposes:',
      'To respond to your enquiries and provide information about our services.',
      'To improve our website content, design, and performance based on how visitors use it.',
      'To send relevant updates or marketing communications, but only if you have explicitly requested them.',
      'To comply with legal obligations and protect against fraudulent or unauthorized activity.',
    ],
  },
  {
    heading: 'How We Share Information',
    body: [
      'We do not sell or rent your personal information to third parties. We may share data with trusted service providers who help us operate the website or deliver our services, such as analytics and hosting providers. These providers are bound by confidentiality obligations and may only use data for the purposes we specify.',
    ],
  },
  {
    heading: 'Data Retention',
    body: [
      'We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable law. Contact form submissions are kept for a reasonable period to respond to enquiries and maintain records of communication.',
    ],
  },
  {
    heading: 'Your Rights',
    body: [
      'You have the right to request access to, correction of, or deletion of your personal information. You may also opt out of receiving marketing communications at any time by contacting us using the details below.',
    ],
  },
  {
    heading: 'Security',
    body: [
      'We take reasonable measures to protect the information we collect, including using secure connections and limiting access to authorized personnel. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.',
    ],
  },
  {
    heading: 'Contact Us',
    body: [
      'If you have questions about this Privacy Policy or how your data is handled, please contact us at hello@growthgriddigital.in or write to us at Hazratganj, Lucknow, Uttar Pradesh 226001, India.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="container-page">
        <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} />
      </div>

      <section className="py-12 lg:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Legal
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Privacy Policy
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
