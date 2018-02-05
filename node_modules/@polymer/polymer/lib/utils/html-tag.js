import './boot.js';

/**
 * @param {*} value Object to stringify into HTML
 * @return {string} HTML stringified form of `obj`
 */
function htmlValue(value) {
  if (value instanceof HTMLTemplateElement) {
    return /** @type {!HTMLTemplateElement} */(value).innerHTML;
  } else {
    return String(value);
  }
}

export const html = function html(strings, ...values) {
  const template = /** @type {!HTMLTemplateElement} */(document.createElement('template'));
  template.innerHTML = values.reduce((acc, v, idx) =>
    acc + htmlValue(v) + strings[idx + 1], strings[0]);
  return template;
};
