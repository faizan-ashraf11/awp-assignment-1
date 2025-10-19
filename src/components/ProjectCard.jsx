import React from 'react'

export default function ProjectCard({ title, description, tags = [], link }) {
  return (
    <article className="bg-white rounded-xl p-6 shadow-soft border border-accent hover:translate-y-[-4px] transition-transform">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-gray-700">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full border text-primary border-primary/20">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <a
          href={link || '#'}
          target="_blank"
          rel="noreferrer"
          className="btn-primary hover:opacity-90"
        >
          View Details
        </a>

        <button
          className="text-sm underline text-primary hover:text-white hover:bg-primary px-3 py-1 rounded"
          onClick={() => alert(`More details about "${title}"`)}
        >
          Quick preview
        </button>
      </div>
    </article>
  )
}
