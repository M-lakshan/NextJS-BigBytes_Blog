export type User = {
  id: number;
  prefix: string;
  name: string;
  bio: string | null;
  dp: string | null;
};

export type Post = {
  id: number;
  timeStamp: string;
  publisher: number;
  coauthor: number | null;
  title: string;
  context: string;
  votes: {
    upv: number[];
    dnv: number[];
  };
  comments: Comment[];
  thumbnail: string | null;
  sharable: boolean;
};

export type Comment = {
  timeStamp: string;
  commenter: number;
  context: string;
};

export type VotePayload = {
  postId: number;
  userId: number;
  type: "upv" | "dnv";
};
