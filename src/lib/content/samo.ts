import atomicDesignJson from '$stylist/json/samo/atomic-design/report.json';
import componentReuseJson from '$stylist/json/samo/component-reuse/report.json';
import designSystemDependenciesJson from '$stylist/json/samo/design-system-dependencies/report.json';
import designSystemTokenUsageJson from '$stylist/json/samo/design-system-token-usage/report.json';
import inventoryJson from '$stylist/json/samo/inventory/report.json';
import molecularOrganizationJson from '$stylist/json/samo/molecular-organization/report.json';
import reportPackJson from '$stylist/json/samo/report-pack/report.json';
import solidJson from '$stylist/json/samo/solid/report.json';
import { assertObject } from './errors';

export type ReportPackPageData = {
  meta: {
    generatedAt: string;
    generator: string;
    sourceRoot: string;
  };
  summary: {
    totalKeys: number;
    totalDomains: number;
    duplicateKeysAcrossDomains: number;
    deadEntities: number;
    breakingRemoved: number;
    healthScore: number;
  };
  domains: Record<
    string,
    {
      generatedAt: string | null;
      keys: number;
      constants: number;
      types: number;
      classes: number;
      functions: number;
      interfaces: number;
      components: number;
    }
  >;
  duplicates: {
    total: number;
    items: Array<{
      name: string;
      domains: string[];
    }>;
  };
  dependencies: {
    edges: Array<{
      from: string;
      to: string;
      total: number;
      referenced: number;
      coverage: number;
    }>;
  };
  deadEntities: {
    tokens: string[];
    styles: string[];
    models: string[];
    contracts: string[];
  };
  breakingChanges: {
    hasBaseline: boolean;
    deltas: Array<{
      domain: string;
      added: string[];
      removed: string[];
      addedCount: number;
      removedCount: number;
    }>;
    removedTotal: number;
    addedTotal: number;
  };
  health: {
    score: number;
    penalties: Array<{ reason: string; value: number }>;
  };
};

const SAMO_REPORTS = {
  atomicDesign: atomicDesignJson,
  componentReuse: componentReuseJson,
  designSystemDependencies: designSystemDependenciesJson,
  designSystemTokenUsage: designSystemTokenUsageJson,
  inventory: inventoryJson,
  molecularOrganization: molecularOrganizationJson,
  solid: solidJson
} as const;

type SamoReportKey = keyof typeof SAMO_REPORTS;

export function getSamoReport<K extends SamoReportKey>(key: K): (typeof SAMO_REPORTS)[K] {
  const report = SAMO_REPORTS[key] as unknown;
  assertObject(report, `samo/${key}/report.json`);
  return SAMO_REPORTS[key];
}

export function getSamoReportPackData(): ReportPackPageData {
  assertObject(reportPackJson as unknown, 'samo/report-pack/report.json');
  return reportPackJson as ReportPackPageData;
}


