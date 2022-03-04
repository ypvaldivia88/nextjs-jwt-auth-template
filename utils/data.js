import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      _id: "5f58c8f8e7b8f7f8c8b8b8b8",
      name: "Jhon",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      _id: "5f58c8f8e7b8f7f8c8b8b8b9",
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
};

export default data;
