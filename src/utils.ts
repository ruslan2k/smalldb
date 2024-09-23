export function reandomId (): string {
  const rnd = (Math.random().toString(36) + '0000000000').substring(2, 12)
  return `${Date.now()}${rnd}`
}
