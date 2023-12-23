'use client'

import Link from "next/link"

export default function CarListTitle() {
    return (
        <>
            <div>
                <h1>Cars List</h1>
                <p>See Our Cars Collection</p>
            </div>
            <div className="filterbar">
                <Link className="link" href="/cars/create">Create Car</Link>
            </div>
        </>
    )
}