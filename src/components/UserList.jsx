export default function (props){
    return (
        <tr>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full"
                             src={`https://ui-avatars.com/api/?name=${props.user.name}`}
                             alt=""/>
                    </div>
                    <div className="ml-4">
                        <div className="font-medium text-gray-900">{props.user.name}</div>
                        <div className="text-gray-500">{props.user.email}</div>
                    </div>
                </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div className="text-gray-900">{props.user.jobTitle}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-green-800 ${props.user.status === 'Active' ? 'bg-green-100' : 'bg-red-100'}`}>
                    {props.user.status}
                </span>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {props.user.role}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {props.user.isSubscribed ? 'Yes' : 'No'}
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button onClick={props.editUser} className="text-gray-500 hover:text-gray-600">Edit</button>
                <button onClick={props.deleteUser} className="text-red-500 hover:text-red-600 ml-3">Delete</button>
            </td>
        </tr>
    )
}