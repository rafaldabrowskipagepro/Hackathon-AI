# Hackathon Monorepo

A high-performance monorepo setup with **Turborepo**, yarn workspaces, Next.js with Tailwind CSS, and Sanity CMS.

## Project Structure

```
├── apps/
│   ├── site/          # Next.js application with Tailwind CSS
│   └── cms/           # Sanity CMS studio
├── package.json       # Root package.json with workspace configuration
├── turbo.json         # Turborepo configuration
└── yarn.lock         # Yarn lockfile
```

## Prerequisites

- Node.js (v18 or higher)
- Yarn (v1.22 or higher)

## Getting Started

1. Install dependencies:

```bash
yarn install
```

2. Start all applications in development mode:

```bash
yarn dev
```

3. Or start specific applications:

```bash
yarn dev:site    # Next.js app only
yarn dev:cms     # Sanity CMS only
```

## Available Scripts

### Root Level Scripts (Turborepo)

- `yarn dev` - Start all applications in development mode
- `yarn build` - Build all applications
- `yarn start` - Start all applications in production mode
- `yarn lint` - Run linting across all workspaces
- `yarn type-check` - Run TypeScript type checking across all workspaces
- `yarn clean` - Clean build artifacts and cache

### Filtered Scripts (Turborepo)

- `yarn dev:site` - Start Next.js development server only
- `yarn dev:cms` - Start Sanity CMS studio only
- `yarn build:site` - Build Next.js application only
- `yarn build:cms` - Build Sanity CMS studio only

### Workspace-specific Scripts

- `yarn workspace site <script>` - Run scripts in the Next.js app
- `yarn workspace cms <script>` - Run scripts in the Sanity CMS

## Turborepo Features

This monorepo leverages **Turborepo** for:

- ⚡ **Parallel Execution**: Run tasks across workspaces simultaneously
- 🎯 **Smart Caching**: Cache build outputs and skip redundant work
- 📊 **Task Orchestration**: Intelligent dependency management between tasks
- 🔍 **Filtering**: Run tasks on specific workspaces with `--filter`
- 📈 **Performance Insights**: Built-in performance monitoring

### Turborepo Pipeline

The `turbo.json` configuration defines:

- **build**: Builds applications with proper dependency ordering
- **dev**: Development servers (no caching, persistent)
- **lint**: Code linting across workspaces
- **type-check**: TypeScript type checking
- **deploy**: Deployment with build, lint, and type-check dependencies

## Workspaces

### Site (apps/site)

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **TypeScript**: Enabled
- **ESLint**: Configured
- **Dev Server**: Turbopack enabled

### CMS (apps/cms)

- **Framework**: Sanity Studio v3
- **TypeScript**: Enabled
- **Dataset**: production
- **Linting**: ESLint configured

## Development Workflow

1. **Start Development**: Use `yarn dev` to start both applications
2. **Frontend Development**: Work in `apps/site` for the Next.js application
3. **Content Management**: Use `apps/cms` for Sanity schema definitions and studio customization
4. **Build & Deploy**: Use `yarn build` to build all applications with Turborepo optimization

## Turborepo Caching

Turborepo automatically caches:

- Build outputs (`.next/`, `dist/`)
- TypeScript compilation
- Linting results

Cache is stored in `.turbo/` (ignored by git) and dramatically speeds up subsequent builds.

## Environment Setup

Make sure to configure your environment variables for both applications:

- **Site**: Create `.env.local` in `apps/site`
- **CMS**: Environment variables are configured during Sanity setup

## Performance

With Turborepo, you get:

- **Incremental builds**: Only rebuild what changed
- **Remote caching**: Share cache across team members (when configured)
- **Parallel execution**: Maximum utilization of system resources
- **Smart scheduling**: Optimal task execution order
