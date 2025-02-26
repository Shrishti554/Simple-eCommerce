import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Success from "./pages/Success";
import Checkout from "./pages/Checkout";
import Cancelled from "./pages/Cancelled";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancelled />} />
        <Route path="/" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;