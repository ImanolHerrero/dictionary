import Form from "./components/form"

export default async function Home() {

  return (
    <main className="flex flex-col items-center justify-center mt-20 text-slate-800">
      <h1 className='text-4xl font-bold mb-8 text-left'>📙 Dictionary app</h1>
      <Form />
    </main>

  )
}
