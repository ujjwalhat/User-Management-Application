import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import { Spinner } from "flowbite-react";
import toast from "react-hot-toast";

function Home() {
  // State to manage
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createLoading, setCreateLoading] = useState(false);
  const [error, setError] = useState(null);

    // Fetch the initial list of users  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.slice(0, 2));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Function to create a new user with POST request
  const createUser = async (user) => {
    setCreateLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]);
        setCreateLoading(false);
        toast.success("User successfully created!");
      })
      .catch((error) => {
        setCreateLoading(false);
        toast.error("Failed to create user: " + error.message);
      });
  };

  // Function to delete a user by ID
  const deleteUser = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
        toast.success("User successfully deleted!");
      })
      .catch((error) => {
        toast.error("Failed to delete user: " + error.message);
      });
  };

  // FlowBite Spinner
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <Spinner size="lg" aria-label="Loading data" />
          <span className="pl-3">Loading...</span>
        </div>
      </div>
    );

  //Basic cases
  if (error) return <div>Error: {error}</div>;

  //UI
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl p-4 m-5">User Management System</h1>
      <UserForm handleSubmit={createUser} isSubmitting={createLoading} />
      <div className="mt-8 overflow-x-auto ml-40 lg:m-6">
        {/* Horizontal scrolling container */}
        <UserList users={users} deleteUser={deleteUser} />
      </div>
    </div>
  );
}

export default Home;
