const fs = require('fs');
const path = require('path');
const { I, sidebar, chrome, topbar } = require('./partials');

const out = (name, html) => fs.writeFileSync(path.join(__dirname, name), html);
const doc = ({ title, urlPath, nav, crumbs, extraCss = '', body, topExtra = '', pop = '' }) => `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
<link rel="stylesheet" href="shell.css"><style>${extraCss}</style></head>
<body><div class="stage">
  <div class="window">${chrome(urlPath)}<div class="app">${sidebar(nav)}<div class="main">${topbar(crumbs, topExtra)}<div class="page">${body}</div></div></div></div>
  ${pop}
</div></body></html>`;

const tag = (cls, txt) => `<span class="tag ${cls}"><i></i>${txt}</span>`;
const av = (cls, ini) => `<span class="av ${cls}">${ini}</span>`;
const person = (cls, ini, name) => `<span class="person">${av(cls, ini)}${name}</span>`;
const pageIc = (sz = 13) => I.page.replace('<svg', `<svg style="width:${sz}px;height:${sz}px;stroke:currentColor;fill:none;stroke-width:2;vertical-align:-2px"`);
const rel = txt => `<span class="tag g">${pageIc(11)} ${txt}</span>`;
const prop = (ic, k, v) => `<div class="k">${I[ic]}${k}</div><div class="v">${v}</div>`;

