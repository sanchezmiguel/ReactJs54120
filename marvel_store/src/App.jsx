// App.jsx
import './App.css';
import Navbar from './components/navbar/Navbar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import Footer from "./components/footer/Footer.jsx";
import UnderConstruction from "./components/underConstruction/UnderConstruction.jsx";

function App() {
    return (
        <div className="app-container">
            <CartProvider>
                <BrowserRouter>
                    <Navbar />
                    <ErrorBoundary>
                        <Routes>
                            <Route path="/" element={<ItemListContainer greeting='Bienvenido/a a nuestra tienda de Marvel' />} />
                            <Route path="/category/:categoryId" element={<ItemListContainer greeting='Bienvenido/a a nuestra tienda de Marvel' />} />
                            <Route path="/item/:id" element={<ItemDetailContainer />} />
                            <Route path="/about" element={<UnderConstruction />} />
                            <Route path="/contact" element={<UnderConstruction />} />
                            <Route path="/privacy-policy" element={<UnderConstruction />} />
                            <Route path="/terms" element={<UnderConstruction />} />
                            <Route path="/cart" element={<div />} /> {/* This will trigger the modal */}
                        </Routes>
                    </ErrorBoundary>
                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;
