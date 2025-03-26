import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";

const LastUpdate = ({ repoName }) => {
    const [lastUpdated, setLastUpdated] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepoData = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/JuliCode07/${repoName}`);
                if (!response.ok) throw new Error("Error fetching repository data");

                const data = await response.json();
                const updatedAt = new Date(data.updated_at);
                setLastUpdated(updatedAt);
            } catch (err) {
                setError(err.message);
            }
        };

        if (repoName) {
            fetchRepoData();
        }
    }, [repoName]);

    return (
        <div className="bg-gray-800 text-white rounded-lg">
            {error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : lastUpdated ? (
                <p className="flex items-center gap-2">
                    <i className="ri-time-line"></i>
                    <span>
                        Last updated: {formatDistanceToNow(lastUpdated, { addSuffix: true, locale: enUS })}
                    </span>
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default LastUpdate;
