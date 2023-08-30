"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import Image from "next/image";
import { dateFormat } from "@/lib/dateFormat";

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

  // Function to handle next and previous page buttons
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));

    scrollRef.current?.scrollIntoView();
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

    scrollRef.current?.scrollIntoView();
  };

  //random image
  const ranImage = "https://random.imagecdn.app/500/450";

  return (
    <div ref={scrollRef}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-2 lg:gap-y-10 justify-items-center mx-auto my-12">
        {currentItems.map((data: any) => (
          <div key={data.id} className="group md:w-[calc(300px-20px)]">
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
          </div>
        ))}
      </div>
      {totalPages > 1 && totalPages <= 5 && (
        <div className="flex justify-center my-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`mx-2 px-4 py-2 rounded-full bg-white text-gray-700 ${
              currentPage !== 1 ? "hover:bg-blue-500 hover:text-white" : ""
            } transition-all duration-300 ease-in-out`}
          >
            <ChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => {
              return (
                <div key={page}>
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`mx-2 px-4 py-2 rounded-full ${
                      page === currentPage
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700"
                    } hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`}
                  >
                    {page}
                  </button>
                </div>
              );
            }
          )}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`mx-2 px-4 py-2 rounded-full bg-white text-gray-700 ${
              currentPage !== totalPages
                ? "hover:bg-blue-500 hover:text-white"
                : ""
            } transition-all duration-300 ease-in-out`}
          >
            <ChevronRight />
          </button>
        </div>
      )}
      {totalPages > 6 && (
        <div className="flex justify-center my-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`mx-2 px-4 py-2 rounded-full bg-white text-gray-700 ${
              currentPage !== 1 ? "hover:bg-blue-500 hover:text-white" : ""
            } transition-all duration-300 ease-in-out`}
          >
            <ChevronLeft />
          </button>
          {/* Start */}
          {Array.from({ length: 2 }, (_, index) => index + 1).map((page) => {
            if (currentPage <= 2) {
              return (
                <div key={page}>
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`mx-2 px-4 py-2 rounded-full ${
                      page === currentPage
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700"
                    } hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`}
                  >
                    {page}
                  </button>
                </div>
              );
            }
            return;
          })}
          {currentPage <= 2 && (
            <span className="flex justify-center items-end">...</span>
          )}
          {/* Page > 2 */}
          {Array.from({ length: 1 }, (_, index) => index + 1).map((page) => {
            if (currentPage > 2) {
              return (
                <div key={page}>
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`mx-2 px-4 py-2 rounded-full ${
                      page === currentPage
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700"
                    } hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`}
                  >
                    {page}
                  </button>
                </div>
              );
            }
            return;
          })}
          {currentPage > 2 && (
            <span className="flex justify-center items-end">...</span>
          )}
          {/* Page all */}
          {Array.from({ length: 3 }, (_, index) => currentPage + index).map(
            (page) => {
              if (currentPage > 2 && page > 2 && page <= totalPages - 2) {
                return (
                  <div key={page}>
                    <button
                      onClick={() => handlePageChange(page)}
                      className={`mx-2 px-4 py-2 rounded-full ${
                        page === currentPage
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-700"
                      } hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`}
                    >
                      {page}
                    </button>
                  </div>
                );
              }
              return;
            }
          )}
          {currentPage >= 3 && (
            <span className="flex justify-center items-end">...</span>
          )}
          {/* Page last  */}
          {Array.from({ length: 2 }, (_, index) => totalPages + index - 1).map(
            (page) => {
              if (currentPage >= 1 || currentPage === totalPages - 1) {
                return (
                  <div key={page}>
                    <button
                      onClick={() => handlePageChange(page)}
                      className={`mx-2 px-4 py-2 rounded-full ${
                        page === currentPage
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-700"
                      } hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`}
                    >
                      {page}
                    </button>
                  </div>
                );
              }
              return;
            }
          )}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`mx-2 px-4 py-2 rounded-full bg-white text-gray-700 ${
              currentPage !== totalPages
                ? "hover:bg-blue-500 hover:text-white"
                : ""
            } transition-all duration-300 ease-in-out`}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
