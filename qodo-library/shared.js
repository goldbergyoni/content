/* ============================================================
   Qodo Library wireframes — shared data + shell
   Content is real: rule titles come from the mined rule sets in
   this repo, and the linked findings are actual PRs from the
   battle-testing runs.
   ============================================================ */

/* ---------- icons ---------- */
const I = {
  star: (fill, stroke, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="1.6" stroke-linejoin="round"><path d="m12 3 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.5 6.8 19l1-5.8L3.6 9.1l5.8-.8Z"/></svg>`,
  shield: (c, s = 19) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  bookmark: (c, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/></svg>`,
  home: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10h14V10"/></svg>`,
  repo: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5a2 2 0 0 1 2-2h11l3 3v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="m8 10 2 2-2 2"/><path d="M13 14h3"/></svg>`,
  flask: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6M15 2v6M7 8h10v4a5 5 0 0 1-10 0Z"/><path d="M12 17v5"/></svg>`,
  chart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="20" x2="4" y2="13"/><line x1="10" y1="20" x2="10" y2="8"/><line x1="16" y1="20" x2="16" y2="4"/><line x1="22" y1="20" x2="2" y2="20"/></svg>`,
  people: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M17 8h4M19 6v4"/></svg>`,
  bug: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 2M19 13h-3M19 19l-3-2M5 7l3 2M5 13h3M5 19l3-2M12 2v4"/></svg>`,
  doc: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="14" height="18" rx="1"/><path d="M8 7h6M8 11h6M8 15h3"/></svg>`,
  check: (c, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  ban: (c, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m5.5 5.5 13 13"/></svg>`,
  merge: (c, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6"/><path d="M18 6a9 9 0 0 1-9 9"/><circle cx="18" cy="6" r="3"/></svg>`,
  wrench: (c, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3.5a5 5 0 0 0-6.4 6.4L3 15v6h6l5.1-5.1a5 5 0 0 0 6.4-6.4l-3.1 3.1-2.9-.6-.6-2.9Z"/></svg>`,
  chev: (c, s = 16, dir = 'right') => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(${dir === 'down' ? 90 : dir === 'left' ? 180 : 0}deg)"><path d="m9 6 6 6-6 6"/></svg>`,
  search: (c, s = 16) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>`,
  filter: (c, s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18l-7 8v6l-4-2v-4Z"/></svg>`,
  folder: (c, s = 17) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>`,
  ext: (c, s = 13) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>`,
  eye: (c, s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.6"/></svg>`,
  spark: (c, s = 16) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>`,
  info: (c, s = 13) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>`,
  qodo: (s = 34) => `<svg width="${s}" height="${s}" viewBox="0 0 40 40"><defs><linearGradient id="qg${s}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#87F5D8"/><stop offset="1" stop-color="#7968FA"/></linearGradient></defs><circle cx="20" cy="20" r="20" fill="url(#qg${s})"/><path d="M20 9a11 11 0 1 0 6.6 19.8l3 3 2.4-2.4-3-3A11 11 0 0 0 20 9Zm0 4.6a6.4 6.4 0 1 1 0 12.8 6.4 6.4 0 0 1 0-12.8Z" fill="#0B0C0D"/></svg>`,
};

/* ---------- package catalog ----------
   v1 ships three packages, depth over breadth (PRD §Content).
   Three more are in the pipeline and cannot be adopted yet —
   they have not cleared battle testing. */
const PKGS = [
  {
    id: 'node', name: 'Node.js & TypeScript', cat: 'Backend', count: 65, status: 'live',
    desc: 'Object-level authorization, async concurrency limits, timeouts, error handling and secret hygiene for Node services and TypeScript APIs.',
    rec: 'Node 20+ detected in 34 of your 61 repositories',
    updatedOn: '6 Aug 2026', updatedNote: '3 rules added, 1 changed',
    bt: { repos: 4, prs: 412, findings: 189 },
    btRepos: ['calcom/cal.diy', 'n8n-io/n8n', 'medusajs/medusa', 'nestjs/nest'],
    impact: { passed: 8412, detected: 157, merged: 61, blocked: 12 },
    rules: [
      { id: 'API-01', t: 'Check the caller owns the record before reading or changing it', c: 'Security', s: 'error', f: 31, m: 6 },
      { id: 'API-02', t: 'Copy only allowed fields from a request body into a record', c: 'Security', s: 'error', f: 24, m: 4 },
      { id: 'ASY-03', t: 'Cap how many async operations run at once over a list', c: 'Async', s: 'error', f: 18, m: 7 },
      { id: 'ERR-04', t: 'Always check database error codes before branching on them', c: 'Error Handling', s: 'error', f: 12, m: 3 },
      { id: 'PERF-02', t: 'Do not pluck IDs into memory; use a sub-query instead', c: 'Performance', s: 'warning', f: 9, m: 5 },
      { id: 'API-04', t: 'Give every list endpoint a default page size and a hard ceiling', c: 'API Design', s: 'error', f: 7, m: 1 },
      { id: 'ASY-16', t: 'Set an explicit timeout on every outbound network call', c: 'Async', s: 'error', f: 6, m: 2 },
      { id: 'ERR-07', t: 'Await every promise you start, or handle its errors explicitly', c: 'Error Handling', s: 'error', f: 5, m: 1 },
      { id: 'SEC-09', t: 'Avoid leaking secrets in log output', c: 'Security', s: 'error', f: 3, m: 0, overlap: 'Security baseline · Org Policy' },
      { id: 'TS-01', t: 'Mark type-only imports with import type, apart from value imports', c: 'TypeScript', s: 'warning', f: 41, m: 39, noisy: true },
      { id: 'STR-02', t: 'Handle emitter and stream failures with an error listener', c: 'Streams', s: 'warning', f: 1, m: 0 },
      { id: 'TS-04', t: 'Read the current path with import.meta.dirname inside ESM files', c: 'TypeScript', s: 'warning', f: 0, m: 0, dead: true },
    ],
    evidence: {
      'ASY-03': [
        { repo: 'calcom/cal.diy', pr: 29752, url: 'https://github.com/calcom/cal.diy/pull/29752', file: 'packages/features/eventTypes/handleChildrenEventTypes.ts', line: 179, what: 'One UPDATE per member inside Promise.all over oldUserIds — a managed event type with 200 hosts fires 200 updateMany statements.' },
        { repo: 'n8n-io/n8n', pr: 14882, url: 'https://github.com/n8n-io/n8n/pull/14882', file: 'packages/cli/src/workflows/workflow.service.ts', line: 244, what: 'Unbounded Promise.all over every active workflow on startup; 900 workflows open 900 database connections at once.' },
      ],
      'ERR-04': [
        { repo: 'calcom/cal.diy', pr: 29747, url: 'https://github.com/calcom/cal.diy/pull/29747', file: 'packages/trpc/server/routers/viewer/users/_router.ts', line: 70, what: 'The catch block checks a Prisma error code, but the guard is bound to the client instance rather than the error namespace, so it never matches.' },
      ],
      'PERF-02': [
        { repo: 'calcom/cal.diy', pr: 29689, url: 'https://github.com/calcom/cal.diy/pull/29689', file: 'packages/features/bookings/lib/handleNewBooking/loadAndValidateUsers.ts', line: 157, what: 'Plucks every loaded user id into memory to feed the next query, then filters back in JS — an extra round trip on the booking hot path.' },
      ],
      'API-01': [
        { repo: 'medusajs/medusa', pr: 13204, url: 'https://github.com/medusajs/medusa/pull/13204', file: 'packages/medusa/src/api/store/orders/[id]/route.ts', line: 34, what: 'New order-detail handler resolves the order by route id and returns it; authentication is checked but ownership is not, so any customer reads any order.' },
        { repo: 'calcom/cal.diy', pr: 29711, url: 'https://github.com/calcom/cal.diy/pull/29711', file: 'packages/trpc/server/routers/viewer/bookings/get.handler.ts', line: 88, what: 'Booking lookup by uid with no membership check on the owning team.' },
      ],
      'API-02': [
        { repo: 'nestjs/nest', pr: 15012, url: 'https://github.com/nestjs/nest/pull/15012', file: 'sample/22-graphql-prisma/src/users/users.service.ts', line: 41, what: 'Spreads the whole update payload onto the user record; a valid request can still carry role or isAdmin.' },
      ],
      'TS-01': [
        { repo: 'n8n-io/n8n', pr: 14903, url: 'https://github.com/n8n-io/n8n/pull/14903', file: 'packages/core/src/execution-engine/workflow-execute.ts', line: 12, what: 'Type-only symbols imported alongside values; the bundler keeps the module at runtime.' },
      ],
    },
    changelog: [
      { d: '6 Aug 2026', k: 'added', n: 3, items: ['Set an explicit timeout on every outbound network call', 'Check response.ok after fetch, since fetch does not reject on errors', 'Cap how many async operations run at once over a list'] },
      { d: '6 Aug 2026', k: 'changed', n: 1, items: ['Avoid leaking secrets in log output — narrowed to structured loggers, no longer fires on console.error'] },
      { d: '22 Jul 2026', k: 'removed', n: 1, items: ['Prefer async and await over promise chains — too subjective, failed the non-controversial bar'] },
    ],
  },
  {
    id: 'fetest', name: 'Frontend testing', cat: 'Testing', count: 26, status: 'live',
    desc: 'Test anatomy, assertion strength and DOM query discipline — the checks that stop a suite from passing while the feature is broken.',
    rec: null,
    updatedOn: null, updatedNote: null,
    bt: { repos: 3, prs: 260, findings: 94 },
    btRepos: ['lobehub/lobe-chat', 'OpenCut-app/OpenCut', 'shadcn-ui/ui'],
    impact: { passed: 3105, detected: 62, merged: 20, blocked: 5 },
    rules: [
      { id: 'ANAT-01', t: 'Keep each test short enough to read in one screen', c: 'Test Anatomy', s: 'error', f: 14, m: 4 },
      { id: 'ANAT-15', t: 'Reset mocks, storage and globals before each test', c: 'Test Anatomy', s: 'error', f: 11, m: 2 },
      { id: 'ASRT-02', t: 'Pick matchers that print the full difference on failure', c: 'Assertions', s: 'warning', f: 8, m: 3 },
      { id: 'DOM-03', t: 'Find elements with Testing Library queries, not container queries', c: 'DOM Testing', s: 'error', f: 7, m: 1 },
      { id: 'ANAT-10', t: 'Let each test create the state it depends on', c: 'Test Anatomy', s: 'error', f: 5, m: 2 },
      { id: 'ANAT-03', t: 'Keep the test body flat, with no branches or loops', c: 'Test Anatomy', s: 'error', f: 4, m: 1 },
      { id: 'MOCK-02', t: 'Mock at the network boundary, not the module under test', c: 'Mocking', s: 'warning', f: 2, m: 0 },
      { id: 'E2E-01', t: 'Drive end-to-end tests through the UI a user would touch', c: 'End-to-End', s: 'warning', f: 0, m: 0, dead: true },
    ],
    evidence: {
      'DOM-03': [
        { repo: 'lobehub/lobe-chat', pr: 9421, url: 'https://github.com/lobehub/lobe-chat/pull/9421', file: 'src/features/ChatInput/__tests__/InputArea.test.tsx', line: 62, what: 'Reaches into container.querySelector for a button that has an accessible name — the test passes when the label is deleted.' },
      ],
      'ANAT-15': [
        { repo: 'OpenCut-app/OpenCut', pr: 1188, url: 'https://github.com/OpenCut-app/OpenCut/pull/1188', file: 'apps/web/src/stores/__tests__/timeline-store.test.ts', line: 18, what: 'Zustand store is created once at module scope; the third test only passes because the second one left state behind.' },
      ],
    },
    changelog: [],
  },
  {
    id: 'sdlc', name: 'SDLC & ADLC', cat: 'Process', count: 29, status: 'live',
    desc: 'How agent skills, hooks and context files are written and gated — naming, scope, tool permissions, and the destructive commands that must never sit inside a skill.',
    rec: 'You have 118 skill and hook files under .claude/',
    updatedOn: null, updatedNote: null,
    bt: { repos: 5, prs: 190, findings: 71 },
    btRepos: ['anthropics/claude-code', 'qodo-ai/pr-agent', 'BuilderIO/micro-agent'],
    impact: { passed: 1980, detected: 44, merged: 12, blocked: 2 },
    rules: [
      { id: 'SKILL-31', t: 'Keep credential reads and outbound data sinks out of a skill', c: 'Skill', s: 'error', f: 9, m: 0 },
      { id: 'SKILL-32', t: 'Keep destructive shell and fetch-and-run commands out of a skill', c: 'Skill', s: 'error', f: 8, m: 1 },
      { id: 'HOOK-02', t: 'Set failClosed on a hook that gates shell or tool approval', c: 'Hook', s: 'warning', f: 7, m: 3 },
      { id: 'SKILL-09', t: 'Keep the SKILL.md body short and move detail to references', c: 'Skill', s: 'error', f: 6, m: 2 },
      { id: 'SKILL-13', t: 'Keep every relative path in a skill pointing at a real file', c: 'Skill', s: 'error', f: 5, m: 1 },
      { id: 'SKILL-33', t: 'Set disable-model-invocation on a skill that deploys, commits, or sends', c: 'Skill', s: 'error', f: 4, m: 0 },
      { id: 'SUB-02', t: 'Give every subagent an explicit tool allowlist', c: 'Subagent', s: 'warning', f: 3, m: 1 },
      { id: 'CTX-04', t: 'Keep a context file under the size the agent will actually read', c: 'Context file', s: 'warning', f: 2, m: 2 },
    ],
    evidence: {
      'SKILL-32': [
        { repo: 'qodo-ai/pr-agent', pr: 2044, url: 'https://github.com/qodo-ai/pr-agent/pull/2044', file: '.claude/skills/release/SKILL.md', line: 41, what: 'Skill body pipes a remote installer straight into a shell, with no allowed-tools bound and no confirmation step.' },
      ],
      'HOOK-02': [
        { repo: 'BuilderIO/micro-agent', pr: 312, url: 'https://github.com/BuilderIO/micro-agent/pull/312', file: '.claude/settings.json', line: 27, what: 'PreToolUse hook gating Bash returns non-zero on its own error path, which the harness reads as approve.' },
      ],
    },
    changelog: [],
  },
  { id: 'owasp', name: 'OWASP Top 10 essentials', cat: 'Compliance', count: 14, status: 'mining', desc: 'Code-level checks derived from the OWASP Top 10 control themes: injection, broken access control, SSRF and the rest.', eta: 'Battle testing · 61 of 14 rules cleared' },
  { id: 'pg', name: 'PostgreSQL & data access', cat: 'Data', count: 31, status: 'mining', desc: 'Index selectivity, migration locking, N+1 access patterns and transaction boundaries for Postgres-backed services.', eta: 'Battle testing · 240 PRs reviewed so far' },
  { id: 'soc2', name: 'SOC 2 control themes', cat: 'Compliance', count: 12, status: 'mining', desc: 'Change management, access review and audit-trail expectations expressed as things a reviewer can see in a diff.', eta: 'Expert review' },
];

const PIPELINE = [
  ['Mine', 'Docs, style guides, books, incident write-ups, domain experts'],
  ['Dedupe & split', 'One rule per idea — no umbrellas, no fragments'],
  ['Score', 'Needs AI · triviality · criticality · opinionated · changeability · context'],
  ['Cull', 'Drop what a linter catches and what is harmless but subjective'],
  ['Battle-test', 'Run against real pull requests in real repositories'],
  ['Qualify', 'Changeable in a PR, non-controversial, fired at least once'],
  ['Security scan', 'No hidden or injected instructions inside the rule text'],
  ['Format', 'One shape, token-optimised'],
  ['Expert review', 'A domain expert signs off on the surviving set'],
];

/* ---------- trust data ----------
   The package-level answer to "why should I believe this?" —
   modelled on the per-rule info page: sources with credentials,
   a consensus level, a security scan, token cost and an agent
   conformance evaluation. Quotes are real. */
const TRUST = {
  node: {
    consensus: 'High', tokens: 725, version: '2.11',
    scan: { checks: 412, findings: 0 },
    conf: { with: 84, base: 39, runs: 2400, models: 11 },
    sources: [
      { kind: 'Book', name: 'Node.js Design Patterns, 3rd edition', cred: 'Casciaro & Mammino · #1 best-seller, Node.js', n: 14,
        q: 'Leaving a rejection unhandled means the application keeps running in an inconsistent state — observe it, then decide.' },
      { kind: 'Repository', name: 'goldbergyoni/nodebestpractices', cred: '110k stars · most-starred Node.js guide on GitHub', n: 21,
        q: 'Use a single process-wide handler for unhandled rejections and treat it as you would an uncaught exception.' },
      { kind: 'Official docs', name: 'nodejs.org — API documentation', cred: 'Maintained by the Node.js core team', n: 17,
        q: 'The unhandledRejection event is emitted whenever a promise is rejected and no handler is attached within a turn of the event loop.' },
      { kind: 'Official docs', name: 'TypeScript handbook', cred: 'typescriptlang.org · Microsoft', n: 9,
        q: 'Type-only imports are erased at compile time; mixing them with value imports keeps the module alive at runtime.' },
      { kind: 'Standards', name: 'nodejs/node — TSC discussions', cred: 'Technical Steering Committee threads', n: 6,
        q: 'Defaulting to terminate on unhandled rejection was deliberate: an unobserved rejection is a bug, not a warning.' },
      { kind: 'Incidents', name: 'Public post-mortems, 2019–2025', cred: '12 write-ups from Node services at scale', n: 8,
        q: 'Silent rejections are the single most common cause of "it just disappeared" production incidents we triage.' },
    ],
  },
  fetest: {
    consensus: 'High', tokens: 610, version: '1.4',
    scan: { checks: 164, findings: 0 },
    conf: { with: 79, base: 34, runs: 1100, models: 11 },
    sources: [
      { kind: 'Official docs', name: 'Testing Library documentation', cred: 'Maintained by the Testing Library team', n: 11,
        q: 'The more your tests resemble the way your software is used, the more confidence they can give you.' },
      { kind: 'Repository', name: 'goldbergyoni/javascript-testing-best-practices', cred: '24k stars · testing guide', n: 9,
        q: 'A test that only passes because the previous one left state behind is not a test, it is a coincidence.' },
      { kind: 'Book', name: 'Unit Testing: Principles, Practices and Patterns', cred: 'Khorikov · Manning', n: 7,
        q: 'Mock at the boundary you do not own. Mocking the thing under test only proves it calls itself.' },
      { kind: 'Official docs', name: 'Vitest & Jest documentation', cred: 'Official project documentation', n: 5,
        q: 'Reset mocks between tests — a leaked spy turns an unrelated failure into a mystery.' },
      { kind: 'Article', name: 'Common mistakes with React Testing Library', cred: 'Kent C. Dodds · maintainer', n: 6,
        q: 'Reaching into the container for an element with an accessible name hides the bug you are testing for.' },
    ],
  },
  sdlc: {
    consensus: 'Medium', tokens: 720, version: '0.9',
    scan: { checks: 198, findings: 0 },
    conf: { with: 71, base: 28, runs: 900, models: 11 },
    sources: [
      { kind: 'Official docs', name: 'Claude Code documentation', cred: 'docs.claude.com · Anthropic', n: 12,
        q: 'A skill that can commit, deploy or send should never be model-invocable without an explicit decision.' },
      { kind: 'Official docs', name: 'Cursor rules documentation', cred: 'cursor.com · official', n: 6,
        q: 'A rules file the agent will not read in full is a rules file that does not apply.' },
      { kind: 'Article', name: 'Writing effective tools and skills for agents', cred: 'Anthropic engineering blog', n: 7,
        q: 'Keep the always-loaded body short and push detail into references the agent can reach for.' },
      { kind: 'Incidents', name: 'Agent incident write-ups', cred: '9 internal and public reports, 2025–2026', n: 4,
        q: 'Every destructive-command incident we reviewed started with a skill that had no tool allowlist.' },
    ],
  },
};

/* per-rule trust: consensus · token cost · how many sources back it */
const RTRUST = {
  'API-01': { c: 'High', t: 34, s: 6, pa: 412 }, 'API-02': { c: 'High', t: 28, s: 5, pa: 388 },
  'ASY-03': { c: 'High', t: 41, s: 5, pa: 356 }, 'ERR-04': { c: 'High', t: 26, s: 4, pa: 402 },
  'PERF-02': { c: 'Medium', t: 33, s: 3, pa: 291 }, 'API-04': { c: 'High', t: 24, s: 5, pa: 377 },
  'ASY-16': { c: 'High', t: 22, s: 6, pa: 344 }, 'ERR-07': { c: 'High', t: 24, s: 7, pa: 431 },
  'SEC-09': { c: 'High', t: 19, s: 8, pa: 498 }, 'TS-01': { c: 'Medium', t: 31, s: 3, pa: 612 },
  'STR-02': { c: 'Medium', t: 27, s: 3, pa: 266 }, 'TS-04': { c: 'Low', t: 18, s: 2, pa: 188 },
  'ANAT-01': { c: 'Medium', t: 21, s: 4, pa: 204 }, 'ANAT-15': { c: 'High', t: 26, s: 5, pa: 187 },
  'ASRT-02': { c: 'High', t: 29, s: 4, pa: 166 }, 'DOM-03': { c: 'High', t: 23, s: 5, pa: 158 },
  'ANAT-10': { c: 'High', t: 25, s: 4, pa: 141 }, 'ANAT-03': { c: 'Medium', t: 20, s: 3, pa: 133 },
  'MOCK-02': { c: 'Medium', t: 30, s: 3, pa: 118 }, 'E2E-01': { c: 'Low', t: 22, s: 2, pa: 96 },
  'SKILL-31': { c: 'High', t: 28, s: 4, pa: 88 }, 'SKILL-32': { c: 'High', t: 25, s: 4, pa: 81 },
  'HOOK-02': { c: 'Medium', t: 24, s: 3, pa: 74 }, 'SKILL-09': { c: 'Medium', t: 22, s: 3, pa: 69 },
  'SKILL-13': { c: 'High', t: 19, s: 3, pa: 62 }, 'SKILL-33': { c: 'High', t: 27, s: 3, pa: 58 },
  'SUB-02': { c: 'Medium', t: 23, s: 3, pa: 51 }, 'CTX-04': { c: 'Medium', t: 21, s: 2, pa: 44 },
};

const byId = id => PKGS.find(p => p.id === id);
const live = () => PKGS.filter(p => p.status === 'live');
const num = n => n >= 1000 ? (n / 1000).toFixed(1).replace('.0', '') + 'K' : String(n);

/* ---------- shared shell ---------- */
function railHTML(){
  const item = (ico, label, badge, active) =>
    `<div class="navitem${active ? ' active' : ''}">${ico}<span>${label}</span>${badge ? `<span class="pill purple" style="margin-left:auto">${badge}</span>` : ''}</div>`;
  return `<aside class="rail">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:4px 8px 22px;">
      <div style="display:flex;align-items:center;gap:9px;">${I.qodo(34)}
        <span style="font-size:25px;font-weight:600;letter-spacing:-0.04em;">qodo</span></div>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777184" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
    </div>
    <nav>
      ${item(I.home, 'Home')}
      ${item(I.repo, 'Repositories')}
      ${item(I.bookmark('currentColor', 20), 'Review standards', 'Beta', true)}
      ${item(I.bug, 'Findings', 'Beta')}
      ${item(I.people, 'Team profiles', 'Alpha')}
      ${item(I.chart, 'Analytics')}
      ${item(I.shield('currentColor', 20), 'Configurations')}
      ${item(I.flask, 'Integrations')}
      ${item(I.doc, 'Account management')}
    </nav>
    <div style="margin-top:auto;display:flex;align-items:center;gap:11px;padding:10px 8px 4px;border-top:1px solid var(--line);">
      <div style="width:34px;height:34px;border-radius:50%;background:#2C2930;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;color:var(--tx-3);">H</div>
      <div style="line-height:1.2;">
        <div style="font-size:14px;font-weight:600;display:flex;align-items:center;gap:6px;">hila.f<span class="pill mint" style="font-size:8.5px">Admin</span></div>
        <div style="font-size:12px;color:var(--tx-6);">hila.f@qodo.ai</div>
      </div>
    </div>
  </aside>`;
}

function topbarHTML(){
  return `<header class="top">${I.bookmark('#C5C2CB', 22)}
    <span style="font-size:19px;font-weight:600;">Review standards</span>
    <span class="pill purple" style="font-size:9.5px;padding:2px 8px;">Beta</span></header>`;
}

function tabsHTML(active, onclick){
  const t = (id, label, badge) =>
    `<div class="tab${active === id ? ' on' : ''}" data-tour="tab-${id}" onclick="${onclick}('${id}')">${label}${badge ? `<span class="pill mint">${badge}</span>` : ''}</div>`;
  return `<div class="tabs">${t('rules', 'Rules')}${t('sug', 'Suggestions')}${t('skills', 'Skills')}${t('company', 'Company standards', 'New')}${t('manage', 'Manage')}</div>`;
}

function placeholderTab(name){
  return `<div style="padding:64px 0;text-align:center;color:var(--tx-6);font-size:14px;">
    ${name} is unchanged by this feature — see the Standards vision prototype.</div>`;
}

/* pipeline strip — the provenance proof, reused by all three variations */
function pipelineBodyHTML(compact){
  const steps = PIPELINE.map((s, i) => `
    <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:5px;">
      <div style="display:flex;align-items:center;gap:6px;">
        <span class="mono" style="font-size:9.5px;color:var(--mint);">0${i + 1}</span>
        <span style="height:1px;flex:1;background:${i === PIPELINE.length - 1 ? 'transparent' : 'var(--line-2)'};"></span>
      </div>
      <div style="font-size:12.5px;font-weight:600;">${s[0]}</div>
      ${compact ? '' : `<div style="font-size:11px;color:var(--tx-6);line-height:1.45;">${s[1]}</div>`}
    </div>`).join('');
  return `<div style="display:flex;gap:14px;">${steps}</div>
    <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--line);font-size:13px;color:var(--tx-4);">
      ${I.check('#87F5D8', 14)} <b style="color:var(--mint);font-weight:600;">A rule that never fired on real code never ships.</b>
      Every finding links to the pull request, file and line it was found on, so you can check our work before adopting.
    </div>`;
}
function pipelineHTML(compact){
  return `<div class="card" style="padding:18px 20px;">
    <div class="eyebrow" style="margin-bottom:14px;">How every rule here was made</div>
    ${pipelineBodyHTML(compact)}</div>`;
}

/* ---------- collapsible section ----------
   State lives on S.sec so a re-render keeps what the user opened. */
function accHTML(key, title, meta, body){
  /* S is a script-scoped const in each page, so it is NOT on window — look it up lexically */
  const st = (typeof S !== 'undefined') ? S : null;
  const open = !!(st && st.sec && st.sec[key]);
  return `<div class="acc${open ? ' open' : ''}" data-acc="${key}">
    <div class="hd" onclick="toggleSec('${key}')">
      <span class="ttl">${title}</span>
      ${meta ? `<span class="meta">${meta}</span>` : ''}
      <span class="chev">${I.chev('#918B9C', 17)}</span>
    </div>
    <div class="bd">${body}</div></div>`;
}

/* ---------- trust surfaces ---------- */
function meterHTML(level){
  const n = level === 'High' ? 3 : level === 'Medium' ? 2 : 1;
  const cls = level === 'High' ? 'on' : level === 'Medium' ? 'mid' : 'mid';
  return `<span class="meter">${[0,1,2].map(i => `<i class="${i < n ? cls : ''}"></i>`).join('')}</span>`;
}

/* the facts a reader checks before adopting, in one strip */
function propsHTML(p){
  const t = TRUST[p.id]; if(!t) return '';
  const prop = (k, v, good) => `<div class="prop${good ? ' good' : ''}"><span class="k">${k}</span><span class="v">${v}</span></div>`;
  return `<div class="props">
    ${prop('Consensus', `${meterHTML(t.consensus)} ${t.consensus}`)}
    ${prop('Security scan', `${I.check('#87F5D8', 14)} ${t.scan.findings} findings`, true)}
    ${prop('Sources', `${t.sources.length} · ${t.sources.reduce((a,s)=>a+s.n,0)} citations`)}
    ${prop('Context cost', `${num(t.tokens)} tokens`)}
    ${prop('Agents follow it', `${t.conf.with}% vs ${t.conf.base}%`)}
    ${prop('Version', t.version)}
  </div>`;
}

function sourcesHTML(p){
  const t = TRUST[p.id]; if(!t) return '';
  return `<p class="hint" style="margin-bottom:14px;">Every rule is curated from named sources and quotes the one it came from when it fires in review. No rule here is an opinion we invented.</p>
    ${t.sources.map(s => `<div class="src">
      <div class="kind">${s.kind}</div>
      <div>
        <div style="display:flex;align-items:baseline;gap:9px;flex-wrap:wrap;">
          <span class="name">${s.name}</span>
          <span class="pill mint">${s.n} rules</span></div>
        <div class="cred">${s.cred}</div>
        <blockquote>${s.q}</blockquote>
      </div></div>`).join('')}`;
}

function scanHTML(p){
  const t = TRUST[p.id]; if(!t) return '';
  return `<div style="display:flex;align-items:center;gap:16px;">
    <div class="sectico" style="width:44px;height:44px;border-radius:11px;background:var(--mint-wash);">${I.shield('#87F5D8', 22)}</div>
    <div style="flex:1;min-width:0;">
      <div style="font-size:14px;font-weight:600;color:var(--mint);">${t.scan.findings} findings across ${t.scan.checks} checks</div>
      <div style="font-size:13px;color:var(--tx-5);margin-top:3px;line-height:1.5;">
        Every rule and code example is scanned before it ships — no hidden instructions, no prompt injection, no command that reaches outside the review.</div>
    </div>
    <span class="pill mint solid-mint">Passed</span></div>`;
}

function confHTML(p){
  const t = TRUST[p.id]; if(!t) return '';
  const bar = (label, pct, colour) => `<div style="display:grid;grid-template-columns:190px 1fr 52px;gap:14px;align-items:center;padding:7px 0;">
    <div style="font-size:13px;color:var(--tx-4);">${label}</div>
    <div style="height:7px;background:var(--surf-3);border-radius:999px;overflow:hidden;">
      <div style="height:100%;width:${pct}%;background:${colour};border-radius:999px;"></div></div>
    <div class="mono" style="font-size:12.5px;color:var(--tx-3);text-align:right;">${pct}%</div></div>`;
  return `<p class="hint" style="margin-bottom:10px;">A rule only pays off if the coding agent actually respects it. We measure that before shipping: ${num(t.conf.runs)} evaluation runs across ${t.conf.models} models.</p>
    ${bar('With this package applied', t.conf.with, 'var(--mint)')}
    ${bar('Baseline — no rules', t.conf.base, 'var(--tx-7)')}
    <div style="margin-top:10px;font-size:13px;color:var(--tx-4);">
      ${I.check('#87F5D8', 14)} <b style="color:var(--mint);font-weight:600;">+${t.conf.with - t.conf.base} points</b>
      more of the code respects these practices once the package is on.</div>`;
}

/* the per-rule facts, shown inside an expanded rule row */
function ruleFactsHTML(rid){
  const r = RTRUST[rid]; if(!r) return '';
  const f = (k, v) => `<div style="display:flex;flex-direction:column;gap:2px;">
    <span class="mono" style="font-size:9.5px;letter-spacing:0.09em;text-transform:uppercase;color:var(--tx-6);">${k}</span>
    <span style="font-size:13px;color:var(--tx-3);display:flex;align-items:center;gap:6px;">${v}</span></div>`;
  return `<div style="display:flex;gap:28px;flex-wrap:wrap;padding-bottom:12px;border-bottom:1px solid var(--line);">
    ${f('Consensus', `${meterHTML(r.c)} ${r.c}`)}
    ${f('Backed by', `${r.s} sources`)}
    ${f('Context cost', `${r.t} tokens`)}
    ${f('Security scan', `${I.check('#87F5D8', 13)} <span style="color:var(--mint)">Passed</span>`)}
  </div>`;
}

/* ---------- toast / modal ---------- */
let _toastTimer;
function toast(msg){
  const el = document.getElementById('toast');
  el.innerHTML = `${I.star('#87F5D8', '#87F5D8', 18)}<span>${msg}</span>`;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}
function modal(html){
  const s = document.getElementById('scrim');
  s.innerHTML = `<div class="modal" onclick="event.stopPropagation()">${html}</div>`;
  s.classList.add('show');
}
function closeModal(){ document.getElementById('scrim').classList.remove('show'); }

/* ---------- suggestions data ----------
   What the recommendation engine matched, and why. */
const SUGGEST = {
  node:   { repos: 34, why: 'Node 20 and Express detected in 34 of your 61 repositories', scope: 'All 34 Node.js repositories' },
  fetest: { repos: 3,  why: 'React and Testing Library in 3 repositories — no testing rules apply there today', scope: '3 React repositories, and every new React project' },
  sdlc:   { repos: 12, why: '.claude and .cursor folders committed in 12 repositories', scope: '12 repositories with agent config' },
};

/* ---------- repositories a package matches, for the adoption scope picker ---------- */
const MATCHED = {
  node: [
    { r:'acme/payments-api', l:'Node 20 · Express', pr:'2h ago' },
    { r:'acme/orders-worker', l:'Node 20 · BullMQ', pr:'yesterday' },
    { r:'acme/identity-service', l:'Node 22 · Fastify', pr:'3d ago' },
    { r:'acme/notifications', l:'Node 20 · TypeScript', pr:'today' },
    { r:'acme/pricing-engine', l:'Node 18 · TypeScript', pr:'5d ago' },
    { r:'acme/admin-bff', l:'Node 20 · NestJS', pr:'today' },
    { r:'acme/webhooks-gateway', l:'Node 20 · Express', pr:'6d ago' },
    { r:'acme/reporting-jobs', l:'Node 18 · TypeScript', pr:'2w ago' },
  ],
  fetest: [
    { r:'acme/web-app', l:'React 19 · Vitest', pr:'today' },
    { r:'acme/design-system', l:'React 19 · Testing Library', pr:'4d ago' },
    { r:'acme/partner-portal', l:'React 18 · Jest', pr:'1w ago' },
  ],
  sdlc: [
    { r:'acme/agent-toolkit', l:'.claude · skills', pr:'today' },
    { r:'acme/payments-api', l:'.cursor · rules', pr:'2h ago' },
    { r:'acme/web-app', l:'CLAUDE.md', pr:'today' },
  ],
};

/* ---------- PRD walkthrough tooltips ----------
   A wireframe device, not product chrome. Everything here is white so a viewer can
   never mistake it for the product's own UI, and every tooltip is titled as such.
   Steps are defined per variation: {sel, title, hat, before, say, note, cta, next}.
   `title` is the bold top line; `hat` is the persona shown beside the step counter. */
let TOUR = [], _ti = -1;

function tourStart(steps){
  inviteKill();
  document.getElementById('tourstart')?.classList.add('hide');
  TOUR = steps; tourGo(0);
}
function tourGo(i){
  if(i < 0 || i >= TOUR.length) return tourEnd();
  _ti = i;
  const st = TOUR[i];
  if(st.before) st.before();
  if(window.render) render();
  requestAnimationFrame(() => tourPaint());
}
function tourEnd(){
  _ti = -1;
  document.getElementById('tourspot')?.remove();
  document.getElementById('tourtip')?.remove();
  document.getElementById('tourstart')?.classList.remove('hide');
}
function tourPaint(){
  const st = TOUR[_ti]; if(!st) return;
  const el = st.sel ? document.querySelector(st.sel) : null;
  let spot = document.getElementById('tourspot');
  if(!spot){ spot = document.createElement('div'); spot.id = 'tourspot'; document.body.appendChild(spot); }
  let tip = document.getElementById('tourtip');
  if(!tip){ tip = document.createElement('div'); tip.id = 'tourtip'; document.body.appendChild(tip); }

  const pad = 8;
  let r;
  /* a step can point inside the modal — the scrim already dims the page, so drop the
     spotlight's own blackout and lift the ring above it, or the modal reads as disabled */
  const inModal = !!el && !!el.closest('#scrim');
  spot.style.zIndex = inModal ? 153 : 150;
  spot.style.boxShadow = inModal ? 'none' : '0 0 0 9999px rgba(0,0,0,0.72)';
  if(el){
    el.scrollIntoView({block:'center', behavior:'instant'});
    r = el.getBoundingClientRect();
    spot.style.display = 'block';
    spot.style.top = (r.top - pad) + 'px'; spot.style.left = (r.left - pad) + 'px';
    spot.style.width = (r.width + pad*2) + 'px'; spot.style.height = (r.height + pad*2) + 'px';
  } else {
    spot.style.display = 'none';
    r = { top: innerHeight/2 - 40, left: innerWidth/2 - 178, width: 356, height: 80, bottom: innerHeight/2 + 40, right: innerWidth/2 + 178 };
  }

  tip.innerHTML = `<div class="hat"><div class="t">${st.title || 'PRD walkthrough'}</div></div>
    <div class="bd">
      <div class="step">${I.spark('#5B4FD6',11)}<span class="tool">PRD walkthrough</span>
        <span class="ct">Step ${_ti+1} of ${TOUR.length}${st.hat?` · ${st.hat}`:''}</span></div>
      <div class="say">${st.say}</div>
      ${st.note?`<div class="note">${st.note}</div>`:''}
      <div class="acts">
        <span class="end" onclick="tourEnd()">End tour</span>
        ${_ti>0?`<button class="btn ghost sm" onclick="tourGo(${_ti-1})">Back</button>`:''}
        <button class="btn sm" onclick="${st.next || `tourGo(${_ti+1})`}">${st.cta || (_ti===TOUR.length-1?'Finish':'Next')}</button>
      </div>
    </div>`;

  const tr = tip.getBoundingClientRect();
  let top, left;
  if(inModal){
    /* beside the dialog, never on top of its own buttons */
    const mr = el.closest('.modal').getBoundingClientRect();
    left = mr.right + 16;
    if(left + tr.width > innerWidth - 12) left = mr.left - tr.width - 16;
    top = mr.top;
  } else if(el && r.height > innerHeight * 0.55){
    /* a section taller than the screen has no free edge — park the tip bottom-right
       so it never sits on the heading the step is talking about */
    left = innerWidth - tr.width - 24; top = innerHeight - tr.height - 24;
  } else {
    top = r.bottom + 14; left = r.left;
    if(top + tr.height > innerHeight - 12) top = r.top - tr.height - 14;
  }
  top  = Math.min(Math.max(12, top),  Math.max(12, innerHeight - tr.height - 12));
  left = Math.min(Math.max(12, left), Math.max(12, innerWidth  - tr.width  - 12));
  tip.style.top = top + 'px'; tip.style.left = left + 'px';
}
addEventListener('resize', () => { if(_ti >= 0) tourPaint(); });

/* ---------- corner launcher + the one-time invitation ----------
   The launcher sits in a corner rather than in the page, so the product layout is
   never altered by a wireframe control. On first arrival the invitation opens by
   itself — as if hovered — and once it is answered or dismissed it does not come
   back for the rest of the visit. */
let _inviteDone = false;

function tourLauncherMount(){
  /* B and C have no walkthrough of their own — never offer one there */
  if(typeof startTour !== 'function') return;
  document.body.insertAdjacentHTML('beforeend',
    `<div id="tourstart" onmouseenter="inviteShow()" onclick="startTour()">${I.spark('#5B4FD6',13)} Take the guided tour</div>`);
  setTimeout(inviteShow, 700);
}
function inviteShow(){
  if(_inviteDone || _ti >= 0 || document.getElementById('tourinvite')) return;
  document.body.insertAdjacentHTML('beforeend', `<div id="tourinvite">
    <div class="t">${I.spark('#5B4FD6',11)} PRD walkthrough tooltips</div>
    <div class="say">Hey — want to go through this feature in a guided tour?</div>
    <div class="acts">
      <button class="btn sm" onclick="startTour()">Yes, walk me through it</button>
      <span class="no" onclick="inviteKill()">No thanks</span>
    </div></div>`);
}
/* one shot per page visit: killing it also stops hover from bringing it back */
function inviteKill(){ _inviteDone = true; document.getElementById('tourinvite')?.remove(); }

/* kept so the variations that print an inline button keep working — the launcher is
   a fixed corner control now, so this renders nothing into the page itself */
function tourButtonHTML(){ return ''; }

/* ---------- wireframe navigator ---------- */
/* Starts collapsed so it never sits on the card grid, and the choice survives a re-render
   (render() rebuilds the whole root, this panel included). */
let _navMin = true;
function navToggle(){ _navMin = !_navMin; document.getElementById('wfnav').classList.toggle('min', _navMin); }
function navigator_(groups){
  const g = groups.map(gr => `<div class="grp"><em>${gr.label}</em>${
    gr.items.map(it => `<button data-nav="${it.k}" onclick="${it.fn}">${it.t}</button>`).join('')
  }</div>`).join('');
  return `<div id="wfnav"${_navMin ? ' class="min"' : ''}>
    <div class="hd" onclick="navToggle()">
      ${I.spark('#998CFA', 13)}<b>Wireframe states</b>
      <span style="margin-left:auto;color:var(--tx-6);">${_navMin ? '▴' : '▾'}</span></div>
    <div class="bd">${g}</div></div>`;
}
function markNav(key){
  document.querySelectorAll('#wfnav button').forEach(b => b.classList.toggle('on', b.dataset.nav === key));
}

/* ---------- boot ---------- */
function mount(renderFn){
  document.body.insertAdjacentHTML('beforeend', `<div id="toast"></div><div id="scrim" onclick="closeModal()"></div>`);
  window.render = renderFn;
  renderFn();
  tourLauncherMount();
}
