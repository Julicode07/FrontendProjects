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
            { id: 3, name: "App Finanzas", description: "Aplicación para gestionar gastos." },
            { id: 4, name: "Chat App", description: "App de mensajería en tiempo real." },
            { id: 5, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 6, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 7, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 8, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 9, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 10, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 11, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 12, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 13, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 14, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 15, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 16, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 17, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 18, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 19, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 20, name: "Pokedex", description: "Pokedex con información de pokemons." },
        ],
        clientProjects: [
            { id: 21, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 22, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 23, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 24, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 25, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 26, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 27, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 28, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 29, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 30, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 31, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 32, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 33, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 34, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 35, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 36, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 37, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 38, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 39, name: "Pokedex", description: "Pokedex con información de pokemons." },
            { id: 40, name: "Pokedex", description: "Pokedex con información de pokemons." },
        ],
    };

    return (
        <motion.div ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full max-w-2xl mx-auto"
            id="projects"
        >
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-6">
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
                    className="flex justify-center flex-wrap gap-2"
                >
                    {projects[activeTab].map((project) => (
                        <div key={project.id} className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
                            <p className="text-lg font-bold">{project.name}</p>
                            <p className="text-sm text-gray-300">{project.description}</p>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
