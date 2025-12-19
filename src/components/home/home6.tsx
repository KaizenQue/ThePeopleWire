"use client";

import "./home2.css";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft,ArrowUpRight  } from "lucide-react";

type Article = {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: string;
};

type ApiArticle = {
  id: string;
  title: string;
  image_url: string | null;
  category?: string[];
  author?: string[];
  publish_datetime: string;
  summary: string;
  link: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "It’s All Home Water: Oregon Steelhead",
    image: "/home41.png",
    excerpt:
      "Cursor is one of the most popular AI code editors out there. It’s essentially a fork of VS Code, but with various AI features built into it. This means you get the same familiar interface as VS Code, but with added tools to help you write, fix, and improve code faster.",
    author: "Amal Neerad",
    authorAvatar: "/profile_41.png",
    date: "December 03, 2025",
  },
  {
    id: 2,
    title: "It’s All Home Water: Oregon Steelhead",
    image: "/home41.png",
    excerpt:
      "Cursor is one of the most popular AI code editors out there. It’s essentially a fork of VS Code, but with various AI features built into it. This means you get the same familiar interface as VS Code, but with added tools to help you write, fix, and improve code faster.",
    author: "Amal Neerad",
    authorAvatar: "/profile_41.png",
    date: "December 03, 2025",
  },
  {
    id: 3,
    title: "It’s All Home Water: Oregon Steelhead",
    image: "/home41.png",
    excerpt:
      "Cursor is one of the most popular AI code editors out there. It’s essentially a fork of VS Code, but with various AI features built into it. This means you get the same familiar interface as VS Code, but with added tools to help you write, fix, and improve code faster.",
    author: "Amal Neerad",
    authorAvatar: "/profile_41.png",
    date: "December 03, 2025",
  },
];

export default function Home4() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeArrow, setActiveArrow] =
    useState<"left" | "right" | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [apiArticles, setApiArticles] = useState<ApiArticle[]>([]);

  // 🔒 ADDITIVE FIX (nothing removed)
  const [lockHover, setLockHover] = useState(false);

  /* ---------------- DESKTOP DETECTION ---------------- */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ---------------- SCROLL ---------------- */
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const isMobile = window.innerWidth < 768;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -(isMobile ? 320 : 560) : isMobile ? 320 : 560,
      behavior: "smooth",
    });

    setActiveArrow(dir);
  };

  /* ---------------- DATA RETRIEVAL ---------------- */
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news?category=entertainment&country=india&limit=8");
        const json = await res.json();
        const fetchedArticles: ApiArticle[] = json.data || [];

        if (!fetchedArticles.length) return;

        /* SMALL STORIES */
        const mappedArticles: ApiArticle[] = fetchedArticles.map(
          (item, index) =>
            ({
              id: item.id,
              title: item.title,
              image_url: item.image_url || "/home41.png",
              category: item.category,
              author: item.author,
              publish_datetime: new Date(item.publish_datetime).toDateString(),
              link: item.link,
            } as ApiArticle)
        );


        setApiArticles(mappedArticles);
      } catch (err) {
        console.error("Failed to fetch news", err);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="w-full bg-white py-8 md:py-12 lg:pl-30">
      <div className="mx-auto max-w-8xl px-4 md:px-8">
        {/* HEADER */}
        <div className="mb-6 md:mb-8 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Entertainment
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className={`flex h-9 w-9 items-center justify-center rounded-md border
                ${
                  activeArrow === "left"
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={() => scroll("right")}
              className={`flex h-9 w-9 items-center justify-center rounded-md border
                ${
                  activeArrow === "right"
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-scroll no-scrollbar"
        >
          {apiArticles.map((article) => {
            const isActive = activeId === article.id;

            return (
              <article
                key={article.id}
                onClick={() => {
                  if (!isDesktop) {
                    setActiveId(isActive ? null : article.id);
                  }
                }}
                onMouseEnter={() => {
                  if (isDesktop) setActiveId(article.id);
                }}
                onMouseLeave={() => {
                  if (isDesktop && !lockHover) setActiveId(null);
                }}
                className={`
                  flex-shrink-0 cursor-pointer
                  w-[90vw] md:w-[536px]
                  h-auto md:h-[712px]
                  rounded-2xl overflow-hidden
                  transform transition-all duration-300 ease-out
                  ${
                    isActive
                      ? "scale-100 bg-[#FFF7F0]"
                      : "scale-[0.98] md:scale-[0.96] bg-white shadow-md hover:scale-[0.99] md:hover:scale-[0.98]"
                  }
                `}
              >
                {/* DEFAULT */}
                {!isActive && (
                  <>
                    <div className="relative h-[240px] md:h-[420px] w-full">
                      <img
                        src={article.image_url || "/home41.png"}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between p-4 md:p-6 h-auto md:h-[292px]">
                      <div>
                        <div className="mb-3 flex items-center gap-2">
                          <Image
                            src={/*article.authorAvatar*/ "/author.png"}
                            alt={article.author ? article.author.join(", ") : "Unknown"}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span
                            style={{ fontFamily: "var(--font-dm-sans)" }}
                            className="text-[12px] md:text-[14px] tracking-[-0.28px] text-black"
                          >
                            By {article.author}
                          </span>
                        </div>

                        <h3
                          style={{ fontFamily: "var(--font-albert-sans)" }}
                          className="text-[22px] md:text-[32px] font-bold tracking-[-1px] text-black leading-snug"
                        >
                          {article.title}
                        </h3>
                      </div>

                      <span
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        className="mt-4 text-[13px] md:text-[15px] tracking-[-0.5px] text-[#727272]"
                      >
                        {article.publish_datetime}
                      </span>
                    </div>
                  </>
                )}

                {/* ACTIVE */}
                {isActive && (
                  <div className="flex h-full flex-col justify-between p-5 md:p-10">
                    <div>
                      <div className="mb-4 md:mb-6 flex items-center gap-2">
                        <Image
                          src={/*article.authorAvatar*/ "/author.png"}
                          alt={article.author ? article.author.join(", ") : "Unknown"}
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                        <span className="text-sm text-gray-700">
                          By {article.author}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {article.title}
                      </h3>

                      <p
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        className="mt-3 md:mt-4 text-[15px] md:text-[18px] leading-[22px] md:leading-[25px] text-black"
                      >
                        {article.summary}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs md:text-sm text-gray-500">
                        {article.publish_datetime}
                      </span>

                      {/* ✅ READ MORE – CLICK FIX ONLY */}
                  <a
  href={`/mock-article/${article.id}`}
  target="_blank"
  rel="noopener noreferrer"
  onMouseEnter={() => setLockHover(true)}
  onMouseLeave={() => setLockHover(false)}
  onClick={(e) => {
    console.log("Read More clicked");
    e.stopPropagation();
  }}
  style={{ fontFamily: "var(--font-albert-sans)" }}
  className="
    inline-flex items-center gap-2
    rounded-lg border border-[#F25C05]
    px-3 md:px-4 py-2
    text-[14px] md:text-[16px]
    font-semibold tracking-[-0.5px]
    text-[#F25C05]
    bg-transparent no-underline
    hover:bg-[#F25C05] hover:text-white
    transition-all duration-150 ease-out
  "
>
  Read More <ArrowUpRight size={16} />
</a>

                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
