'use client';

export default function Button({ styled, children }) {
    return (
        <p className={`w-full text-left font-semibold text-base ${styled}`}>{children}</p>
    )
}