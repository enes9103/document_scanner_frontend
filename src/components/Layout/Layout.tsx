import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      {/* <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">App Header</h1>
      </header> */}

      <main className="flex flex-col justify-center flex-grow h-96">
        {children}
      </main>

      {/* <footer className="bg-gray-800 text-white p-4">
        <p className="text-center">App Footer</p>
      </footer> */}
    </div>
  );
};

export default Layout;
