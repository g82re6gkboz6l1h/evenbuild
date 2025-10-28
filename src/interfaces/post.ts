export type Post = {
  slug: string;
  title: string;
  date: string;
  meta: string;
  tags: string[];
  keywords: string[];
  image: string;
  content: string;
  preview?: boolean;
};
