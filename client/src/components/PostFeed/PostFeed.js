import React, { Component } from "react";
import PostForm from "./PostForm";
import Spinner from "../Spinner";
import AllPostsList from "./AllPostsList";
import PostItem from "./PostItem";

class PostFeed extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const {
      user,
      text,
      allPosts,
      loading,
      errors,

      changePostContentToAdd,
      addPost,
      deletePost,
      addLike,
      addUnlike
    } = this.props;

    let postContent;
    if (allPosts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <AllPostsList>
          {allPosts.map(post => (
            <PostItem
              key={post._id}
              currentUserId={user.id}
              allLikes={post.likes}
              allUnlikes={post.unlikes}
              userId={post.user}
              userAvatar={post.avatar}
              userName={post.name}
              postId={post._id}
              contentDate={post.date}
              contentText={post.text}
              user={user}
              deleteContent={deletePost}
              addLike={addLike}
              addUnlike={addUnlike}
            />
          ))}
        </AllPostsList>
      );
    }
    return (
      <div>
        <PostForm
          text={text}
          placeholder={`What's on your mind, ${user.name}?`}
          errors={errors}
          onChange={changePostContentToAdd}
          addContent={addPost}
        />
        {postContent}
      </div>
    );
  }
}

export default PostFeed;
