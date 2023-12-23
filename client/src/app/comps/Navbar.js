'use client'
import Link from "next/link"

export default function Navbar() {
    return <div className="navbar">
        <Link className="link" href="/">Home</Link>
        <Link className="link" href="/cars">Car</Link>
        <Link className="link" href="/orders">Order</Link>
    </div>
}