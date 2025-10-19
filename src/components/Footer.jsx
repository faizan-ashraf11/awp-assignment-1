import React from 'react';

export const contactInfo = {
  name: 'Faizan Ashraf',
  phone: '+92-320-4498095',
  email: 'faizanashraf0021@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faizan-ashraf-87603426a',
  github: 'https://github.com/faizan-ashraf11',
  portfolio: 'https://faizan-ashraf.vercel.app/'
};

export default function Footer({ info = contactInfo }) {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-200 text-gray-700">
      <div className="container mx-auto px-6 py-10 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-primary">{info.name}</h3>
          <p className="text-sm mt-1 text-gray-600">Full Stack Developer</p>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            Building elegant, scalable, and efficient web solutions with modern technologies.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-800 uppercase mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium">Phone:</span> {info.phone}</li>
            <li>
              <span className="font-medium">Email:</span>{' '}
              <a href={`mailto:${info.email}`} className="text-primary hover:underline">
                {info.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-800 uppercase mb-3">Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={info.portfolio} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href={info.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={info.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center text-xs py-4 bg-white text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold text-primary">{info.name}</span> — All rights reserved.
      </div>
    </footer>
  );
}
