export default function swithTabs(selector) {
  const elem = document.querySelector(selector);
  elem.innerHTML = `
  <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/index.html">Date calc</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/timer.html">Timer</a>
      </li>
    </ul>`;
}
