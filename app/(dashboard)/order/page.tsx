import Link from 'next/link'
import React from 'react'

const Order = () => {
  return (
    <div>
        <p className='mb-6'>Order page</p>
        <Link href="/order/12id">--order info--</Link>
    </div>
  )
}

export default Order