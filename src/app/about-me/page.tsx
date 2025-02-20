import { Metadata } from 'next'

import AboutMe from '@/components/About'
import Layout from '@/components/Layout'
import Title from '@/components/Title'

export const metadata: Metadata = {
    title: 'About Me - Guilherme',
    description: 'Turning Ideas into Digital Reality: Guilherme, a Full Stack Developer passionate about crafting elegant and functional interfaces to deliver exceptional user experiences',
    openGraph: {
        title: 'About Me - Guilherme',
        description: 'Meet Guilherme, a passionate Full Stack developer with expertise in various technologies. Learn about his education, skills, and dedication to staying updated with the latest trends in the industry',
    },
}

export default function AboutPage() {
    return (
        <Layout>
            <div className="w-full">
                <div className="container">
                    <div className="my-12 max-lg:my-4">
                        <Title
                            type="h1" 
                            title="About me" 
                            description="Crafting visually stunning and functional experiences - I'm a Full Stack Developer passionate about turning ideas into digital reality"
                        />
                        <div className="tracking-wide text-coldGrey max-xs:text-sm">
                            <article className="my-16 flex items-center px-16 max-xl:px-0 max-lg:my-6 max-lg:flex-col max-lg:gap-5">
                                <div className="relative z-50 mr-16 size-80 min-w-80 overflow-hidden rounded-full bg-gradient-custom p-0.5 shadow-xl shadow-blue-500/50 max-lg:relative max-lg:right-0 max-lg:top-0 max-lg:mr-0 max-lg:size-64 max-lg:min-w-64">
                                    {/* <Image priority className="h-auto w-full max-w-xs rounded-full" src="/images/fabio-developer.jpg" width="320" height="320" alt="Guilherme - Full Stack Developer" quality={100}/> */}
                                </div>
                                <div className="relative rounded-lg p-0.5">
                                    {/* <span className="absolute inset-y-0 -left-16 -z-10 m-auto h-[3px] w-20 rotate-180 bg-gradient-custom"></span> */}

                                    <div className="relative rounded-lg bg-back p-2 max-lg:p-0">
                                        <p>Hi there! I&apos;m Guilherme, a passionate Full Stack developer with a strong background in technology. Let me introduce myself and tell you more about my journey in the world of web development.</p><br/>

                                        <p>I was born in Salete, a charming town located in the state of Santa Catarina, Brazil, where I spent my childhood surrounded by nature and a close-knit community. From an early age, I developed a curiosity for technology and a desire to understand how things work.</p><br/>

                                        <p>In addition to my love for coding, I have several hobbies that keep me balanced and energized. On weekends, you&apos;ll often find me on the soccer field, where I enjoy playing with friends and competing in local leagues. When I&apos;m not on the pitch, I unwind by immersing myself in the virtual worlds of video games, exploring new challenges and stories. I also prioritize my health and fitness by hitting the gym regularly, where I push myself to achieve new personal bests and stay active.
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-5">
                                <article className="mb-10">
                                    <div>
                                        <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-lg:text-xl">
                                            <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                            Education and Skills
                                        </h2>
                                        <p>I graduated from the Nanyang Technological University Singapore with a degree in computer engineering. This academic foundation has provided me with a solid understanding of software development principles and best practices.</p>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 mt-5 flex items-center gap-3 text-base font-semibold text-white">
                                        Skills
                                        </h3>
                                        <p>I have expertise in a wide range of technologies, including HTML, CSS, Sass, Less & Tailwind CSS, JavaScript, TypeScript & jQuery, React, Next, Vue, Next, Nest & Zustand. My diverse skill set enables me to create engaging and functional digital experiences for clients and users alike.</p>
                                    </div>
                                </article>
                                <article className="mb-10">
                                    <div>
                                        <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-lg:text-xl">
                                            <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                            Professional Experience
                                        </h2>
                                        <p>In addition to my academic background, I&apos;ve gained practical experience working as a technical support specialist in a software company. This experience has given me a holistic understanding of the challenges faced by development teams and honed my communication and problem-solving skills.</p>
                                    </div>
                                    <div>
                                        <h3 className="mb-3 mt-5 flex items-center gap-3 text-base font-semibold text-white">
                                        Current Role
                                        </h3>
                                        <p>Currently, I am actively involved as a senior full stack developer in MEJIX. In this role, I lead a team of frontend developers, overseeing projects and ensuring the delivery of high-quality solutions. This experience has further strengthened my leadership and technical skills, allowing me to effectively drive innovation and excellence in full stack web development.</p>
                                    </div>
                                </article>
                        
                                <article className="mb-10">
                                    <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-lg:text-xl">
                                        <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                            Continuous Learning and Specialization
                                    </h2>
                                    <p>I thrive on continuous learning and adapting to emerging technologies, ensuring I remain at the forefront of industry trends.</p>
                                </article>
                                <article className="mb-10">
                                    <h2 className="mb-5 flex items-center gap-4 text-2xl font-semibold text-white max-lg:text-xl">
                                        <span className="block size-4 rounded-full bg-gradient-custom shadow-md shadow-blue-500/50"></span>
                            Get in Touch
                                    </h2>
                                    <p>If you&apos;re looking for a passionate frontend developer who is highly skilled and dedicated to delivering high-quality solutions and exceptional user experiences, I&apos;d love to hear from you. Let&apos;s collaborate and bring your digital ideas to life!</p>
                                </article>
                            </div>
                        </div>
                        <AboutMe />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
