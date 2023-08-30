import Pagination from "./paginations";

export const revalidate = 60;

const Work = async () => {
  const getRepo = await fetch(`https://api.github.com/user/repos`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
    cache: "no-cache",
  });
  const res = await getRepo.json();
  const sortedRepos = res.sort((a: any, b: any) => b.id - a.id);
  return (
    <div>
      <Pagination data={sortedRepos} pageItem={6} />
    </div>
  );
};

export default Work;
