"use client";
import { useState } from "react";

function Header() {
  return <header className="m-5">Sub component Header</header>;
}

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </div>
  );
}
