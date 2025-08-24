 function Profile() {
  const token = localStorage.getItem("token");

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
        {token ? (
          <p className="text-lg text-gray-700">You are logged in ✅{token.name}</p>
        ) : (
          <p className="text-lg text-red-500">No token found ❌</p>
        )}
      </div>
    </div>
  );
}

export default Profile