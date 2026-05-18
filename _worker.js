export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.huangrenjie.com") {
      url.hostname = "huangrenjie.com";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
