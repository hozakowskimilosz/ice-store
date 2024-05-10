import Products from "./components/Products";
import Layout from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
