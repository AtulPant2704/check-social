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
    content: `"There isn’t enough life on this ice cube to fill a space cruiser.”
		- Han Solo, 'Star Wars: The Empire Strikes Back'`,
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
    content: `“How inappropriate to call this planet "Earth," when it is clearly "Ocean.”
			― Arthur C. Clarke`,
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
    content: `“Time is an illusion. Lunchtime doubly so.”
			― Douglas Adams, The Hitchhiker's Guide to the Galaxy`,
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
    content: `“Nothing travels faster than the speed of light, with the possible exception of bad news, which obeys its own special laws.”
			― Douglas Adams, Mostly Harmless`,
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
    content: `“When religion and politics travel in the same cart, the riders believe nothing can stand in their way. Their movements become headlong - faster and faster and faster. They put aside all thoughts of obstacles and forget the precipice does not show itself to the man in a blind rush until it's too late.”
			― Frank Herbert, Dune`,
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
    content: `“How inappropriate to call this planet "Earth," when it is clearly "Ocean.”
			― Arthur C. Clarke`,
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
    content: `“Everything's science fiction until someone makes it science fact.”
			― Marie Lu, Warcross`,
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
    content: `“He who controls the spice controls the universe.”
			― Frank Herbert, Dune`,
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
    content: `“Don't blame you," said Marvin and counted five hundred and ninety-seven thousand million sheep before falling asleep again a second later.”
			― Douglas Adams, The Hitchhiker's Guide to the Galaxy`,
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
    content: `“[Science fiction is] out in the mainstream now. You can tell by the way mainstream literary authors pillage SF while denying they're writing it!”
		― Terry Pratchett`,
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
    content: `“Science fiction films are not about science. They are about disaster, which is one of the oldest subjects of art.”
― Susan Sontag
`,
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
    content: `“If we can't write diversity into sci-fi, then what's the point? You don't create new worlds to give them all the same limits of the old ones.”
			― Jane Espenson`,
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
    content: `“It seems to me, Golan, that the advance of civilization is nothing but an exercise in the limiting of privacy.”
			― Isaac Asimov, Foundation's Edge`,
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
    content: `“All governments suffer a recurring problem: Power attracts pathological personalities. It is not that power corrupts but that it is magnetic to the corruptible.”
			― Frank Herbert, Chapterhouse: Dune
			`,
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
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, commodi?",
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
    content: "Lorem ipsum dolor sit amet.",
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
