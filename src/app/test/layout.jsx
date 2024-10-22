import React from 'react';

const TestLayout = ({children}) => {
    return (
        <div>
            <div>
                <h3>from inside</h3>
            </div>
            {children}
        </div>
    );
};

export default TestLayout;