
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import swaggerSpec from '../swagger/index'; 

export const getStaticProps: GetStaticProps = async () => {
  
  return {
		props: {
			spec: swaggerSpec,
		},
  };
};

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} 
    docExpansion="none"
    defaultModelsExpandDepth={-1}
    filter={true}
  />;
}

export default ApiDoc;
