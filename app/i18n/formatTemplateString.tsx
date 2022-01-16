import { ReactNode } from "react";

export const formatTemplateString = (
  str: string,
  vars: Record<string, string>
) => {
  if (vars && str) {
    Object.keys(vars).forEach((key) => {
      str = str.replace(new RegExp(`\\{${key}\\}`, "g"), vars[key]);
    });
  }
  return str;
};

const addReactNodes = (
  string: string,
  values: { key: string; value: ReactNode }[],
  excludeSpan: boolean = false
): ReactNode => {
  const [current, ...rest] = values;
  const [first, last] = string.split(`{${current.key}}`);

  if (first === string) {
    if (rest.length > 0) {
      return addReactNodes(string, rest);
    }

    return string;
  }

  let firstNode: ReactNode = first;
  let lastNode: ReactNode = last;

  if (first && rest.length > 0) {
    firstNode = addReactNodes(first, rest, true);
  }

  if (last && rest.length > 0) {
    lastNode = addReactNodes(last, rest, true);
  }

  if (excludeSpan) {
    return (
      <>
        {firstNode}
        {current.value}
        {lastNode}
      </>
    );
  }

  return (
    <span>
      {firstNode}
      {current.value}
      {lastNode}
    </span>
  );
};

const insertReactNodes = (
  str: string,
  vars?: Record<string, ReactNode | string>
): ReactNode =>
  vars
    ? addReactNodes(
        str,
        Object.keys(vars).map((key) => ({ key, value: vars[key] }))
      )
    : str;

export default insertReactNodes;
