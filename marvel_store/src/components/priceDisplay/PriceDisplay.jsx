import PropTypes from 'prop-types';

const PriceDisplay = ({price, currency = '$'}) => {
    const formatPrice = (amount) => {
        return `${currency}${amount.toFixed(2)}`;  // Formats to two decimal places
    };

    return (
        <p className="price">{formatPrice(price)}</p>
    );
};

PriceDisplay.propTypes = {
    price: PropTypes.number.isRequired,
    currency: PropTypes.string,
};

export default PriceDisplay;
