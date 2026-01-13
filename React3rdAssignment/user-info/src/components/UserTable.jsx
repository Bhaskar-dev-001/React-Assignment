function UserTable({ users, onUserSelect }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => onUserSelect(user)}>Select User</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default UserTable;