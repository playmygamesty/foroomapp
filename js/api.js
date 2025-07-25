// api.js
const API_URL = "https://51ae51d1-9478-45a8-891a-ba89a4fbb700-00-43larocovmr2.janeway.replit.dev/api"; // e.g. "https://replit-url/api"

function getToken() { return localStorage.getItem("token"); }
function setToken(t) { localStorage.setItem("token", t); }
function clearToken() { localStorage.removeItem("token"); }
function isLoggedIn() { return !!getToken(); }

// Helper to handle both JSON and plain text errors
function api(path, method="GET", data) {
  return fetch(API_URL+path, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(getToken() && {"Authorization": "Bearer " + getToken()})
    },
    body: data ? JSON.stringify(data) : undefined
  })
  .then(async r => {
    const text = await r.text();
    if (!r.ok) return { error: text };
    try { return JSON.parse(text); } catch { return { error: text }; }
  });
}
