import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.error("Error caught by ErrorBoundary: ", error);
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        // Example of using the error variable
        console.error("Error caught by ErrorBoundary: ", error);
        // Log additional error info
        console.error("Detailed error info: ", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI
            return <h2>Something went wrong.</h2>;
        }

        // Render children if no error
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};

export default ErrorBoundary;
