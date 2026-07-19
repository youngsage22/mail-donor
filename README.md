<div align="center">

# Mail Donor

<img src="https://img.shields.io/badge/Mail-Donor-7C3AED?style=for-the-badge&logo=mail.ru&logoColor=white" />
<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />

**Generate a real, disposable email address instantly. No signup. No spam. Just a working inbox.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square)](https://github.com/youngsage22/mail-donor)
[![MIT License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-orange?style=flat-square)](https://github.com/youngsage22/mail-donor/pulls)

</div>

---

## What is Mail Donor?

**Mail Donor** gives you a real, working temporary email address in one click. Use it to sign up for services, verify accounts, or receive any email — without giving away your real address.

- No account required
- Real inbox that receives actual emails
- Auto-refreshes every 5 seconds
- Session persists across page refreshes (localStorage)
- Choose from multiple domains

---

## Features

| Feature | Description |
|---|---|
| **Instant Email** | Get a real working address the moment the page loads |
| **Live Inbox** | Emails arrive in real time — auto-polled every 5 seconds |
| **Multi-Domain** | Choose from available domains at mail.tm |
| **Regenerate** | Generate a fresh identity anytime |
| **Copy to Clipboard** | One-click copy with toast confirmation |
| **Read Emails** | Full email content rendered safely |
| **Delete Messages** | Clean up your inbox |
| **Session Persistence** | Your mailbox survives a page refresh |

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 7** (build tool)
- **Tailwind CSS v4** (styling)
- **mail.tm API** (real disposable email backend)
- **Sonner** (toast notifications)
- **Lucide React** (icons)

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## How It Works

Mail Donor uses the free [mail.tm](https://mail.tm) API to:

1. Fetch available email domains
2. Generate a random local address + password
3. Create a real mailbox via the API
4. Poll for new messages every 5 seconds
5. Display messages in a sleek inbox UI

Your session (address + credentials) is saved to `localStorage` so your inbox survives a page reload.

---

## License

MIT — built by [youngsage22](https://github.com/youngsage22)
