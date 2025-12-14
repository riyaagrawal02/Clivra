const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white border rounded-2xl p-6">
        <h1 className="text-2xl font-semibold">Riya</h1>
        <p className="text-gray-500">Tier-2 College • Mentor</p>

        <div className="flex gap-8 mt-6">
          <div>
            <p className="text-lg font-semibold">120</p>
            <p className="text-sm text-gray-500">Helping Score</p>
          </div>
          <div>
            <p className="text-lg font-semibold">45</p>
            <p className="text-sm text-gray-500">Answers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
