import Layout from "@/components/Layout";

export async function getServerSideProps(){
    try {
        console.log(`${process.env.API_URL}/posts`);
        const res= await fetch(`${process.env.API_URL}/posts`);
        const posts= await res.json();
        return{props:{posts}}

    } catch (error) {
        console.log('Failed to fetch posts');
        return{props:{post:[]}}

    }
  
}

export default function PostPage(props) {
    return (
      <Layout>
        <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {props.posts.map((post) => (
            <li
              key={post.id}
              className="bg-white rounded shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <small className="text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </small>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }