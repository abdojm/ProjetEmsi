import LoginPreview from '@/components/login-card';
import React from 'react';

const AuthPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <LoginPreview />
        </div>
    );
};

export default AuthPage;