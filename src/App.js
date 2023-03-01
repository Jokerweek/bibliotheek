import { Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/home/index.js"

function App() {
  let pages;

  pages = [
    { label: "Home", path: "/", component: Home, props: {} }
  ];

  return (
    <Routes>
      {pages.map((page) => {
        const Element = page.component;
        return (
          <Route
            key={page.label}
            exact
            path={page.path}
            element={<Element {...page.props} />}
          />
        );
      })}
    </Routes>
  );
}

export default App;
