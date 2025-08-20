import React from 'react'
import Header from './components/Header'

const Layout = ({
    children
}: { children: Readonly<React.ReactNode> }
) => {
    return (
        <main className="size-full">
            <Header />
            {children}
        </main>
    )
}

export default Layout