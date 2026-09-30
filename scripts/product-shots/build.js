const fs = require('fs');
const path = require('path');
const { I, sidebar, chrome, topbar } = require('./partials');

const out = (name, html) => fs.writeFileSync(path.join(__dirname, name), html);
const doc = ({ theme = '', eyebrow, h1, p, urlPath, nav, crumbs, extraCss = '', body, topExtra = '' }) => `<!doctype html><html><head><meta charset="utf-8"><title>${h1}</title>
<link rel="stylesheet" href="shell.css"><style>${extraCss}</style></head>
<body><div class="stage ${theme}">
  <div class="caption"><span class="eyebrow"><i></i>${eyebrow}</span><h1>${h1}</h1><p>${p}</p></div>
  <div class="window">${chrome(urlPath)}<div class="app">${sidebar(nav)}<div class="main">${topbar(crumbs, topExtra)}<div class="page">${body}</div></div></div></div>
</div></body></html>`;

const tag = (cls, txt) => `<span class="tag ${cls}"><i></i>${txt}</span>`;
const av = (cls, ini) => `<span class="av ${cls}">${ini}</span>`;
const person = (cls, ini, name) => `<span class="person">${av(cls, ini)}${name}</span>`;

/* ============ 1. Campaign & creative briefing ============ */
const brief = doc({
  eyebrow: 'Campaign & creative briefing',
  h1: 'One brief. Every asset it needs.',
  p: 'Start a campaign, then create platform, creative and copy briefs from its page. Everything stays linked.',
  urlPath: 'work/campaigns/spring-launch-doughnut-pro',
  nav: 'Work',
  crumbs: ['Work', 'Campaigns', 'Spring launch · Doughnut Pro'],
  topExtra: '<span class="btn">Launch checklist</span>',
  extraCss: `
    .page{padding:22px 36px 0}
    .props{grid-template-columns:120px 1fr 120px 1fr;column-gap:14px;row-gap:9px;margin:0 0 16px}
    .brief-cols{display:grid;grid-template-columns:0.95fr 1.45fr;gap:16px}
    .kv{font-size:12.5px;color:var(--ink);line-height:1.5}
    .kv b{display:block;font-weight:600;margin:8px 0 2px;font-size:12px;color:var(--ink-2)}
    .kv p{margin:0}
    .stack{display:flex;flex-direction:column;gap:12px}
    .mini{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
    .mini .cell{border:1px solid var(--line);border-radius:8px;padding:9px 11px}
    .mini .cell small{display:block;color:var(--ink-3);font-size:11px;margin-bottom:3px}
    .mini .cell strong{font-size:13px;font-weight:600}
  `,
  body: `
    <div class="title"><span class="ico">${I.rocket}</span><h2>Spring launch · Doughnut Pro</h2></div>
    <p class="sub">Marketing campaign brief · <span style="color:var(--ink-3)">Docs: marketing-campaign-brief</span></p>
    <div class="props">
      <div class="k">${I.status}Status</div><div class="v">${tag('gr','Live')}</div>
      <div class="k">${I.date}Flight</div><div class="v">Mar 2 → Apr 12, 2026</div>
      <div class="k">${I.tags}Channels</div><div class="v">${tag('g','Meta')}${tag('g','Google')}${tag('g','LinkedIn')}${tag('g','Email')}</div>
      <div class="k">${I.num}Budget</div><div class="v">$48,000</div>
      <div class="k">${I.person}Owner</div><div class="v">${person('a1','DM','Damien M.')}</div>
      <div class="k">${I.rel}Product</div><div class="v"><span class="tag g">${I.page.replace('<svg','<svg style="width:11px;height:11px;stroke:currentColor;fill:none;stroke-width:2"')} Doughnut Pro</span></div>
      <div class="k">${I.rel}Customer profiles</div><div class="v"><span class="tag g">Founder-operator</span><span class="tag g">Agency lead</span></div>
      <div class="k">${I.rel}KPIs</div><div class="v"><span class="tag r">Contribution margin</span><span class="tag y">New customers</span><span class="tag b">Blended CAC</span></div>
    </div>

    <div class="brief-cols">
      <div class="stack">
        <div class="callout">
          <h3>Key messaging and value proposition</h3>
          <div class="kv">
            <b>Core message</b><p>Plan, make and measure your marketing in one place, without hiring a bigger team.</p>
            <b>Value proposition</b><p>A single operating system that turns a brief into every asset, task and report a campaign needs.</p>
            <b>Call to action</b><p>Start a 14-day trial of Doughnut Pro.</p>
          </div>
        </div>
        <div class="callout">
          <h3>Channels</h3>
          <table class="db">
            <tr><th>Channel</th><th>Tactic / format</th><th>Why this channel</th></tr>
            <tr><td class="t">Meta</td><td class="dim">Static + video, prospecting</td><td class="dim">Cheapest reach to founders</td></tr>
            <tr><td class="t">Google</td><td class="dim">Search, 3 themes</td><td class="dim">Captures in-market intent</td></tr>
            <tr><td class="t">LinkedIn</td><td class="dim">Single image, ABM list</td><td class="dim">Agency decision makers</td></tr>
            <tr><td class="t">Email</td><td class="dim">3-step launch sequence</td><td class="dim">Warm list, low cost</td></tr>
          </table>
        </div>
        <div class="mini">
          <div class="cell"><small>Platform briefs</small><strong>3 approved</strong></div>
          <div class="cell"><small>Copy briefs</small><strong>4 of 5 done</strong></div>
          <div class="cell"><small>Landing pages</small><strong>2 live</strong></div>
        </div>
      </div>

      <div class="stack">
        <div class="callout">
          <h3>Creative briefs <span class="more">+ New creative brief</span></h3>
          <table class="db">
            <tr><th>${I.text}Brief</th><th>${I.status}Status</th><th>${I.text}Creative type</th><th>${I.person}Producer</th></tr>
            <tr><td class="t"><span class="ic">${I.page.replace('<svg','<svg style="width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:2"')}</span>Meta · Founder pain-point video</td><td>${tag('b','Delivered')}</td><td class="dim">Video 9:16, 4:5</td><td>${av('a3','JL')}</td></tr>
            <tr><td class="t"><span class="ic">${I.page.replace('<svg','<svg style="width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:2"')}</span>Meta · Before/after statics</td><td>${tag('gr','Approved')}</td><td class="dim">Static 1:1, 4:5</td><td>${av('a3','JL')}</td></tr>
            <tr><td class="t"><span class="ic">${I.page.replace('<svg','<svg style="width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:2"')}</span>LinkedIn · Agency ABM carousel</td><td>${tag('gr','Approved')}</td><td class="dim">Carousel, 5 cards</td><td>${av('a2','MS')}</td></tr>
            <tr><td class="t"><span class="ic">${I.page.replace('<svg','<svg style="width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:2"')}</span>Google · Demand Gen images</td><td>${tag('g','Draft')}</td><td class="dim">Image 1.91:1, 1:1</td><td>${av('a2','MS')}</td></tr>
            <tr><td class="t"><span class="ic">${I.page.replace('<svg','<svg style="width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:2"')}</span>Email · Launch header set</td><td>${tag('g','Draft')}</td><td class="dim">Email header 600px</td><td>${av('a4','AK')}</td></tr>
          </table>
        </div>
        <div class="callout">
          <h3>Copy briefs <span class="more">5 briefs</span></h3>
          <table class="db">
            <tr><th>${I.text}Brief</th><th>${I.status}Status</th><th>${I.rel}Angle</th><th>${I.person}Owner</th></tr>
            <tr><td class="t">Meta static + video copy</td><td>${tag('gr','Approved')}</td><td>${tag('g','Time back')}</td><td>${person('a4','AK','Aisha K.')}</td></tr>
            <tr><td class="t">Google search · 3 themes</td><td>${tag('gr','Approved')}</td><td>${tag('g','One place')}</td><td>${person('a4','AK','Aisha K.')}</td></tr>
            <tr><td class="t">LinkedIn carousel copy</td><td>${tag('y','In review')}</td><td>${tag('g','Small team, big output')}</td><td>${person('a1','DM','Damien M.')}</td></tr>
            <tr><td class="t">Email launch sequence</td><td>${tag('g','Draft')}</td><td>${tag('g','Time back')}</td><td>${person('a4','AK','Aisha K.')}</td></tr>
          </table>
        </div>
      </div>
    </div>`
});
out('01-campaign-brief.html', brief);

