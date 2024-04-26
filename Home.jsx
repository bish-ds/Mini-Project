import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
const Home = () => {
  const {
    error,
    isPending,
    data: blogss,
  } = useFetch("http://localhost:8000/blogs/");

  const [blogs, setBlogs] = useState(blogss);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (blogss != null) {
      const newblogs = blogss.filter((blog) => {
        return blog.title.toLowerCase().includes(search.toLowerCase());
      });
      setBlogs(newblogs);
    }
  }, [search, blogss]);

  return (
    <div className="home">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
