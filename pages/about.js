import React from "react";
import Link from "next/link";

import Layout from "../components/Layout.js";

const About = () => (
	<section>
		<Layout title="This is About Component">
			<div>
				About
			</div>
			<div>
				<Link href="/">Home</Link>
			</div>
		</Layout>
	</section>
);

export default About;
