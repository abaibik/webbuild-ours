const loadedUrls = [];

function loadScript(url, callback) {
  if (loadedUrls.includes(url)) {
    callback();
    return;
  }
  const element = document.createElement("script");
  element.type = "text/javascript";
  element.src = url;
  element.onload = callback;

  document.body.appendChild(element);

  loadedUrls.push(url);
}