/* ============ 2. Task management ============ */
const card = (title, camp, due, owner, cls, extra = '') => `<div class="card"><div class="ct">${title}</div><div class="cm">${camp ? `<span class="tag g">${camp}</span>` : ''}${extra}</div><div class="cf"><span class="due">${I.date}${due}</span>${av(owner[0], owner[1])}</div></div>`;
const col = (name, cls, cards) => `<div class="col"><div class="ch">${tag(cls, name)}<span class="cnt">${cards.length}</span><span class="plus">+</span></div>${cards.join('')}<div class="add">+ New</div></div>`;
const tasks = doc({
  eyebrow: 'Task management',
  h1: 'Every task, by status and owner.',
  p: 'Tasks link to campaigns, briefs, landing pages and reports, so nothing sits outside the plan.',
  urlPath: 'tasks',
  nav: 'Tasks',
  crumbs: ['Tasks'],
  topExtra: '<span class="btn">New task</span>',
  extraCss: `
    .page{padding:22px 32px 0}
    .board{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;align-items:start}
    .col{background:var(--paper-2);border-radius:10px;padding:8px}
    .ch{display:flex;align-items:center;gap:8px;padding:4px 6px 8px}
    .ch .cnt{color:var(--ink-3);font-size:12px}
    .ch .plus{margin-left:auto;color:var(--ink-3);font-size:14px}
    .card{background:#fff;border:1px solid var(--line-2);border-radius:8px;padding:10px 11px;margin-bottom:8px;box-shadow:0 1px 2px rgba(0,0,0,.04)}
    .ct{font-size:13px;font-weight:500;line-height:1.35;margin-bottom:8px}
    .cm{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:8px}
    .cf{display:flex;align-items:center;justify-content:space-between}
    .due{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;color:var(--ink-2)}
    .due svg{width:12px;height:12px;stroke:currentColor;fill:none;stroke-width:1.8}
    .due.late{color:var(--tag-red)}
    .add{padding:6px;color:var(--ink-3);font-size:12.5px}
    .filters{display:flex;gap:8px;margin:0 0 12px;align-items:center}
    .chip{border:1px solid var(--line-2);border-radius:6px;padding:4px 9px;font-size:12px;color:var(--ink-2);display:inline-flex;gap:6px;align-items:center}
    .chip b{font-weight:600;color:var(--ink)}
  `,
  body: `
    <div class="title"><span class="ico">${I.check}</span><h2>Tasks</h2></div>
    <p class="sub">Campaign tasks by status and due date.</p>
    <div class="views"><a class="on">${I.board}Board</a><a>${I.timeline}Timeline</a><a>${I.cal}Calendar</a><a>${I.table}All</a><div class="tools"><span>Filter</span><span>Sort</span><span>⋯</span><span class="new">New</span></div></div>
    <div class="filters"><span class="chip">Group <b>Status</b></span><span class="chip">Owner <b>Anyone</b></span><span class="chip">Campaign <b>Spring launch · Doughnut Pro</b></span><span class="chip">Due <b>This month</b></span></div>
    <div class="board">
      ${col('Not started','g',[
        card('Write Demand Gen image copy','Spring launch','Mar 6',['a4','AK']),
        card('Build UTM links for email sequence','Spring launch','Mar 5',['a1','DM'],'<span class="tag g">UTM links</span>'),
        card('QA landing page on mobile','Spring launch','Mar 4',['a2','MS'],'<span class="tag g">Landing page</span>'),
        card('Draft post-mortem outline','Winter promo','Mar 12',['a1','DM']),
      ])}
      ${col('In progress','y',[
        card('Finish LinkedIn carousel copy','Spring launch','Mar 3',['a1','DM'],'<span class="tag g">Copy brief</span>'),
        card('Cut founder video · hook B','Spring launch','Mar 2',['a3','JL'],'<span class="tag g">Creative brief</span>'),
        card('Set up Meta prospecting ad sets','Spring launch','Mar 2',['a2','MS'],'<span class="tag g">Platform brief</span>'),
        card('Refresh agency ABM audience list','Spring launch','Mar 3',['a2','MS'],'<span class="tag g">Audience list</span>'),
        card('Weekly report · week ending Mar 1','','Mar 3',['a1','DM'],'<span class="tag g">Report</span>'),
      ])}
      ${col('Blocked','r',[
        card('Approve email launch headers','Spring launch','Feb 28',['a4','AK'],'<span class="tag g">Creative brief</span>').replace('class="due"','class="due late"'),
        card('Legal review · "no credit card" claim','Spring launch','Mar 1',['a1','DM'],'<span class="tag g">Approval</span>').replace('class="due"','class="due late"'),
      ])}
      ${col('Done','gr',[
        card('Approve Meta before/after statics','Spring launch','Feb 21',['a3','JL']),
        card('Name campaign, ad sets and ads','Spring launch','Feb 19',['a2','MS'],'<span class="tag g">Naming</span>'),
        card('Publish search theme brief','Spring launch','Feb 18',['a4','AK']),
        card('Define KPIs and targets','Spring launch','Feb 14',['a1','DM'],'<span class="tag g">Data dictionary</span>'),
        card('Event tracking plan signed off','Spring launch','Feb 12',['a2','MS']),
      ])}
    </div>`
});
out('02-task-management.html', tasks);

