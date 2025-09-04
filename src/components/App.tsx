import * as React from "react";
import Layout from "./Layout";
import axios from "axios";

const App = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	React.useEffect(() => {
		console.log("App mounted");
		getData();
	}, []);

	const getData = () => {
		const ENDPOINT =
      "https://private-anon-8c2680aa4c-dailysmarty.apiary-mock.com/posts";
		axios(ENDPOINT).then(response => {
			setIsLoading(false);
			return console.log("Data fetched:", response.data);
		}).catch(error => {
			setIsLoading(false);
			return console.error("Error fetching data:", error);
		});
	};

	const content = isLoading ? "Loading..." : "Data loaded";

  return <Layout>{content}</Layout>;
};

export default App;
