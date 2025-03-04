import posts from "../posts.json";

function HomePage() {
  return (
    <>
      <h1>Simple Blog</h1>
      {/* {posts.map((blog) => {
        return  <div>{blog.title}</div>;
      })} */}
      {posts.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <p>Tags: {blog.tags.join(", ")}</p>
          <p>Date: {blog.date}</p>
        </div>
      ))}
    </>
  );
}

export default HomePage;
