if (/^\/docs(\/|$)/.test(location.pathname)) {
  location.replace("https://tuvl.org" + location.pathname + location.search + location.hash);
}