/* ============ 1. Campaign & creative briefing ============ */
out('01-campaign-brief.html', doc({
  title: 'Campaign and creative briefing',
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
    .pop{left:56px;top:330px;width:640px}
  `,
  body: `
    <div class="title"><span class="ico">${I.rocket}</span><h2>Spring launch · Doughnut Pro</h2></div>
    <p class="sub">Marketing campaign brief · <span style="color:var(--ink-3)">Docs: marketing-campaign-brief</span></p>
    <div class="props">
      ${prop('status', 'Status', tag('gr', 'Live'))}
      ${prop('date', 'Flight', 'Mar 2 → Apr 12, 2026')}
      ${prop('tags', 'Channels', tag('g', 'Meta') + tag('g', 'Google') + tag('g', 'LinkedIn') + tag('g', 'Email'))}
      ${prop('num', 'Budget', '$48,000')}
      ${prop('person', 'Owner', person('a1', 'DM', 'Damien M.'))}
      ${prop('rel', 'Product', rel('Doughnut Pro'))}
      ${prop('rel', 'Customer profiles', '<span class="tag g">Founder-operator</span><span class="tag g">Agency lead</span>')}
      ${prop('rel', 'KPIs', '<span class="tag r">Contribution margin</span><span class="tag y">New customers</span><span class="tag b">Blended CAC</span>')}
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
      </div>
      <div class="stack">
        <div class="callout">
          <h3>Creative briefs <span class="more">+ New creative brief</span></h3>
          <table class="db">
            <tr><th>${I.text}Brief</th><th>${I.status}Status</th><th>${I.text}Creative type</th><th>${I.person}Producer</th></tr>
            <tr><td class="t"><span class="ic">${pageIc()}</span>Meta · Founder pain-point video</td><td>${tag('b', 'Delivered')}</td><td class="dim">Video 9:16, 4:5</td><td>${av('a3', 'JL')}</td></tr>
            <tr><td class="t"><span class="ic">${pageIc()}</span>Meta · Before/after statics</td><td>${tag('gr', 'Approved')}</td><td class="dim">Static 1:1, 4:5</td><td>${av('a3', 'JL')}</td></tr>
            <tr><td class="t"><span class="ic">${pageIc()}</span>LinkedIn · Agency ABM carousel</td><td>${tag('gr', 'Approved')}</td><td class="dim">Carousel, 5 cards</td><td>${av('a2', 'MS')}</td></tr>
            <tr><td class="t"><span class="ic">${pageIc()}</span>Google · Demand Gen images</td><td>${tag('g', 'Draft')}</td><td class="dim">Image 1.91:1, 1:1</td><td>${av('a2', 'MS')}</td></tr>
            <tr><td class="t"><span class="ic">${pageIc()}</span>Email · Launch header set</td><td>${tag('g', 'Draft')}</td><td class="dim">Email header 600px</td><td>${av('a4', 'AK')}</td></tr>
          </table>
        </div>
        <div class="callout">
          <h3>Copy briefs <span class="more">5 briefs</span></h3>
          <table class="db">
            <tr><th>${I.text}Brief</th><th>${I.status}Status</th><th>${I.rel}Angle</th><th>${I.person}Owner</th></tr>
            <tr><td class="t">Meta static + video copy</td><td>${tag('gr', 'Approved')}</td><td>${tag('g', 'Time back')}</td><td>${person('a4', 'AK', 'Aisha K.')}</td></tr>
            <tr><td class="t">Google search · 3 themes</td><td>${tag('gr', 'Approved')}</td><td>${tag('g', 'One place')}</td><td>${person('a4', 'AK', 'Aisha K.')}</td></tr>
            <tr><td class="t">LinkedIn carousel copy</td><td>${tag('y', 'In review')}</td><td>${tag('g', 'Small team, big output')}</td><td>${person('a1', 'DM', 'Damien M.')}</td></tr>
            <tr><td class="t">Email launch sequence</td><td>${tag('g', 'Draft')}</td><td>${tag('g', 'Time back')}</td><td>${person('a4', 'AK', 'Aisha K.')}</td></tr>
          </table>
        </div>
      </div>
    </div>`,
  pop: `<div class="pop">
    <div class="ptitle"><span class="ico">${I.brief}</span><h2>Meta · Founder pain-point video</h2></div>
    <div class="props">
      ${prop('status', 'Status', tag('gr', 'Approved'))}
      ${prop('rel', 'Campaign', rel('Spring launch · Doughnut Pro'))}
      ${prop('text', 'Creative type', 'Video · 9:16 and 4:5')}
      ${prop('rel', 'Angle', rel('Time back'))}
      ${prop('person', 'Producer', person('a3', 'JL', 'Jess L.'))}
      ${prop('date', 'Filed', 'February 18, 2026')}
    </div>
    <div class="hr"></div>
    <h4>Concept</h4>
    <p>A founder answers one question on camera: “What did you stop doing after switching?” Cut to the 14-day trial CTA.</p>
    <h4 style="margin-top:14px">Deliverables</h4>
    <div class="todo done"><i class="on"></i>Hook A · “I fired my spreadsheet” · 15s</div>
    <div class="todo done"><i class="on"></i>Hook B · “One brief, every asset” · 15s</div>
    <div class="todo"><i></i>30s cut for Reels with captions</div>
    <div class="todo"><i></i>Export 9:16 and 4:5, name per file naming conventions</div>
  </div>`
}));

/* ============ 2. Task management ============ */
const card = (title, camp, due, owner, extra = '', late = false) => `<div class="card"><div class="ct">${title}</div><div class="cm">${camp ? `<span class="tag g">${camp}</span>` : ''}${extra}</div><div class="cf"><span class="due ${late ? 'late' : ''}">${I.date}${due}</span>${av(owner[0], owner[1])}</div></div>`;
const col = (name, cls, cards) => `<div class="col"><div class="ch">${tag(cls, name)}<span class="cnt">${cards.length}</span><span class="plus">+</span></div>${cards.join('')}<div class="add">+ New</div></div>`;
out('02-task-management.html', doc({
  title: 'Task management',
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
    .pop{right:56px;top:430px;width:600px}
  `,
  body: `
    <div class="title"><span class="ico">${I.check}</span><h2>Tasks</h2></div>
    <p class="sub">Campaign tasks by status and due date.</p>
    <div class="views"><a class="on">${I.board}Board</a><a>${I.timeline}Timeline</a><a>${I.cal}Calendar</a><a>${I.table}All</a><div class="tools"><span>Filter</span><span>Sort</span><span>⋯</span><span class="new">New</span></div></div>
    <div class="filters"><span class="chip">Group <b>Status</b></span><span class="chip">Owner <b>Anyone</b></span><span class="chip">Campaign <b>Spring launch · Doughnut Pro</b></span><span class="chip">Due <b>This month</b></span></div>
    <div class="board">
      ${col('Not started', 'g', [
        card('Write Demand Gen image copy', 'Spring launch', 'Mar 6', ['a4', 'AK']),
        card('Build UTM links for email sequence', 'Spring launch', 'Mar 5', ['a1', 'DM'], '<span class="tag g">UTM links</span>'),
        card('QA landing page on mobile', 'Spring launch', 'Mar 4', ['a2', 'MS'], '<span class="tag g">Landing page</span>'),
        card('Draft post-mortem outline', 'Winter promo', 'Mar 12', ['a1', 'DM']),
      ])}
      ${col('In progress', 'y', [
        card('Finish LinkedIn carousel copy', 'Spring launch', 'Mar 3', ['a1', 'DM'], '<span class="tag g">Copy brief</span>'),
        card('Cut founder video · hook B', 'Spring launch', 'Mar 2', ['a3', 'JL'], '<span class="tag g">Creative brief</span>'),
        card('Set up Meta prospecting ad sets', 'Spring launch', 'Mar 2', ['a2', 'MS'], '<span class="tag g">Platform brief</span>'),
        card('Refresh agency ABM audience list', 'Spring launch', 'Mar 3', ['a2', 'MS'], '<span class="tag g">Audience list</span>'),
        card('Weekly report · week ending Mar 1', '', 'Mar 3', ['a1', 'DM'], '<span class="tag g">Report</span>'),
      ])}
      ${col('Blocked', 'r', [
        card('Approve email launch headers', 'Spring launch', 'Feb 28', ['a4', 'AK'], '<span class="tag g">Creative brief</span>', true),
        card('Legal review · "no credit card" claim', 'Spring launch', 'Mar 1', ['a1', 'DM'], '<span class="tag g">Approval</span>', true),
      ])}
      ${col('Done', 'gr', [
        card('Approve Meta before/after statics', 'Spring launch', 'Feb 21', ['a3', 'JL']),
        card('Name campaign, ad sets and ads', 'Spring launch', 'Feb 19', ['a2', 'MS'], '<span class="tag g">Naming</span>'),
        card('Publish search theme brief', 'Spring launch', 'Feb 18', ['a4', 'AK']),
        card('Define KPIs and targets', 'Spring launch', 'Feb 14', ['a1', 'DM'], '<span class="tag g">Data dictionary</span>'),
        card('Event tracking plan signed off', 'Spring launch', 'Feb 12', ['a2', 'MS']),
      ])}
    </div>`,
  pop: `<div class="pop">
    <div class="ptitle"><span class="ico">${I.check}</span><h2>Cut founder video · hook B</h2></div>
    <div class="props">
      ${prop('status', 'Status', tag('y', 'In progress'))}
      ${prop('date', 'Due', 'March 2, 2026')}
      ${prop('person', 'Owner', person('a3', 'JL', 'Jess L.'))}
      ${prop('rel', 'Campaign', rel('Spring launch · Doughnut Pro'))}
      ${prop('rel', 'Creative briefs', rel('Meta · Founder pain-point video'))}
      ${prop('rel', 'File names', rel('DL_SPR26_META_VID_HOOKB_916'))}
    </div>
    <div class="hr"></div>
    <div class="todo done"><i class="on"></i>Select take from Feb 26 shoot</div>
    <div class="todo done"><i class="on"></i>Rough cut · 15s, hook in first 2s</div>
    <div class="todo"><i></i>Add captions and end card with trial CTA</div>
    <div class="todo"><i></i>Export 9:16 and 4:5 to the creative drive</div>
    <div class="todo"><i></i>Move to Done and tag Marco for upload</div>
    <div class="tail">${I.note}2 comments · last from Damien M., 3h ago</div>
  </div>`
}));

