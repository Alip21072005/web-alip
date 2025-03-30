"use client";
import TiltedCard from "@/components/TiltedCard/TiltedCard";



export default function About() {
    return (
        <section className="bg-white lg:grid lg:min-h-screen lg:place-content-center dark:bg-gray-900">
            <div
                className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24  md:grid-cols-2 md:items-center lg:px-8 lg:py-32"
            >
                { }
                <div className="flex items-center gap-50">
                    <div className="max-w-prose text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                            Mengenal Lebih Dekat {" "}
                            <strong className="text-blue-600">ALIP MAULANA</strong>
                        </h1>
                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
                            Saya seorang mahasiswa yang sedang menempuh pendidikan di Program Studi Sistem Informasi Universitas Dehasen Bengkulu  . Saya memiliki ketertarikan dalam bidang teknologi informasi dan pengembangan perangkat lunak. Selain itu, saya juga aktif dalam berbagai kegiatan organisasi di kampus. Saya percaya bahwa pendidikan dan pengalaman organisasi adalah kunci untuk mencapai kesuksesan di dunia kerja. Saya selalu berusaha untuk belajar dan mengembangkan diri agar dapat memberikan kontribusi yang positif bagi masyarakat dan lingkungan sekitar.
                        </p>
                        <div className="mt-4 flex gap-4 sm:mt-6">
                            <a
                                className="inline-block rounded border border-blue-600 bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                                href="/contact"
                            >
                                Contact
                            </a>
                            <a
                                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                                href="/organization"
                            >
                                Organization
                            </a>
                        </div>
                    </div>
                    { }
                    <TiltedCard
                        imageSrc="alip.jpg"
                        altText="ALIP"
                        captionText="ALIP MAULANA"
                        containerHeight="400px"
                        containerWidth="400px"
                        imageHeight="400px"
                        imageWidth="400px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text mt-2 ml-3 text-sm font-bold text-gray-900 dark:text-white">
                                ALIP MAULANA
                            </p>
                        }
                    />
                </div>
            </div>
        </section>
    );
}
