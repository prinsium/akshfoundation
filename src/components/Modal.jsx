"use client"
import { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center h-fit m-2 z-30">
                    <div className="bg-white p-8 rounded-md w-full h-full max-w-screen">{children}</div>
                    <button className="absolute top-2 right-2 border-2 border-[#ff5861] hover:border-indigo-600 text-gray-800 p-2 rounded-full" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
};

export default Modal;