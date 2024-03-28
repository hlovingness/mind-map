(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216004"],{c133:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this;e._self._c;return e._m(0)},a=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Node instance")]),t("p",[e._v("Each node will instantiate a "),t("code",[e._v("node")]),e._v(" instance")]),t("h2",[e._v("Property")]),t("h3",[e._v("nodeData")]),t("p",[e._v("The real data corresponding to this node")]),t("h3",[e._v("uid")]),t("p",[e._v("The unique identifier of this node")]),t("h3",[e._v("isRoot")]),t("p",[e._v("Whether it is the root node")]),t("h3",[e._v("layerIndex")]),t("p",[e._v("Node level")]),t("h3",[e._v("width")]),t("p",[e._v("Width of the node")]),t("h3",[e._v("height")]),t("p",[e._v("Height of the node")]),t("h3",[e._v("left")]),t("p",[t("code",[e._v("left")]),e._v(" position of the node")]),t("h3",[e._v("top")]),t("p",[t("code",[e._v("top")]),e._v(" position of the node")]),t("h3",[e._v("parent")]),t("p",[e._v("Parent node of the node")]),t("h3",[e._v("children")]),t("p",[e._v("List of child nodes of the node")]),t("h3",[e._v("group")]),t("p",[e._v("Node is the content container, "),t("code",[e._v("svg")]),e._v(" object")]),t("h3",[e._v("isDrag")]),t("blockquote",[t("p",[e._v("v0.1.5+")])]),t("p",[e._v("Whether the node is currently being dragged")]),t("h2",[e._v("Methods")]),t("h3",[e._v("getAncestorNodes()")]),t("blockquote",[t("p",[e._v("v0.9.9+")])]),t("p",[e._v("Obtain a list of ancestor node instances.")]),t("h3",[e._v("highlight()")]),t("blockquote",[t("p",[e._v("v0.9.8+")])]),t("p",[e._v("Highlight node.")]),t("h3",[e._v("closeHighlight()")]),t("blockquote",[t("p",[e._v("v0.9.8+")])]),t("p",[e._v("Unhighlight node.")]),t("h3",[e._v("getPureData(removeActiveState = true, removeId = false)")]),t("blockquote",[t("p",[e._v("v0.9.0+")])]),t("ul",[t("li",[t("p",[t("code",[e._v("removeActiveState")]),e._v("：Is remove the activation status of the node")])]),t("li",[t("p",[t("code",[e._v("removeId")]),e._v("：Is remove the uid of the node")])])]),t("p",[e._v("Serialize a node to obtain its pure data, excluding references to node instances.")]),t("h3",[e._v("setGeneralizationOpacity(val)")]),t("blockquote",[t("p",[e._v("v0.9.0+")])]),t("ul",[t("li",[t("code",[e._v("val")]),e._v("：Number, 0-1，Opacity")])]),t("p",[e._v("Set the transparency of summary nodes and curves.")]),t("h3",[e._v("formatGetGeneralization()")]),t("blockquote",[t("p",[e._v("v0.9.0+")])]),t("p",[e._v("Obtain node summary data.")]),t("h3",[e._v("getIndexInBrothers()")]),t("blockquote",[t("p",[e._v("v0.9.0+")])]),t("p",[e._v("Gets the index of the node in the sibling node list.")]),t("h3",[e._v("getRectInSvg()")]),t("blockquote",[t("p",[e._v("v0.9.0+")])]),t("p",[e._v("Obtain the size and position information of the node. The width and height are the actual width and height after applying the scaling effect, and the position information is relative to the canvas.")]),t("h3",[e._v("getRect()")]),t("blockquote",[t("p",[e._v("v0.8.1+")])]),t("p",[e._v("Obtain the size and position information of the node. The width and height are the actual width and height after applying the scaling effect, and the position is relative to the upper left corner of the browser window.")]),t("h3",[e._v("ancestorHasGeneralization()")]),t("blockquote",[t("p",[e._v("v0.8.1+")])]),t("p",[e._v("Check if there are ancestor nodes with a summary.")]),t("h3",[e._v("getNoteContentPosition()")]),t("blockquote",[t("p",[e._v("v0.8.1+")])]),t("p",[e._v("Obtain the display position of node comments. When a node has comments and is displaying a state, dragging or zooming will cause the comment floating layer to detach from the node. This method can be used to obtain a new position and update the comment floating layer.")]),t("h3",[e._v("updateNodeByActive(active)")]),t("blockquote",[t("p",[e._v("v0.8.0+")])]),t("ul",[t("li",[t("code",[e._v("active")]),e._v("：Boolean, active status.")])]),t("p",[e._v("Update nodes based on whether they are activated or not. The main task is to update the display and hiding of the expand and collapse buttons for nodes.")]),t("h3",[e._v("setOpacity(val)")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("ul",[t("li",[t("code",[e._v("val")]),e._v(": Opacity value，0-1")])]),t("p",[e._v("Set node transparency, including connecting lines and child nodes.")]),t("h3",[e._v("hideChildren()")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("p",[e._v("Hide subordinate nodes.")]),t("h3",[e._v("showChildren()")]),t("blockquote",[t("p",[e._v("v0.7.2+")])]),t("p",[e._v("Display subordinate nodes.")]),t("h3",[e._v("hasCustomStyle()")]),t("blockquote",[t("p",[e._v("v0.6.2+")])]),t("p",[e._v("Gets whether a custom style has been set.")]),t("h3",[e._v("getSize()")]),t("p",[e._v("Update the width and height of the node by recreating the node content, and return a Boolean value indicating whether the width and height have changed")]),t("h3",[e._v("render()")]),t("p",[e._v("Recursively render this node and all its child nodes")]),t("h3",[e._v("updateNodeShape()")]),t("blockquote",[t("p",[e._v("v0.5.0+")])]),t("p",[e._v("Update node shape nodes. For example, when the node status changes, call this method to display or deactivate the style.")]),t("h3",[e._v("remove()")]),t("p",[e._v("Recursive deletion, which is only deleted from the canvas. The node container is still present, and can be reinserted back into the canvas in the future")]),t("h3",[e._v("destroy()")]),t("blockquote",[t("p",[e._v("v0.5.0+")])]),t("p",[e._v("Destroying a node will not only delete it from the canvas, but also directly empty the original node, which cannot be inserted back into the canvas in the future")]),t("h3",[e._v("renderLine()")]),t("p",[e._v("Re-render the line from this node to its child nodes")]),t("h3",[e._v("removeLine()")]),t("p",[e._v("Remove the line from this node to its child nodes")]),t("h3",[e._v("renderExpandBtn()")]),t("p",[e._v("Render the content of the expand/collapse button")]),t("h3",[e._v("removeExpandBtn()")]),t("p",[e._v("Remove the expand/collapse button")]),t("h3",[e._v("getStyle(prop, root, isActive)")]),t("p",[e._v("Get the final style value applied to this node")]),t("p",[t("code",[e._v("prop")]),e._v(": the style property to get")]),t("p",[t("code",[e._v("root")]),e._v(": whether it is the root node, default "),t("code",[e._v("false")])]),t("p",[t("code",[e._v("isActive")]),e._v(": v0.7.0+has been abandoned, whether the value being fetched is the active state style value, default "),t("code",[e._v("false")])]),t("h3",[e._v("setStyle(prop, value, isActive)")]),t("ul",[t("li",[t("code",[e._v("isActive")]),e._v(": v0.7.0+has been abandoned")])]),t("p",[e._v("Modify a style of the node, a shortcut method for the "),t("code",[e._v("SET_NODE_STYLE")]),e._v(" command")]),t("h3",[e._v("setStyles(style, isActive)")]),t("blockquote",[t("p",[e._v("v0.6.12+")])]),t("ul",[t("li",[t("code",[e._v("isActive")]),e._v(": v0.7.0+has been abandoned")])]),t("p",[e._v("Modify multiple styles of nodes, a shortcut method for the "),t("code",[e._v("SET_NODE_STYLES")]),e._v(" command")]),t("h3",[e._v("getData(key)")]),t("p",[e._v("Get the specified value in the "),t("code",[e._v("data")]),e._v(" object of the node's real data "),t("code",[e._v("nodeData")]),e._v(", if "),t("code",[e._v("key")]),e._v(" is not passed, return the "),t("code",[e._v("data")]),e._v(" object")]),t("h3",[e._v("setData(data)")]),t("p",[e._v("Set the value of the specified key in the data object of the node's real data nodeData, "),t("code",[e._v("SET_NODE_DATA")]),e._v(" command's shortcut method. This method and command will not update the view, so if you want to modify the text, use the 'setText' method or use the command pointing to the text.")]),t("h3",[e._v("setText(text, richText, resetRichText)")]),t("ul",[t("li",[t("p",[t("code",[e._v("richText")]),e._v(": v0.4.2+，"),t("code",[e._v("Boolean")]),e._v(", If you want to set rich text content, that is, "),t("code",[e._v("html")]),e._v(" character, "),t("code",[e._v("richText")]),e._v(" needs to be passed "),t("code",[e._v("true")]),e._v(". After version 0.9.3+, if this parameter is not passed, it will use previous value.")])]),t("li",[t("p",[t("code",[e._v("resetRichText")]),e._v(": v0.6.10+, "),t("code",[e._v("Boolean")]),e._v(", whether to reset rich text, The default is 'false'. If 'true' is passed, the style of the rich text node will be reset")])])]),t("p",[e._v("Setting the node text, a shortcut for the "),t("code",[e._v("SET_NODE_TEXT")]),e._v(" command")]),t("h3",[e._v("setImage(imgData)")]),t("p",[e._v("Setting the node image, a shortcut for the "),t("code",[e._v("SET_NODE_IMAGE")]),e._v(" command")]),t("h3",[e._v("setIcon(icons)")]),t("p",[e._v("Setting the node icon, a shortcut for the "),t("code",[e._v("SET_NODE_ICON")]),e._v(" command")]),t("h3",[e._v("setHyperlink(link, title)")]),t("p",[e._v("Setting the node hyperlink, a shortcut for the "),t("code",[e._v("SET_NODE_HYPERLINK")]),e._v(" command")]),t("h3",[e._v("setNote(note)")]),t("p",[e._v("Setting the node note, a shortcut for the "),t("code",[e._v("SET_NODE_NOTE")]),e._v(" command")]),t("h3",[e._v("setTag(tag)")]),t("p",[e._v("Setting the node tag, a shortcut for the "),t("code",[e._v("SET_NODE_TAG")]),e._v(' command"')]),t("h3",[e._v("hide()")]),t("blockquote",[t("p",[e._v("v0.1.5+")])]),t("p",[e._v("Hide node and its sub-nodes")]),t("h3",[e._v("show()")]),t("blockquote",[t("p",[e._v("v0.1.5+")])]),t("p",[e._v("Show node and its sub-nodes")]),t("h3",[e._v("isParent(node)")]),t("blockquote",[t("p",[e._v("v0.1.5+：Detect whether the current node is an ancestor node of a certain node")])]),t("blockquote",[t("p",[e._v("v0.8.1+：Detect whether the current node is the parent node of a certain node")])]),t("h3",[e._v("isAncestor(node)")]),t("blockquote",[t("p",[e._v("v0.8.1+")])]),t("p",[e._v("Detect whether the current node is an ancestor node of a certain node")]),t("h3",[e._v("isBrother(node)")]),t("blockquote",[t("p",[e._v("v0.1.5+")])]),t("p",[e._v("Check if the current node is a sibling of a certain node")]),t("h3",[e._v("checkHasGeneralization()")]),t("blockquote",[t("p",[e._v("v0.2.0+")])]),t("p",[e._v("Check if there is a summary")]),t("h3",[e._v("checkHasSelfGeneralization()")]),t("blockquote",[t("p",[e._v("v0.9.0+")])]),t("p",[e._v("Check if there is a summary of oneself, not a sub node interval summary")]),t("h3",[e._v("hideGeneralization()")]),t("blockquote",[t("p",[e._v("v0.2.0+")])]),t("p",[e._v("Hide summary node")]),t("h3",[e._v("showGeneralization()")]),t("blockquote",[t("p",[e._v("v0.2.0+")])]),t("p",[e._v("Show summary node")]),t("h3",[e._v("updateGeneralization()")]),t("blockquote",[t("p",[e._v("v0.2.0+")])]),t("p",[e._v("Update summary node")]),t("h3",[e._v("hasCustomPosition()")]),t("blockquote",[t("p",[e._v("v0.2.0+")])]),t("p",[e._v("Check if the node has custom data")]),t("h3",[e._v("ancestorHasCustomPosition()")]),t("blockquote",[t("p",[e._v("v0.2.0+")])]),t("p",[e._v("Check if there is an ancestor node with custom position")]),t("h3",[e._v("getShape()")]),t("blockquote",[t("p",[e._v("v0.2.4+")])]),t("p",[e._v("Get node shape")]),t("h3",[e._v("setShape(shape)")]),t("blockquote",[t("p",[e._v("v0.2.4+")])]),t("p",[e._v("Set node shape, a shortcut method for the "),t("code",[e._v("SET_NODE_SHAPE")]),e._v(" command")]),t("h3",[e._v("getSelfStyle(prop)")]),t("blockquote",[t("p",[e._v("v0.2.5+")])]),t("p",[e._v("Get the node's own custom style")]),t("h3",[e._v("getParentSelfStyle(prop)")]),t("blockquote",[t("p",[e._v("v0.2.5+")])]),t("p",[e._v("Get the custom style of the nearest ancestor node with its own custom style")]),t("h3",[e._v("getSelfInhertStyle(prop)")]),t("blockquote",[t("p",[e._v("v0.2.5+")])]),t("p",[e._v("Get the node's own inheritable custom style")])])}],v={},h=v,i=o("2877"),d=Object(i["a"])(h,n,a,!1,null,null,null);t["default"]=d.exports}}]);