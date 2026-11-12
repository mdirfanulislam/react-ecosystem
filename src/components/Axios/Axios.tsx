import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const response = await axios.get<Post>(
  "https://jsonplaceholder.typicode.com/posts/2",
);

console.log(response.data.id);

const Axios = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 m-10">
      <div className="bg-rose-400 text-white p-4 shadow-2xl rounded-4xl flex flex-col gap-4  hover:scale-105 transition-all duration-500">
        <div className="card-body">
          <h2 className="text-3xl font-extrabold">{response.data.id}</h2>
          <h3 className="text-2xl text-gray-700 font-bold">
            {response.data.title.toUpperCase()}
          </h3>
          <p className="text-lg font-medium text-gray-50">
            {response.data.body}
          </p>
        </div>
      </div>

      <div className="bg-rose-400 text-white p-4 shadow-2xl rounded-4xl flex flex-col gap-4  hover:scale-105 transition-all duration-500">
        <div className="card-body">
          <h2 className="text-3xl font-extrabold">{response.data.id}</h2>
          <h3 className="text-2xl text-gray-700 font-bold">
            {response.data.title.toUpperCase()}
          </h3>
          <p className="text-lg font-medium text-gray-50">
            {response.data.body}
          </p>
        </div>
      </div>

      <div className="bg-rose-400 text-white p-4 shadow-2xl rounded-4xl flex flex-col gap-4  hover:scale-105 transition-all duration-500">
        <div className="card-body">
          <h2 className="text-3xl font-extrabold">{response.data.id}</h2>
          <h3 className="text-2xl text-gray-700 font-bold">
            {response.data.title.toUpperCase()}
          </h3>
          <p className="text-lg font-medium text-gray-50">
            {response.data.body}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Axios;
