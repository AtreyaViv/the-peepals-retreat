import React, { useEffect } from "react";

const FlashMessage = ({ message, type, onClose, duration = 5000 }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [message, duration, onClose]);

    if (!message) return null;

    return (
        <div
            className={`absolute mt-2 left-0 w-full text-center px-4 py-3 rounded-lg shadow-lg text-white text-sm sm:text-base z-50
    ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
            {message}
        </div>
    );
};

export default FlashMessage;
