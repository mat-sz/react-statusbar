export function cls(
  ...classNames: (string | Record<string, boolean> | undefined | null)[]
) {
  let result = '';

  for (const item of classNames) {
    if (!item) {
      continue;
    }

    if (typeof item === 'string') {
      result += item + ' ';
      continue;
    }

    for (const key of Object.keys(item)) {
      if (item[key] === true) {
        result += key + ' ';
      }
    }
  }

  return result;
}
