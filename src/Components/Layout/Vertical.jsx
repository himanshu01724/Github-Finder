import {faGitHubSquare} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import { AiFillAudio } from "react-icons/ai";


function Vertical() {
  return (
    <div className = "Vertical mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className = "container mx-auto">
            <div className="flex-none px-2 mx-2">
            Vertical Navbar
            <faGitHubSquare/>
            <FaGithub/>
            
            </div>
            <AiFillAudio/>
            </div>
    </div>
  )
}

export default Vertical


// This was the illustration of how two navbars can be created one vertical and one horizontal
