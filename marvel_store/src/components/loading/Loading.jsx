// Loading.jsx
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-container text-center p-5">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;
