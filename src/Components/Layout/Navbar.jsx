import {Link} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
// This is creating the navbar using daisyUI with image and text adjacent to it
<div className = "NAV">
    <nav className = "navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className = "container mx-auto">
            <div className="flex-none px-2 mx-2">
                <FaGithub className = 'inline pr-2 text-3xl'/>
                <Link className = "text-lg font-bold align-middle" to = {{
                    pathname:"/Navbar",search:'Navbar',hash:'#012932',
                }}>
                {title}
                </Link>
            </div>

{/* This item is going on right of the navbar */}

                <div className = 'flex-1 px-2 mx-2'>
                    <div className = 'flex justify-end'>
                        <Link className = 'btn btn-ghost btn-sm rounded-btn' to = {{pathname:"/home"}}>Home </Link>
                        <Link className = 'btn btn-ghost btn-sm rounded-btn' to = {{pathname:"/about"}}>ABOUT </Link>
                    </div>
                </div>
        </div>
    </nav>
</div>
  )
}

Navbar.defaultProps = {
    title: "Project Github Finder"
}

Navbar.propTypes = {
    title:PropTypes.string
}

export default Navbar



// This whole page is UI is designed using daisyUI