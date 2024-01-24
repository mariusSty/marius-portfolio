import { CSSProperties } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./Button";
import CompanyLogo from "./CompanyLogo";
import Icon from "./Icon";
import Slide from "./Slide";
import amiltoneLogo from "/images/amiltoneLogo.png";
import astekLogo from "/images/astekLogo.png";
import grandLyonLogo from "/images/grandLyonLogo.png";
import masteosLogo from "/images/masteosLogo.png";
import sncfLogo from "/images/sncfLogo.png";
import sopraSteriaLogo from "/images/sopraSteriaLogo.png";

type AboutMePanelProps = {
  isWidthBiggerThanHeight: boolean;
};

export default function AboutMePanel({
  isWidthBiggerThanHeight,
}: AboutMePanelProps) {
  return (
    <div
      className={`absolute ${
        isWidthBiggerThanHeight
          ? "w-[40%] h-full top-0 right-0"
          : "w-full h-[45%] bottom-0 left-0"
      } flex justify-center items-center`}
    >
      <div
        className={`flex flex-col justify-between items-start bg-primary shadow-[15px_20px_10px_rgba(0,0,0,0.2)]
    ${
      isWidthBiggerThanHeight
        ? "rounded-l-3xl h-[75%] w-full"
        : "rounded-t-3xl h-full w-[80%]"
    }`}
      >
        <Swiper
          className="w-[80%] my-4 sm:my-10 flex justify-center items-center h-full"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          style={
            {
              "--swiper-pagination-color": "#FF715B",
              "--swiper-pagination-bullet-inactive-color": "#FFBA08",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "16px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            } as CSSProperties
          }
        >
          <SwiperSlide>
            <Slide
              title="Companies"
              content="I worked for 7 years as a fullstack developer for many
          companies and startups. I could work on many projects with teams of 2 to 15 developers."
              footer={
                <div className="grid grid-cols-3 auto-rows-[40px] md:auto-rows-[70px] gap-2 sm:gap-3">
                  <CompanyLogo
                    logo={sopraSteriaLogo}
                    logoAlt="Logo Sopra Steria"
                  />
                  <CompanyLogo logo={sncfLogo} logoAlt="Logo SNCF" />
                  <CompanyLogo logo={astekLogo} logoAlt="Logo Astek" />
                  <CompanyLogo logo={grandLyonLogo} logoAlt="Logo Grand Lyon" />
                  <CompanyLogo logo={amiltoneLogo} logoAlt="Logo Amiltone" />
                  <CompanyLogo logo={masteosLogo} logoAlt="Logo Masteos" />
                </div>
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              title="Skills"
              content="I make websites, mobile apps and desktop apps with
          lots of languages and frameworks. But now, I'm specialized
          in React and NodeJS since 4 years. I also practice 3D with ThreeJS in my free time."
              footer={
                <>
                  <img
                    className="hidden sm:block"
                    src="https://skillicons.dev/icons?i=react,nodejs,threejs,next,nest,typescript,tailwind,sass,graphql,docker,github,vite,jest,mongodb,mysql&perline=5"
                  />
                  <img
                    className="sm:hidden"
                    src="https://skillicons.dev/icons?i=react,nodejs,threejs,next,nest,typescript,tailwind,sass,graphql,docker&perline=5"
                  />
                </>
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              title="Links"
              content="
            If you want to know more about my skills, you can check my
            GitHub profile. If you want to know more about my career or send me a message, my LinkedIn profile is also available."
              footer={
                <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
                  <Button
                    link="https://www.linkedin.com/in/marius-stephany-8bb7542a2/"
                    text="Visit my profile on LinkedIn"
                    icon={<Icon component={FaLinkedin} />}
                  />
                  <Button
                    link="https://github.com/mariusSty/"
                    text="See my projects on GitHub"
                    icon={<Icon component={FaGithub} />}
                  />
                </div>
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
