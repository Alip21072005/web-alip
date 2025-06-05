export default function SkilPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Skil Saya</h1>
            <p className="mb-2">Berikut adalah beberapa skil yang saya kuasai:</p>
            <ul className="list-disc pl-5">
                <li>Pengembangan Web (HTML, CSS, JavaScript)</li>
                <li>Framework Frontend (React, Next.js)</li>
                <li>Backend Development (Node.js, Express)</li>
                <li>Database Management (MongoDB, MySQL)</li>
                <li>Desain UI/UX</li>
            </ul>
        </div>
    );
}