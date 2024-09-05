import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { Spinner } from "flowbite-react";
import toast from "react-hot-toast";

function EditUser() {
  // Get the userID from URL params and init navigation
  const { id } = useParams();
  const navigate = useNavigate();

  //state manangement
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  // Fetching user details id changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Function to update user details with the help of PUT request
  const updateUser = async (updatedUser) => {
    setUpdateLoading(true);
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        response.json();
        setUpdateLoading(false);
        toast.success("User SUccesfully Edited !");
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setUpdateLoading(false);
        toast.failure(error.message);
      });
  };

  //SPINNER FROM Flow-bite
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <Spinner size="lg" aria-label="Loading data" />
          <span className="pl-3">Loading...</span>
        </div>
      </div>
    );

  //In case of Error:
  if (error) return <div>Error: {error}</div>;

  //If no user Exist
  if (!user) return <div>User not found</div>;

  //UI code
  return (
    <div className="flex flex-col mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Edit User</h1>
      <UserForm
        initialData={user}
        handleSubmit={updateUser}
        isSubmitting={updateLoading}
      />
    </div>
  );
}

export default EditUser;
