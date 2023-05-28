import Image from 'next/image'
import Link from "next/Link"
import CreateForm from "./CreateForm";

export default function Home() {
  return (
    <div>
      Home
      <ul>
        <Link href="t">click</Link>
      </ul>

      <CreateForm />
    </div>
  )
}