/* ============ 3. Calendar ============ */
const ev = (cls, txt) => `<div class="ev ${cls}"><i></i>${txt}</div>`;
const days = [];
const start = new Date(2026, 8, 27);
for (let i = 0; i < 35; i++) { const d = new Date(start); d.setDate(start.getDate() + i); days.push(d); }
const E = {
  '2026-09-28': [ev('t', 'Approve Q4 plan'), ev('c', 'LinkedIn · Founder story')],
  '2026-09-29': [ev('r', 'Weekly report due')],
  '2026-09-30': [ev('t', 'Refresh ABM audience'), ev('c', 'Blog · Naming conventions')],
  '2026-10-01': [ev('t', 'Meta ad sets live'), ev('c', 'Email · Launch #1')],
  '2026-10-02': [ev('c', 'Instagram · Product teaser')],
  '2026-10-05': [ev('c', 'LinkedIn · Case study'), ev('t', 'QA landing page')],
  '2026-10-06': [ev('r', 'Weekly report due'), ev('c sel', 'Email · Launch #2')],
  '2026-10-07': [ev('c', 'YouTube · Walkthrough')],
  '2026-10-08': [ev('v', 'Creative review · Meta')],
  '2026-10-09': [ev('c', 'TikTok · Founder hook')],
  '2026-10-12': [ev('c', 'Blog · Weekly report guide')],
  '2026-10-13': [ev('r', 'Weekly report due'), ev('t', 'Legal review · claims')],
  '2026-10-14': [ev('c', 'Email · Launch #3')],
  '2026-10-15': [ev('v', 'Budget pacing review')],
  '2026-10-16': [ev('c', 'LinkedIn · Team results')],
  '2026-10-19': [ev('t', 'Rotate Meta creative')],
  '2026-10-20': [ev('r', 'Weekly report due'), ev('c', 'X · Thread · KPIs')],
  '2026-10-21': [ev('c', 'Blog · Content calendar')],
  '2026-10-22': [ev('v', 'Experiment review · EXP-014')],
  '2026-10-23': [ev('c', 'Instagram · Reel')],
  '2026-10-26': [ev('t', 'Draft monthly report')],
  '2026-10-27': [ev('r', 'Weekly report due')],
  '2026-10-28': [ev('c', 'LinkedIn · Monthly recap')],
  '2026-10-29': [ev('t', 'Post-mortem · Winter promo')],
  '2026-10-30': [ev('r', 'Monthly report due'), ev('v', 'Quarterly KPI review')],
};
const iso = d => d.toISOString().slice(0, 10);
const grid = days.map(d => {
  const k = iso(d), other = d.getMonth() !== 9, today = k === '2026-09-30';
  return `<div class="day ${other ? 'other' : ''}"><div class="dn ${today ? 'today' : ''}">${d.getDate() === 1 ? 'Oct 1' : d.getDate()}</div>${(E[k] || []).join('')}</div>`;
}).join('');
out('03-calendar.html', doc({
  title: 'Calendar',
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
    .ev.sel{outline:2px solid #2f6fde;outline-offset:-1px}
    .flight{position:absolute;left:8px;right:8px;height:18px;border-radius:5px;background:#1f1f1f;color:#fff;font-size:11px;font-weight:600;display:flex;align-items:center;padding:0 8px;gap:6px;z-index:2}
    .flight i{width:6px;height:6px;border-radius:50%;background:var(--brand);display:inline-block}
    .pop{left:56px;top:420px;width:600px}
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
      <div class="flight" style="top:${34 + 118 + 96}px;left:calc(14.2857% * 1 + 8px);"><i></i>Q4 launch · Doughnut Pro · flight starts Oct 5</div>
      <div class="flight" style="top:${34 + 118 * 2 + 96}px;"><i></i>Q4 launch · Doughnut Pro</div>
      <div class="flight" style="top:${34 + 118 * 3 + 96}px;right:calc(14.2857% * 2 + 8px)"><i></i>Q4 launch · Doughnut Pro · ends Oct 22</div>
    </div>`,
  pop: `<div class="pop">
    <div class="ptitle"><span class="ico">${I.cal}</span><h2>Email · Launch #2</h2></div>
    <div class="props">
      ${prop('status', 'Status', tag('p', 'Scheduled'))}
      ${prop('date', 'Date', 'October 6, 2026 · 9:00 AM')}
      ${prop('tags', 'Channel', tag('g', 'Email'))}
      ${prop('text', 'Format', 'Launch sequence · email 2 of 3')}
      ${prop('text', 'Message pillar', 'Time back')}
      ${prop('rel', 'Campaign', rel('Q4 launch · Doughnut Pro'))}
      ${prop('rel', 'Post brief', rel('Email campaign brief · Q4 launch'))}
      ${prop('person', 'Owner', person('a4', 'AK', 'Aisha K.'))}
    </div>
    <div class="hr"></div>
    <h4>Subject line</h4>
    <p>What did you stop doing after switching?</p>
    <div class="todo done"><i class="on"></i>Copy approved · Email copy template</div>
    <div class="todo done"><i class="on"></i>UTM link built from UTM rules</div>
    <div class="todo"><i></i>Pre-send checklist · 7 of 9</div>
  </div>`
}));

/* ============ 4. KPI & reporting ============ */
out('04-kpi-reporting.html', doc({
  title: 'KPI and reporting',
  urlPath: 'measure',
  nav: 'Measure',
  crumbs: ['Measure'],
  topExtra: '<span class="btn">New report</span>',
  extraCss: `
    .page{padding:22px 34px 0}
    .stack{display:flex;flex-direction:column;gap:14px}
    .pop{left:56px;top:330px;width:720px}
    .pop .sum{font-size:14px;color:var(--ink);margin:0 0 6px}
  `,
  body: `
    <div class="title"><span class="ico">${I.chart}</span><h2>Measure</h2></div>
    <p class="sub">Reports, experiment learnings and dashboards. · <span style="color:var(--ink-3)">Docs: reporting-cadence</span></p>
    <div class="stack">
      <div class="callout">
        <h3>Reports <span class="more">+ New report</span></h3>
        <table class="db">
          <tr><th>${I.text}Report</th><th>${I.status}Cadence</th><th>${I.date}Period ending</th><th>${I.text}Headline result</th><th>${I.rel}Campaigns</th><th>${I.person}Prepared by</th></tr>
          <tr><td class="t"><span class="ic">${pageIc()}</span>Weekly report · W39</td><td>${tag('g', 'Weekly')}</td><td class="dim">Sep 27, 2026</td><td class="dim">CM 97% to target, Meta above range</td><td>${rel('Q4 launch')}</td><td>${av('a2', 'MS')}</td></tr>
          <tr><td class="t"><span class="ic">${pageIc()}</span>Weekly report · W38</td><td>${tag('g', 'Weekly')}</td><td class="dim">Sep 20, 2026</td><td class="dim">Google paced 15% under, bids fixed</td><td>${rel('Q4 launch')}</td><td>${av('a2', 'MS')}</td></tr>
          <tr><td class="t"><span class="ic">${pageIc()}</span>Monthly report · August</td><td>${tag('b', 'Monthly')}</td><td class="dim">Aug 31, 2026</td><td class="dim">New customers +11% MoM</td><td>${rel('Summer promo')}</td><td>${av('a1', 'DM')}</td></tr>
          <tr><td class="t"><span class="ic">${pageIc()}</span>Quarterly report · Q3</td><td>${tag('p', 'Quarterly')}</td><td class="dim">Sep 30, 2026</td><td class="dim">Drafting · due Oct 7</td><td>${rel('Summer promo')} ${rel('Q4 launch')}</td><td>${av('a1', 'DM')}</td></tr>
          <tr><td class="t"><span class="ic">${pageIc()}</span>Annual report · 2025</td><td>${tag('y', 'Annual')}</td><td class="dim">Dec 31, 2025</td><td class="dim">CM +24% YoY at flat spend</td><td></td><td>${av('a1', 'DM')}</td></tr>
        </table>
      </div>
      <div class="callout">
        <h3>Experiment learning library <span class="more">Last 90 days</span></h3>
        <table class="db">
          <tr><th>${I.text}Review</th><th>${I.status}Status</th><th>${I.text}Metric</th><th>${I.text}Result</th><th>${I.text}Decision</th><th>${I.date}Reviewed</th><th>${I.person}Owner</th></tr>
          <tr><td class="t"><span class="ic">${pageIc()}</span>EXP-012 · Founder video vs static</td><td>${tag('gr', 'Scaled')}</td><td class="dim">Meta ROAS</td><td class="dim">+31%, significant</td><td class="dim">Video to 60% of budget</td><td class="dim">Sep 15</td><td>${av('a3', 'JL')}</td></tr>
          <tr><td class="t"><span class="ic">${pageIc()}</span>EXP-013 · Bundle offer</td><td>${tag('r', 'Loss')}</td><td class="dim">Conversion rate</td><td class="dim">−8%, significant</td><td class="dim">Keep single-plan offer</td><td class="dim">Sep 8</td><td>${av('a1', 'DM')}</td></tr>
          <tr><td class="t"><span class="ic">${pageIc()}</span>EXP-011 · Search headline set B</td><td>${tag('g', 'Inconclusive')}</td><td class="dim">CTR</td><td class="dim">+2%, not significant</td><td class="dim">Re-run with more budget</td><td class="dim">Aug 25</td><td>${av('a4', 'AK')}</td></tr>
        </table>
      </div>
      <div class="callout">
        <h3>Dashboards <span class="more">3 dashboards</span></h3>
        <table class="db">
          <tr><th>${I.text}Dashboard</th><th>${I.status}Tier</th><th>${I.text}Question it answers</th><th>${I.text}Refresh</th><th>${I.date}Last reviewed</th><th>${I.person}Owner</th></tr>
          <tr><td class="t"><span class="ic">${pageIc()}</span>North star and tier 1</td><td>${tag('y', 'Tier 1')}</td><td class="dim">Are we on pace this month?</td><td class="dim">Daily</td><td class="dim">Sep 28</td><td>${av('a1', 'DM')}</td></tr>
          <tr><td class="t"><span class="ic">${pageIc()}</span>Channel pacing</td><td>${tag('g', 'Tier 2')}</td><td class="dim">Which channel is off budget?</td><td class="dim">Daily</td><td class="dim">Sep 28</td><td>${av('a2', 'MS')}</td></tr>
          <tr><td class="t"><span class="ic">${pageIc()}</span>Creative performance</td><td>${tag('g', 'Tier 3')}</td><td class="dim">Which creative should we rotate?</td><td class="dim">Weekly</td><td class="dim">Sep 22</td><td>${av('a3', 'JL')}</td></tr>
        </table>
      </div>
    </div>`,
  pop: `<div class="pop">
    <div class="ptitle"><span class="ico">${I.chart}</span><h2>Weekly report · W39</h2></div>
    <div class="props" style="grid-template-columns:130px 1fr 130px 1fr">
      ${prop('status', 'Cadence', tag('g', 'Weekly'))}
      ${prop('date', 'Period ending', 'September 27, 2026')}
      ${prop('person', 'Prepared by', person('a2', 'MS', 'Marco S.'))}
      ${prop('rel', 'Campaigns', rel('Q4 launch · Doughnut Pro'))}
    </div>
    <div class="hr"></div>
    <h4>Summary</h4>
    <p class="sum">Contribution margin landed at $412k against a $425k target, driven by Meta running above its normal efficiency range. Google paced 15% under budget after a bid strategy change. Bids are back and Google should catch up by Friday.</p>
    <h4 style="margin-top:14px">Pacing</h4>
    <table class="nt">
      <tr><td>Metric</td><td>Month-to-date</td><td>Target</td><td>Pace</td><td>Status</td></tr>
      <tr><td>Contribution margin (north star)</td><td>$412,000</td><td>$425,000</td><td>97%</td><td class="ok">On track</td></tr>
      <tr><td>New customers (counter-metric)</td><td>1,214</td><td>1,150</td><td>106%</td><td class="ok">Ahead</td></tr>
      <tr><td>Total marketing spend</td><td>$118,400</td><td>$116,000</td><td>102%</td><td class="warn">Slightly over</td></tr>
    </table>
  </div>`
}));
console.log('built 4 pages');
