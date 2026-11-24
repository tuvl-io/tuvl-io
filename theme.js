// The same rule as tuvl.io and tuvl.dev: follow the system until the visitor picks a theme; the choice is kept under tuvl.theme.
try {
  const t = localStorage.getItem("tuvl.theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = t;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", t === "dark" ? "#09090b" : "#ffffff");
} catch { /* the default theme shows */ }
