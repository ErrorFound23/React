function customRender(element, parent) {
  // v1
  // const newDomElement = document.createElement(element.type);

  // newDomElement.innerHTML = element.children;
  // newDomElement.setAttribute('href', element.props.href);
  // newDomElement.setAttribute('target', element.props.target);

  // parent.appendChild(newDomElement);

  // v2
  const newDomElement = document.createElement(element.type);
  newDomElement.innerHTML = element.children;

  for (const prop in element.props) {
    if (prop === "children") continue;
    newDomElement.setAttribute(prop, element.props[prop]);
  }
  parent.appendChild(newDomElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Google.com",
};

const root = document.querySelector("#root");

customRender(reactElement, root);
