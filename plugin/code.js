// code.js — runs in Figma sandbox
figma.showUI(__html__, { width: 300, height: 600, title: "Iconoteka β  V02.00.02", themeColors: true });

function renameVectorChildren(node, iconName) {
  // Keep outer frame name as-is, rename vector children with _Iconoteka suffix
  if ("children" in node) {
    for (const child of node.children) {
      if (child.type === "VECTOR" || child.type === "BOOLEAN_OPERATION") {
        child.name = `${iconName.replace(/ /g, "-")}_iconoteka`;
      } else {
        renameVectorChildren(child, iconName);
      }
    }
  }
}

// Handle drop onto canvas
figma.on("drop", (e) => {
  // Restore UI size
  figma.ui.resize(300, 548);

  const { items, x, y } = e;
  const item = items.find(i => i.type === "text/plain");
  if (!item) return false;

  const { name, svgString } = JSON.parse(item.data);
  try {
    const node = figma.createNodeFromSvg(svgString);
    node.name = name;
    renameVectorChildren(node, name);
    node.x = x - node.width / 2;
    node.y = y - node.height / 2;
    figma.currentPage.appendChild(node);
    figma.currentPage.selection = [node];
  } catch (err) {
    console.error("Drop failed:", err);
  }
  return true;
});

figma.ui.onmessage = async (msg) => {
  if (msg.type === "insert-icon") {
    const { name, svgString, size = 24 } = msg;
    try {
      const node = figma.createNodeFromSvg(svgString);
      node.name = name;
      renameVectorChildren(node, name);

      // Resize frame to chosen size
      if (size && size > 0) node.resize(size, size);

      const center = figma.viewport.center;
      node.x = center.x - node.width / 2;
      node.y = center.y - node.height / 2;
      figma.currentPage.appendChild(node);

      figma.currentPage.selection = [node];
      figma.ui.postMessage({ type: "insert-success" });
    } catch (err) {
      figma.ui.postMessage({ type: "insert-error", error: err.message });
    }
  }
  if (msg.type === "drag-start") {
    figma.ui.resize(1, 1);
  }
  if (msg.type === "drag-end") {
    figma.ui.resize(300, 548);
  }
  if (msg.type === "close") {
    figma.closePlugin();
  }
};
