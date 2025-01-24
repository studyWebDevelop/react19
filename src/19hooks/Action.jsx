import React, { useState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="button" disabled={pending}>
      {pending ? "제출중..." : "제출"}
    </button>
  );
};

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
      <SubmitButton />
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
