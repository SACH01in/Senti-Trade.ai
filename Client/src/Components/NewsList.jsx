import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NewsCard from "./NewsCard";
import NewsSkeleton from "./NewsSkeleton";

const NewsList = ({ news, isLoading }) => {
  const containerRef = useRef(null);
  console.log(news);
  useGSAP(
    () => {
      const newestCard = containerRef.current.querySelector(
        ".news-item-container",
      );

      if (newestCard) {
        gsap.fromTo(
          newestCard,
          { x: 1000, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        );
      }
    },
    { dependencies: [news], scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto h-full pr-2 space-y-2"
    >
      {isLoading
        ? [...Array(4)].map((_, i) => <NewsSkeleton key={`skel-${i}`} />)
        : news.map((item, index) => (
            <div key={item.id} className="news-item-container">
              <NewsCard news={item} isNew={index === 0} />
            </div>
          ))}
    </div>
  );
};

export default NewsList;
