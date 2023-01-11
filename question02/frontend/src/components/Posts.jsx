import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState();
  const [pageCounter, setPageCounter] = useState(0);
  const [pageContent, setPageContent] = useState([]);

  const getPosts = async (page) => {
    console.log("page: ", page);
    const response = await fetch(
      `http://localhost:5000/api/posts/getallposts`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    console.log("json", json[0].posts);
    setPosts(json[0].posts);
  };

  const onNextPage = async () => {
    setPageCounter(pageCounter + 1);
    setPageContent();
    let index = 0;
    let end = 10;
    if (pageCounter === 1) {
      index = 0;
      end = 10;
    } else if (pageCounter === 2) {
      index = 10;
      end = 20;
    } else if (pageCounter === 3) {
      index = 20;
      end = 30;
    }

    var array = [];
    for (; index < end; index++) {
      const element = posts[index];
      array.push(element);
      setPageContent(array);
    }
    console.log(pageContent);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container my-2">
      <h2>Muhammad Huzaifa Jawad</h2>
      <h3>SP20-BCS-144</h3>
      <h4>Question 2</h4>
      <button className="btn btn-primary mt-4" onClick={onNextPage}>
        Get Next Page
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
          {pageContent &&
            pageContent.map((post) => {
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
