import { useState } from "react";
import logo from '../assets/logo.jpeg';
import CreatePost from "./CreatePost";

type ViewType = "all" | "create" | "draft";

const Admin = () => {
    const [activeView, setActiveView] = useState<ViewType>("all");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const posts = [
        { id: 1, title: "Eco Cleaning Tips", status: "Published" },
        { id: 2, title: "Abuja Home Hygiene", status: "Published" },
    ];

    const drafts = [
        { id: 3, title: "Unfinished Blog Post", status: "Draft" },
    ];

    const navItems: { view: ViewType; label: string }[] = [
        { view: "all", label: "All Posts" },
        { view: "create", label: "Create Post" },
        { view: "draft", label: "Drafts" },
    ];

    const handleNav = (view: ViewType) => {
        setActiveView(view);
        setSidebarOpen(false); // close on mobile after selection
    };

    return (
        <div className="flex h-screen bg-[#f9fafb] overflow-hidden relative">

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-20 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed md:relative z-30 md:z-auto
                    h-full
                    w-[220px] md:w-[180px] lg:w-[210px] xl:w-[230px]
                    bg-white shadow-md flex flex-col p-4
                    transition-transform duration-300 ease-in-out
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                `}
            >
                <img src={logo} alt="Logo" className="-ml-4 mb-8 mx-auto w-[80%] object-contain" />

                <div className="flex flex-col gap-2">
                    {navItems.map(({ view, label }) => (
                        <button
                            key={view}
                            onClick={() => handleNav(view)}
                            className={`text-left px-4 py-2.5 rounded-lg text-sm transition ${
                                activeView === view
                                    ? "bg-purple-100 text-purple-600 font-semibold"
                                    : "hover:bg-gray-100 text-gray-700"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* Header */}
                <div className="h-[64px] md:h-[72px] bg-white shadow-sm flex items-center px-4 md:px-6 gap-3 flex-shrink-0">

                    {/* Hamburger — mobile only */}
                    <button
                        className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 flex-shrink-0"
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open menu"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <line x1="3" y1="12" x2="21" y2="12"/>
                            <line x1="3" y1="18" x2="21" y2="18"/>
                        </svg>
                    </button>

                    {activeView !== "create" && (
                        <h2 className="text-base md:text-xl font-semibold capitalize flex-1">
                            {activeView === "all" ? "All Posts" : "Draft Posts"}
                        </h2>
                    )}

                    {activeView === "create" && (
                        <div className="flex items-center justify-between flex-1 min-w-0">
                            <span className="text-base md:text-xl font-semibold truncate">Create New Post</span>
                            <div className="flex gap-2 flex-shrink-0 ml-3">
                                <button className="border border-gray-300 bg-white rounded-lg px-3 md:px-4 py-1.5 text-xs md:text-sm text-gray-700 cursor-pointer font-[Georgia,serif] whitespace-nowrap">
                                    Save Draft
                                </button>
                                <button className="bg-[#1e3a5f] border-none rounded-lg px-3 md:px-5 py-1.5 text-xs md:text-sm text-white cursor-pointer font-[Georgia,serif] font-semibold whitespace-nowrap">
                                    Publish Post
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <div className="p-4 md:p-6 overflow-y-auto flex-1">

                    {/* ALL POSTS */}
                    {activeView === "all" && (
                        <div className="grid gap-3 md:gap-4 max-w-3xl">
                            {posts.map(post => (
                                <div key={post.id} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
                                    <div>
                                        <h3 className="font-semibold text-sm md:text-base">{post.title}</h3>
                                        <p className="text-xs md:text-sm text-gray-500">{post.status}</p>
                                    </div>
                                    <button className="text-purple-600 hover:underline text-sm flex-shrink-0 ml-3">View</button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CREATE POST */}
                    {activeView === "create" && <CreatePost />}

                    {/* DRAFTS */}
                    {activeView === "draft" && (
                        <div className="grid gap-3 md:gap-4 max-w-3xl">
                            {drafts.map(post => (
                                <div key={post.id} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
                                    <div>
                                        <h3 className="font-semibold text-sm md:text-base">{post.title}</h3>
                                        <p className="text-xs md:text-sm text-gray-500">{post.status}</p>
                                    </div>
                                    <button className="text-purple-600 hover:underline text-sm flex-shrink-0 ml-3">Edit</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
