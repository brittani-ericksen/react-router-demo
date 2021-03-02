import { Route, Link, useRouteMatch } from "react-router-dom";
import BlogPost from "./BlogPost";

const blogPosts = [
  {
    title: "Blog post #1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Blog post #2",
    content: "Maecenas consequat sagittis orci quis accumsan."
  },
  {
    title: "Blog post #3",
    content:
      "Curabitur fringilla, risus dignissim egestas elementum, leo sapien pretium est, quis imperdiet eros orci et ligula."
  }
];

const Blog = () => {
  const { url, path } = useRouteMatch();
  return (
    <>
      <h1>Blog</h1>
      <nav>
        <ul>
          {blogPosts.map((post, index) => {
            return (
              <li>
                <Link to={`/blog/${index}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Route exact path={path}>
        <h2>Please choose a blog post</h2>
      </Route>
      <Route path={`${url}/:id`}>
        <BlogPost posts={blogPosts} />
      </Route>
    </>
  );
};

export default Blog;
