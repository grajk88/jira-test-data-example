# Playwright + TypeScript + JIRA Data-Driven Example

This example demonstrates one Playwright test implementation running against multiple
JIRA-keyed test-data combinations, without a RunFlag.

## Run all test data

```bash
npx playwright test
```

## Run selected JIRA keys

Mac/Linux:

```bash
JIRA_KEYS=ABC-101,ABC-103,ABC-105 npx playwright test
```

Windows CMD:

```cmd
set JIRA_KEYS=ABC-101,ABC-103,ABC-105
npx playwright test
```

PowerShell:

```powershell
$env:JIRA_KEYS="ABC-101,ABC-103,ABC-105"
npx playwright test
```

## Structure

- `test-data/test-data.json` - JIRA-keyed business/test data only.
- `utils/testData.ts` - selects all or requested JIRA keys.
- `tests/create-policy.spec.ts` - single test implementation dynamically expanded into Playwright tests.

Replace the sample application URL and selectors with your real application.
