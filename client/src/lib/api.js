export async function apiRequest(path, options = {}) {
  const res = await fetch(`http://localhost:5000/api${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  return res.json();
}
