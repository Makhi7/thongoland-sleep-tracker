import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import WebTitle from './title'
import NavBar from './navbar'

export default function NavHeader() {
  return (
            <header className="col-span-12 flex items-center justify-between py-7 border-b">
                <div className="col-start-1 col-end-4 flex items-center gap-4">
                    <Link
                        href="/"
                    >
                        <Logo />
                    </Link>
                    <Link
                        href="/"
                    >
                        <WebTitle />
                    </Link>
                </div>
                <div className="col-start-7">
                    <NavBar />
                </div>
            </header>
  )
}
