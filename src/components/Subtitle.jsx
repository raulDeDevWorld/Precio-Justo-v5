'use client';

export default function Button({ styled, children }) {
    return (
        <h3 className={`w-full text-left font-semibold text-base ${styled}`}>{children}</h3>
    )
}
