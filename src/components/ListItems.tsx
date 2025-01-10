import Link from "next/link"

type ListItemsprops = {
    children: React.ReactNode
  }


export default function ListItems({children}:ListItemsprops) {
  return (

    <ul className="flex flex-col gap-y-2">
        <li>
            <Link href={'/'} className="text-blue-900  hover:text-blue-950">{children}</Link>
        </li>
    </ul>


  )
}
