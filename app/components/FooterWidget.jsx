"use client";
import { useEffect } from "react";

const WIDGET_URL = "https://d1ad4gpy4661in.cloudfront.net/tourvis-static/common/common-widget.js";

export default function FooterWidget() {
  useEffect(() => {
    if (!document.getElementById("gnb-widget-script")) {
      const script = document.createElement("script");
      script.src = WIDGET_URL;
      script.id = "gnb-widget-script";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <footer-widget
      env="development"  // 환경에 맞게 변경
      extend={false}
      pc={true}
      style={{ width: "100%", display: "block" }}
    />
  );
}
