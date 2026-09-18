export const SERVICE_PREFIXES = {
  identity: [
    '/auth',
    '/users',
    '/profiles',
    '/school-units',
    '/school-unit-types',
    '/religions',
    '/blood-types',
  ],

  portal: [
    '/portal',
    '/files',
  ],
} as const

export const UNROUTED_PREFIXES: readonly string[] = ['/settings']

export const HEALTH_ROUTES = [
  { path: '/health/identity', service: 'identity' },
  { path: '/health/portal', service: 'portal' },
] as const
