import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    email: "adarshBalika123@gmail.com",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "User",
    username: "Guest123",
    email: "test123@gmail.com",
    password: "test123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
