import nc from "next-connect";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utils/auth";
import data from "../../../utils/data";

const handler = nc();

handler.post(async (req, res) => {
  try {
    const user = data.users.find((user) => user.email === req.body.email);
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
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default handler;
