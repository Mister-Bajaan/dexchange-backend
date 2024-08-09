import { User } from "../model/user.model.js";

export const getUser = async (req, res) => {
  try {
    const existingUser = await User.find();

    if (!existingUser || existingUser.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    res.status(200).json(existingUser);
  } catch (error) {
    console.log("Error getUser user", error);
  }
};

