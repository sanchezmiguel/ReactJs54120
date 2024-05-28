// src/App.jsx
import {useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {ItemListContainer} from './components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary.jsx";
import {CartProvider} from "./contexts/CartContext.jsx";
import Footer from "./components/footer/Footer.jsx";
import UnderConstruction from "./components/underConstruction/UnderConstruction.jsx";
import Login from "./components/login/Login.jsx";
import ProtectedRoute from "./protectedRoute/ProtectedRoute.jsx";
import {ThemeProvider, useTheme} from "./contexts/ThemeContext.jsx";
import {AuthProvider} from "./contexts/authContext/AuthContext.jsx";
import ThemeToggle from "./components/themeToggle/ThemeToggle.jsx";
import Signup from "./components/signup/Signup.jsx";
import './utils/fontAwesome';
import PurchaseHistory from "./components/purchaseHistory/PurchaseHistory.jsx";
import Wishlist from "./components/wishlist/Wishlist.jsx";
import {WishlistProvider} from "./components/wishlistContext/WishlistContext.jsx";


const App = () => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <WishlistProvider>
                    <MainApp/>
                </WishlistProvider>
            </AuthProvider>
        </ThemeProvider>
    );
};

const MainApp = () => {
    const {theme} = useTheme();

    useEffect(() => {
        document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
    }, [theme]);

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
                            <Route path="/item/:id" element={<ProtectedRoute><ItemDetailContainer/></ProtectedRoute>}/>
                            <Route path="/about" element={<UnderConstruction/>}/>
                            <Route path="/contact" element={<UnderConstruction/>}/>
                            <Route path="/privacy-policy" element={<UnderConstruction/>}/>
                            <Route path="/terms" element={<UnderConstruction/>}/>
                            <Route path="/cart" element={<ProtectedRoute>
                                <div/>
                            </ProtectedRoute>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/signup" element={<Signup/>}/>
                            <Route path="/purchase-history"
                                   element={<ProtectedRoute><PurchaseHistory/></ProtectedRoute>}/>
                            <Route path="/protected" element={<ProtectedRoute><ProtectedComponent/></ProtectedRoute>}/>
                            <Route path="/wishlist" element={
                                <ProtectedRoute><Wishlist/></ProtectedRoute>}/> {/* Nueva ruta para Wishlist */}
                        </Routes>
                    </ErrorBoundary>
                    <ThemeToggle/>
                    <Footer/>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
};

const ProtectedComponent = () => (
    <div>
        <h2>Protected Page</h2>
        <p>This page is only accessible to logged-in users.</p>
    </div>
);

export default App;
