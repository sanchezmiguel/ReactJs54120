import './App.css';
import Navbar from './components/navbar/Navbar';
import {ItemListContainer} from './components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary.jsx";
import {CartProvider} from "./contexts/CartContext.jsx";

function App() {
    return (
        <div className="app-container">
            <CartProvider>
                <BrowserRouter>
                    <Navbar/>
                    <ErrorBoundary>
                        <Routes>
                            <Route path="/"
                                   element={<ItemListContainer greeting='Bienvenido/a a nuestra tienda de Marvel'/>}/>
                            <Route path="/category/:categoryId"
                                   element={<ItemListContainer greeting='Bienvenido/a a nuestra tienda de Marvel'/>}/>
                            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                        </Routes>
                    </ErrorBoundary>

                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;
