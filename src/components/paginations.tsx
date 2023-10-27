"use client";

import Link from "next/link";
import { FC, useRef, useState } from "react";
import Image from "next/image";
import { dateFormat } from "@/lib/dateFormat";
import { Pagination as PaginationNextUi } from "@nextui-org/react";
import { motion } from "framer-motion";

interface DataType {
  id: number;
  name: string;
  html_url: string;
  created_at: Date;
  pushed_at: Date;
  language: string;
}

interface PaginationProps {
  data: DataType[];
  pageItem: number;
}

const Pagination: FC<PaginationProps> = ({ data, pageItem }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  //Pagination
  const itemsPerPage = pageItem;
  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the index range of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  // Slice the data array to get the items for the current page
  const currentItems = data.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (page: any) => {
    setCurrentPage(page);

    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //random image
  const ranImage = "https://random.imagecdn.app/500/450";

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-2 lg:gap-y-10 justify-items-center mx-auto my-12">
        {currentItems.map((data: any) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            key={data.id}
            className="group md:w-[calc(300px-20px)]"
          >
            <Link href={data.html_url} target="_blank">
              <div className="overflow-hidden bg-cover bg-no-repeat rounded-sm rounded-e-[15rem]">
                <Image
                  src={ranImage}
                  width={280}
                  height={350}
                  alt={data.name}
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="xl:!w-[280px] !h-[calc(40%-50px)] transform hover:scale-110 transition duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="py-2 text-xl">
                <span className="font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_3px] transition-all duration-500">
                  {data.name.length > 63
                    ? `${data.name.substring(0, 63)}...`
                    : data.name}
                </span>
              </div>
              <div className="flex flex-col">
                <span>Create At: {dateFormat(data.created_at)}</span>
                <span>Update At: {dateFormat(data.pushed_at)}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <PaginationNextUi
          onChange={handlePageChange}
          showControls
          showShadow
          loop
          total={totalPages}
          initialPage={itemsPerPage}
          page={1}
          color="primary"
          size="lg"
        />
      </div>
    </div>
  );
};

export default Pagination;
