import React from "react";
import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("t") ?? "今日のお題ボット";

  return new ImageResponse(
    (<div
      style={{
        fontSize: 64,
        background: "#f9fafb",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      💡 {text}
    </div>),
    { width: 1200, height: 630 }
  );
}
