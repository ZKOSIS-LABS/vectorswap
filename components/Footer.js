import React from 'react'
import TokenBalance from './TokenBalance'

const Footer = () => {
  return (
    <div className='flex fixed bottom-4 left-1/2 -translate-x-1/2'>
      <TokenBalance name={'$MOB'} />
      <TokenBalance name={'$XVX'} />
      <TokenBalance name={'$XIX'} />
    </div>
  )
}

export default Footer
