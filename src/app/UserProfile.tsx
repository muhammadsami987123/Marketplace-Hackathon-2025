"use client";
import Image from "next/image";
import React, { useState } from "react";

const UserProfile = () => {
  // Mock user data
  const [userDetails, setUserDetails] = useState({
    name: "Jaylon Dias",
    emailAddresses: [
      { email: "example@clerk.dev", primary: true },
      { email: "example@personal.com", primary: false },
      { email: "email@work.io", primary: false },
    ],
    phoneNumbers: [{ number: "+1 (555) 123-4567", primary: true }],
    connectedAccounts: [{ platform: "Google", email: "example@email.com" }],
  });

  // Handle adding/removing/editing user information
  const addEmail = () => {
    setUserDetails((prevState) => ({
      ...prevState,
      emailAddresses: [...prevState.emailAddresses, { email: "", primary: false }],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4">Profile details</h2>

      {/* Profile Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Profile</h3>
        <div className="flex items-center">
          <Image
            src="/avatar-placeholder.png"
            alt="User Avatar"
            className="w-16 h-16 rounded-full border border-gray-300 mr-4"
          />
          <div>
            <p className="font-semibold text-gray-700">{userDetails.name}</p>
            <button className="text-blue-600 hover:underline">Edit profile</button>
          </div>
        </div>
      </div>

      {/* Email Addresses Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Email addresses</h3>
        <ul className="space-y-2">
          {userDetails.emailAddresses.map((email, index) => (
            <li key={index} className="flex items-center justify-between">
              <p className="text-gray-700">
                {email.email} {email.primary && <span className="text-sm text-blue-600">(Primary)</span>}
              </p>
              <button className="text-red-500 hover:underline text-sm">Remove</button>
            </li>
          ))}
        </ul>
        <button
          onClick={addEmail}
          className="mt-2 text-blue-600 hover:underline text-sm"
        >
          + Add email address
        </button>
      </div>

      {/* Phone Numbers Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone number</h3>
        <ul className="space-y-2">
          {userDetails.phoneNumbers.map((phone, index) => (
            <li key={index} className="flex items-center justify-between">
              <p className="text-gray-700">
                {phone.number} {phone.primary && <span className="text-sm text-blue-600">(Primary)</span>}
              </p>
              <button className="text-red-500 hover:underline text-sm">Remove</button>
            </li>
          ))}
        </ul>
        <button className="mt-2 text-blue-600 hover:underline text-sm">
          + Add phone number
        </button>
      </div>

      {/* Connected Accounts Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Connected accounts</h3>
        <ul className="space-y-2">
          {userDetails.connectedAccounts.map((account, index) => (
            <li key={index} className="flex items-center justify-between">
              <p className="text-gray-700">
                {account.platform} <span className="text-sm text-gray-500">({account.email})</span>
              </p>
              <button className="text-red-500 hover:underline text-sm">Disconnect</button>
            </li>
          ))}
        </ul>
        <button className="mt-2 text-blue-600 hover:underline text-sm">
          + Connect account
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
