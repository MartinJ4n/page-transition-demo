import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";

// Components
import Navbar from "./components/Navbar/Navbar";

// Screens
import Homepage from "./screens/Homepage/Homepage";
import About from "./screens/About/About";
import Feedback from "./screens/Feedback/Feedback";

const routes = [
  { path: "/", Component: Homepage },
  { path: "/about", Component: About },
  { path: "/feedback", Component: Feedback },
];

function App() {
  const onExit = (node) => {
    gsap.to(
      [
        node.children[0].firstElementChild.lastElementChild,
        node.children[0].firstElementChild.firstElementChild,
      ],
      0.6,
      {
        y: 64,
        opacity: 0,
        ease: "power3.out",
        stagger: {
          amount: 0.1,
        },
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match !== null}
                timeout={1200}
                classNames="page"
                onExit={onExit}
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
