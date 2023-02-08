import React from 'react';
import  { createRoot } from 'react-dom/client';
import App from './components/Application';
import reportWebVitals from './reportWebVitals';
import {WindowHistoryAdapter} from "use-query-params/adapters/window";
import {QueryParamProvider} from "use-query-params";
import './i18n';
import 'rc-tooltip/assets/bootstrap_white.css';
// @ts-ignore
import "hacktimer";

import "./components/pathfinding/data";

// Say something
console.log('[EDR] : Renderer execution started');

declare global {
  interface Window {
    timeRefreshWebWorkerId: number;
    trainsRefreshWebWorkerId: number;
  }
}
// Application to Render
const app = (
    <React.StrictMode>
      <QueryParamProvider adapter={WindowHistoryAdapter}>
        <App />
      </QueryParamProvider>
    </React.StrictMode>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console_log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
