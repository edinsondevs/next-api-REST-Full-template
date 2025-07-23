import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import swaggerSpec from "../swagger/index";

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			spec: swaggerSpec,
		},
	};
};

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>API - CRUD</title>
			</Head>
			<SwaggerUI
				spec={spec}
				docExpansion='list'
				defaultModelsExpandDepth={-1}
			/>
		</>
	);
}

export default ApiDoc;
