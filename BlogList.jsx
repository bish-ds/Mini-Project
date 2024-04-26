import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
const BlogList = (props) => {
  return (
    <div className="blog-list">
      {props.blogs.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
BlogList.propTypes = {
  blogs: PropTypes.any,
};

export default BlogList;
