import {useState} from "react";
import UserList from "./components/UserList.jsx";
import UserTableHead from "./components/UserTableHead.jsx";
import AddUser from "./components/AddUser.jsx";

function App() {

    // users
    const [users, setUsers] = useState([])

    function addNewUser(newUser) {
        setUsers(prevState => [...prevState, newUser])
        setUserModal(false)
    }

    function deleteUser(id) {
        setUsers(prevState => prevState.filter(user => user.id !== id))
    }

    // update user
    const [prevUser, setPrevUser] = useState(null)

    function editUser(user) {
        setPrevUser(user)
        setUserModal(true)
    }

    function updateUser(updatedUser) {
        setUsers(prevState => prevState.map(user => updatedUser.id == user.id ? updatedUser : user))
        setPrevUser(null)
        setUserModal(false)
    }

    // user form modal
    const [userModal, setUserModal] = useState(false)

    function closeUserModal() {
        setUserModal(false)
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Users</h1>
                        <p className="mt-2 text-sm text-gray-700">A list of all the users in your account including
                            their
                            name, title, email and role.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button onClick={() => setUserModal(true)} type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                            Add user
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <UserTableHead/>
                                    {
                                        users.length ?
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                            {
                                                users.map(user => (
                                                    <UserList key={user.id} user={user} editUser={() => editUser(user)}
                                                              deleteUser={() => deleteUser(user.id)}/>
                                                ))
                                            }
                                            </tbody>
                                            :
                                            <tbody>
                                            <tr>
                                                <td colSpan={12} className="text-center text-gray-400 text-2xl py-2">
                                                    No data yet
                                                </td>
                                            </tr>
                                            </tbody>
                                    }

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {userModal && <AddUser addNewUser={addNewUser} closeUserModal={closeUserModal} prevUser={prevUser}
                                   updateUser={updateUser}/>}

        </div>


    )
}

export default App
