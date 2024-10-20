import Link from 'next/link'
import React from 'react'
type Params={
    orderId:string,
}

const Ordered = ({params}:{params:Params}) => {
  return (
    <div>
        <h2 className='mb-3'>Do you confirm ?</h2>
        <p>Ordered product/s</p>
        <p>OrderId: {params.orderId}</p>
        <button className='bg-cyan-950 text-white p-2 mt-5 rounded-lg'>
            <Link href="/checkout">Yes, pay</Link>
        </button>
    </div>
  )
}

export default Ordered