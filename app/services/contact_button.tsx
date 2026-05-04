import React from 'react'
import Link from 'next/link'

function contact_button() {
  return (
    <>
        <Link href={'/contact'}>
            <button className="bg-flame-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-flame-orange/90 transition-colors text-lg">
            Contact us Now!
            </button>
        </Link>
    </>
  )
}

export default contact_button