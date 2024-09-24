import React, { FC } from 'react';
import './display.css';

interface DisplayProps {
    calculation: string;
    result: string;
}

const Display: FC<DisplayProps> = ({ calculation, result }) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="display">
                    <p className="cal">{calculation}</p>
                    <p className="rslt">{result}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Display;
