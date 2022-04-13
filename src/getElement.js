export default (selection) => {
  const el = document.querySelector(selection);
  if (el) return el;
  throw new Error(`element doesn't exist please check selector: ${selection}`);
};
