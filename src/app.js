import A from './a.component';
import B from './b.component';
import React from 'react';
import './app.css';

const App = () => {
    return(
        <div className="main-container">
            <div>
                <A/>
            </div>
            <div>
                <B/>
            </div>
        </div>
    );
};

export default App;