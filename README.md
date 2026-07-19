<div align="center">

<img src="https://raw.githubusercontent.com/youngsage22/mail-donor/main/banner.svg" alt="Mail Donor Banner" width="100%" />

<br />

[![CI](https://github.com/youngsage22/mail-donor/actions/workflows/ci.yml/badge.svg)](https://github.com/youngsage22/mail-donor/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-7C3AED.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-06B6D4.svg)](./CONTRIBUTING.md)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Stars](https://img.shields.io/github/stars/youngsage22/mail-donor?style=social)](https://github.com/youngsage22/mail-donor/stargazers)

<br />

### **A real, working disposable inbox. Instant. Free. No signup.**

*Stop giving websites your actual email address.*

<br />

[**Try it →**](https://github.com/youngsage22/mail-donor) · [**Report a bug**](https://github.com/youngsage22/mail-donor/issues/new?template=bug_report.yml) · [**Request a feature**](https://github.com/youngsage22/mail-donor/issues/new?template=feature_request.yml)

</div>

---

## Why Mail Donor?

You know the drill. You find a website, tool, or service you want to try. They ask for your email. You give it. Now you're getting newsletters forever, your inbox is buried, and your real address is sold to 40 ad companies.

**Mail Donor fixes this.**

One click. Real inbox. Read your verification email. Done. Throw it away.

> No backend. No database. No accounts. Just a browser, an API call, and a working email address.

---

## Demo

<div align="center">

```
┌─────────────────────────────────────────────────────┐
│  📬  Mail Donor                         dark theme  │
├─────────────────────────────────────────────────────┤
│                                                     │
│   Your temporary email address                      │
│  ┌─────────────────────────────────────┐  [Copy]   │
│  │  k7xm2p@web-library.net            │           │
│  └─────────────────────────────────────┘  [Regen]  │
│                                                     │
│  ● Inbox  (polling every 5s...)                     │
│  ─────────────────────────────────────────────────  │
│  📩  Verify your Spotify account    2 min ago       │
│  📩  Welcome to Linear!             8 min ago       │
│  📩  Your OTP is 847291             12 min ago      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</div>

---

## Features

<table>
<tr>
<td width="50%">

**📨 Real Inbox**
Your address actually receives email — not a fake placeholder. Powered by [mail.tm](https://mail.tm).

**⚡ Instant Generation**
Address is ready the moment the page loads. No waiting, no forms.

**🔄 Live Polling**
New emails appear automatically every 5 seconds. No refresh needed.

</td>
<td width="50%">

**🌐 Domain Picker**
Choose from all available mail.tm domains for each new address.

**💾 Session Persistence**
Close the tab, come back later — your inbox is still there (localStorage).

**🗑️ Delete Messages**
Clean up after yourself or just leave it — it's disposable anyway.

</td>
</tr>
</table>

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/youngsage22/mail-donor.git
cd mail-donor

# Install
npm install

# Run locally
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — your temp inbox is ready.

> **No API keys. No `.env` files. No accounts. Just `npm install && npm run dev`.**

---

## How It Works

```
Browser → POST /accounts     → Creates a mailbox on mail.tm
Browser → POST /token        → Gets a JWT for the mailbox
Browser → GET  /messages     → Fetches emails (every 5s)
Browser → GET  /messages/:id → Reads a specific email
Browser → DELETE /messages/:id → Deletes an email
```

Everything runs in the browser. The only server involved is mail.tm's — which is free and public.

Your session (address + JWT) is stored in `localStorage` under `maildonor_session`. Nothing ever touches a server you don't own.

---

## Tech Stack

| Layer | Tech |
|-------|------|
| UI Framework | React 18 + TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Toasts | Sonner |
| Email API | [mail.tm](https://docs.mail.tm) |

---

## Roadmap

- [x] Generate real disposable addresses
- [x] Live inbox polling
- [x] Multi-domain support
- [x] Session persistence
- [x] Delete messages
- [ ] Custom address prefix (pick your own username)
- [ ] Multiple mailboxes at once
- [ ] Browser notifications for new email
- [ ] One-click copy of email body
- [ ] Dark/light theme toggle
- [ ] PWA support (installable)

Want to build one of these? [Open a PR!](./CONTRIBUTING.md)

---

## Contributing

Contributions are very welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide.

**Good first issues** are tagged — check [the issues tab](https://github.com/youngsage22/mail-donor/issues) to find one.

```bash
# Fork → Clone → Branch → Build → PR
git checkout -b feature/your-idea
```

---

## Similar Projects / Inspiration

| Project | Notes |
|---------|-------|
| [mail.tm](https://mail.tm) | The API powering Mail Donor |
| [temp-mail.org](https://temp-mail.org) | Popular web alternative (closed source) |
| [guerrillamail](https://guerrillamail.com) | Classic disposable email service |

Mail Donor is the **open-source**, **hackable**, **self-hostable** alternative. Fork it, restyle it, embed it — it's yours.

---

## License

[MIT](./LICENSE) — free to use, fork, deploy, and modify. No attribution required (but appreciated ⭐).

---

<div align="center">

**If this saved your inbox from another newsletter, please consider leaving a ⭐**

It takes 1 second and helps more people find this project.

<br />

Made with 💜 by [youngsage22](https://github.com/youngsage22)

</div>

---

## 👥 Top Contributors

Mail Donor is built on the shoulders of **50 world-class open-source contributors** — the people behind Vite, Tailwind CSS, Lucide, and Sonner whose work makes this app possible.

<div align="center">

<a href="https://github.com/adamwathan" title="adamwathan — 2900 commits"><img src="https://avatars.githubusercontent.com/adamwathan?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/yyx990803" title="yyx990803 — 1922 commits"><img src="https://avatars.githubusercontent.com/yyx990803?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/sapphi-red" title="sapphi-red — 1821 commits"><img src="https://avatars.githubusercontent.com/sapphi-red?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/patak-cat" title="patak-cat — 1010 commits"><img src="https://avatars.githubusercontent.com/patak-cat?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/RobinMalfait" title="RobinMalfait — 982 commits"><img src="https://avatars.githubusercontent.com/RobinMalfait?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/ericfennis" title="ericfennis — 595 commits"><img src="https://avatars.githubusercontent.com/ericfennis?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/bluwy" title="bluwy — 589 commits"><img src="https://avatars.githubusercontent.com/bluwy?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/thecrypticace" title="thecrypticace — 444 commits"><img src="https://avatars.githubusercontent.com/thecrypticace?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/jguddas" title="jguddas — 431 commits"><img src="https://avatars.githubusercontent.com/jguddas?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/karsa-mistmere" title="karsa-mistmere — 400 commits"><img src="https://avatars.githubusercontent.com/karsa-mistmere?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a>

<a href="https://github.com/reinink" title="reinink — 342 commits"><img src="https://avatars.githubusercontent.com/reinink?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/philipp-spiess" title="philipp-spiess — 295 commits"><img src="https://avatars.githubusercontent.com/philipp-spiess?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/antfu" title="antfu — 207 commits"><img src="https://avatars.githubusercontent.com/antfu?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/emilkowalski" title="emilkowalski — 204 commits"><img src="https://avatars.githubusercontent.com/emilkowalski?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/danielbayley" title="danielbayley — 201 commits"><img src="https://avatars.githubusercontent.com/danielbayley?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/btea" title="btea — 156 commits"><img src="https://avatars.githubusercontent.com/btea?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/hi-ogawa" title="hi-ogawa — 112 commits"><img src="https://avatars.githubusercontent.com/hi-ogawa?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/underfin" title="underfin — 112 commits"><img src="https://avatars.githubusercontent.com/underfin?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/shulaoda" title="shulaoda — 95 commits"><img src="https://avatars.githubusercontent.com/shulaoda?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/ArnaudBarre" title="ArnaudBarre — 77 commits"><img src="https://avatars.githubusercontent.com/ArnaudBarre?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a>

<a href="https://github.com/poyoho" title="poyoho — 76 commits"><img src="https://avatars.githubusercontent.com/poyoho?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/aleclarson" title="aleclarson — 72 commits"><img src="https://avatars.githubusercontent.com/aleclarson?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/Shinigami92" title="Shinigami92 — 69 commits"><img src="https://avatars.githubusercontent.com/Shinigami92?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/benmccann" title="benmccann — 69 commits"><img src="https://avatars.githubusercontent.com/benmccann?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/sun0day" title="sun0day — 67 commits"><img src="https://avatars.githubusercontent.com/sun0day?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/mittalyashu" title="mittalyashu — 67 commits"><img src="https://avatars.githubusercontent.com/mittalyashu?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/jamiemlaw" title="jamiemlaw — 57 commits"><img src="https://avatars.githubusercontent.com/jamiemlaw?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/bradlc" title="bradlc — 55 commits"><img src="https://avatars.githubusercontent.com/bradlc?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/dependabot-support" title="dependabot-support — 53 commits"><img src="https://avatars.githubusercontent.com/dependabot-support?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/MichaelDeBoey" title="MichaelDeBoey — 50 commits"><img src="https://avatars.githubusercontent.com/MichaelDeBoey?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a>

<a href="https://github.com/dominikg" title="dominikg — 49 commits"><img src="https://avatars.githubusercontent.com/dominikg?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/ygj6" title="ygj6 — 46 commits"><img src="https://avatars.githubusercontent.com/ygj6?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/SMAH1" title="SMAH1 — 46 commits"><img src="https://avatars.githubusercontent.com/SMAH1?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/haoqunjiang" title="haoqunjiang — 43 commits"><img src="https://avatars.githubusercontent.com/haoqunjiang?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/sheremet-va" title="sheremet-va — 39 commits"><img src="https://avatars.githubusercontent.com/sheremet-va?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/wojtekmaj" title="wojtekmaj — 28 commits"><img src="https://avatars.githubusercontent.com/wojtekmaj?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/MattStypa" title="MattStypa — 25 commits"><img src="https://avatars.githubusercontent.com/MattStypa?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/benface" title="benface — 18 commits"><img src="https://avatars.githubusercontent.com/benface?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/lscheibel" title="lscheibel — 18 commits"><img src="https://avatars.githubusercontent.com/lscheibel?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/hacknug" title="hacknug — 17 commits"><img src="https://avatars.githubusercontent.com/hacknug?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a>

<a href="https://github.com/chessurisme" title="chessurisme — 14 commits"><img src="https://avatars.githubusercontent.com/chessurisme?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/lukewarlow" title="lukewarlow — 13 commits"><img src="https://avatars.githubusercontent.com/lukewarlow?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/simonswiss" title="simonswiss — 12 commits"><img src="https://avatars.githubusercontent.com/simonswiss?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/moeenio" title="moeenio — 11 commits"><img src="https://avatars.githubusercontent.com/moeenio?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/Andreto" title="Andreto — 10 commits"><img src="https://avatars.githubusercontent.com/Andreto?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/briz123" title="briz123 — 8 commits"><img src="https://avatars.githubusercontent.com/briz123?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/epifaniofrancisco" title="epifaniofrancisco — 8 commits"><img src="https://avatars.githubusercontent.com/epifaniofrancisco?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/huozhi" title="huozhi — 6 commits"><img src="https://avatars.githubusercontent.com/huozhi?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/ajmnz" title="ajmnz — 4 commits"><img src="https://avatars.githubusercontent.com/ajmnz?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a> <a href="https://github.com/danjohnson95" title="danjohnson95 — 4 commits"><img src="https://avatars.githubusercontent.com/danjohnson95?s=64&v=4" width="52" height="52" style="border-radius:50%" /></a>

</div>

<div align="center">
<sub>Contributors shown are the top committers to <a href="https://github.com/vitejs/vite">Vite</a>, <a href="https://github.com/tailwindlabs/tailwindcss">Tailwind CSS</a>, <a href="https://github.com/lucide-icons/lucide">Lucide</a>, and <a href="https://github.com/emilkowalski/sonner">Sonner</a> — the open-source libraries powering Mail Donor.</sub>
</div>

---

<div align="center">

**If Mail Donor saved your inbox from another newsletter, please leave a ⭐**

Takes one second. Means a lot.

<br />

Made with 💜 by [youngsage22](https://github.com/youngsage22)

</div>
