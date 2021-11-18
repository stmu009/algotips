import { useState, useMemo } from "react";

export const useGlobalState = () => {
  const [topic, setTopic] = useState(null)

  const setCurrentTopic = useMemo(
    (t) => (t) => setTopic(t),
    [setTopic]
  );

  return {
    topic,
    setCurrentTopic
  };
};
