'use client';

import { useState } from 'react';

export default function Organization() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        major: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="bg-black text-white min-h-screen">
            { }
            <div className="flex justify-center py-8 pt-20">
                <img
                    src="de code.jpg"
                    alt="De Code Logo"
                    className="w-32 h-32 rounded-full shadow-lg"
                />
            </div>

            { }
            <div className="flex flex-col items-center">
                <div className="text-center text-4xl md:text-5xl lg:text-6xl font-bold pb-8 ">
                    Komunitas De Code
                </div>
                <p className="text-center text-lg md:text-xl lg:text-2xl px-4 max-w-3xl">
                    Komunitas ini bertujuan untuk mengembangkan kemampuan coding mahasiswa, membangun kolaborasi, serta menciptakan inovasi
                    di dunia teknologi informasi. Kami menyediakan wadah bagi mahasiswa untuk berkreasi dan belajar bersama dalam dunia
                    pemrograman.
                </p>
            </div>

            { }
            <div className="bg-gray-900 py-16 md:py-24">
                <div className="text-center max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-6">Misi Kami</h2>
                    <p className="text-lg md:text-xl text-gray-300">
                        Misi kami adalah untuk meningkatkan kompetensi mahasiswa di bidang pemrograman melalui berbagai program pelatihan,
                        workshop, dan kompetisi. Kami berfokus pada pengembangan keterampilan teknis serta kemampuan kolaborasi yang
                        dibutuhkan di dunia kerja.
                    </p>
                </div>
            </div>

            { }
            <div className="py-16 md:py-24">
                <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold pb-8">Leaders of De Code</h2>
                <div className="flex flex-wrap justify-center gap-8 px-4">
                    { }
                    <div className="w-64 bg-gray-800 rounded-lg shadow-lg">
                        <img
                            src="/panca.jpg"
                            alt="Member 1"
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold">Panca Nugraha</h3>
                            <p className="text-lg text-gray-400">Founder Komunitas</p>
                            <p className="text-gray-300 mt-4">
                                Panca adalah pendiri komunitas De Code yang memiliki visi untuk menciptakan lingkungan belajar yang
                                kolaboratif bagi mahasiswa di Fakultas Ilmu Komputer Universitas Dehasen Bengkulu. Panca telah mengembangkan
                                komunitas dan membantu mengkoordinasikan berbagai kegiatan dan acara yang diadakan oleh komunitas.
                            </p>
                        </div>
                    </div>

                    { }
                    <div className="w-64 bg-gray-800 rounded-lg shadow-lg">
                        <img
                            src="/fadil.jpg"
                            alt="Member 2"
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold">Alfadil Ilhamora</h3>
                            <p className="text-lg text-gray-400">Ketua Komunitas</p>
                            <p className="text-gray-300 mt-4">
                                Alfadil adalah ketua komunitas De Code yang bertanggung jawab untuk mengelola dan memimpin berbagai kegiatan
                                komunitas. Dia memiliki pengalaman dalam mengorganisir acara dan pelatihan coding untuk mahasiswa. Dia juga
                                berperan aktif dalam membangun hubungan dengan perusahaan dan organisasi lain untuk kolaborasi.
                            </p>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="w-64 bg-gray-800 rounded-lg shadow-lg">
                        <img
                            src="/khairil.jpg"
                            alt="Member 3"
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold">Khairil, S.Kom., M.Kom.</h3>
                            <p className="text-lg text-gray-400">Pembina Komunitas</p>
                            <p className="text-gray-300 mt-4">
                                Khairil adalah Dekan Fakultas Ilmu Komputer Universitas Dehasen Bengkulu sekaligus pembina komunitas De Code yang bertanggung jawab untuk memastikan kegiatan komunitas
                                berjalan dengan baik. Dia memiliki pengalaman dalam mengelola organisasi dan memastikan bahwa semua anggota
                                komunitas mendapatkan dukungan yang mereka butuhkan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Join Us Section */}
            <div className="bg-gray-900 py-16 md:py-24">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-6">Bergabung dengan De Code</h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Jika Anda tertarik untuk bergabung dengan komunitas kami, silakan isi formulir di bawah ini untuk menjadi anggota
                        De Code. Kami menyambut mahasiswa dari berbagai latar belakang untuk bersama-sama mengembangkan keterampilan
                        teknologi.
                    </p>
                    <a
                        href="/registration"
                        className="mt-8 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Daftar
                    </a>
                </div>

            </div>

        </div>
    );
}
