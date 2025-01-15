export const fulfilledPromises = <T extends Promise<any>>(promises: T[]) =>
  Promise.allSettled(promises).then((results) =>
    results
      .filter((result) => result.status === 'fulfilled')
      .map((result) => (result as PromiseFulfilledResult<Awaited<T>>).value)
  )

export const useResponsiveValue = <T extends number | string>(breakpoints: Record<number, T>, defaultValue: T) => {
  const sortedBreakpoints = Object.keys(breakpoints)
    .map(Number)
    .sort((a, b) => b - a)
  for (const breakpoint of sortedBreakpoints) {
    if (innerWidth >= breakpoint) {
      return breakpoints[breakpoint]
    }
  }

  return defaultValue
}
