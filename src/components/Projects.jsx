import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Hotel Management System',
    description: 'Angular-based hotel profiles and booking management UI.',
    tags: ['Angular', 'MySQL'],
    link: '#'
  },
  {
    id: 2,
    title: 'Odoo Clone',
    description: 'A business dashboard built with Angular to replicate key Odoo features.',
    tags: ['Angular', 'UI'],
    link: '#'
  },
  {
    id: 3,
    title: 'E-commerce — People AI',
    description: 'Full-featured eCommerce platform with cart, checkout, and dashboards.',
    tags: ['React', 'NodeJS'],
    link: '#'
  },
  {
    id: 4,
    title: 'Indoor Booking & Tournament Solution',
    description: 'Marketplace to book indoor sports arenas and join tournaments.',
    tags: ['NextJS', 'Matchmaking'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-bold text-primary">Projects</h2>
      <p className="text-sm text-gray-700 mt-1">Some select projects I've worked on.</p>

      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} title={p.title} description={p.description} tags={p.tags} link={p.link} />
        ))}
      </div>
    </section>
  )
}
