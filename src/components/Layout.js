import React from 'react'

const Layout = ({children , className=""}) => {
  return (
    <div className={`${className } dark:bg-dark xl:p-24 lg:p-16 md:p-12. sm:p-8`}> 
      {children}
    </div>
  )
}

export default Layout
