import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

function AccordionComponent() {
    const [selectedId, setSelectedId] = useState<number[]>([]);
    const [enable, setEnable] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts?_limit=4",
                );
                setPosts(responce.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    const handleSelection = (id: number) => {
        if (enable) {
            setSelectedId((prev) =>
                prev.includes(id)
                    ? prev.filter((item) => item !== id)
                    : [...prev, id],
            );
        } else {
            setSelectedId((prev) => (prev[0] === id ? [] : [id]));
        }
    };

    return (
        <div className="w-full h-dvh bg-gray-800 flex justify-center items-center">
            <div>
                <div className="flex justify-center mb-6">
                    <button
                        className="px-6 py-2 bg-amber-500 text-black font-semibold rounded-lg shadow-md hover:bg-amber-400 active:scale-95 transition-all duration-200"
                        onClick={() => {
                            setSelectedId([]);
                            setEnable((prev) => !prev);
                        }}
                    >
                        {enable
                            ? "Disable Multi Selection"
                            : "Enable Multi Selection"}
                    </button>
                </div>
                {posts.map((post) => (
                    <div
                        key={post?.id}
                        className="w-3xl bg-gray-600 border border-amber-800 m-3 py-5 px-2"
                        onClick={() => handleSelection(post.id)}
                    >
                        <div className="text-amber-600 flex justify-between">
                            <div>{post.title}</div>
                            <div>+</div>
                        </div>
                        {selectedId.includes(post.id) && (
                            <div className="pt-4">{post.body}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AccordionComponent;
