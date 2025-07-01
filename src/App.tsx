import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableView from "./components/TableView";
import DetailView from "./components/DetailView";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableView />} />
        <Route path="/detail/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
}
