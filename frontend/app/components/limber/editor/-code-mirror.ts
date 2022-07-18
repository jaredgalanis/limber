import { assert } from '@ember/debug';

import { modifier } from 'ember-modifier';

import type { Signature } from './-types';
import type { EditorView } from '@codemirror/view';

export default modifier<Signature>((element: Element, [value, updateText], named) => {
  assert(`Expected CODEMIRROR to exist`, CODEMIRROR);
  assert(`can only install codemirror editor an an HTMLElement`, element instanceof HTMLElement);

  element.innerHTML = '';

  let { view, setText } = CODEMIRROR(element, value, updateText, named);

  named.setValue((text) => {
    updateText(text); // update the service / URL
    setText(text); // update the editor
  });

  return () => view.destroy();
});

let CODEMIRROR:
  | undefined
  | ((
      element: HTMLElement,
      value: Signature['Args']['Positional'][0],
      updateText: Signature['Args']['Positional'][1],
      named: Signature['Args']['Named']
    ) => { view: EditorView; setText: (text: string) => void });

export async function setupCodeMirror() {
  if (CODEMIRROR) return;

  // TypeScript doesn't have a way to type files in the public folder
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  CODEMIRROR = (await import(/* webpackIgnore: true */ '/codemirror/preconfigured.js')).default;
}
