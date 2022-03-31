import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditClient from "./components/EditClientComponent";
import CardClient from "./components/CardClientComponent";
import ListClient from "./components/ClientListComponent";
import AddClient from "./components/AddClientComponent";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListClient />} />
        <Route path="/add" element={<AddClient />} />
        <Route path="/card/client/:id" element={<CardClient/>} />
        <Route path="/edit/:id" element={<EditClient />} />
      </Routes>
    </Router>
  );
}

export default App;
