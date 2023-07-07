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
        autosize: true,
        symbol: symbol, // Use the passed symbol value
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        range: '12M',
        allow_symbol_change: true,
        details: true,
        studies: ['STD;Average_True_Range', 'STD;SMA', 'STD;ROC'],
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
