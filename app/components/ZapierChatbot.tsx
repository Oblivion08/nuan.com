"use client";

import { useEffect } from "react";

const scriptId = "zapier-interfaces-chatbot-script";
const embedId = "nuan-zapier-chatbot";

export function ZapierChatbot() {
  useEffect(() => {
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.type = "module";
      script.src =
        "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";

      document.head.appendChild(script);
    }

    if (!document.getElementById(embedId)) {
      const embed = document.createElement(
        "zapier-interfaces-chatbot-embed"
      );

      embed.id = embedId;
      embed.setAttribute("is-popup", "true");
      embed.setAttribute(
        "chatbot-id",
        "cmsfav77d0019hoqnytom6o3j"
      );

      document.body.appendChild(embed);
    }

    return () => {
      document.getElementById(embedId)?.remove();
    };
  }, []);

  return null;
}