import BlogSearch from "./BlogSearch";
import next from "../assets/icons8-greater-than-50.png";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

import share from "../assets/share.png";
import expand from "../assets/expand.png";
import { useNavigate } from "react-router-dom";

type Blog = {
  id: number;
  category: string;
  title: string;
  article: string;
  image: string;
  aurthor: string;
  aurthor_image: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog1,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
  {
    id: 2,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog2,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
  {
    id: 3,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog3,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
  {
    id: 4,
    category: "GREEN LIVING",
    title: "5 Eco-Friendly Cleaning Tips For Abuja Homes",
    article: `Protect your home and the city's ecosystem with these simple,
              effective botanical alternatives to harsh chemicals.`,
    image: blog1,
    aurthor: "So-Nyah Editorial",
    aurthor_image: "",
  },
];
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase, type Post } from "../Client/lib/supabase";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Post | null>(null);
  const navivgate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) {
        setBlog(data);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p className="p-10">Loading...</p>;


  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 bg-white pb-16 sm:pb-20 overflow-x-hidden">
      <BlogSearch />

      {/* NAV */}
      <section>
        <div className="flex flex-wrap mt-8 items-center justify-center gap-2  text-gray-500 text-center">
          <p className="text-xs! sm:text-sm!">Blog</p>
          <img src={next} className="w-3 h-3" />
          <p className="text-xs! sm:text-sm!">Cleaners Article</p>
          <img src={next} className="w-3 h-3" />
          <p className="text-gray-700 text-xs! sm:text-sm!">
            {blog.title}
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="mt-3">
        <div
          className="relative rounded-b-3xl w-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] bg-center bg-cover flex items-end"
          style={{ backgroundImage: `url(${blog.image_url || blog1})` }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-b-3xl"></div>

          <h3 className="relative text-xl sm:text-3xl md:text-5xl lg:text-[62px] text-white p-4 sm:p-6 leading-tight">
            {blog.title}
          </h3>
        </div>

        {/* CONTENT */}
        <section className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-10">
          


          {/* ARTICLE */}
          <div className="flex-1">
            <p className="text-base! sm:text-lg! md:text-xl! lg:text-[24px]! text-black! leading-relaxed">
              {blog.introduction}
            </p>

            <div className="bg-[#F6F3F2] border-l-4 border-[var(--primary)] pl-4 mt-6 mb-8">
              <h3 className="text-lg! sm:text-xl! text-italic! md:text-[24px] p-3">
                "Eco-friendly cleaning isn't just about the products you use;
                it's about the legacy of health you leave in your living space."
              </h3>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold">
              1. Harnessing the Power of Local Citrus
            </h2>

            <p className="text-sm sm:text-base! md:text-lg! lg:text-[20px]! leading-7 sm:leading-8 md:leading-10 pb-10 border-b">
              {blog.content}
            </p>

            {/* TAGS */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[1, 2, 3, 4].map((_, i) => (
                <h4
                  key={i}
                  className="rounded-2xl bg-[var(--bg-section)] px-3 py-2 text-sm"
                >
                  #AbujaLiving
                </h4>
              ))}
            </div>
          </div>

                    {/* SIDEBAR */}
          <div className="flex flex-col gap-2 w-full items-center lg:max-w-[250px]">
            <div className="w-[50px] h-[50px] rounded-full">
              <img
                src={blog1}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <h4 className="text-lg sm:text-[20px] font-bold">AUTHOR</h4>
            <h3>So-nyah Manager</h3>
            <p>CEO</p>

            <h4 className="mt-5 text-lg sm:text-[20px] font-bold">
              PUBLISHED ON
            </h4>
            <p>June 20, 2024</p>

            <h4 className="mt-5 text-lg sm:text-[20px] font-bold">
              SHARE THIS ARTICLE
            </h4>
            <button>
              <img src={share} className="w-[30px] h-[30px]" />
            </button>
          </div>
        </section>
      </section>

      {/* RELATED */}
      <section className="mt-20">
        <p className="text-[var(--primary)]!">CONTINUE READING</p>

        <div className="flex  sm:flex-row sm:items-center sm:justify-between justify-between w-full gap-4  whitespace-nowrap">
          <h3 className="text-lg! lg:text-3xl! sm:text-xl md:text-[36px] font-bold whitespace-nowrap">
            You Might Also Like
          </h3>

          <button
            onClick={() => navivgate("/services")}
            className="flex items-center gap-3 transition-all duration-300 hover:translate-x-[3px] group whitespace-nowrap"
          >
            <span className="text-[var(--primary)]  font-bold whitespace-nowrap">
              View all Articles
            </span>
            <img
              src={expand}
              className="transition-all duration-300 group-hover:scale-110 whitespace-nowrap"
            />
          </button>
        </div>

        {/* CARDS */}
        <div className="overflow-x-auto pt-6 sm:pt-8 lg:pt-10 scrollbar-hide">
          <div className="grid grid-flow-col auto-cols-[260px] sm:auto-cols-[280px] md:auto-cols-[300px] lg:auto-cols-[320px] gap-6 lg:gap-10">
            {blogs.map((article, index) => (
              <div
                key={index}
                className="border border-[#0000001a] rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)] group"
              >
                <img
                  src={article.image}
                  className="w-full h-[180px] md:h-[190px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="p-6 sm:p-7 lg:p-8 flex flex-col gap-3">
                  <h5 className="text-sm text-[var(--text-sub-h)] group-hover:text-[var(--primary)]">
                    {article.category}
                  </h5>

                  <h4 className="text-base sm:text-lg font-bold group-hover:text-[var(--primary)]">
                    {article.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;