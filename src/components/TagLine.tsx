
type TagLineprops = {
    children: React.ReactNode
  }

export default function TagLine({children}:TagLineprops) {
  return (
    <p className="mt-4 text-lg text-gray-600">
        {children}
    </p>
  )
}
