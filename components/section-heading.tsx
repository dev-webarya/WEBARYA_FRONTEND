export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10">
      {/* Decorative element */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-blue-500 to-purple-500 rounded-full"></div>
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
        <div className="h-[2px] w-12 bg-gradient-to-l from-transparent via-purple-500 to-blue-500 rounded-full"></div>
      </div>

      {/* Title with gradient */}
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle ? (
        <p className="text-gray-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
      ) : null}

      {/* Bottom accent */}
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
    </div>
  )
}
