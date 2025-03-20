import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "./utils/projects";

export default function TabsProjects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "100px 0px 100px 0px" });
    const [activeTab, setActiveTab] = useState("practiceProjects");

    return (
        <motion.div ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-[95%] mx-auto"
            id="projects"
        >
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-10">
                {["practiceProjects", "clientProjects"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-6 py-2 text-sm font-semibold rounded-full cursor-pointer transition-all duration-500 ${activeTab === tab ? "bg-blue-600 hover:bg-blue-800 text-white" : "bg-gray-200 text-gray-700"
                            }`}
                    >
                        {tab === "practiceProjects" ? "Practice Projects" : "Client Projects"}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-blue-600 rounded-full cursor-pointer -z-10"
                                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Lista de proyectos */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
                >
                    {projects[activeTab].map((project) => (
                        <div key={project.id} className="bg-gray-800 text-white rounded-2xl shadow-md w-full p-2">
                            <div className="relative h-52 w-full bg-gray-600 rounded-xl group">

                                <img alt="Responsive Landing Page" loading="lazy" decoding="async" data-nimg="fill" className="absolute inset-0 rounded-xl object-cover transition-transform duration-500 h-full w-full group-hover:scale-110 group-hover:rotate-1 group-hover:-translate-y-2" src="/image.png" />

                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-1 group-hover:-translate-y-2  transition-all duration-500">
                                    <p className="p-4 text-3xl font-black">#{project.id}</p>
                                </div>

                            </div>
                            <div className="p-2">
                                <p className="text-lg font-bold">{project.name}</p>
                                <p className="text-sm text-gray-300">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
