const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-3xl font-bold text-blue-500 text-center mb-4">
                    Dennys Andres Montoya Mejia
                </h1>
                <p className="text-gray-700 text-center mb-6">
                    ¡Hola! Soy un desarrollador apasionado por la creación de aplicaciones web modernas y funcionales. Me encanta aprender nuevas tecnologías y resolver problemas complejos con soluciones creativas.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800">Correo:</span>
                        <a 
                            href="mailto:montoyadennys15@gmail.com" 
                            className="text-blue-500 hover:underline"
                        >
                            montoyadennys15@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800">Teléfono:</span>
                        <span className="text-gray-700">31663469</span>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Habilidades</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Desarrollo Frontend con React y Tailwind CSS</li>
                        <li>Diseño de interfaces modernas y responsivas</li>
                        <li>Consumo de APIs REST</li>
                        <li>Gestión de proyectos con metodologías ágiles</li>
                    </ul>
                </div>
                <div className="mt-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Proyectos</h2>
                    <p className="text-gray-700">
                        Actualmente estoy trabajando en varios proyectos relacionados con el desarrollo web, incluyendo aplicaciones interactivas y sistemas de gestión.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;