const mapping: Record<string, string> = {
  'fitness-data': 'fitness_data',
  'nutrition-data': 'nutrition_data',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
