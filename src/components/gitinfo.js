import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Skills.css";

function Gitinfo() {
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleEvent(e) {
    e.preventDefault();
    searchRepos();
    searchFollowers();
    searchFollowing();
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/heyyy-satyammm/repos`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
  }

  function searchFollowers() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/heyyy-satyammm/followers`,
    }).then((res) => {
      setLoading(false);
      setFollowers(res.data);
    });
  }

  function searchFollowing() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/heyyy-satyammm/following`,
    }).then((res) => {
      setLoading(false);
      setFollowing(res.data);
    });
  }

  return (
    <div className="git-container">
      <div className="git-username">
        <h3>heyyy-satyammm</h3>
        <button onClick={handleEvent}>
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>
      <div className="git-details">
        <div className="git-info">
          <h3>Repositories</h3>
          <p>{repos.length}</p>
        </div>
        <div className="git-info">
          <h3>Followers</h3>
          <p>{followers.length}</p>
        </div>
        <div className="git-info">
          <h3>Following</h3>
          <p>{following.length}</p>
        </div>
      </div>
      {/* <button
        className="git-link"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://github.com/heyyy-satyammm";
        }}
      >
        My GitHub
      </button> */}
      <a
        href="http://github.com/heyyy-satyammm"
        target="_blank"
        className="git-link"
      >
        My GitHub
      </a>
    </div>
  );
}

export default Gitinfo;
