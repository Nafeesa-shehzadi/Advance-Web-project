import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [view, setView] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/users", {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      setUsers(res.data.data);
      toast.success("Users fetched successfully");
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Error fetching users");
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/message", {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      setMessages(res.data.data);
      toast.success("Messages fetched successfully");
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Error fetching messages");
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:4000/api/v1/users/${id}`, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });
        // Assuming `setUsers` updates the UI with the remaining users after deletion
        setUsers(users.filter((user) => user._id !== id));

        toast.success("User deleted successfully");
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Handle case where user to delete was not found
          toast.error("User not found");
        } else {
          console.error("Error deleting user:", error);
          toast.error("Failed to delete user");
        }
      }
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm("Are you sure you want to delete this Message?")) {
      try {
        await axios.delete(`http://localhost:4000/api/v1/message/${id}`, {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });
        setMessages(messages.filter((message) => message._id !== id));
        toast.success("Message deleted successfully");
      } catch (error) {
        console.error("Error deleting message:", error);
        toast.error("Error deleting message");
      }
    }
  };

  const showUsers = (e) => {
    e.preventDefault();
    setView("users");
    fetchUsers();
  };

  const showMessages = (e) => {
    e.preventDefault();
    setView("messages");
    fetchMessages();
  };

  return (
    <div className="admin-dashboard">
      <h1 className="font-alexBrush font-bold text-3xl">Admin Dashboard</h1>
      <button onClick={showUsers} className="w-full text-white  bg-[#da5e9c] hover:bg-[#a74275] focus:ring-4 focus:ring-[#debfce] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Show Users</button><br></br>
      <button onClick={showMessages} className="w-full text-white  bg-[#da5e9c] hover:bg-[#a74275] focus:ring-4 focus:ring-[#debfce] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Show Bookings</button>

      {view === "users" ? (
        <div className="list-container">
          {users.length > 0 ? (
            <div className="card-list">
              {users.map((user) => (
                <div key={user._id} className="card">
                  <p>Username: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No users to display</p>
          )}
        </div>
      ) : view === "messages" ? (
        <div className="list-container">
          {messages.length > 0 ? (
            <div className="card-list">
              {messages.map((message) => (
                <div key={message._id} className="card">
                  <p>Name :{message.name}</p>
                  <p>Date:{message.date}</p>
                  <p>Persons:{message.persons} </p>
                  <p>Service:{message.service}</p>
                  <button
                    onClick={() => deleteMessage(message._id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No messages to display</p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default AdminDashboard;
