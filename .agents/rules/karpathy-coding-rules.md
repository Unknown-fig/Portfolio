# Behavioral Guidelines for LLM-Assisted Coding (Karpathy Guidelines)

These guidelines bias toward caution over speed and reduce common LLM coding pitfalls.

## 1. Think Before Coding
- State assumptions explicitly. If uncertain, surface questions rather than guessing.
- If multiple interpretations exist, present them rather than picking silently.
- If a simpler approach exists, suggest it and evaluate tradeoffs.
- If something in existing code or instructions is ambiguous, pause and clarify.

## 2. Simplicity First
- Build the minimum code that solves the concrete problem cleanly.
- Avoid speculative features, premature abstractions, or unused configuration hooks.
- Match existing repository patterns and avoid introducing unnecessary external dependencies.

## 3. Surgical Changes
- Touch only what must be modified. Preserve existing comments, formatting, and architecture.
- Do not refactor functioning code unless explicitly instructed or required for the fix.
- Match existing project code style and naming conventions.

## 4. Verification & Validation
- Always verify changes with builds, unit tests, or live execution before marking tasks as complete.
- Explain non-obvious rationale concisely.
