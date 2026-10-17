---
name: awesome-claude-code
description: Discover, configure, and install resources, Agent Skills, MCP servers, CLAUDE.md/AGENTS.md guidelines, and subagent orchestration patterns from the curated awesome-claude-code directory.
---

# Awesome Claude Code Skill & Resource Reference

This skill integrates the curated catalog from **[`hesreallyhim/awesome-claude-code`](https://github.com/hesreallyhim/awesome-claude-code)** (cloned locally at `C:\Users\utsab\OneDrive\Desktop\awesome-claude-code`).

Use this skill whenever you need to:
1. Find battle-tested Agent Skills (`SKILL.md`) for specialized tasks (e.g., UI design, security audits, data scraping, architecture diagrams).
2. Configure Model Context Protocol (MCP) servers (e.g., databases, Obsidian second-brains, browser automation, Git).
3. Apply agent guardrails and coding discipline (such as Andrej Karpathy's guidelines on avoiding hallucination and premature refactoring).
4. Implement multi-agent workflows, test-driven development guards, or token-tracking status lines.

---

## Local Repository Location
- **Path**: `C:\Users\utsab\OneDrive\Desktop\awesome-claude-code`
- **Catalog Database**: `C:\Users\utsab\OneDrive\Desktop\awesome-claude-code\THE_RESOURCES_TABLE_NEW.csv` (260+ cataloged tools)
- **Configuration & Taxonomy**: `C:\Users\utsab\OneDrive\Desktop\awesome-claude-code\config.yaml`

---

## Top Vetted Resources by Category

### 1. Code Quality & Agent Discipline
- **`andrej-karpathy-skills`** (`multica-ai/andrej-karpathy-skills`):
  1. *Think Before Coding*: Surface assumptions explicitly, ask before guessing.
  2. *Simplicity First*: Write the minimum code that solves the issue; no speculative abstractions.
  3. *Surgical Changes*: Modify only what is required; preserve existing formatting and style.
  4. *Verify & Test*: Test before marking any step complete.
- **`Writing a Good CLAUDE.md`** (`humanlayer.dev`): Instruction-budget reasoning and progressive disclosure.
- **`TDD Guard`**: Enforces strict test-driven red-green-refactor loop before touching implementation code.

### 2. Frontend, Web Apps & UI/UX
- **`Archify`** (`tt-a1i/archify`): Auto-generates standalone interactive HTML architecture diagrams, sequence flows, and data lifecycle roadmaps.
- **`showreel`** (`HeyRenan/showreel`): Automates headless Chromium UI recordings, capturing verified screenshots, flow GIFs, and before/after comparisons directly.
- **`UI Craft`** & **`StyleSeed`**: Curated prompt collections and CSS tokens for modern UI design, micro-interactions, responsive Tailwind, and glassmorphism.
- **`pwa2play`**: Tooling for Progressive Web App validation and asset packaging.

### 3. Systems, IoT & Security
- **`Trail of Bits Security Skills`** (`trailofbits`): Specialized security audit skill detecting memory vulnerabilities, injection flaws, and unsafe pointer arithmetic.
- **`mcu-skills`**: Microcontroller and embedded hardware development skill (firmware loops, serial baud rates, pin mappings).
- **`Code on Incus`** / **`Container Use`**: Sandboxed environment execution for running untrusted scripts safely.

### 4. Knowledge Management & Second Brain
- **`Librarian MCP`** (`ngmeyer/librarian-mcp`): Local markdown knowledge graph with Louvain community detection, PageRank, and auto-wikilinking over Obsidian vaults.
- **`vir`** (`djolex999/vir`): Distills conversation transcripts into typed markdown decision logs and gotchas.
- **`NotebookLM MCP`** (`roomi-fields/notebooklm-mcp`): Integrates Google NotebookLM citation-backed Q&A and reports.

---

## How to Install Any Skill from the Catalog into this Workspace

To install an Agent Skill from the catalog:
1. Create a directory: `.agents/skills/<skill-name>/`
2. Create `.agents/skills/<skill-name>/SKILL.md` with:
```markdown
---
name: <skill-name>
description: <Trigger conditions and capabilities>
---
# <Skill Instructions>
```
3. Add any helper scripts or templates under `.agents/skills/<skill-name>/scripts/` or `references/`.
4. The skill is immediately loaded on demand by the agent.
