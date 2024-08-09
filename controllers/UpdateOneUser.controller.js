import { User } from "../model/user.model.js";

export const updateOneUser = async (req, res) => {
  const { id } = req.params;

  try {
    const existingUser = await User.findById(id);

      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }

      const updatedUser = await User.findByIdAndUpdate(existingUser, req.body, {
        new: true,
      });

      res.status(200).json(updatedUser);

  } catch (error) {
    return res.status(500).json({ message: "Error updating user" });
  }
};
