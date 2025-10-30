import React from 'react'

function FontExample() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-cabinet-bold text-gray-900">
        Cabinet Grotesk Font Demo
      </h1>
      
      <div className="space-y-4">
        <div className="font-cabinet-thin text-2xl">
          Thin (100) - Cabinet Grotesk Thin
        </div>
        <div className="font-cabinet-extralight text-2xl">
          Extralight (200) - Cabinet Grotesk Extralight
        </div>
        <div className="font-cabinet-light text-2xl">
          Light (300) - Cabinet Grotesk Light
        </div>
        <div className="font-cabinet-regular text-2xl">
          Regular (400) - Cabinet Grotesk Regular
        </div>
        <div className="font-cabinet-medium text-2xl">
          Medium (500) - Cabinet Grotesk Medium
        </div>
        <div className="font-cabinet-bold text-2xl">
          Bold (700) - Cabinet Grotesk Bold
        </div>
        <div className="font-cabinet-extrabold text-2xl">
          Extrabold (800) - Cabinet Grotesk Extrabold
        </div>
        <div className="font-cabinet-black text-2xl">
          Black (900) - Cabinet Grotesk Black
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <h2 className="text-heading text-3xl">Heading Style</h2>
        <h3 className="text-subheading text-xl">Subheading Style</h3>
        <p className="text-body text-lg">Body text style with regular weight and good line height for readability.</p>
        <p className="text-caption text-sm text-gray-600">Caption style with light weight for secondary information.</p>
      </div>

      <div className="mt-8">
        <h3 className="font-cabinet-bold text-xl mb-4">Variable Font Weight Control</h3>
        <div className="font-variable text-2xl" style={{ fontVariationSettings: "'wght' 300" }}>
          Variable Weight 300
        </div>
        <div className="font-variable text-2xl" style={{ fontVariationSettings: "'wght' 600" }}>
          Variable Weight 600
        </div>
        <div className="font-variable text-2xl" style={{ fontVariationSettings: "'wght' 900" }}>
          Variable Weight 900
        </div>
      </div>
    </div>
  )
}

export default FontExample
