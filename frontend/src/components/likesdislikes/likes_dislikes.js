import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
import Icon, {
  DislikeOutlined,
  LikeOutlined,
  DislikeTwoTone,
  LikeTwoTone,
  LikeFilled,
  DislikeFilled,
} from "@ant-design/icons";
import Axios from "axios";

const LikesDislikes = ({ postId, userId, currentUserId }) => {
  const [Likes, setLikes] = useState(0);
  const [Dislikes, setDislikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [DislikeAction, setDislikeAction] = useState(null);
  const [likeIcon, setLikeIcon] = useState(LikeOutlined);
  const [dislikeIcon, setDislikeIcon] = useState(DislikeOutlined);

  let obj = {};
  if (postId) {
    obj = { postId: postId, userId: currentUserId };
  }

  useEffect(() => {
    Axios.post("/api/likes/getLikes", obj).then((response) => {
      if (response.data.success) {
        setLikes(response.data.likes.length);
        if (
          response.data.likes.map((like) => like.userId).includes(currentUserId)
        ) {
          setLikeIcon(LikeTwoTone);
        } else if (
          !response.data.likes
            .map((like) => like.userId)
            .includes(currentUserId) &&
          response.data.likes.length > 0
        ) {
          setLikeIcon(LikeFilled);
        }
      } else {
        alert("Could not get likes");
      }
    });

    Axios.post("/api/likes/getDislikes", obj).then((response) => {
      if (response.data.success) {
        setDislikes(response.data.dislikes.length);
        if (
          response.data.dislikes
            .map((dislike) => dislike.userId)
            .includes(currentUserId)
        ) {
          setDislikeIcon(DislikeTwoTone);
        } else if (
          !response.data.dislikes
            .map((dislike) => dislike.userId)
            .includes(currentUserId) &&
          response.data.dislikes.length > 0
        ) {
          setDislikeIcon(DislikeFilled);
        }
      }
    });
  }, []);

  let likeIds = [];
  let dislikeIds = [];
  Axios.post("/api/likes/getLikes", obj).then((response) => {
    if (response.data.success) {
      likeIds = response.data.likes.map((like) => like.userId);
    }
  });
  Axios.post("/api/likes/getDislikes", obj).then((response) => {
    if (response.data.success) {
      dislikeIds = response.data.dislikes.map((dislike) => dislike.userId);
    }
  });

  const onLike = () => {
    if (
      LikeAction === null &&
      !likeIds.includes(currentUserId) &&
      !dislikeIds.includes(currentUserId)
    ) {
      Axios.post("/api/likes/upLike", obj).then((response) => {
        if (response.data.success) {
          setLikes(Likes + 1);
          setLikeAction("liked");
          setLikeIcon(LikeTwoTone);
        } else {
          alert("Already liked");
        }
      });
    } else if (
      LikeAction === null &&
      !likeIds.includes(currentUserId) &&
      dislikeIds.includes(currentUserId)
    ) {
      Axios.post("/api/likes/upLike", obj).then((response) => {
        if (response.data.success && dislikeIds.length >= 2) {
          setLikes(Likes + 1);
          setLikeAction("liked");
          setLikeIcon(LikeTwoTone);
          setDislikeAction(null);
          setDislikes(Dislikes - 1);
          setDislikeIcon(DislikeFilled);
        } else if (response.data.success && dislikeIds.length === 1) {
          setLikes(Likes + 1);
          setLikeAction("liked");
          setLikeIcon(LikeTwoTone);
          setDislikeAction(null);
          setDislikes(Dislikes - 1);
          setDislikeIcon(DislikeOutlined);
        } else {
          alert("Already liked");
        }
      });
    } else {
      Axios.post("/api/likes/unLike", obj).then((response) => {
        if (response.data.success && likeIds.length === 1) {
          setLikes(Likes - 1);
          setLikeAction(null);
          setLikeIcon(LikeOutlined);
        } else if (response.data.success && likeIds.length > 1) {
          setLikes(Likes - 1);
          setLikeAction(null);
          setLikeIcon(LikeFilled);
        } else {
          alert("Could not unlike");
        }
      });
    }
  };

  const onDislike = () => {
    if (
      DislikeAction === null &&
      !dislikeIds.includes(currentUserId) &&
      !likeIds.includes(currentUserId)
    ) {
      Axios.post("/api/likes/upDislike", obj).then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes + 1);
          setDislikeAction("disliked");
          setDislikeIcon(DislikeTwoTone);
        } else {
          alert("Could not add dislike");
        }
      });
    } else if (
      DislikeAction === null &&
      !dislikeIds.includes(currentUserId) &&
      likeIds.includes(currentUserId)
    ) {
      Axios.post("/api/likes/upDislike", obj).then((response) => {
        if (response.data.success && likeIds.length >= 2) {
          setDislikes(Dislikes + 1);
          setDislikeAction("disliked");
          setDislikeIcon(DislikeTwoTone);
          setLikeAction(null);
          setLikes(Likes - 1);
          setLikeIcon(LikeFilled);
        } else if (response.data.success && likeIds.length === 1) {
          setDislikes(Dislikes + 1);
          setDislikeAction("disliked");
          setDislikeIcon(DislikeTwoTone);
          setLikeAction(null);
          setLikes(Likes - 1);
          setLikeIcon(LikeOutlined);
        } else {
          alert("Could not add dislike");
        }
      });
    } else {
      Axios.post("/api/likes/unDislike", obj).then((response) => {
        if (response.data.success && dislikeIds.length === 1) {
          setDislikes(Dislikes - 1);
          setDislikeAction(null);
          setDislikeIcon(DislikeOutlined);
        } else if (response.data.success && dislikeIds.length > 1) {
          setDislikes(Dislikes - 1);
          setDislikeAction(null);
          setDislikeIcon(DislikeFilled);
        } else {
          alert("Could not decrease dislike");
        }
      });
    }
  };

  return (
    <React.Fragment>
      <div className="post-like-dislikes">
        <span key="post-like" className="post-like">
          <Tooltip>
            <Icon component={likeIcon} onClick={onLike} />
          </Tooltip>
          <span style={{ paddingLeft: "5px", cursor: "auto" }}>{Likes}</span>
        </span>
        <span key="post-dislike" className="post-dislike">
          <Tooltip>
            <Icon component={dislikeIcon} onClick={onDislike} />
          </Tooltip>
          <span style={{ paddingLeft: "5px", cursor: "auto" }}>{Dislikes}</span>
        </span>
      </div>
    </React.Fragment>
  );
};

export default LikesDislikes;
