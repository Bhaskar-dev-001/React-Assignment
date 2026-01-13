import {useNavigate} from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
//import '.../App.css';

function User(){
    const {users} = useUserContext();
    const navigate = useNavigate();
    
    return(
        <div className='user-container'>
            <h2>User List</h2>
            <ul>
                {users.map((user)=>(
                    <li key={user.id} onClick={()=>navigate(`/user/${user.id}`)}>
                        {user.name} ({user.email})
                    </li>
                ))} 
            </ul>
        </div>
    )
}

export default User;
    