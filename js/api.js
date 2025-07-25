const API_URL = "https://YOUR-REPL-URL.repl.co/api"; // Change to your backend URL

// Auth helpers
function getToken() { return localStorage.getItem("token"); }
function setToken(t) { localStorage.setItem("token", t); }
function clearToken() { localStorage.removeItem("token"); }
function isLoggedIn() { return !!getToken(); }
function api(path, method="GET", data) {
  return fetch(API_URL+path, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(getToken() && {"Authorization": "Bearer " + getToken()})
    },
    body: data ? JSON.stringify(data) : undefined
  }).then(r => r.json());
}
