import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="w-[700px] h-[700px] bg-red-300">
        <Image
          src="/images/garrett_parker.jpg"
          alt="photo"
          width={500}
          height={500}
          // quality={50}
          // className="w-[500px] h-[500px]"
        />

        <Image
          src="https://images.unsplash.com/photo-1505832018823-50331d70d237?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D"
          alt="photo"
          width={200}
          height={200}
          quality={50}
          // className="w-[500px] h-[500px]"
        />
      </div>
    </main>
  );
}
