import { useState,useMemo,useCallback } from "react";
import useUser from "../hooks/useUser";
import UserTable from "./UserTable";


function UserDashboard() {
    const { users, loading, error } = useUser();
    const [search,setSearch] = useState("");
    const[selectedUser,setSelectedUser] = useState(null);

    const filteredUsers = useMemo(() => {
        return users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        );
    }, [users, search]);

    const handleUserSelect = useCallback((user) => {
        setSelectedUser(user);
    }, []);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>User Dashboard</h1>
            <input
                type="text"
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <UserTable users={filteredUsers} onUserSelect={handleUserSelect} />
            {selectedUser && (
                <div>
                    <h2>Selected User Details</h2>
                    <p>Name: {selectedUser.name}</p>
                    <p>Email: {selectedUser.email}</p>
                    <p>Phone: {selectedUser.phone}</p>
                    <p>Website: {selectedUser.website}</p>
                </div>
            )}
        </div>
    );
}

export default UserDashboard;   
   