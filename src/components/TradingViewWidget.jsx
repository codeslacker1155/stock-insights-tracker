import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget({ symbol }) {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = () => createWidget(symbol);

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => {
      onLoadScriptRef.current = null;
    };
  }, [symbol]);

  function createWidget(symbol) {
    if (document.getElementById('tradingview_2c663') && 'TradingView' in window) {
      new window.TradingView.widget({
        symbol: symbol,
        timezone: "America/New_York",
        theme: "dark",
        style: "8",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        withdateranges: true,
        range: "12M",
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
        studies: ["STD;Bollinger_Bands","STD;Linear_Regression","STD;SMA","STD;Multi-Time%Period%Charts","STD;Pivot%1Points%1Standard","STD;TEMA","STD;Zig_Zag"],
        container_id: 'tradingview_2c663',
      });
    }
  }

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_2c663" />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}
