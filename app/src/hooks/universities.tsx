import { useState, useEffect } from "react";

interface University {
  id: number;
  name: string;
  country: string;
}

interface Error {
  message: string;
}

const useFetchUniversities = (url: string) => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data = await response.json();
        setUniversities(data);
      } catch (err: Error | any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, [url]);

  return { universities, loading, error };
};

export default useFetchUniversities;