/* ============ 3. Calendar ============ */
// October 2026: Oct 1 is a Thursday. Grid starts Sun Sep 27.
const ev = (cls, txt) => `<div class="ev ${cls}"><i></i>${txt}</div>`;
const days = [];
const start = new Date(2026, 8, 27);
for (let i = 0; i < 35; i++) { const d = new Date(start); d.setDate(start.getDate() + i); days.push(d); }
const E = {
  '2026-09-28': [ev('t','Approve Q4 plan'), ev('c','LinkedIn · Founder story')],
  '2026-09-29': [ev('r','Weekly report due')],
  '2026-09-30': [ev('t','Refresh ABM audience'), ev('c','Blog · Naming conventions')],
  '2026-10-01': [ev('t','Meta ad sets live'), ev('c','Email · Launch #1')],
  '2026-10-02': [ev('c','Instagram · Product teaser')],
  '2026-10-05': [ev('c','LinkedIn · Case study'), ev('t','QA landing page')],
  '2026-10-06': [ev('r','Weekly report due'), ev('c','Email · Launch #2')],
  '2026-10-07': [ev('c','YouTube · Walkthrough')],
  '2026-10-08': [ev('v','Creative review · Meta')],
  '2026-10-09': [ev('c','TikTok · Founder hook')],
  '2026-10-12': [ev('c','Blog · Weekly report guide')],
  '2026-10-13': [ev('r','Weekly report due'), ev('t','Legal review · claims')],
  '2026-10-14': [ev('c','Email · Launch #3')],
  '2026-10-15': [ev('v','Budget pacing review')],
  '2026-10-16': [ev('c','LinkedIn · Team results')],
  '2026-10-19': [ev('t','Rotate Meta creative')],
  '2026-10-20': [ev('r','Weekly report due'), ev('c','X · Thread · KPIs')],
  '2026-10-21': [ev('c','Blog · Content calendar')],
  '2026-10-22': [ev('v','Experiment review · EXP-014')],
  '2026-10-23': [ev('c','Instagram · Reel')],
  '2026-10-26': [ev('t','Draft monthly report')],
  '2026-10-27': [ev('r','Weekly report due')],
  '2026-10-28': [ev('c','LinkedIn · Monthly recap')],
  '2026-10-29': [ev('t','Post-mortem · Winter promo')],
  '2026-10-30': [ev('r','Monthly report due'), ev('v','Quarterly KPI review')],
};
const iso = d => d.toISOString().slice(0, 10);
const grid = days.map((d, i) => {
  const k = iso(d), other = d.getMonth() !== 9, today = k === '2026-09-30';
  return `<div class="day ${other ? 'other' : ''}"><div class="dn ${today ? 'today' : ''}">${d.getDate() === 1 ? 'Oct 1' : d.getDate()}</div>${(E[k] || []).join('')}</div>`;
}).join('');
const calendar = doc({
  theme: 'light',
  eyebrow: 'Calendar',
  h1: 'See every date in one place.',
  p: 'Tasks, content, campaign flights, reports and reviews on one calendar. Filter by type when you need focus.',
  urlPath: 'content-calendar',
  nav: 'Content calendar',
  crumbs: ['Content calendar'],
  topExtra: '<span class="btn">New item</span>',
  extraCss: `
    .page{padding:22px 32px 0}
    .calhead{display:flex;align-items:center;gap:10px;margin:0 0 10px}
    .calhead h4{margin:0;font-size:15px;font-weight:600}
    .calhead .nav2{display:flex;gap:4px;color:var(--ink-3);font-size:14px}
    .calhead .todaybtn{border:1px solid var(--line-2);border-radius:6px;padding:3px 8px;font-size:12px;color:var(--ink-2)}
    .legend{margin-left:auto;display:flex;gap:6px}
    .legend span{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--ink-2);border:1px solid var(--line-2);border-radius:6px;padding:3px 9px}
    .legend span.on{background:var(--ink);color:#fff;border-color:var(--ink)}
    .legend i{width:7px;height:7px;border-radius:50%;display:inline-block}
    .cal{border:1px solid var(--line-2);border-radius:10px;overflow:hidden;position:relative}
    .dow{display:grid;grid-template-columns:repeat(7,1fr);background:var(--paper-2);border-bottom:1px solid var(--line-2)}
    .dow div{padding:6px 10px;font-size:11.5px;color:var(--ink-3);font-weight:500}
    .grid{display:grid;grid-template-columns:repeat(7,1fr);grid-auto-rows:118px}
    .day{border-right:1px solid var(--line);border-bottom:1px solid var(--line);padding:6px 6px 4px;position:relative}
    .day:nth-child(7n){border-right:0}
    .day.other{background:#fbfbfa}.day.other .dn{color:var(--ink-3)}
    .dn{font-size:12px;font-weight:500;margin:0 0 4px 2px;display:inline-block}
    .dn.today{background:var(--ink);color:#fff;border-radius:5px;padding:0 6px;margin-left:0}
    .ev{display:flex;align-items:center;gap:5px;font-size:11px;padding:2px 6px;border-radius:4px;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500}
    .ev i{width:6px;height:6px;border-radius:50%;flex:none;background:currentColor}
    .ev.t{background:var(--tag-yellow-bg);color:var(--tag-yellow)}
    .ev.c{background:var(--tag-blue-bg);color:var(--tag-blue)}
    .ev.r{background:var(--tag-purple-bg);color:var(--tag-purple)}
    .ev.v{background:var(--tag-orange-bg);color:var(--tag-orange)}
    .flight{position:absolute;left:8px;right:8px;height:18px;border-radius:5px;background:#1f1f1f;color:#fff;font-size:11px;font-weight:600;display:flex;align-items:center;padding:0 8px;gap:6px;z-index:2}
    .flight i{width:6px;height:6px;border-radius:50%;background:var(--brand);display:inline-block}
  `,
  body: `
    <div class="title"><span class="ico">${I.cal}</span><h2>Content calendar</h2></div>
    <p class="sub">What goes out, where, and when.</p>
    <div class="views"><a class="on">${I.cal}Calendar</a><a>${I.board}By status</a><a>${I.table}All</a><div class="tools"><span>Filter</span><span>Sort</span><span>⋯</span><span class="new">New</span></div></div>
    <div class="calhead"><h4>October 2026</h4><span class="nav2"><span>‹</span><span>›</span></span><span class="todaybtn">Today</span>
      <div class="legend"><span class="on">All dates</span><span><i style="background:#c99a00"></i>Tasks</span><span><i style="background:#2a78d6"></i>Content</span><span><i style="background:#1f1f1f"></i>Campaign flights</span><span><i style="background:#6d4fd6"></i>Reports</span><span><i style="background:#d9772c"></i>Reviews</span></div></div>
    <div class="cal">
      <div class="dow"><div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div></div>
      <div class="grid">${grid}</div>
      <div class="flight" style="top:${34 + 118 + 96}px;left:${'calc(14.2857% * 1 + 8px)'};right:8px;"><i></i>Spring launch · Doughnut Pro · flight starts Oct 5</div>
      <div class="flight" style="top:${34 + 118*2 + 96}px;"><i></i>Spring launch · Doughnut Pro</div>
      <div class="flight" style="top:${34 + 118*3 + 96}px;right:calc(14.2857% * 2 + 8px)"><i></i>Spring launch · Doughnut Pro · ends Oct 22</div>
    </div>`
});
out('03-calendar.html', calendar);

