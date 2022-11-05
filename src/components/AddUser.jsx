import {useEffect, useState} from "react";

export default function (props) {

    const [userForm, setUserForm] = useState({
        id: '',
        name: '',
        email: '',
        jobTitle: '',
        status: '',
        role: '',
        isSubscribed: false,
    })

    function handleFormChange(event) {
        const {name, value, type, checked} = event.target
        setUserForm(prevState => (
            {
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
        let newUser = {
            id: props.prevUser ? props.prevUser.id : Math.floor(Math.random() * new Date()),
            name: userForm.name,
            email: userForm.email,
            jobTitle: userForm.jobTitle,
            status: userForm.status,
            role: userForm.role,
            isSubscribed: userForm.isSubscribed,
        }
        props.prevUser ? props.updateUser(newUser) : props.addNewUser(newUser)

    }

    useEffect(() => {
        if (props.prevUser) {
            setUserForm(props.prevUser)
        }
    }, [props.prevUser])

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="relative bg-white rounded-lg p-6 w-full max-w-sm">
                <h2 className="mb-4 font-semibold border-b border-gray-200 pb-2 text-gray-800">Add New User</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="text"
                        className="border border-gray-300 rounded block w-full py-1 px-3"
                        placeholder="Name"
                        name="name"
                        onChange={(event) => handleFormChange(event)}
                        value={userForm.name}
                    />
                    <input
                        type="text"
                        className="border border-gray-300 rounded block w-full py-1 px-3"
                        placeholder="Email"
                        name="email"
                        onChange={(event) => handleFormChange(event)}
                        value={userForm.email}
                    />
                    <input
                        type="text"
                        className="border border-gray-300 rounded block w-full py-1 px-3"
                        placeholder="Job title"
                        name="jobTitle"
                        onChange={(event) => handleFormChange(event)}
                        value={userForm.jobTitle}
                    />
                    <div>
                        <h4>Role:</h4>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    id="Admin"
                                    value="Admin"
                                    onChange={(event) => handleFormChange(event)}
                                    checked={userForm.role === 'Admin'}
                                />
                                <label htmlFor="Admin" className="text-gray-500">Admin</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    id="Editor"
                                    value="Editor"
                                    onChange={(event) => handleFormChange(event)}
                                    checked={userForm.role === 'Editor'}
                                />
                                <label htmlFor="Editor" className="text-gray-500">Editor</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    id="Customer"
                                    value="Customer"
                                    onChange={(event) => handleFormChange(event)}
                                    checked={userForm.role === 'Customer'}
                                />
                                <label htmlFor="Customer" className="text-gray-500">Customer</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-1">Status:</h4>
                        <select
                            name="status"
                            className="block w-full border border-gray-300 rounded px-2 py-1"
                            onChange={(event) => handleFormChange(event)}
                            value={userForm.status}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-start gap-3">
                        <input
                            id="subscribe"
                            type="checkbox"
                            className="text-indigo w-4 h-4"
                            name="isSubscribed"
                            onChange={(event) => handleFormChange(event)}
                            checked={userForm.isSubscribed}
                        />
                        <label htmlFor="subscribe" className="text-gray-500">Subscribe</label>
                    </div>
                    <button className="!mt-5 px-8 inline-block py-2 rounded-lg text-white bg-indigo-600">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}