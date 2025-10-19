import React from 'react'

const profileSvg = (
  <svg viewBox="0 0 120 120" className="w-40 h-40 rounded-full overflow-hidden">
    <rect width="120" height="120" fill="#BDDDFC" />
    <g transform="translate(30,22)">
      <circle cx="30" cy="22" r="18" fill="#6A89A7" />
      <rect x="6" y="48" width="48" height="24" rx="6" fill="#6A89A7" />
    </g>
  </svg>
)

export default function About() {
  const name = 'Faizan Ashraf'
  const role = 'Software Engineer'
  const interests = ['Angular', 'Next JS', 'React', 'TypeScript', 'Tailwind CSS']

  return (
    <section id="about" className="mt-8 mb-12 grid md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-1 flex justify-center">
        <div className="rounded-2xl p-4 shadow-soft bg-white border border-accent">
          {profileSvg}
        </div>
      </div>

      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold text-primary">{name}</h2>
        <p className="mt-1 text-sm text-gray-700">{role}</p>

        <div className="mt-4 text-sm text-gray-800 space-y-3">
          <p>
            {`Hi, I'm ${name}. I build responsive and scalable web applications using modern JavaScript frameworks. My area of interest includes front-end development, building UI/UX, and integrating backend services.`}
          </p>

          <div>
            <h3 className="font-semibold">Technologies & Interests</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {interests.map((it) => (
                <span key={it} className="text-xs px-2 py-1 rounded-md border border-primary text-primary">
                  {it}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div>
              <p className="font-semibold">Contact</p>
              <p>Phone: +92-320-4498095</p>
              <p>Email: faizanashraf0021@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p>Wyeth Society, Lahore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