/* ============ 4. KPI & reporting ============ */
const kpi = (tier, tcls, name, val, tgt, pace, scls, stxt, spark) => `<div class="kpi">
  <div class="kt">${tag(tcls, tier)}<span class="kn">${name}</span></div>
  <div class="kv2">${val}</div>
  <div class="km"><span>Target ${tgt}</span><span class="tag ${scls}">${stxt} · ${pace}</span></div>
  <svg class="spark" viewBox="0 0 120 28" preserveAspectRatio="none"><polyline points="${spark}" fill="none" stroke="#1f1f1f" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>
</div>`;
const bar = (label, mtd, tgt, total, pace, scls, stxt) => {
  const w = Math.round(mtd / total * 100), t = Math.round(tgt / total * 100);
  return `<div class="row"><div class="bl">${label}</div><div class="bt"><div class="fill" style="width:${w}%"></div><div class="tick" style="left:${t}%"></div></div><div class="bv">$${mtd.toLocaleString()} <small>/ $${tgt.toLocaleString()}</small></div><div class="bp"><span class="tag ${scls}">${stxt} · ${pace}</span></div></div>`;
};
const measure = doc({
  eyebrow: 'KPI & reporting',
  h1: 'Know what moved, and why.',
  p: 'One north star, tiered KPIs and a weekly-to-annual reporting cadence, all defined once in the data dictionary.',
  urlPath: 'measure',
  nav: 'Measure',
  crumbs: ['Measure'],
  topExtra: '<span class="btn">New report</span>',
  extraCss: `
    .page{padding:22px 34px 0}
    .kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin:0 0 16px}
    .kpi{border:1px solid var(--line);border-radius:10px;padding:12px 13px 8px;background:#fff}
    .kt{display:flex;align-items:center;gap:8px;margin-bottom:8px}
    .kn{font-size:12.5px;font-weight:500;color:var(--ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .kv2{font-size:26px;font-weight:700;letter-spacing:-.02em;line-height:1.1;margin-bottom:6px}
    .km{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--ink-3);gap:6px}
    .spark{width:100%;height:28px;margin-top:8px;display:block}
    .two{display:grid;grid-template-columns:1.1fr 1.3fr;gap:16px}
    .row{display:grid;grid-template-columns:78px 1fr 150px 130px;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--line)}
    .row:last-child{border-bottom:0}
    .bl{font-size:12.5px;font-weight:500}
    .bt{position:relative;height:10px;background:var(--paper-3);border-radius:4px}
    .fill{position:absolute;left:0;top:0;bottom:0;background:#1f1f1f;border-radius:4px}
    .tick{position:absolute;top:-4px;bottom:-4px;width:2px;background:var(--brand);border-radius:1px;box-shadow:0 0 0 1px #fff}
    .bv{font-size:12.5px;font-weight:500;text-align:right;white-space:nowrap}
    .bv small{color:var(--ink-3);font-weight:400}
    .bp{text-align:right}
    .lg{display:flex;gap:14px;font-size:11.5px;color:var(--ink-3);margin:2px 0 8px}
    .lg span{display:inline-flex;align-items:center;gap:6px}
    .lg i{width:14px;height:6px;border-radius:2px;background:#1f1f1f;display:inline-block}
    .lg i.t{width:2px;height:12px;background:var(--brand)}
    .stack{display:flex;flex-direction:column;gap:12px}
  `,
  body: `
    <div class="title"><span class="ico">${I.chart}</span><h2>Measure</h2></div>
    <p class="sub">Reports, experiment learnings and dashboards. · <span style="color:var(--ink-3)">Week ending Sep 27, 2026 · Doughnut Labs</span></p>
    <div class="kpis">
      ${kpi('North star','r','Contribution margin','$412k','$425k','97%','gr','On track','0,22 15,20 30,21 45,17 60,16 75,13 90,12 105,9 120,8')}
      ${kpi('Tier 1','y','Revenue','$1.28M','$1.30M','98%','gr','On track','0,20 15,19 30,16 45,17 60,13 75,12 90,10 105,9 120,7')}
      ${kpi('Tier 1','y','New customers','1,214','1,150','106%','gr','Ahead','0,22 15,21 30,19 45,18 60,14 75,13 90,10 105,8 120,5')}
      ${kpi('Tier 1','y','Blended CAC','$96','$100','96%','gr','On track','0,8 15,10 30,9 45,13 60,12 75,15 90,17 105,19 120,20')}
      ${kpi('Tier 2','b','Total marketing spend','$118k','$116k','102%','y','Slightly over','0,20 15,18 30,17 45,15 60,14 75,12 90,11 105,8 120,6')}
    </div>
    <div class="two">
      <div class="stack">
        <div class="callout">
          <h3>Budget pacing by channel <span class="more">Month to date</span></h3>
          <div class="lg"><span><i></i>Spent to date</span><span><i class="t"></i>Where you should be</span></div>
          ${bar('Google', 56200, 58000, 80000, '97%', 'gr', 'On track')}
          ${bar('Meta', 12120, 12150, 20000, '99%', 'gr', 'On track')}
          ${bar('TikTok', 61400, 60000, 85000, '102%', 'y', 'Slightly over')}
          ${bar('LinkedIn', 9800, 12000, 18000, '82%', 'o', 'Under')}
          ${bar('Email', 1900, 2000, 3000, '95%', 'gr', 'On track')}
        </div>
        <div class="callout">
          <h3>Exceptions <span class="more">1 this week</span></h3>
          <table class="db">
            <tr><th>Metric</th><th>Value</th><th>Normal range</th><th>Doing what</th></tr>
            <tr><td class="t">Meta ROAS</td><td>4.8×</td><td class="dim">3.2 – 3.8×</td><td class="dim">Watching before scaling budget</td></tr>
          </table>
        </div>
      </div>
      <div class="stack">
        <div class="callout">
          <h3>Reports <span class="more">5 reports</span></h3>
          <table class="db">
            <tr><th>${I.text}Report</th><th>${I.status}Cadence</th><th>${I.date}Period ending</th><th>${I.text}Headline result</th><th>${I.person}By</th></tr>
            <tr><td class="t">Weekly report · W39</td><td>${tag('g','Weekly')}</td><td class="dim">Sep 27</td><td class="dim">CM 97% to target</td><td>${av('a2','MS')}</td></tr>
            <tr><td class="t">Weekly report · W38</td><td>${tag('g','Weekly')}</td><td class="dim">Sep 20</td><td class="dim">Google 15% under, fixed</td><td>${av('a2','MS')}</td></tr>
            <tr><td class="t">Monthly report · August</td><td>${tag('b','Monthly')}</td><td class="dim">Aug 31</td><td class="dim">New customers +11% MoM</td><td>${av('a1','DM')}</td></tr>
            <tr><td class="t">Quarterly report · Q3</td><td>${tag('p','Quarterly')}</td><td class="dim">Sep 30</td><td class="dim">Drafting · due Oct 7</td><td>${av('a1','DM')}</td></tr>
            <tr><td class="t">Annual report · 2025</td><td>${tag('y','Annual')}</td><td class="dim">Dec 31</td><td class="dim">CM +24% YoY at flat spend</td><td>${av('a1','DM')}</td></tr>
          </table>
        </div>
        <div class="callout">
          <h3>Data dictionary <span class="more">KPI tiers</span></h3>
          <table class="db">
            <tr><th>${I.text}Metric</th><th>${I.status}KPI tier</th><th>${I.text}Formula</th><th>${I.person}Owner</th></tr>
            <tr><td class="t">Contribution margin</td><td>${tag('r','North star')}</td><td class="dim">Revenue − COGS − spend</td><td>${av('a1','DM')}</td></tr>
            <tr><td class="t">New customers</td><td>${tag('y','Tier 1')}</td><td class="dim">First orders, deduped</td><td>${av('a2','MS')}</td></tr>
            <tr><td class="t">Blended CAC</td><td>${tag('y','Tier 1')}</td><td class="dim">Spend ÷ new customers</td><td>${av('a2','MS')}</td></tr>
            <tr><td class="t">Meta ROAS</td><td>${tag('b','Tier 2')}</td><td class="dim">Attributed rev ÷ Meta spend</td><td>${av('a3','JL')}</td></tr>
          </table>
        </div>
      </div>
    </div>`
});
out('04-kpi-reporting.html', measure);
console.log('built 4 pages');
