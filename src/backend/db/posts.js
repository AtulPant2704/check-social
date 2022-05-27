import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Testing post",
    img:
      "https://res.cloudinary.com/check-social/video/upload/v1652872981/pcvg8ggxxrao20u0oihh.mp4",
    likes: {
      likeCount: 4,
      likedBy: [
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
        {
          _id: "LCrc9f0Zl0",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1652722212/first_bvrlba.jpg",
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
      dislikedBy: [],
    },
    username: "emberjung",
    firstName: "Ember",
    lastName: "Jung",
    createdAt: new Date("Apr 06 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
    comments: [
      {
        _id: uuid(),
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1653635781/guest_ymuaft.jpg",
        commentData: "First Comment",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("Apr 07 2021 12:31:25"),
      },
      {
        _id: uuid(),
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        avatarUrl:
          "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
        commentData: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("Apr 08 2021 12:31:25"),
      },
    ],
  },
  {
    _id: uuid(),
    content: "Our Hackathon project",
    img:
      "https://res.cloudinary.com/check-social/image/upload/v1653636352/boardIt-demo_wcicw0.gif",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "1T6Be1QpLm",
          firstName: "Jane",
          lastName: "Doe",
          username: "janedoe",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
        },
        {
          _id: "79Gk42f9otl",
          firstName: "Guest",
          lastName: "User",
          username: "Guest123",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1653635781/guest_ymuaft.jpg",
        },
        {
          _id: "79Gksh9pq7",
          firstName: "Ember",
          lastName: "Jung",
          username: "emberjung",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Guest123",
    firstName: "Guest",
    lastName: "User",
    createdAt: new Date("Feb 23 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1653635781/guest_ymuaft.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "79Gksh9pq7",
          firstName: "Ember",
          lastName: "Jung",
          username: "emberjung",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    createdAt: new Date("March 13 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking",
    likes: {
      likeCount: 3,
      dislikedBy: [],
      likedBy: [
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
        {
          _id: "1T6Be1QpLm",
          firstName: "Jane",
          lastName: "Doe",
          username: "janedoe",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
        },
      ],
    },
    username: "emberjung",
    firstName: "Ember",
    lastName: "Jung",
    createdAt: new Date("May 03 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "1T6Be1QpLm",
          firstName: "Jane",
          lastName: "Doe",
          username: "janedoe",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
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
      dislikedBy: [],
    },
    firstName: "Carl",
    lastName: "Smith",
    username: "carlsmith",
    createdAt: new Date("April 18 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722212/first_bvrlba.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Clement",
          lastName: "Maxwell",
          username: "clement14",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
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
      dislikedBy: [],
    },
    firstName: "Clement",
    lastName: "Maxwell",
    username: "clement14",
    createdAt: new Date("Jan 01 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1652722212/first_bvrlba.jpg",
        },
        {
          _id: "79Gksh9pq7",
          firstName: "Ember",
          lastName: "Jung",
          username: "emberjung",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: new Date("Dec 15 2020 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722184/third_mrjqm3.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.",
    likes: {
      likeCount: 5,
      likedBy: [
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
        {
          _id: "M1NR81Bzlz",
          firstName: "Clement",
          lastName: "Maxwell",
          username: "clement14",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Jane",
          lastName: "Doe",
          username: "janedoe",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
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
      dislikedBy: [],
    },
    username: "Guest123",
    firstName: "Guest",
    lastName: "User",
    createdAt: new Date("May 12 2022 10:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1653635781/guest_ymuaft.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.",
    likes: {
      likeCount: 3,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "Marina",
    lastName: "Mogilko",
    username: "marina27",
    createdAt: new Date("Feb 28 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722233/second_wmzgil.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "emberjung",
    firstName: "Ember",
    lastName: "Jung",
    createdAt: new Date("April 15 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
    likes: {
      likeCount: 3,
      likedBy: [
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
        {
          _id: "79Gksh9pq7",
          firstName: "Ember",
          lastName: "Jung",
          username: "emberjung",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Guest",
    lastName: "User",
    username: "Guest123",
    createdAt: new Date("September 15 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1653635781/guest_ymuaft.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "The best portion of a good man’s life is his little nameless, unencumbered acts of kindness and of love.",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: new Date("October 09 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722184/third_mrjqm3.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "qq8abrfEeXd",
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1652722184/third_mrjqm3.jpg",
        },
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
        {
          _id: "1T6Be1QpLm",
          firstName: "Jane",
          lastName: "Doe",
          username: "janedoe",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Carl",
    lastName: "Smith",
    username: "carlsmith",
    createdAt: new Date("November 18 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722212/first_bvrlba.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    likes: {
      likeCount: 3,
      likedBy: [
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
        {
          _id: "79Gksh9pq7",
          firstName: "Ember",
          lastName: "Jung",
          username: "emberjung",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    createdAt: new Date("Jan 19 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Too many of us are not living our dreams because we are living our fears.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "79Gksh9pq7",
          firstName: "Ember",
          lastName: "Jung",
          username: "emberjung",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
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
      dislikedBy: [],
    },
    username: "emberjung",
    firstName: "Ember",
    lastName: "Jung",
    createdAt: new Date("Feb 18 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1653635356/new_rxucd4.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "The two most important days in your life are the day you are born and the day you find out why.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Clement",
    lastName: "Maxwell",
    username: "clement14",
    createdAt: new Date("March 04 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722226/fifth_dg1lz2.jpg",
    comments: [],
  },
  {
    _id: uuid(),
    content: "Life shrinks or expands in proportion to one’s courage.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "1T6Be1QpLm",
          firstName: "Jane",
          lastName: "Doe",
          username: "janedoe",
          avatarUrl:
            "https://res.cloudinary.com/check-social/image/upload/v1652722197/fourth_rgotvm.jpg",
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
      dislikedBy: [],
    },
    firstName: "Marina",
    lastName: "Mogilko",
    username: "marina27",
    createdAt: new Date("December 17 2021 12:31:25"),
    updatedAt: formatDate(),
    avatarUrl:
      "https://res.cloudinary.com/check-social/image/upload/v1652722233/second_wmzgil.jpg",
    comments: [],
  },
];
