import React from 'react';
import Background from '../assets/images/mountains.jpg';

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="bg-cover bg-fixed flex items-center justify-center h-screen"
    >
      <div className="text-center">
        <h3 className="p-5 bg-opacity-50 text-white bg-black rounded text-2xl shadow-md">
          Welcome to the Phonebook
        </h3>
      </div>
    </div>
  );
}

export default Home;

