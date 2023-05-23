'use client';

export default function Button({ styled, children }) {
    return (
        <p className={`w-full text-left font-light ${styled}`}>{children}</p>
    )
}