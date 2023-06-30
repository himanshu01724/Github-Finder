import { useEffect,useState } from "react"
import Spinner from "../Layout/Spinner"

function UserResults() {

    const [users,setUsers] = useState([])

    const [loading,setLoading] = useState(true)

    useEffect(() =>{
        fetchUsers()
    },[])

    const fetchUsers = async () => {
        const respose = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
            headers: {
                Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const data = await respose.json()

        setUsers(data)
        setLoading(false)
        console.log(data)
    }
if(!loading){
  return (
    <>
    <div className = "grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
    {users.map((user) =>(
        <h3>{user.login}</h3>
    ))}    
    </div>
    <h1>Himanshu Joshi</h1>
    </>
  )
}
else{
    return <Spinner/>
}
}

export default UserResults