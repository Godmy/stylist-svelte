import reportJson from '$stylist/json/dependency/component-dependency-bushes.json';
import summaryJson from '$stylist/json/dependency/component-dependency-bushes-summary.json';
import { assertObject } from './errors';

export type DependencyPageData = {
  report: typeof reportJson;
  summary: typeof summaryJson;
};

export function getDependencyPageData(): DependencyPageData {
  assertObject(reportJson as unknown, 'dependency/component-dependency-bushes.json');
  assertObject(summaryJson as unknown, 'dependency/component-dependency-bushes-summary.json');

  return {
    report: reportJson,
    summary: summaryJson
  };
}


