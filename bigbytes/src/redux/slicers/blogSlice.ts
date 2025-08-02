import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Post, User, Comment, VotePayload } from "@/types";

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

const samplePosts = [
  {
    id: 1,
    timeStamp: "2025-07-30T09:00:00.000Z",
    publisher: 1,
    coauthor: 2,
    title: "The Future of Web Development",
    context: "Exploring trends like server components, edge functions, and AI tooling in modern web dev.",
    votes: {
      upv: [1,12,3,14,15,6,17,8,19,10],
      dnv: [11,2,13]
    },
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
    votes: {
      upv: [1,6,17,8,19,10],
      dnv: [11,2,13,4]
    },
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
    votes: {
      upv: [1,12,3,14,15,6,17],
      dnv: [11,2,13,41,5,16,7,18,9,20]
    },
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
    votes: {
      upv: [1,12,10],
      dnv: [11,2]
    },
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
    votes: {
      upv: [],
      dnv: [1]
    },
    comments: [],
    thumbnail: null,
    sharable: false
  }
];

const initialState: {
  posts: Post[];
  publishers: User[];
  coauthors: User[];
} = {
  posts: samplePosts,
  publishers: sampleUsers,
  coauthors: sampleUsers
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    updateBlog(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    addAPost(state, action: PayloadAction<Post>) {
      state.posts.unshift(action.payload);
    },
    commentOnAPost(state, action: PayloadAction<{ postId: number; comment: Comment }>) {
      const post = state.posts.find(p => p.id === action.payload.postId);

      if(post) { //actual should be a DB call
        post.comments.push(action.payload.comment);
      }
    },
    voteOnAPost(state, action: PayloadAction<VotePayload>) {
      const { postId, userId, type } = action.payload;
      const post = state.posts.find(p => p.id === postId);

      if(!post) return;

      const oppositeType = (type === "upv") ? "dnv" : "upv";
      const hasVoted = post.votes[type].includes(userId);
      const hasOppositeVoted = post.votes[oppositeType].includes(userId);

      if(hasVoted) { //actual should be a DB call
        post.votes[type] = post.votes[type].filter(id => id !== userId); 
      } else {
        post.votes[type].push(userId);

        if(hasOppositeVoted) { //actual should be a DB call
          post.votes[oppositeType] = post.votes[oppositeType].filter(id => id !== userId);
        }
      }
    }
  }
});

export const {
  updateBlog: updatePosts,
  addAPost: addPost,
  commentOnAPost: addComment,
  voteOnAPost: votePost
} = blogSlice.actions;

export default blogSlice.reducer;