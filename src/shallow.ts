import { ReactElement } from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { ShallowWrapper } from "./ShallowWrapper";

export function shallow(element: ReactElement): ShallowWrapper {
    const shallowRenderer = createRenderer();
    shallowRenderer.render(element);
    return new ShallowWrapper(shallowRenderer.getRenderOutput());
}