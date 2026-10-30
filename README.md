# Quiz Battle

A desktop-first, browser-based multiplayer quiz game. Built with Next.js, React, and TypeScript.

## Current status

The repository has been initialized with the first frontend foundation:
- Dark neon gaming-arena landing screen
- Create-room, join-room, and solo-practice entry dialogs
- Responsive layout for desktop and mobile browsers

These entry dialogs are currently UI scaffolding. Multiplayer rooms, authentication, persistent profiles, question delivery, scoring, and practice sessions require the Supabase backend integration and are not yet active.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Planned architecture

- Next.js + TypeScript frontend
- Supabase Auth and Postgres for verified accounts and persistent game data
- Supabase Realtime for room/lobby state
- Server-authoritative game logic for timers, answers, scoring, and reconnects
- Vercel hosting

## Environment

Supabase project credentials will be added through the deployment provider's environment-variable settings. Do not commit secrets to this repository.