import Link from 'next/link'
import React from 'react'


export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center h-12 px-4 shadow-md bg-gray-800 text-white">
        <Link href="/" className="text-lg font-bold">
          Amazon Shopping Cart
        </Link>
        <div>
          <span className="cart-badge"></span>
          <Link href="/cart" className="flex justify-between items-end">Cart</Link>
        </div>
      </nav>
    </header>
  )
}
