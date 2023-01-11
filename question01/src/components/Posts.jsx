import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState();
  const [pageCounter, setPageCounter] = useState(0);

  const getPosts = async (page) => {
    console.log("page: ", page);
    const response = await fetch(
      `https://dummyjson.com/posts?limit=10&skip=${page}0`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    console.log(json);
    setPosts(json);
  };

  const onNextPage = async () => {
    setPageCounter(pageCounter + 1);
    getPosts(pageCounter);
  };

  useEffect(() => {}, []);

  return (
    <div className="container my-2 ">
      <h2>Muhammad Huzaifa Jawad</h2>
      <h3>SP20-BCS-144</h3>
      <h4>Question 1</h4>
      <button className="btn btn-primary" onClick={onNextPage}>
        Get Page {pageCounter + 1}
      </button>
      <table className="table text-dark my-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Reactions</th>
            <th>UserId</th>
          </tr>
        </thead>

        <tbody>
          {posts &&
            posts.posts.map((post) => {
              return (
                <>
                  <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.reactions}</td>
                    <td>{post.userId}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
