import { Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/home/index.js"
import Literature from "./pages/literature"
import Facts from "./pages/facts"

function App() {
  let pages;

  pages = [
    { label: "Home", path: "/", component: Home, props: {} },
    { label: "Literature", path: "/literature", component: Literature, props: {} },
    { label: "Facts", path: "/facts", component: Facts, props: {} }
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
