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

export type PostAlt = {
  id: number,
  createdAt: string,
  updatedAt?: string,
  comments?: Comment[],
  title: string,
  description: string,
  coverImageUrl?: string,
  coverImageAlt?: string,
  slug: string,
  type: string,
  author: string,
  language: string,
  category: string,
  tags?: string[],
  allowComments: boolean,
  source?: string,
  publishedAt: string
}

export interface CMSContent {
  id: string | number
  slug: string
  type: string
  title?: string
  tags?: string[]
  comments?: Comment[],
  description?: string
  coverImageUrl?: string
  coverImageAlt?: string
  allowComments: boolean,
  [key: string]: any
  body: string
}

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

export type SubNavNode = {
  nav_for: string,
  nav_url: string
}
