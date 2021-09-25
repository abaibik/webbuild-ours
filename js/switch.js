export default function switchTabs(selector) {
  let indexActive = "";
  let timerActive = "";
  if (window.location.href.endsWith("timer.html")) {
    timerActive = "active";
  } else {
    indexActive = "active";
  }
  const elem = document.querySelector(selector);
  elem.innerHTML = `
  <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link ${indexActive}" aria-current="page" href="/index.html">Date calc</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ${timerActive}" href="/timer.html">Timer</a>
      </li>
    </ul>`;
}
