import {BsFillSignStopFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Notfound() {
  return (
    <>
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
       
          <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
          <p className='text-5xl mb-8'>404 - Page Not Found!</p>
          <Link className='btn btn-primary btn-lg' to='/home'>
            Back To Home
          </Link>
        </div>
        <BsFillSignStopFill size={100}/>
      </div>
    </div>
    </>
  )
}

export default Notfound