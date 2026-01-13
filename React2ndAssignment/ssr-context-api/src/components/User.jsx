import {useNavigate} from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import '../components/User.css';

function User(){
    const {users} = useUserContext();
    const navigate = useNavigate();
    
    return(
        <div className='user-container'>
            <h2 className='heading'>User List</h2>
            <ul className='user'>
                {users.map((user)=>(
                    <li className='user-list' key={user.id} onClick={()=>navigate(`/user/${user.id}`)}>
                        {user.name} ({user.email})
                    </li>
                ))} 
            </ul>
        </div>
    )
}

export default User;
    