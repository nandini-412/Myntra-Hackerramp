import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { postDel } from "../../redux/actionCreators/postsActionCreator";
import "./postcard.css"

const PostCard = ({ post, id }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const postDelete = () => {
    dispatch(postDel(post.postId));
    toast.success("Post deleted successfully!");
  };
  return (
    <div className="card col-md-5 px-0 m-2" key={id}>
      <img
        className="card-img-top"
        src={post.post.image}
        alt={post.post.title}
      />
      <div className="card-body p-5 text-justify">
        <h5 className="card-title">{post.post.title.toUpperCase()}</h5>
        <p className="card-text">
          {post.post.description.substring(0, 100)}...
        </p>
      </div>
      <div className="card-footer p-5 bg-white">
        <div className="d-flex align-items-center my-2 justify-content-between">
          <p>
            <i className="fa fa-thumbs-up"></i> Likes {post.post.likes}
          </p>
        </div>
        <div className="">
          <button
            className="btn my-2 btn-block"
            id="seepost"
            onClick={() => history.push(`/admin/dashboard/post/${post.postId}`)}
          >
            <i className="fa fa-eye"></i> See Post
          </button>
          <div className="text-right">
            <button
              type="button"
              onClick={() =>
                history.push(`/admin/dashboard/post/${post.postId}/edit`)
              }
              className="btn my-2  mx-1"
              id="seepost"
            >
              <i className="fa fa-pencil"></i> Edit Post
            </button>
            <button
              type="button"
              onClick={postDelete}
              className="btn my-2ss"
              id="seepost"
            >
              <i className="fa fa-trash-o"></i> Delete Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
