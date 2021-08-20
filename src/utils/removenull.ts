export const removeNullPoint = (obj: { [key: string]: any }) => {
  return Object.keys(obj)
    .filter((k) => obj[k] != null)
    .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
};
