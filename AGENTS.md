# Repository Guidelines

## Project Structure & Module Organization

This is a Vite, React, and TypeScript single-page app. Application entry points live in `src/main.tsx` and `src/App.tsx`. Page-level routes are in `src/pages`, while reusable sections and layout pieces are in `src/components`. shadcn/ui primitives live under `src/components/ui`; keep generated UI primitives there and place project-specific components one level higher. Shared helpers are in `src/lib`, hooks are in `src/hooks`, static public files are in `public`, and imported images are in `src/assets` with gallery images grouped under `src/assets/gallery`.

## Build, Test, and Development Commands

Use npm commands unless intentionally maintaining the Bun lockfile.

- `npm run dev`: start the Vite development server.
- `npm run build`: create a production build in `dist`.
- `npm run build:dev`: build with Vite's development mode.
- `npm run lint`: run ESLint across the repository.
- `npm run preview`: serve the built app locally for verification.

## Coding Style & Naming Conventions

Write React components in TypeScript/TSX and prefer functional components. Use the `@/` path alias for imports from `src` when it improves readability, for example `@/components/Header` or `@/lib/utils`. Follow the existing two-space indentation and Tailwind-first styling approach. Name components in `PascalCase`, hooks as `useSomething`, utility functions in `camelCase`, and asset files with clear descriptive names. Keep comments rare and useful; avoid commenting obvious JSX structure.

## Testing Guidelines

No automated test framework or `npm test` script is currently configured. Before opening a PR, run `npm run lint` and `npm run build`, then manually verify the affected pages in the browser. If adding tests later, place them near the code they cover using names like `ComponentName.test.tsx`, and document the new command in `package.json` and this file.

## Commit & Pull Request Guidelines

The current history uses short free-form messages such as `initial commit` and `fourth commit`. Prefer concise imperative messages going forward, for example `Update gallery layout` or `Fix contact form spacing`. Pull requests should include a brief summary, screenshots for visual changes, notes about manual browser checks, and any related issue or task link. Call out changes to images, routing, or build configuration explicitly because they affect deployed behavior.

## Agent-Specific Instructions

Keep edits scoped to the requested change. Do not rewrite generated shadcn/ui components unless the task requires it, and avoid unrelated formatting churn across large component or asset files.
