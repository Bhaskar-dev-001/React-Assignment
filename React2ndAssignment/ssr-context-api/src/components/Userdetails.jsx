import { useParams } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import '../components/UserDetails.css';
import '../App.css';


function Userdetails(){
    const {id} = useParams();
    const {users} = useUserContext();
    const user = users.find((user)=>user.id === parseInt(id));
    
    if(!user){
        return <div className="user-details-container"><h2>User not found</h2></div>
    }   
    return(
        <div className="user-details-container">
            <h2>User Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
        </div>
    )
}

export default Userdetails; 
