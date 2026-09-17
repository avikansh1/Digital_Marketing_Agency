'use client';

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/site-config';

export function StickyMobileCTA() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-3 shadow-lg backdrop-blur lg:hidden">
      <div className="flex items-center gap-2">
        <Link
          href="/contact"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-accent text-sm font-semibold text-accent-foreground"
        >
          <Phone className="h-4 w-4" />
          Free SEO Audit
        </Link>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#25D366] text-white"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
