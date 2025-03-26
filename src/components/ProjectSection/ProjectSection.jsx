import TabsProjects from "./TabsProjects";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "../../styles.css"

export default function ProjectSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px 0px -50px 0px" });
    return (
        <section
            className="relative py-10 w-screen overflow-hidden flex justify-center"
        >
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} className="projects_div container rounded-3xl px-3 md:px-4 py-8 shadow-2xl shadow-indigo-900/30">
                <TabsProjects />
            </motion.div>
        </section>
    )
}