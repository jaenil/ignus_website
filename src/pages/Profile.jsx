import Navbar from "../components/navbar/Navbar";

export default function Profile() {
  // Sample data - replace with actual user data later
  const userData = {
    name: "Name",
    phoneNumber: "Phone Number",
    emailId: "Email Id",
    universityName: "University Name",
    gender: "Gender",
    passType: "Pass type",
  };

  const registeredEvents = ["Sample 1", "Sample 2"];

  return (
    <> 
      {/* Google Font - Caudex */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Caudex:wght@400;700&display=swap');`}
      </style>
      
      <Navbar />
      <main 
        className="pt-16 min-h-screen text-[#FFFFFF]" 
        style={{ background: 'linear-gradient(to bottom, #690000, #F9C400)' }}
      >
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          {/* Profile Card */}
          <div 
            className="rounded-3xl p-6 sm:p-10 mb-6"
            style={{ backgroundColor: '#150549' }}
          >
            {/* Profile Heading */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 uppercase tracking-wide"
              style={{ fontFamily: 'Caudex, serif' }}
            >
              Profile
            </h1>

            {/* User Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div 
                className="bg-[#1a0a5c] border-2 border-[#3d2a8a] rounded-full py-3 px-6 text-center"
                style={{ fontFamily: 'Caudex, serif' }}
              >
                <span className="text-[#FFFFFF] font-medium">{userData.name}</span>
              </div>

              {/* Phone Number */}
              <div 
                className="bg-[#1a0a5c] border-2 border-[#3d2a8a] rounded-full py-3 px-6 text-center"
                style={{ fontFamily: 'Caudex, serif' }}
              >
                <span className="text-[#FFFFFF] font-medium">{userData.phoneNumber}</span>
              </div>

              {/* Email Id */}
              <div 
                className="bg-[#1a0a5c] border-2 border-[#3d2a8a] rounded-full py-3 px-6 text-center"
                style={{ fontFamily: 'Caudex, serif' }}
              >
                <span className="text-[#FFFFFF] font-medium">{userData.emailId}</span>
              </div>

              {/* University Name */}
              <div 
                className="bg-[#1a0a5c] border-2 border-[#3d2a8a] rounded-full py-3 px-6 text-center"
                style={{ fontFamily: 'Caudex, serif' }}
              >
                <span className="text-[#FFFFFF] font-medium">{userData.universityName}</span>
              </div>

              {/* Gender */}
              <div 
                className="bg-[#1a0a5c] border-2 border-[#3d2a8a] rounded-full py-3 px-6 text-center"
                style={{ fontFamily: 'Caudex, serif' }}
              >
                <span className="text-[#FFFFFF] font-medium">{userData.gender}</span>
              </div>

              {/* Pass Type */}
              <div 
                className="bg-[#1a0a5c] border-2 border-[#3d2a8a] rounded-full py-3 px-6 text-center"
                style={{ fontFamily: 'Caudex, serif' }}
              >
                <span className="text-[#FFFFFF] font-medium">{userData.passType}</span>
              </div>
            </div>
          </div>

          {/* Events Registered Section */}
          <div 
            className="border-2 border-[#C4A000] rounded-2xl p-6 sm:p-8"
            style={{ fontFamily: 'Caudex, serif' }}
          >
            {/* Events Registered Badge */}
            <div className="flex justify-center mb-6">
              <span 
                className="text-[#FFFFFF] font-semibold py-2 px-6 rounded-full text-sm sm:text-base"
                style={{ background: 'linear-gradient(to bottom, #690000, #F9C400)' }}
              >
                Events Registered:
              </span>
            </div>

            {/* Event List */}
            <div className="flex flex-col items-center gap-3">
              {registeredEvents.map((event, index) => (
                <p key={index} className="text-[#FFFFFF] text-lg sm:text-xl">
                  {event}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
