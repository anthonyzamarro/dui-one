import React from 'react';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Layout;