"use client";

export default function BadComponent() {
  return <div>{new Date().getMilliseconds()}</div>;
}
