const dummyLogins = [
  {
    username: "Test User",
    age: 22,
    gender: "Female",
    email: "test@gmail.com",
    password: "123456",
    phone: "+91 9876543210",
    location: "Raipur, Chhattisgarh",
    avatar: "https://i.pravatar.cc/150?img=10",
    joined: "26 March, 2025",
  },
  {
    username: "Admin",
    age: 25,
    gender: "Male",
    email: "admin@gmail.com",
    password: "123456",
    phone: "+91 9876543210",
    location: "Raipur, Chhattisgarh",
    avatar: "https://i.pravatar.cc/150?img=12",
    joined: "26 March, 2025",
  },
];

const fakeLogin = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = dummyLogins.find(
        (user) => user.email === email && user.password === password,
      );
      if (user) {
        resolve({
          user,
          accessToken: "access-token+hbhjlfcyukgyuewgreqyr32qyerwyq4weyriweyqi",
          refreshToken:
            "refresh-token+hbhjlfcyukgyuewgreqyr32qyerwyq4weyriweyqi",
        });
      } else {
        reject("Invalid credentials");
      }
    }, 1500);
  });
};

export default fakeLogin;
