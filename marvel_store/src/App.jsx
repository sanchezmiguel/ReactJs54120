import './App.css';
import Navbar from './components/navbar/Navbar';
import {ItemListContainer} from './components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="app-container">
            <Navbar/>
            <ItemListContainer greeting='Bienvenido/a a nuestra tienda de Marvel'/>
        </div>
    );
}

export default App;
