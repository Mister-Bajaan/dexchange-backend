import { User } from "../model/user.model.js";

export const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(404).json({ message: "No user found" });
    }
    res.status(200).json(existingUser);
  } catch (error) {
    console.log("Error getOneUser user", error);
  }
};