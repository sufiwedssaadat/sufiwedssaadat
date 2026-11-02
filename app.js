(function(){
  const d = window.WEDDING || {};
  const $ = (id) => document.getElementById(id);
  const set = (id, value) => { const el = $(id); if (el && value != null) el.textContent = value; };
  ["bride","groom","dateDay","dateNumber","dateMonth","year","time","venue","town","district","tagline","welcome","quote","familyHeading","familyMessage","specialNote","thankYou"].forEach(k => set(k,d[k]));
  set("bismillah","بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ");
  const date = $("full-date");
  if(date) date.textContent = `${d.dateDay || ""} ${d.dateNumber || ""} ${d.dateMonth || ""} ${d.year || ""}`.trim();
  const venue = $("venue-full");
  if(venue) venue.textContent = d.venue || "";
  const map = $("map-link");
  if(map) map.href = d.mapUrl || "https://maps.google.com/";
  const events = $("event-list");
  if(events && Array.isArray(d.events)){
    events.innerHTML = d.events.map(e => `<article class="event"><div class="event-icon" aria-hidden="true">${escapeHTML(e.icon || "✧")}</div><div><h3>${escapeHTML(e.name || "")}</h3><p class="time">${escapeHTML(e.time || "")}</p><p class="note">${escapeHTML(e.note || "")}</p></div></article>`).join("");
  }
  const menu = $("menu-toggle"), nav = $("nav-links");
  if(menu && nav) menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a=>{if(a.getAttribute("href")===page)a.classList.add("active");});
  function escapeHTML(value){return String(value).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
})();
