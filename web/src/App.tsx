import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router";

import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Submit } from "./pages/Submit";
import { NoMatch } from "./pages/NoMatch";

import { Header } from "./components/Header";


export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

// 1 - Navegação entre as rotas.

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;