import express from "express";
import { isAdminRoute, protectRoute } from "../middlewares/authMiddlewave.js";
import {
  activateUserProfile,
  changeUserPassword,
  deleteUserProfile,
  getNotificationsList,
  getTeamList,
  loginUser,
  logoutUser,
  markNotificationRead,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/get-team", getTeamList);
router.get("/notifications", getNotificationsList);

router.put("/profile", updateUserProfile);
router.put("/read-noti", protectRoute, markNotificationRead);
router.put("/change-password", changeUserPassword);

// //   FOR ADMIN ONLY - ADMIN ROUTES
router
  .route("/:id")
  .put(protectRoute, isAdminRoute, activateUserProfile)
  .delete(deleteUserProfile);
  // .delete(protectRoute, isAdminRoute, deleteUserProfile);
export default router;
