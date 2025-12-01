import Image from "next/image";
import Link from "next/link";

const TopInstructor = () => {
    return (
        <section className="dark:bg-darkmode">
            <div className="container">
                <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">
                    <div className="col-span-6">
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="relative z-0  inline-block text-primary text-lg font-bold before:absolute before:content-[''] before:bg-primary/20  before:w-full before:h-2 before:-z-1 dark:before:-z-1 before:bottom-0"
                        >
                            Guided By Expert Educators
                        </p>
                        <h1
                            className="py-4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000">
                            Professional Learning Experience
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            className="text-xl text-SlateBlueText dark:text-opacity-80 font-normal md:pb-14 pb-6"
                        >
                            A quality learning experience that builds professional skills through practical knowledge and expert guidance.
                        </p>
                        <div className="flex items-center justify-end">
                            <Link
                                href="#"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
                            >
                                <span className="!flex !items-center gap-3">
                                    Enroll Now
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                                        </svg>

                                    </div>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="col-span-6 lg:flex hidden items-center gap-3"
                    >
                        <div className="bg-ElectricAqua relative rounded-tl-166 rounded-br-166 w-full">

                            <Image
                                src="/images/hero/john.png"
                                alt="hero"
                                width={500}
                                height={500}
                                quality={100}
                                sizes="100vw"
                                className="w-full h-auto"
                            />
                            <div className="bg-yellow-300 rounded-22 shadow-hero-box py-4 px-5 absolute top-0 -left-[2rem]">
                                <p className="text-lg font-bold text-yellow-900">John Karter</p>
                                <p className="text-base font-medium text-yellow-900 text-center">
                                    4.8 rating
                                </p>
                            </div>
                        </div>
                        <div className="bg-primary relative rounded-tr-166 rounded-bl-166 w-full mt-32">
                            {/* <Image
                                src="/images/hero/maria.png"
                                alt="hero"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="w-full h-full"
                            /> */}
                            <Image
                                src="/images/hero/maria.png"
                                alt="hero"
                                width={500}
                                height={500}
                                quality={100}
                                sizes="100vw"
                                className="w-full h-auto"
                            />

                            <div className="bg-Aquamarine rounded-22 shadow-hero-box py-4 px-5 absolute top-24 -right-20 xl:inline-block hidden">
                                <p className="text-lg font-bold text-green-800">Mariya John</p>
                                <p className="text-base font-medium text-green-800 text-center">
                                    4.9 rating
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopInstructor;