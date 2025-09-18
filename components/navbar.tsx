"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky z-50 bg-white shadow">
      <article className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="hover:text-blue-400 font-bold ">
          my<span className="text-red-600 hover:text-black">Ecomms</span>
        </Link>
        <article className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-400">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-400">
            Checkout
          </Link>
        </article>
        <section className="flex items-center space-x-4"></section>
      </article>
    </div>
  );
}
