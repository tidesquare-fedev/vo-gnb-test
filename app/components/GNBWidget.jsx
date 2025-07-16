"use client";
import { useEffect, useRef, useState } from "react";

const WIDGET_URL = "https://d1ad4gpy4661in.cloudfront.net/tourvis-static/common/common-widget.js";

const GNBWidget = () => {
  const widgetRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 이미 스크립트가 삽입되어 있다면 중복 삽입 방지
    if (!document.getElementById("gnb-widget-script")) {
      const script = document.createElement("script");
      script.src = WIDGET_URL;
      script.id = "gnb-widget-script";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // 클라이언트에서만 div를 렌더링
  if (!mounted) return null;

  return (
    <gnb-widget
      env="production"      // 환경에 맞게 변경 가능
      category="common"     // "air" | "hotel" | "tnt" | "package" | "blank" 등
      style={{ width: "100%", position: "relative", zIndex: 1000 }}
    />
  );
};

export default GNBWidget;
