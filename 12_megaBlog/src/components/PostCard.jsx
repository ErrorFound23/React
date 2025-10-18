import React from "react";
import { Link } from "react-router-dom";
import databaseService from "../appwrite/database";

const PostCard = ({ $id, title, featuredImage }) => {
  console.log("View URL:", databaseService.getFileView(featuredImage));

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={databaseService.getFileView(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
