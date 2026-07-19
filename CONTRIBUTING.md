# Contributing to Mail Donor 📬

First off — thank you for even reading this! Every contribution, big or small, makes Mail Donor better for everyone.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Submitting Changes](#submitting-changes)
- [Style Guide](#style-guide)

---

## Code of Conduct

Be kind, be respectful, be helpful. No harassment, no discrimination. That's it.

---

## How Can I Contribute?

### 🐛 Reporting Bugs
Open a [bug report](https://github.com/youngsage22/mail-donor/issues/new?template=bug_report.yml). The more detail, the faster we fix it.

### 🚀 Suggesting Features
Open a [feature request](https://github.com/youngsage22/mail-donor/issues/new?template=feature_request.yml). We love ideas.

### 🔧 Opening Pull Requests
Check the [open issues](https://github.com/youngsage22/mail-donor/issues) for anything tagged `good first issue` — these are the best place to start.

---

## Development Setup

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/mail-donor.git
cd mail-donor

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open http://localhost:5173
```

The app calls [mail.tm](https://api.mail.tm) directly — no backend or API keys needed.

---

## Submitting Changes

1. Create a branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test locally
4. Commit with a clear message: `git commit -m "feat: add dark mode toggle"`
5. Push: `git push origin feature/your-feature-name`
6. Open a Pull Request against `main`

### Commit Message Format

```
type: short description

Types: feat | fix | docs | style | refactor | chore
```

---

## Style Guide

- **TypeScript** — always. No `any` unless absolutely unavoidable.
- **Tailwind CSS** — for all styling. No inline styles.
- **Functional components** — React hooks only, no class components.
- **Keep components small** — if a component is over ~150 lines, consider splitting it.

---

Thanks again for contributing! ⭐ If you found this project useful, a star goes a long way.
