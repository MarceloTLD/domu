import create from "./create";

export default function createTree ({ node, content, params, ...rest  }) {
  const mainNode = create(node, content, params);

  function childCollector (mainNode, mainChild) {
    if (!mainChild) return;
    const currNode = mainNode;
    
    mainChild.map(thisChild => {
      const { node, content, params, child } = thisChild,
      restChild = create(node, content, params);
      if (child) childCollector(restChild, child)
      currNode.appendChild(restChild);
    });

  }

  childCollector(mainNode, rest.child)

  return mainNode

}