import CartModal from "../cartModal/CartModal.jsx";
import PropTypes from "prop-types";

const CartModalContainer = ({isOpen, onClose}) => {
    return (
        <CartModal isOpen={isOpen} onClose={onClose}>
            <div>
                <h2>Tu Carrito de Compras</h2>
                <p>Aca se mostraran los elementos del carrito.</p>
            </div>
        </CartModal>
    );
};

// Define PropTypes for CartModalContainer
CartModalContainer.propTypes = {
    isOpen: PropTypes.bool.isRequired,  // Specifies that isOpen is a required boolean
    onClose: PropTypes.func.isRequired  // Specifies that onClose is a required function
};

export default CartModalContainer;
