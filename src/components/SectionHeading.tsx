
type SectionHeadingprops = {
  children: React.ReactNode
}

export default function SectionHeading({children}: SectionHeadingprops) {
  return (
    <h3 className="text-4xl font-bold text-center">
      {children}
    </h3>
  )
}
