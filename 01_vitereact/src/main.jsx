import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App by me</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Google.com",
// };

const NewElement = (
  <a href="https://www.google.com" target="_blank">Google.com</a>
) 

const name = 'yash rana';

const ReactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Visit Google',
  name
)

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    // MyApp()
    // <MyApp />
    // NewElement
    // ReactElement
    <App />
  // </StrictMode>
);
