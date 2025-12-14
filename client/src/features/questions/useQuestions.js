import { useEffect, useState } from "react";
import { apiRequest } from "../../lib/api";

export function useQuestions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiRequest("/questions").then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
