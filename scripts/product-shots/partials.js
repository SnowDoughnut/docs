// Shared HTML fragments injected at build time: sidebar, chrome, icons.
const I = {
  home: '<svg viewBox="0 0 24 24"><path d="M3 11 12 3l9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  rocket: '<svg viewBox="0 0 24 24"><path d="M5 13c0-5 4-9 9-9 3 0 5 1 5 1s1 2 1 5c0 5-4 9-9 9l-2-2-2-2-2-2z"/><path d="m8 16-3 3"/><circle cx="15" cy="9" r="1.5"/></svg>',
  layers: '<svg viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg>',
  brief: '<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></svg>',
  check: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="m8 12 3 3 5-6"/></svg>',
  cal: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  note: '<svg viewBox="0 0 24 24"><path d="M5 3h10l4 4v14H5z"/><path d="M15 3v4h4M8 12h8M8 16h6"/></svg>',
  tool: '<svg viewBox="0 0 24 24"><path d="M14 4a4 4 0 0 0 5 5l-9 9a2 2 0 0 1-3-3l9-9z"/><path d="m5 15 4 4"/></svg>',
  lib: '<svg viewBox="0 0 24 24"><path d="M4 4h4v16H4zM10 4h4v16h-4zM16 6l4-1 3 15-4 1z"/></svg>',
  board: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="5" height="16" rx="1"/><rect x="10" y="4" width="5" height="11" rx="1"/><rect x="17" y="4" width="4" height="8" rx="1"/></svg>',
  table: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16"/></svg>',
  timeline: '<svg viewBox="0 0 24 24"><path d="M3 7h9M8 12h12M5 17h8"/></svg>',
  list: '<svg viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
  status: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>',
  person: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  date: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  rel: '<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
  tags: '<svg viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/></svg>',
  text: '<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
  num: '<svg viewBox="0 0 24 24"><path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  page: '<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/></svg>',
};
const NAV = [
  ['home','Home'],['user','My work'],['rocket','Get started'],['layers','Foundations'],
  ['brief','Work'],['chart','Measure'],['check','Tasks'],['cal','Content calendar'],
  ['note','Notes'],['tool','Tools'],['lib','Library'],
];
function sidebar(active){
  return `<aside class="side">
    <div class="ws"><img class="mark" src="logo.png" alt="">Snow Doughnut <span class="chev">⌄</span></div>
    <div class="sect">Workspace</div>
    <nav class="nav">${NAV.map(([k,n])=>`<a class="${n===active?'on':''}">${I[k]}${n}</a>`).join('')}</nav>
    <div class="sect">Shared</div>
    <nav class="nav"><a>${I.page}Doughnut Labs · Q4 plan</a><a>${I.page}Brand guidelines</a><a>${I.page}Naming conventions</a></nav>
  </aside>`;
}
function chrome(path){
  return `<div class="chrome"><div class="dots"><i></i><i></i><i></i></div>
    <div class="url">${I.lock} notion.so/snowdoughnut/${path}</div>
    <div style="width:52px"></div></div>`;
}
function topbar(crumbs, extra=''){
  const c = crumbs.map((x,i)=>i===crumbs.length-1?`<b>${x}</b>`:`<span>${x}</span><span class="sep">/</span>`).join('');
  return `<div class="topbar"><div class="crumb">${c}</div><div class="right">${extra}<span>Share</span><span>⋯</span><div class="avs"><span class="av a1">DM</span><span class="av a3">JL</span><span class="av a2">MS</span></div></div></div>`;
}
module.exports = { I, sidebar, chrome, topbar };
