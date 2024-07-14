import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const App = () => {
    const [realTimeData, setRealTimeData] = useState(null);

    useEffect(() => {
        socket.on('stockData', (data) => {
            setRealTimeData(data);
        });

        return () => socket.disconnect();
    }, []);

    return (
        <div>
            <h1>Real-Time Stock Data</h1>
            {realTimeData && <p>{realTimeData.name}: {realTimeData.price}</p>}
        </div>
    );
};

export default App;
