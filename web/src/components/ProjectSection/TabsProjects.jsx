import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function TabsProjects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "100px 0px 100px 0px" });
    const [activeTab, setActiveTab] = useState("practiceProjects");

    const projects = {
        practiceProjects: [
            { id: 1, name: "Portfolio", description: "Mi portafolio con animaciones y transiciones." },
            { id: 2, name: "E-commerce", description: "Tienda en línea con carrito de compras." },
        ],
        clientProjects: [
            { id: 3, name: "App Finanzas", description: "Aplicación para gestionar gastos." },
            { id: 4, name: "Chat App", description: "App de mensajería en tiempo real." },
        ],
    };

    return (
        <motion.div ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full max-w-2xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-6">
                {["practiceProjects", "clientProjects"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-6 py-2 text-sm font-semibold rounded-full transition-all ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                            }`}
                    >
                        {tab === "practiceProjects" ? "Practice Projects" : "Client Projects"}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
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
                    className="flex gap-2"
                >
                    {projects[activeTab].map((project) => (
                        <div key={project.id} className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
                            <h3 className="text-lg font-bold">{project.name}</h3>
                            <p className="text-sm text-gray-300">{project.description}</p>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
