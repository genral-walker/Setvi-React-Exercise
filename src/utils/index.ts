export function createGroupsFromArr<T>(arr: T[], numGroups: number): T[][] {
  const perGroup = Math.ceil(arr.length / numGroups);
  const subArrs = new Array(numGroups)
    .fill('')
    .map((_, idx) => arr.slice(idx * perGroup, (idx + 1) * perGroup));
  return Object.assign({}, subArrs);
}
