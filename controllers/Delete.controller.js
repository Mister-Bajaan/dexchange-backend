import { User } from "../model/user.model.js";

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const existingUser = await User.findByIdAndDelete(id);

    if (!existingUser || existingUser.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error deleteUser user", error);
  }
};
