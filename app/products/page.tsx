import Link from 'next/link'
import React from 'react'

const products = () => {
  return (
    <ul>
        <li><Link href="/products/mobile">--mobile--</Link></li>
        <li><Link href="/products/computer">--computer--</Link></li>
        <li><Link href="/products/airpod">--airpod--</Link></li>
    </ul>
  )
}

export default products