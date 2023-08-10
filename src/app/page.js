"use client";

import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";
import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner />

        {/* Comment Example */}
        <Comment />

        {/* Reply Example */}
        <Reply />

        {/* map-loop render Comment component here */}
        <div className="d-flex gap-2 my-2">
        <img
          src="/profileImages/charliebrown.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
          Charlie Brown
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>บ้าไปแล้ว</span>
          <div className="d-flex align-items-center gap-1">
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
