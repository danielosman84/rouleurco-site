"use client";

import Script from "next/script";

type Props = {
  formId: string;
  formName?: string;
  minHeight?: number;
};

export function GhlIframe({
  formId,
  formName = "RC Enquiry form",
  minHeight = 946,
}: Props) {
  return (
    <>
      <div className="overflow-hidden rounded-lg">
        <iframe
          src={`https://api.rouleurco.com/widget/form/${formId}`}
          style={{ width: "100%", minHeight, border: "none" }}
          id={`inline-${formId}`}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-activation-type="alwaysActivated"
          data-deactivation-type="neverDeactivate"
          data-form-name={formName}
          data-height={minHeight}
          data-layout-iframe-id={`inline-${formId}`}
          data-form-id={formId}
          title={formName}
        />
      </div>
      <Script
        src="https://api.rouleurco.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
