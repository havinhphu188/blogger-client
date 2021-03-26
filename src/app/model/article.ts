export interface IArticle{
  id: number;
  title: string;
  content: string;
  author: {
    name: string,
    url: string
  };
  react: number;
  reacted: boolean;
}
