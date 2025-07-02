
import Link from 'next/link';

export default function Home() {
  return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24'>
			<div className='text-center'>
				<h1 className='text-4xl font-bold'>
					Plantilla de API de Next.js
				</h1>
				<p className='mt-4 text-lg'>
					Esta es una plantilla para crear API RESTful con Next.js,
					MongoDB y Swagger. .
				</p>
				<Link
					href='/docs'
					legacyBehavior>
					<a className='mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700'>
						Ver la documentación de la API
					</a>
				</Link>
			</div>
		</main>
  );
}
