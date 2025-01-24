import React, { useState } from "react";

const PostForm = ({ addPost }) => {
  const formAction = async (formData) => {
    const newPost = {
      title: formData.get("title"),
    };

    addPost(newPost);
  };

  return (
    <form action={formAction}>
      <input type="text" name="title" />
      <button type="submit">제출</button>
    </form>
  );
};

const Action = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
  };

  return (
    <div>
      <PostForm addPost={addPost} />
      {posts.map((post, idx) => (
        <h2 key={idx}>{post.title}</h2>
      ))}
    </div>
  );
};

export default Action;
