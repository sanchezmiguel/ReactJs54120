import {useState} from "react";
import PropTypes from "prop-types";

const DiscountCodeInput = ({applyDiscount}) => {
    const [discountCode, setDiscountCode] = useState('');

    const handleApplyDiscount = () => {
        applyDiscount(discountCode);
    };

    return (
        <div className="discount-code">
            <input
                type="text"
                placeholder="Código de descuento"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button onClick={handleApplyDiscount}>Aplicar</button>
        </div>
    );
};

DiscountCodeInput.propTypes = {
    applyDiscount: PropTypes.func.isRequired
};

export default DiscountCodeInput;
