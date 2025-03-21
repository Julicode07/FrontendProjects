import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "./utils/projects";

export default function TabsProjects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "100px 0px 100px 0px" });
    const [activeTab, setActiveTab] = useState("practiceProjects");
    const [projectsUrl, setProjectsUrl] = useState("");

    useEffect(() => {
        // Establece la URL dependiendo de la pestaña activa
        if (activeTab === "practiceProjects") {
            setProjectsUrl(""); // No hay URL específica para los proyectos de práctica
        } else {
            setProjectsUrl(""); // Dejar vacío porque cada proyecto tiene su propio link
        }
    }, [activeTab]);

    return (
        <motion.div
            ref={ref}
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
                        className={`relative px-6 py-2 text-sm font-semibold rounded-full cursor-pointer transition-all duration-500 ${activeTab === tab
                            ? "bg-blue-600 hover:bg-blue-800 text-white"
                            : "bg-gray-200 text-gray-700"
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
                        <div
                            key={project.id} // Asegúrate de que cada proyecto tiene un ID único
                            className="bg-gray-800 text-white rounded-2xl shadow-md w-full p-2"
                        >
                            <div className="relative h-52 w-full cursor-pointer group">
                                <img
                                    alt="Responsive Landing Page"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="absolute inset-0 rounded-xl object-cover transition-transform duration-300 h-full w-full group-hover:scale-110 group-hover:rotate-1 group-hover:-translate-y-2"
                                    src="/image1.png"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-1 group-hover:-translate-y-2 transition-all duration-300">
                                    <p className="p-4 text-3xl font-black">#{project.id}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 p-2">
                                <p className="text-xl font-bold">{project.name}</p>
                                <p className="text-sm text-gray-300">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((stack) => (
                                        <p
                                            key={stack}
                                            className="bg-slate-600 px-2 py-1 rounded-full text-sm text-gray-100"
                                        >
                                            {stack}
                                        </p>
                                    ))}
                                </div>
                                {/* La URL ahora es única por cada proyecto de cliente */}
                                {activeTab === "clientProjects" ? (
                                    <a
                                        href={project.url} // Usar el enlace específico del proyecto
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Demo
                                    </a>
                                ) : (
                                    <a
                                        href={projectsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Demo
                                    </a>
                                )}
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
