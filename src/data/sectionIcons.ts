import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  Scripts: 'stepCrosshair',
  'ESP Wallhack / ESP': 'featureEsp',
  'Radar & Loot': 'featureRadar',
  'Aimbot': 'featureAimbot',
  'Utility Suite': 'featureUtilitySuite',
  'Loot Assist': 'compareAutoFarm',
  'Player ESP': 'streamProof',
  'Radar Hack': 'compareZoomHack',
  'Cloud Config & Updates': 'compareCloudBackup',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

export const toolkitIcons: Record<string, IconName> = {
  Combat: 'toolkitCombat',
  Vision: 'toolkitVision',
  Radar: 'toolkitRadar',
  Weapons: 'toolkitWeapons',
  Movement: 'toolkitMovement',
  Profiles: 'toolkitProfiles',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  Guides: 'navBlog',
  Setup: 'settings',
  Features: 'layers',
  Updates: 'refresh',
  Troubleshooting: 'alert',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'espActive', label: 'Player ESP' },
  { icon: 'radarOnline', label: 'Infected ESP' },
  { icon: 'seasonBuild', label: 'Vehicle ESP' },
  { icon: 'softAim', label: 'Aim FOV' },
  { icon: 'boneSelect', label: 'Bone Select' },
  { icon: 'streamProof', label: 'Target Filters' },
  { icon: 'lootEsp', label: 'Item ESP' },
  { icon: 'skeletonEsp', label: 'Skeleton ESP' },
  { icon: 'uavRadar', label: 'World ESP' },
  { icon: 'mapHack', label: 'Inventory View' },
  { icon: 'instantDelivery', label: 'Monthly Plan' },
  { icon: 'liveStatus', label: 'Lifetime Plan' },
  { icon: 'autoUpdates', label: 'Saved Config' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  Lite: 'tierLite',
  Pro: 'tierPro',
  Elite: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
  'External suite': 'externalSuite',
  'DMA hardware': 'dmaHardware',
  'System utility': 'systemUtility',
  'Account recovery': 'accountRecovery',
  'Game accounts': 'accountRecovery',
  Cosmetic: 'cosmetic',
};

export const acquisitionStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqZap', 'acqCheck'];

/** After-purchase timeline on product detail — one distinct icon per step */
export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

/** Product detail requirement tiles — prefer compat-style icons where mapped */
export const productRequirementIcons: Partial<Record<IconName, IconName>> = {
  reqWindows: 'compatWindows',
  reqEpic: 'compatEpic',
  reqSettings: 'compatPackage',
  reqWifi: 'compatWifi',
  reqCpu: 'compatMonitor',
  reqRestorePoint: 'compatRefresh',
  reqShieldGuide: 'compatShield',
  reqMailOrder: 'mail',
  reqShieldAccount: 'compatShield',
  reqWifiPortal: 'compatWifi',
};

export function requirementDisplayIcon(icon: IconName): IconName {
  return productRequirementIcons[icon] ?? icon;
}

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatPackage',
  'compatEpic',
  'compatMonitor',
  'compatRefresh',
  'compatWifi',
  'compatDiscord',
  'compatShield',
];
