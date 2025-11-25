import React, { useRef } from 'react'

const Form = ({fetchData}) => {

  const searchValue = () => {
    const value = country.current.value.trim();
    if(value) {
      fetchData(value);
      country.current.value = '';
    }
  }

  const country = useRef('')
  return (
    <div className='w-100 d-flex justify-content-center mt-4'>
        <input type="text" ref={country} className='form-control ms-5' placeholder='Enter a country...' />
        <input type="button" onClick={searchValue} value="Search" className=' btn ms-2 me-5 bg-dark text-white' />
    </div>
  )
}

export default Form