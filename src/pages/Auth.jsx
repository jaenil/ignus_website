import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function Auth() {
  const navigate = useNavigate();
  
  // Views: 'login', 'signup', 'complete-profile'
  const [currentView, setCurrentView] = useState("login");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Form states
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [profileData, setProfileData] = useState({
    phoneNo: "",
    gender: "",
    college: "",
    collegeYear: "",
    docId: null,
    collegeId: null,
  });

  // Smooth transition handler with blue wash effect
  const transitionTo = (view) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(view);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 400);
  };

  // Form handlers
  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login:", loginData);
    navigate("/profile");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log("Signup:", signupData);
    transitionTo("complete-profile");
  };

  const handleCompleteProfile = (e) => {
    e.preventDefault();
    // TODO: Implement profile completion logic
    console.log("Profile:", profileData);
    navigate("/profile");
  };

  const handleGoogleSignIn = () => {
    // TODO: Implement Google Sign-in
    console.log("Google Sign-in clicked");
  };

  const handleFileUpload = (field, e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfileData({ ...profileData, [field]: file });
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-purple-900 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background Wheel */}
        <img
          src="/wheel_2.svg"
          alt=""
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-auto opacity-30 pointer-events-none"
        />
        
        <div className={`w-full max-w-6xl flex items-center justify-center gap-8 relative z-10 ${
          currentView === "login" ? "flex-row" : "flex-row-reverse"
        }`}>
          
          {/* Mascot - visible on all views on larger screens */}
          <div
            className={`hidden lg:flex items-center transition-all duration-300 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="bg-white rounded-2xl p-4 flex items-center justify-center">
              <img
                src="/mascot.svg"
                alt="Mascot"
                className="h-[400px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Auth Container */}
          <div
            className="relative w-full max-w-md"
          >
            {/* Blue wash overlay for transition - only on form */}
            <div
              className={`absolute inset-0 bg-blue-600 rounded-3xl z-20 pointer-events-none transition-opacity duration-300 ${
                isTransitioning ? "opacity-100" : "opacity-0"
              }`}
            />
            
            {/* Login View */}
            {currentView === "login" && (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                  Login to Account
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-full transition-colors"
                    >
                      Sign In
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-white/60 mb-4">Or</p>
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full py-3 bg-white hover:bg-gray-100 text-gray-700 font-medium rounded-full flex items-center justify-center gap-3 transition-colors"
                  >
                    <img
                      src="/devicon_google.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    Sign in with Google
                  </button>
                </div>

                <p className="mt-6 text-center text-white/80">
                  Don't have an account?{" "}
                  <button
                    onClick={() => transitionTo("signup")}
                    className="text-white font-semibold hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            )}

            {/* Signup View */}
            {currentView === "signup" && (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                  Create Account
                </h2>

                <form onSubmit={handleSignup} className="space-y-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={signupData.firstName}
                    onChange={(e) =>
                      setSignupData({ ...signupData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={signupData.lastName}
                    onChange={(e) =>
                      setSignupData({ ...signupData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, state: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={signupData.confirmPassword}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-full transition-colors"
                    >
                      Sign up
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-white/60 mb-4">Or</p>
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full py-3 bg-white hover:bg-gray-100 text-gray-700 font-medium rounded-full flex items-center justify-center gap-3 transition-colors"
                  >
                    <img
                      src="/devicon_google.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    Sign in with Google
                  </button>
                </div>

                <p className="mt-6 text-center text-white/80">
                  Already had an account?{" "}
                  <button
                    onClick={() => transitionTo("login")}
                    className="text-white font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            )}

            {/* Complete Profile View */}
            {currentView === "complete-profile" && (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                  Create Account
                </h2>

                <form onSubmit={handleCompleteProfile} className="space-y-4">
                  <input
                    type="tel"
                    placeholder="Phone No"
                    value={profileData.phoneNo}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phoneNo: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    placeholder="Gender"
                    value={profileData.gender}
                    onChange={(e) =>
                      setProfileData({ ...profileData, gender: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    placeholder="College"
                    value={profileData.college}
                    onChange={(e) =>
                      setProfileData({ ...profileData, college: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    placeholder="College Year"
                    value={profileData.collegeYear}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        collegeYear: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                  />

                  {/* Doc ID Upload */}
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Doc ID"
                      readOnly
                      value={profileData.docId?.name || ""}
                      className="flex-1 px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30"
                    />
                    <label className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full cursor-pointer transition-colors">
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("docId", e)}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* College ID Upload */}
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="College ID"
                      readOnly
                      value={profileData.collegeId?.name || ""}
                      className="flex-1 px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30"
                    />
                    <label className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full cursor-pointer transition-colors">
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("collegeId", e)}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-full transition-colors"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
