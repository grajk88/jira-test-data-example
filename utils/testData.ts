import testData from '../test-data/test-data.json';

export interface TestData {
  product: string;
  customerType: string;
  paymentType: string;
}

const data = testData as Record<string, TestData>;

export function getSelectedTestData() {
  const jiraKeys = process.env.JIRA_KEYS
    ?.split(',')
    .map(key => key.trim())
    .filter(Boolean);

  const keys = jiraKeys?.length
    ? jiraKeys
    : Object.keys(data);

  for (const key of keys) {
    if (!data[key]) {
      throw new Error(`JIRA key '${key}' does not exist in test-data.json`);
    }
  }

  return keys.map(jiraKey => ({
    jiraKey,
    data: data[jiraKey]
  }));
}
