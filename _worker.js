export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.huangrenjie.com") {
      url.hostname = "huangrenjie.com";
      return Response.redirect(url.toString(), 301);
    }

    const m = url.pathname.match(/^\/articles\/([^/]+)\.md$/i);
    if (m) {
      url.pathname = `/articles/${m[1]}/`;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
