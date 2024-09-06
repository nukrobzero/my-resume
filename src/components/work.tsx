'use client';

import { useEffect, useState } from 'react';
import Pagination from './paginations';

export const revalidate = 60;

const Work = () => {
  const [repos, setRepos] = useState<any[]>([]); // เก็บผลลัพธ์จาก API
  const [loading, setLoading] = useState(true); // จัดการสถานะโหลดข้อมูล

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
        setRepos(sortedRepos); // เก็บค่าที่เรียงแล้วใน state
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // ตั้งค่า loading เป็น false เมื่อโหลดเสร็จ
      }
    };

    callapi(); // เรียกใช้ฟังก์ชันเมื่อ component ถูก mount
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // แสดงข้อความโหลดข้อมูล
      ) : (
        <Pagination data={repos} pageItem={6} /> // ส่ง repos ที่ได้จาก API ไปยัง Pagination component
      )}
    </div>
  );
};

export default Work;
