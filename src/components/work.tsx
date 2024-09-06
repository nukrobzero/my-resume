'use client';

import { useEffect, useState } from 'react';
import Pagination from './paginations';

export const revalidate = 60;

const Work = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const callapi = async () => {
      try {
        const getRepo = await fetch(`https://api.github.com/user/repos`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          },
          cache: 'no-cache',
        });
        const res = await getRepo.json();
        const sortedRepos = res.sort((a: any, b: any) => b.id - a.id);
        setRepos(sortedRepos);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    callapi();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Pagination
          data={repos}
          pageItem={6}
        />
      )}
    </div>
  );
};

export default Work;
