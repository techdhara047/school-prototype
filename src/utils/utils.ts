export function getElement(selector: string) {
  return document.querySelector(selector);
}

export function getAllElements(selector: string) {
  return document.querySelectorAll(selector);
}
