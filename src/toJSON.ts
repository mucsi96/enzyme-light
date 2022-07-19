import {
  ReactTestInstance,
  ReactTestRendererJSON,
  ReactTestRendererNode,
} from "react-test-renderer";
import { getComponentNameFromType } from "./getComponentNameFromType";

export function toJSON(
  inst: ReactTestInstance | string
): ReactTestRendererNode | null {
  if (typeof inst === "string") {
    return inst;
  }

  const { children, ...props } = inst.props;
  let renderedChildren = null;
  if (inst.children && inst.children.length) {
    for (let i = 0; i < inst.children.length; i++) {
      const renderedChild = toJSON(inst.children[i]);
      if (renderedChild !== null) {
        if (renderedChildren === null) {
          renderedChildren = [renderedChild];
        } else {
          renderedChildren.push(renderedChild);
        }
      }
    }
  }
  const json: ReactTestRendererJSON = {
    type: getComponentNameFromType(inst.type),
    props: props,
    children: renderedChildren,
  };
  Object.defineProperty(json, "$$typeof", {
    value: Symbol.for("react.test.json"),
  });
  return json;
}
