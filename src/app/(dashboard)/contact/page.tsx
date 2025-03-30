'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatus('Harap isi semua kolom.');
            return;
        }
        setLoading(true);
        setStatus('');
        try {
            const response = await axios.post('/api/contact', formData);
            if (response.status === 200) {
                setStatus('Pesan berhasil dikirim!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }
        } catch (error) {
            setStatus('Terjadi kesalahan, coba lagi nanti.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="h-screen bg-gradient-to-b from-gray-900 to-gray-800 ">
            <div className="pt-10 md:pt-20">
                <div className="p-4 md:p-8">
                    <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">
                        Hubungi Saya
                    </h1>
                    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                        <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                            <div className="flex flex-col md:flex-row">
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-white w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Name"
                                />
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-white w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Email"
                                />
                            </div>
                            <input
                                id="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-white w-full outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Say Something"
                                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-white w-full outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`border-2 text-md mt-5 rounded-md py-2 px-4 ${loading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'} text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                            {loading ? 'Mengirim...' : 'Kirim Pesan'}
                        </button>
                    </form>
                    {status && <p className="text-white text-center mt-4">{status}</p>}
                </div>
            </div>
        </div>
    );
}
