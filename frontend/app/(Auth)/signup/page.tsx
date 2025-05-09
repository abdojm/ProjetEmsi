import RegisterPreview from '@/components/signup-card';
import React from 'react';

const AuthPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <RegisterPreview />
        </div>
    );
};

export default AuthPage;