import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function AccordionComponent() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const responce = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=4")
            setPosts(responce.data)

        }catch (err){
            console.error("Error fetching data:", err);
        }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-dvh bg-gray-800 flex justify-center items-center">
        <div>
            {posts.map(post => (
                <div key={post?.id} className="w-3xl bg-gray-600 border border-amber-600 m-3 py-5 px-2" onClick={() => setSelectedId(selectedId === post.id ? null : post.id)}>
                    <div className="flex justify-between">
                        <div>{post.title}</div>
                        <div>+</div>
                    </div>
                    {selectedId == post.id && 
                        <div className="pt-4">{post.body}</div>
                    }
                </div>                
            ))}
        </div>
    </div>
  );
}

export default AccordionComponent;
