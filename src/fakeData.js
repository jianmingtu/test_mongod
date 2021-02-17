export default [
  {
    _id: "post1",
    imageUrl: "https://i.imgur.com/JnE2HOP.png",
    description:
      "Where's the c-4? It's in the shed. Speak English! Where's the c-4? It's in the shed. In the shed? It's in the shed? It's in the shed. It's in the shed",
    liked: false,
    totalLikes: 100,
    totalComments: 10,

    user: {
      _id: "user1",
      username: "AJ"
    },
    comments: [
      {
        user: {
          _id: "user5",
          username: "John"
        },
        text: "It's in the shed.",
        _id: "comment1"
      },
      {
        user: {
          _id: "user1",
          username: "AJ"
        },
        text: " Man, life's looking pretty good from right here.",
        _id: "comment2"
      },
      {
        user: {
          _id: "user2",
          username: "Gordon"
        },
        text: "We're takers, gents. That's what we do for a living. We take.",
        _id: "comment3"
      },
      {
        user: {
          _id: "user5",
          username: "John"
        },
        text: "It's in the shed.",
        _id: "comment4"
      },
      {
        user: {
          _id: "user1",
          username: "AJ"
        },
        text: " Man, life's looking pretty good from right here.",
        _id: "comment5"
      },
      {
        user: {
          _id: "user2",
          username: "Gordon"
        },
        text: "We're takers, gents. That's what we do for a living. We take.",
        _id: "comment6"
      },
      {
        user: {
          _id: "user5",
          username: "John"
        },
        text: "It's in the shed.",
        _id: "comment7"
      },
      {
        user: {
          _id: "user1",
          username: "AJ"
        },
        text: " Man, life's looking pretty good from right here.",
        _id: "comment8"
      },
      {
        user: {
          _id: "user2",
          username: "Gordon"
        },
        text: "We're takers, gents. That's what we do for a living. We take.",
        _id: "comment9"
      },
      {
        user: {
          _id: "user5",
          username: "John"
        },
        text: "It's in the shed.",
        _id: "comment10"
      },
      {
        user: {
          _id: "user1",
          username: "AJ"
        },
        text: " Man, life's looking pretty good from right here.",
        _id: "comment11"
      },
      {
        user: {
          _id: "user2",
          username: "Gordon"
        },
        text: "We're takers, gents. That's what we do for a living. We take.",
        _id: "comment12"
      }
    ]
  },
  {
    _id: "post3",
    imageUrl: "https://i.imgur.com/aVqLAG7.png",
    description: "It's in the shed",
    liked: true,
    totalLikes: 200,
    totalComments: 20,

    user: {
      _id: "user2",
      username: "Gordon"
    },
    comments: [
      {
        user: {
          _id: "user5",
          username: "John"
        },
        text: "It's in the shed.",
        _id: "comment13"
      },
      {
        user: {
          _id: "user1",
          username: "AJ"
        },
        text: " Man, life's looking pretty good from right here.",
        _id: "comment14"
      },
      {
        user: {
          _id: "user2",
          username: "Gordon"
        },
        text:
          "We're takers, gents. That's what we do for a living. We take. Gordon Jennings: We're takers, gents. That's what we do for a living. We take.",
        _id: "comment15"
      }
    ]
  },
  {
    _id: "post2",
    imageUrl: "https://i.imgur.com/JnE2HOP.png",
    description:
      "Where's the c-4? It's in the shed. Speak English! Where's the c-4? It's in the shed. In the shed? It's in the shed? It's in the shed. It's in the shed",
    liked: true,
    totalLikes: 300,
    totalComments: 30,

    user: {
      _id: "user3",
      username: "Ghost"
    },
    comments: [
      {
        user: {
          _id: "user5",
          username: "John"
        },
        text: "It's in the shed.",
        _id: "comment16"
      },
      {
        user: {
          _id: "user1",
          username: "AJ"
        },
        text: " Man, life's looking pretty good from right here.",
        _id: "comment17"
      },
      {
        user: {
          _id: "user2",
          username: "Gordon"
        },
        text:
          "We're takers, gents. That's what we do for a living. We take. Gordon Jennings: We're takers, gents. That's what we do for a living. We take.",
        _id: "comment18"
      }
    ]
  },
  {
    _id: "post4",
    imageUrl: "https://i.imgur.com/aVqLAG7.png",
    description: "It's in the shed",
    liked: true,
    totalLikes: 400,
    totalComments: 40,

    user: {
      _id: "user4",
      username: "Jesse"
    },
    comments: [
      {
        user: {
          _id: "user5",
          username: "John"
        },
        text: "It's in the shed.",
        _id: "comment19"
      },
      {
        user: {
          _id: "user1",
          username: "AJ"
        },
        text: " Man, life's looking pretty good from right here.",
        _id: "comment20"
      },
      {
        user: {
          _id: "user2",
          username: "Gordon"
        },
        text:
          "We're takers, gents. That's what we do for a living. We take. Gordon Jennings: We're takers, gents. That's what we do for a living. We take.",
        _id: "comment21"
      }
    ]
  }
];
