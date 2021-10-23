import React from 'react'

const Footer = () => {
  return (
    <footer className='footer text-faded text-center py-5'>
      <div className='container'>
        <p className='m-0 small'>
          Copyright © <a href='https://akaid.herokuapp.com/'>akaid.herokuapp.com </a> {new Date().getFullYear()}{' '}
        </p>
      </div>
    </footer>
  )
}

export default Footer
