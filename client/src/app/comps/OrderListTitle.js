'use client'

import Link from "next/link"

export default function OrderListTitle() {
    return (
        <>
            <div>
                <h1>Orders List</h1>
                <p>See Our Orders Collection</p>
            </div>
            <div className="filterbar">
                <Link className="link" href="/orders/create">Create Order</Link>
            </div>
        </>
    )
}