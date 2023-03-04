export const filterMap = <T>(map: Map<string, T>, filter: (item: T) => boolean) => {
  return new Map([...map].filter(([, item]) => filter(item)))
}
