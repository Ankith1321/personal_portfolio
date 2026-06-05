"use client";

import { useEffect } from "react";

const SCRIPT_ID = "umami-analytics-script";

export function UmamiAnalytics() {
  useEffect(() => {
    const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
    const domain = process.env.NEXT_PUBLIC_UMAMI_DOMAIN;

    if (!scriptUrl || !websiteId) {
      return;
    }

    if (document.getElementById(SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.defer = true;
    script.src = scriptUrl;
    script.dataset.websiteId = websiteId;

    if (domain) {
      script.dataset.domains = domain;
    }

    document.head.appendChild(script);
  }, []);

  return null;
}
