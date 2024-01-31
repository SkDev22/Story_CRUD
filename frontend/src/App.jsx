import Navbar from "./components/Navbar";
import AddStory from "./pages/AddStory";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewStory from "./pages/ViewStory";
import EditStory from "./pages/EditStory";
import DeleteStory from "./pages/DeleteStory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStory />} />
        <Route path="/view/:id" element={<ViewStory />} />
        <Route path="/edit/:id" element={<EditStory />} />
        <Route path="/delete/:id" element={<DeleteStory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
