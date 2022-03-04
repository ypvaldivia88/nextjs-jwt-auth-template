import nc from "next-connect";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utils/auth";
import { users } from "../../../utils/data";

const handler = nc();

handler.post(async (req, res) => {
  const user = users.find((user) => user.email === req.body.email);
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).send({ message: "Invalid user or password" });
  }
});

export default handler;
