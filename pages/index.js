import React from "react";
import Link from "next/link";
import "isomorphic-fetch";
import Layout from "../components/Layout.js";

const Home = ({ stars }) => (
	<Layout title="This is Home Component">
		<section>
			<div>ReactJS has {stars} stars </div>
		</section>
	</Layout>
);

Home.getInitialProps = async ({ req }) => {
	const res = await fetch("https://api.github.com/repos/facebook/react");
	const json = await res.json();
	return { stars: json.stargazers_count };
};

export default Home;
