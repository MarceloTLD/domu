export default function create ( node, content, params ) {
  const n = document.createElement(node);

  if (params) {
    for (const key in params) {
      n.setAttribute(key, params[key]);
    };
  }

  if (content) n.innerHTML=content

  return n;
}