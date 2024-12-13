import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
    <Navbar locale={""} />
    <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-tr from-purple-500 to-pink-500 text-white">
      <main className="w-full bg-black/85">
        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-center">
          <div className="relative md:min-h-[50vh] min-h-[35vh] w-full overflow-hidden flex items-center justify-center">
            <h1
              className="text-[7vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-center whitespace-nowrap"
              style={{ lineHeight: "1.2" }}
            >
              <span
                className="
                  sm:bg-none 
                  sm:text-white 
                  md:bg-clip-text 
                  md:text-transparent 
                  md:bg-fixed 
                  md:bg-[url('/backgroundmain.png')] 
                  md:bg-cover 
                  md:bg-no-repeat  
                "
                >
                {t("More Growth More Sales")}
                <br />
                {t("More Turnover Guaranteed")}
              </span>
            </h1>
          </div>



          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Link href="https://calendly.com/ekoforge">
              <button className="px-6 py-3 bg-white text-black font-bold text-xl rounded-full border border-white hover:opacity-80">
                {t("CTA")}
              </button>
            </Link>
            <Link href="#contactsec">
              <button className="px-6 py-3 bg-transparent text-white font-bold text-xl rounded-full border border-dotted border-white hover:opacity-80">
                {t("contact")}
              </button>
            </Link>
          </div>
          <p className="mt-4 mx-4s text-lg sm:text-xl text-yellow-400">{t("nextlevel")}</p>
        </div>

        {/* Agitation Section */}
        <div className="px-4 sm:px-6 lg:px-16 text-center mt-16">
          <h3 className="text-xl sm:text-3xl font-medium">{t("agitate1")}</h3>
          <h2 className="text-2xl sm:text-4xl font-bold mt-4">{t("agitate2")}</h2>
          <h3 className="text-xl sm:text-3xl font-medium mt-4">{t("agitate3")}</h3>

          <div className="flex flex-wrap gap-4 sm:gap-8 justify-center mt-8">
            {[
              { title: "agitatepoint1", details: ["agitatepoint11", "agitatepoint12"] },
              { title: "agitatepoint2", details: ["agitatepoint21", "agitatepoint22"] },
              { title: "agitatepoint3", details: ["agitatepoint31", "agitatepoint32"] },
            ].map((point, index) => (
              <div
                key={index}
                className="flex-1 min-w-[90%] sm:min-w-[30%] p-6 border-t-4 border-yellow-400 rounded-t-lg text-white"
              >
                <h3 className="text-xl sm:text-2xl font-semibold">{t(point.title)}</h3>
                {point.details.map((detail, idx) => (
                  <p key={idx} className="mt-2 text-sm sm:text-base">
                    {t(detail)}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <hr className="w-full border-t border-white mt-16" id="clients" />

        {/* CTA 2 Section */}
        <div className="text-center px-4 sm:px-6 lg:px-16 mt-16">
          <h3 className="text-xl sm:text-3xl font-medium">{t("CTA1")}</h3>
          <h2 className="text-2xl sm:text-4xl font-bold mt-4">{t("CTA2")}</h2>
          <h3 className="text-xl sm:text-3xl font-medium mt-4">{t("CTA3")}</h3>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Link href="https://calendly.com/ekoforge">
              <button className="px-6 py-3 bg-white text-black font-bold text-xl rounded-full border border-white hover:opacity-80">
                {t("CTA4")}
              </button>
            </Link>
            <Link href="#contactsec">
              <button className="px-6 py-3 bg-transparent text-white font-bold text-xl rounded-full border border-dotted border-white hover:opacity-80">
                {t("contact")}
              </button>
            </Link>
          </div>
          <p className="mt-4 text-lg sm:text-xl text-yellow-400">{t("CTA5")}</p>
        </div>

        {/* Testimonials Section as Slideshow */}
        <div className="mt-16 w-screen px-4 sm:px-6 lg:px-16 flex justify-center text-center" id="testimonials">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              className="w-full max-w-5xl"
            >
              {[
                {
                  image: "/ekotestimoonial1.png",
                  alt: "Testimonial Client 1",
                  text: t("testimonials1"),
                  author: "Kimmo, 2024",
                },
                {
                  image: "/ekotestimoonial2.png",
                  alt: "Testimonial Client 2",
                  text: t("testimonials2"),
                  author: "Emily, 2023",
                },
                {
                  image: "/ekotestimoonial3.png",
                  alt: "Testimonial Client 3",
                  text: t("testimonials3"),
                  author: "John, 2022",
                },
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col sm:flex-row items-center gap-8 p-8 border-b border-white rounded-b-lg">
                    <Image
                      src={testimonial.image}
                      width={150}
                      height={150}
                      alt={testimonial.alt}
                      className="rounded-full"
                    />
                    <div className="flex-col">
                      <h2 className="text-lg sm:text-xl">{testimonial.text}</h2>
                      <p className="mt-4 text-yellow-400">— {testimonial.author}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


        {/* Distinction Section */}
        <div className="px-4 sm:px-6 lg:px-16 text-center mt-16">
          <h2 className="text-xl sm:text-3xl font-medium">{t("distinction1")}</h2>
          <h1 className="text-2xl sm:text-5xl font-bold mt-4">{t("distinction2")}</h1>

          <div className="flex flex-wrap gap-4 sm:gap-8 justify-center mt-8">
            {[
              { title: "distinctionpoint1", details: ["distinctionpoint11", "distinctionpoint12"] },
              { title: "distinctionpoint2", details: ["distinctionpoint21", "distinctionpoint22"] },
              { title: "distinctionpoint3", details: ["distinctionpoint31", "distinctionpoint32"] },
            ].map((point, index) => (
              <div
                key={index}
                className="flex-1 min-w-[90%] sm:min-w-[30%] p-4 rounded-lg text-center bg-clip-padding bg-fixed text-black bg-[url('/backgroundmain.png')] bg-cover bg-no-repeat"
              >
                <div className="p-6 bg-white/60 rounded-lg">
                  <h3 className="text-lg sm:text-2xl font-semibold">{t(point.title)}</h3>
                  {point.details.map((detail, idx) => (
                    <p key={idx} className="mt-2 text-sm sm:text-base">
                      {t(detail)}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <Contact locale={""} />
      </main>
    </div>
    <Footer locale={""} />
    </>
  );
}
