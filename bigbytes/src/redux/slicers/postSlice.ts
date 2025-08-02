import { createSlice } from "@reduxjs/toolkit";

const sampleUser = {
  id: 0,
  prefix: '',
  name: '',
  bio: '',
  dp: null
}

const sampleUsers = [
  {
    id: 1,
    prefix: "Dr.",
    name: "Elena Ruiz",
    bio: "AI researcher and speaker focused on ethical machine learning and robotics.",
    dp: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 2,
    prefix: "Mr.",
    name: "James Fulton",
    bio: "Full-stack developer and open-source contributor passionate about web standards.",
    dp: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 3,
    prefix: "Ms.",
    name: "Priya Mehta",
    bio: "Product designer creating intuitive user experiences for health tech platforms.",
    dp: "https://i.pravatar.cc/150?img=24"
  },
  {
    id: 4,
    prefix: "Prof.",
    name: "Liam Zhang",
    bio: "Educator and author specializing in modern programming languages and compilers.",
    dp: "https://i.pravatar.cc/150?img=41"
  },
  {
    id: 5,
    prefix: "Mx.",
    name: "Alex Rivera",
    bio: "Creative technologist blending code, art, and interaction design.",
    dp: "https://i.pravatar.cc/150?img=47"
  }
];

const sampleComment = {
  timeStamp: new Date().toISOString(),
  commenter: 1,
  context: ''
};

const sampleComments = [
  {
    timeStamp: "2025-07-30T10:15:00.000Z",
    commenter: 2,
    context: "Great insight — thanks for sharing!"
  },
  {
    timeStamp: "2025-07-30T10:18:00.000Z",
    commenter: 3,
    context: "Could you elaborate more on this point?"
  },
  {
    timeStamp: "2025-07-30T10:20:00.000Z",
    commenter: 4,
    context: "I completely agree with this perspective."
  },
  {
    timeStamp: "2025-07-30T10:25:00.000Z",
    commenter: 1,
    context: "Interesting read, but I think there's another side."
  },
  {
    timeStamp: "2025-07-30T10:30:00.000Z",
    commenter: 5,
    context: "Thanks for the breakdown — very helpful!"
  }
];

const samplePost = {
  id: 0,
  timeStamp: new Date().toISOString(),
  publisher: 1,
  coauthor: null,
  title: '',
  context: '',
  votes: {
    upv: 0,
    dnv: 0
  },
  comments: [],
  thumbnail: '',
  sharable: false
};

const samplePosts = [
  {
    id: 1,
    timeStamp: "2025-07-30T09:00:00.000Z",
    publisher: 1,
    coauthor: 2,
    title: "The Future of Web Development",
    context: "Exploring trends like server components, edge functions, and AI tooling in modern web dev.",
    votes: { upv: 12, dnv: 1 },
    comments: [sampleComments[0], sampleComments[1]],
    thumbnail: null,
    sharable: true
  },
  {
    id: 2,
    timeStamp: "2025-07-30T09:30:00.000Z",
    publisher: 3,
    coauthor: null,
    title: "Why Functional Programming Matters",
    context: "A quick look into pure functions, immutability, and declarative coding.",
    votes: { upv: 20, dnv: 3 },
    comments: [sampleComments[2]],
    thumbnail: null,
    sharable: true
  },
  {
    id: 3,
    timeStamp: "2025-07-30T09:45:00.000Z",
    publisher: 4,
    coauthor: null,
    title: "My Productivity Stack for 2025",
    context: "Tools and systems I use daily: Obsidian, Raycast, Notion, and more.",
    votes: { upv: 8, dnv: 0 },
    comments: [],
    thumbnail: null,
    sharable: false
  },
  {
    id: 4,
    timeStamp: "2025-07-30T10:00:00.000Z",
    publisher: 2,
    coauthor: 5,
    title: "A Beginner’s Guide to TypeScript",
    context: "Type safety doesn’t have to be scary — here’s how to ease into TypeScript.",
    votes: { upv: 16, dnv: 2 },
    comments: [sampleComments[3], sampleComments[4]],
    thumbnail: null,
    sharable: true
  },
  {
    id: 5,
    timeStamp: "2025-07-30T10:10:00.000Z",
    publisher: 5,
    coauthor: null,
    title: "Is AI Killing Creativity?",
    context: "Some thoughts on how generative AI tools shape — or limit — original thinking.",
    votes: { upv: 30, dnv: 10 },
    comments: [],
    thumbnail: null,
    sharable: false
  }
];

const initialState = {
  posts: samplePosts,
  publishers: sampleUsers,
  coauthors: sampleUsers
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updatePosts(state, action) {
      state.posts = action.payload; 
    }
  },
});

export const { updatePosts } = postSlice.actions;
export default postSlice.reducer;