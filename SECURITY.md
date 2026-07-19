# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| latest (main) | ✅ |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability, please email the maintainer directly or open a [private security advisory](https://github.com/youngsage22/mail-donor/security/advisories/new).

We will respond within 48 hours and work with you to resolve the issue quickly.

## Scope

Since Mail Donor is a **frontend-only app** that calls the public mail.tm API:

- There is **no backend** to compromise
- **No user data is stored** on any server controlled by this project
- Session data (email address + credentials) is stored only in **your own browser's localStorage**
- All API calls go directly to [mail.tm](https://mail.tm)

If you find a vulnerability in how credentials are handled client-side, please report it.
