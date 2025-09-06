import * as React from "react";
import Layout from "./Layout";
import axios from "axios";

const App = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [posts, setPosts] = React.useState([]);
	React.useEffect(() => {
		console.log("App mounted");
		getData();
	}, []);

	const getData = () => {
		const ENDPOINT = `https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=${process.env.REACT_APP_GNEWS_API_KEY}`;
		axios(ENDPOINT).then(response => {
			setIsLoading(false);
			setPosts(response.data.articles);
		}).catch(error => {
			setIsLoading(false);
			return console.error("Error fetching data:", error);
		});
	};

	const postRender = posts.map(post => {
		return (
			<div key={post.id}>
				<h2>{post.title}</h2>
				<h4>{post.description}</h4>
				<p>{post.content}</p>
			</div>
		)
	});

	const content = isLoading ? <div>"Loading..."</div> : (<div>{postRender}</div>);

  return <Layout>{content}</Layout>;
};

export default App;
