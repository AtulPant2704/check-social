import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "79Gksh9pq7",
    firstName: "Ember",
    lastName: "Jung",
    username: "emberjung",
    password: "emberjung123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
    following: [
      {
        _id: "79Gk42f9otl",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1653635781/guest_ymuaft.jpg",
      },
      {
        _id: "qq8abrfEeXd",
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722184/third_mrjqm3.jpg",
      },
      {
        _id: "1T6Be1QpLm",
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
      },
    ],
    followers: [
      {
        _id: "79Gk42f9otl",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1653635781/guest_ymuaft.jpg",
      },
      {
        _id: "1T6Be1QpLm",
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
      },
    ],
    bookmarks: [],
    bio: "I am the first user",
    website: "https://atulpant.netlify.app/",
  },
  /*****************************************2*******************************************/
  {
    _id: "79Gk42f9otl",
    firstName: "Guest",
    lastName: "User",
    username: "Guest123",
    password: "Guest@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1653635781/guest_ymuaft.jpg",
    following: [
      {
        _id: "79Gksh9pq7",
        firstName: "Ember",
        lastName: "Jung",
        username: "emberjung",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
      },
      {
        _id: "qq8abrfEeXd",
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722184/third_mrjqm3.jpg",
      },
    ],
    followers: [
      {
        _id: "79Gksh9pq7",
        firstName: "Ember",
        lastName: "Jung",
        username: "emberjung",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
      },
      {
        _id: "M1NR81Bzlz",
        firstName: "Clement",
        lastName: "Maxwell",
        username: "clement14",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
      },
    ],
    bookmarks: [],
    bio: "I am the second user",
    website: "https://www.google.co.in/",
  },
  /*******************************************3****************************************************/
  {
    _id: "1T6Be1QpLm",
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    password: "janedoe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
    followers: [
      {
        _id: "79Gksh9pq7",
        firstName: "Ember",
        lastName: "Jung",
        username: "emberjung",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
      },
    ],
    following: [
      {
        _id: "79Gksh9pq7",
        firstName: "Ember",
        lastName: "Jung",
        username: "emberjung",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
      },
      {
        _id: "LCrc9f0Zl0",
        firstName: "Carl",
        lastName: "Smith",
        username: "carlsmith",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722212/first_bvrlba.jpg",
      },
    ],
    bookmarks: [],
    bio: "I am third user",
    website: "https://www.google.co.in/",
  },
  /**************************************************4**************************************************/
  {
    _id: "LCrc9f0Zl0",
    firstName: "Carl",
    lastName: "Smith",
    username: "carlsmith",
    password: "carlsmith123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722212/first_bvrlba.jpg",
    following: [
      {
        _id: "M1NR81Bzlz",
        firstName: "Clement",
        lastName: "Maxwell",
        username: "clement14",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
      },
    ],
    followers: [
      {
        _id: "1T6Be1QpLm",
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
      },
    ],
    bookmarks: [],
    bio: "I am fourth user",
    website: "https://www.google.co.in/",
  },
  /*******************************************5*******************************************/
  {
    _id: "M1NR81Bzlz",
    firstName: "Clement",
    lastName: "Maxwell",
    username: "clement14",
    password: "clement123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
    followers: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Carl",
        lastName: "Smith",
        username: "carlsmith",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722212/first_bvrlba.jpg",
      },
    ],
    following: [
      {
        _id: "79Gk42f9otl",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1653635781/guest_ymuaft.jpg",
      },
    ],
    bookmarks: [],
    bio: "I am fifth user",
    website: "https://www.google.co.in/",
  },
  /*********************************************6*****************************************/
  {
    _id: "qq8zWjEeXd",
    firstName: "Marina",
    lastName: "Mogilko",
    username: "marina27",
    password: "marina123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722233/second_wmzgil.jpg",
    followers: [],
    following: [],
    bookmarks: [],
    bio: "I am sixth user",
    website: "https://www.google.co.in/",
  },
  /*********************************************7*****************************************/
  {
    _id: "qq8abrfEeXd",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722184/third_mrjqm3.jpg",
    followers: [
      {
        _id: "79Gksh9pq7",
        firstName: "Ember",
        lastName: "Jung",
        username: "emberjung",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
      },
      {
        _id: "79Gk42f9otl",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1653635781/guest_ymuaft.jpg",
      },
    ],
    following: [],
    bookmarks: [],
    bio: "I am sixth user",
    website: "https://www.google.co.in/",
  },
];
