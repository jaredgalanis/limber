import { modifier } from 'ember-modifier';

type PositionalArgs = [number, string];

export default modifier((element: HTMLElement, [lines, padding]: PositionalArgs) => {
  let container = element.parentElement as Element;
  let lineHeight = getComputedStyle(container).lineHeight;

  element.setAttribute('style', `top: calc(${padding} + ${lineHeight} * ${lines - 1})`);
});
