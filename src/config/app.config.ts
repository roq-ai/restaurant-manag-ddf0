interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Restaurant Manager', 'Staff Member'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant manager',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant details', 'View the menu', 'Manage reservations', 'Manage orders'],
  ownerAbilities: [
    'Manage restaurant registration',
    'Manage restaurant details',
    'Invite Restaurant Managers and Staff Members',
    'Manage restaurant processes',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/00da2ec5-bb39-45d1-8db7-6832372d3d2b',
};
