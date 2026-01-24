# Playwright Test Healer Report

## Summary
- Date: 2025-12-21
- Scope: `create-lead-democsr2.spec.ts` failures observed during full-suite runs; healed selectors and added guards.

## Initial Problem
- Symptom: The `Create Lead as democsr2` test intermittently timed out during navigation to the Create Lead page when running the suite across projects. Initial run output showed multiple test timeouts.
- Error excerpt: `page.click: Test timeout of 30000ms exceeded` waiting for locator('text=SIVA/SFA') and later ambiguity on `text=Leads`.

## Root Cause
- Incorrect and ambiguous selectors:
  - The test used `text=SIVA/SFA` (typo) instead of the visible `CRM/SFA` link after login.
  - `text=Leads` matched multiple elements (a link and a cell with text `Find Leads`), causing strict-mode locator resolution failure.

## Fixes Applied
- Replaced incorrect `SIVA/SFA` selector with a visible check and click of `CRM/SFA`.
- Replaced ambiguous text selectors with role-based locators for deterministic selection:
  - `page.getByRole('link', { name: 'Leads' })`
  - `page.getByRole('link', { name: 'Create Lead' })`
- Added explicit visibility checks (`toBeVisible`) before interacting with navigation targets to reduce flakiness and race conditions.

Edited file(s):
- `specs/testscripts/create-lead-democsr2.spec.ts` — replaced selectors and added guards.

Other files added earlier in the flow (context):
- `specs/testscripts/login-democsr2.spec.ts`
- `specs/leaftaps.mcp.spec.ts`
- `specs/create-lead.spec.ts`
- `playwright.config.ts`

## Verification
- Re-ran the failing test alone after fixes: 3 runs passed.
- Re-ran the full suite: final run showed `9 passed, 0 failed`.

Commands used to reproduce and verify locally:
```bash
npx playwright test specs/testscripts/create-lead-democsr2.spec.ts --reporter=list
npx playwright test --reporter=list
npx playwright show-report
```

## Recommendations / Next Steps
- Commit the changes and run in CI to validate cross-environment stability.
- Add `--trace` or `--video` in CI for any flakey tests to capture artifacts on first retry:
  - `npx playwright test --trace=on-first-retry`
- Consider centralizing common login/navigation into a helper or fixture to reduce duplication and surface future selector changes in one place.

## Notes
- All edits are deterministic and use Playwright best practices (`getByRole`, visibility checks). No `test.fixme()` entries were introduced.
