import './UnderConstruction.css';

const UnderConstruction = () => {
    return (
        <div className="construction-page">
            <h1>Página en construcción</h1>
            <p>Lo sentimos, esta página está actualmente en construcción. Por favor, vuelva más tarde.</p>

            <div className="construction-animation">
                <div className="crane"></div>
                <div className="block"></div>
            </div>
        </div>
    );
};

export default UnderConstruction;
