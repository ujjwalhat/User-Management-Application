import React from "react";
import { Link } from "react-router-dom";

function UserList({ users, deleteUser }) {
  //for no user
  if (!users || users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-4 text-left text-gray-600 w-[200px]">Name</th>
            <th className="p-4 text-left text-gray-600 w-[250px]">Email</th>
            <th className="p-4 text-left text-gray-600 w-[150px]">Phone</th>
            <th className="p-4 text-left text-gray-600 w-[150px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over users array and render each user in a row */}
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-4 truncate">{user.name}</td>
              <td className="p-4 truncate">{user.email}</td>
              <td className="p-4">{user.phone}</td>
              <td className="p-4">
                <Link
                  to={`/edit/${user.id}`}
                  className="mr-4 text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
