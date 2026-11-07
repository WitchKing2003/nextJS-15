"use client";

import { useState } from "react";

export const metadata = {
  title: "Counter",
};

export default function Counter() {
  const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

