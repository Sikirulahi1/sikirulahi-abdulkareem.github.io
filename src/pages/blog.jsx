import { BlogSection } from "../assets/styles";
import Nav from "../comp/LandingPage/nav";
import Footer from "../comp/LandingPage/footer";

// Add posts here as { id, title, excerpt, date, url } once they are written.
const blogPosts = [];

const Blog = () => {
  return (
    <>
      <Nav />
      <BlogSection>
        <div className="blog-header">
          <h1>Blog</h1>
          <p>Notes on my research in AI and robotics, the projects I build, and lessons from the journey.</p>
        </div>

        {blogPosts.length === 0 ? (
          <div className="blog-header">
            <p>
              This page is under construction. New posts are on the way. In the meantime, you can read my articles on{" "}
              <a href="https://medium.com/@sikirulahi" target="_blank" rel="noopener noreferrer">Medium</a>.
            </p>
          </div>
        ) : (
          <ul>
            {blogPosts.map((post) => (
              <li key={post.id}>
                <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a> ({post.date}): {post.excerpt}
              </li>
            ))}
          </ul>
        )}
      </BlogSection>
      <Footer />
    </>
  );
};

export default Blog;
