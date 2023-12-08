import Form from "./components/form"



export default async function Home({ params }: any) {


  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className='text-4xl font-bold mb-8 text-left'>📙 Dictionary app</h1>
      </div>
      <Form />
    </main>

  )
}
