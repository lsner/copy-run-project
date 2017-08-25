export function normalizePath(...args: any[]) {
  return args.slice(0).join('/').replace(/\/+/g, '/').replace(/\/+$/, '')
}
