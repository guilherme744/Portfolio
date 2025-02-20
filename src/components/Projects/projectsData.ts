
type projectsProps = {
    title: string;
    description: string;
    image: string;
    tech: string[];
    linkPreview?: string;
    linkGithub: string;
}


export const projectsData: projectsProps[] = [
    {
        title: 'Tudo Curiosidade AI-generated curiosity website',
        description: 'Discover fascinating AI-generated curiosities! Our site, built with Next.js and Tailwind',
        image: '/images/projects/tudocuriosidade.png',
        tech: ['Next', 'TypeScript', 'Notion', 'Tailwind', 'Generative AI'],
        linkPreview: 'https://tudocuriosidade.com.br',
        linkGithub: 'https://github.com/raminhuk/tudocuriosidade.com.br'
    },
    {
        title: 'Tunefy: Your Favorite Spotify Music Website',
        description: 'Discover your top songs and artists, favorite genres, and relive recent listens in a unique and meaningful way',
        image: '/images/projects/tunefy.png',
        tech: ['React', 'TypeScript', 'Next', 'Tailwind', 'Axios', 'Zustand', 'Eslint'],
        linkPreview: 'https://tunefy.fabra.dev',
        linkGithub: 'https://github.com/raminhuk/tunefy'
    },
    {
        title: 'QRCode Generator in React + Next',
        description: 'Built using React, Next and Ant Design UI, this QRCode Generator is a user-friendly tool that allows users to effortlessly create QR codes for various purposes.',
        image: '/images/projects/fabracode.png',
        tech: ['React', 'Next', 'TypeScript', 'Ant Design', 'Tailwind'],
        linkPreview: 'https://qrcode.fabra.dev',
        linkGithub: 'https://github.com/raminhuk/qr-code-generator'
    },
    {
        title: 'A simple to-do list app with React',
        description: 'This project is a user-friendly to-do list designed to help you manage your tasks effortlessly. Easily add, edit, and check off tasks to stay organized and focused',
        image: '/images/projects/to-do-list.png',
        tech: ['React', 'JavaScript', 'Styled Components', 'ChakraUi'],
        linkPreview: 'https://tasks.fabra.dev',
        linkGithub: 'https://github.com/raminhuk/react-todo-list'
    },
    {
        title: 'A simple weather application developed with React',
        description: 'A simple weather application developed with React, featuring real-time updates, customizable widgets',
        image: '/images/projects/weather.png',
        tech: ['React', 'JavaScript', 'Styled Components', 'Axios'],
        linkPreview: 'https://weather.fabra.dev',
        linkGithub: 'https://github.com/raminhuk/react-weather'
    },
    {
        title: 'A simple Tic Tac Toe application',
        description: 'Crafted with React, this straightforward Tic Tac Toe application delivers an interactive and engaging experience for players of all ages.',
        image: '/images/projects/tic-tac-toe.png',
        tech: ['React', 'TypeScript', 'NextJs', 'Tailwind'],
        linkPreview: 'https://tic-tac-toe.fabra.dev',
        linkGithub: 'https://github.com/raminhuk/tic-tac-toe'
    },
   
    
]