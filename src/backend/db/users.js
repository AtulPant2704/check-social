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
    password: "adarshBalika123",
    bio: "Hello World",
    bookmarks: [],
    avatarUrl: "",
    website: "https://google.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "User",
    username: "Guest123",
    password: "test123",
    bio: "Hello World",
    bookmarks: [],
    avatarUrl: "",
    website: "https://google.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "79Gksh9otl",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    bio: "Hello World",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722184/third_mrjqm3.jpg",
    website: "https://google.com/",
    createdAt: "2022-01-02T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    password: "janedoe123",
    bio: "Whats in bio?",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
    website: "https://atulpant.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Carl",
    lastName: "Smith",
    username: "carlsmith",
    password: "carlsmith123",
    bio: "Whats in bio?",
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722212/first_bvrlba.jpg",
    website: "https://atulpant.netlify.app/",
    createdAt: "2022-01-03T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "M1NR81Bzlz",
    firstName: "Clement",
    lastName: "Maxwell",
    username: "clement14",
    password: "clement123",
    bio: "What's up?",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
    website: "",
    createdAt: "2022-01-05T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "qq8zWjEeXd",
    firstName: "Marina",
    lastName: "Mogilko",
    username: "marina27",
    password: "marina123",
    bio: "English Instructor",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722233/second_wmzgil.jpg",
    website: "",
    createdAt: "2022-01-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
