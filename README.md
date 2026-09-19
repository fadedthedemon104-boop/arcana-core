# Arcana Core

This is a Node 20/Vite project. It is not a Gradle project and intentionally has no `gradlew` wrapper.

```bash
npm install
npm run lint
npm test
npm run build
npm run dev
```

Use `npm install` on the first run because this repository is committed without a lockfile. After npm creates `package-lock.json`, use `npm ci` for reproducible installs and commit the lockfile.

Configure `SUPPORT_INBOX_URL` or `SYSTEME_API_URL` on the server, never in browser code. The gateway validates fields, rejects the honeypot, accepts `ARC-YYYYXXXX` references, and forwards the `Support-Ticket-Open` tag.

If you meant the separate Gradle project:

```bash
cd ~/Desktop/s2gx
chmod +x gradlew
git pull --ff-only
./gradlew run
```

Do not combine `npm run dev` with `cd ~/Desktop/s2gx` on one line without a separator. These are separate projects and separate working directories.
