import PropTypes from 'prop-types';

const StockMessage = ({stock}) => {
    const getMessage = () => {
        if (stock > 1) {
            return `${stock} unidades disponibles`;
        } else if (stock === 1) {
            return "Última unidad disponible";
        } else {
            return "No hay stock disponible";
        }
    };

    return (
        <h6>{getMessage()}</h6>
    );
};

StockMessage.propTypes = {
    stock: PropTypes.number.isRequired,
};

export default StockMessage;
