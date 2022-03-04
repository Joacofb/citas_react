const Error = ({children}) => {
  return (
    <div className='bg-red-700 text-white uppercase text-center font-bold rounded-md p-2 mb-5'>
        {children}
    </div>
  )
}

export default Error