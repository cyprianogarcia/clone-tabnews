import React from 'react';

function Home() {
    return (
        <div style={{ 
            width: '100vw', 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '20px' 
        }}>
            <h1>Topa fazer uma coisa... ilegal?</h1>
            <img src="https://i.postimg.cc/mZJkgkXD/ipilife.jpg" alt="Imagem ilustrativa" 
            style={{ 
            width: '100%', 
            maxWidth: '500px',
            }} />
        </div>
    );
};

export default Home;