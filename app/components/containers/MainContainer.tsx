import React from 'react';

interface MainContainerProps {
    children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
    return (
        <div className='flex justify-center flex-col'>
        <h1 className='text-center my-5 text-xl'>Choose Station</h1>
            {children}
        </div>
    );
};

export default MainContainer;