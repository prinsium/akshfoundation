"use client"
import { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center h-fit m-2 z-30">
                    <div className="bg-white p-4 flex items-center justify-start rounded-md w-full h-full max-w-screen">{children}</div>
                    <button className="absolute top-2 right-1 text-gray-800 p-2 rounded-full rotate-45" onClick={onClose}>
                    <svg className="w-5 h-5" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3683 8.19388C10.0453 8.19388 8.93756 9.25122 8.93756 10.5805V15.8067H8.44525V10.5805C8.44525 9.25122 7.33756 8.19388 5.98371 8.19388H0.691406V7.71052H5.98371C7.33756 7.68031 8.44525 6.62297 8.41448 5.29374V0.0976562H8.93756V5.29374C8.93756 6.62297 10.0453 7.68031 11.3683 7.68031H16.6914V8.19388H11.3683Z" fill="currentColor"></path>
              </svg>
                    </button>
                </div>
            )}
        </>
    );
};

export default Modal;