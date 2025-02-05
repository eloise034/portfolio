import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        {" "}
        {/* 包裹在 ThemeProvider 中 */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer /> {/* 確保 Footer 在這裡渲染 */}
      </ThemeProvider>
    </Router>
  );
}
export default App;
