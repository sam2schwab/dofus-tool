export function importAll(r: __WebpackModuleApi.RequireContext) {
  let images: Record<string, any> = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
