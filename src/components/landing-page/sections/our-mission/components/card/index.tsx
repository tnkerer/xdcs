'use client'

import React, { useEffect } from 'react';
import './styles.css';

const Card: React.FC = () => {
  useEffect(() => {
    if (!CSS.supports('anchor-name: --anchor')) {
      const LIST = document.querySelector('ul');
      if (LIST) {
        LIST.dataset.enhanced = 'true';
        let current: HTMLElement | null = null;

        const updateBounds = ({ x, y }: { x: number; y: number }) => {
          const ARTICLE = document.elementFromPoint(x, y)?.closest('li')?.querySelector('article') as HTMLElement | null;
          if (ARTICLE !== current) {
            current = ARTICLE;
            if (current) {
              const BOUNDS = current.getBoundingClientRect();
              LIST.style.setProperty('--top', `${BOUNDS.top}px`);
              LIST.style.setProperty('--right', `${BOUNDS.right}px`);
              LIST.style.setProperty('--bottom', `${BOUNDS.bottom}px`);
              LIST.style.setProperty('--left', `${BOUNDS.left}px`);
              LIST.style.setProperty('--height', `${BOUNDS.height}px`);
              LIST.style.setProperty('--width', `${BOUNDS.width}px`);
            }
          }
        };

        LIST.addEventListener('pointermove', (event) => {
          const { clientX, clientY } = event;
          updateBounds({ x: clientX, y: clientY });
        });
      }
    }
  }, []);

  return (
    <main>
      <ul>
        <li>
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <h3>Develop.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias fuga et ab magnam aliquam commodi
              ratione vel fugit nesciunt voluptatibus.
            </p>
          </article>
        </li>
        {/* Repeat similar structure for other list items */}
      </ul>
    </main>
  );
};

export default Card;