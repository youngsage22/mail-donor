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
