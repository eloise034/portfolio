import "./home.css";
import introImg from "../assets/ppp.png";
import { cards } from "../utils/data";
import Card from "../components/card/Card";
import { v4 as uuid } from "uuid";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const pictures = [
    { src: "/picture1.jpg" },
    { src: "/picture2.png" },
    { src: "/picture3.png" },
    { src: "/picture4.png" },
    { src: "/picture5.png" },
    { src: "/picture6.png" },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressbar();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(skillRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateProgressbar = () => {
    const progressBars = document.querySelectorAll(".skill__progress-line");

    progressBars.forEach((progressBar) => {
      const percent = progressBar.getAttribute("data-width");
      progressBar.style.width = `${percent}%`;
    });
  };

  return (
    <div className="container home">
      <section className="intro-section" id="home">
        <div className="intro-section__left">
          <div className="intro-section__text">
            你好 ! 我是
            <br /> 陳 怡 秀
          </div>
          <div className="intro-section__paragraph">
            <h3>．國立中正大學傳播系</h3>
            <h3>
              ．專案管理 &
              溝通協調：曾負責採訪、撰寫報導及編輯新聞內容，培養資訊統整與清晰傳達能力；參與展覽策劃、行銷，與跨部門團隊協作，推動專案落地。
            </h3>
            <h3>
              ．視覺與內容製作：熟悉 Photoshop (PS)、Illustrator (AI)、Premiere
              Pro (PR)，擅長影像處理、影片剪輯與排版設計。
            </h3>
            <h3>
              ．技術適應力：自主學習基礎網站開發知識，具備快速學習與資訊整合能力。
            </h3>
          </div>
          <a
            href="/陳怡秀 履歷.pdf"
            download="陳怡秀 履歷.pdf"
            className="button"
          >
            Get Resume
          </a>
        </div>
        <div className="intro-section__right">
          <div className="intro-section__image">
            <img src={introImg} alt="intro" />
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <h2 className="section__title">我 的 經 驗</h2>
        <div className="cards">
          {cards?.map((card) => (
            <Card key={uuid()} title={card.title} features={card.features} />
          ))}
        </div>
      </section>

      <section className="skill" id="skill" ref={skillRef}>
        <div className="skill__left">
          <h2 className="section__title">
            技 能 <br />與 能 力
          </h2>
        </div>

        <div className="skill__right">
          <div className="skill__wrapper">
            <div className="skill__tag">
              辦 公 軟 體<br />
              Word、Excel、PowerPoint
            </div>
            <div className="skill__box">
              <div className="skill__progress-line" data-width="75"></div>
              <div className="skill__percentage">75%</div>
            </div>
          </div>

          <div className="skill__wrapper">
            <div className="skill__tag">
              設 計 與 排 版<br />
              Canva、Photoshop、Illustrator、Premiere
            </div>
            <div className="skill__box">
              <div className="skill__progress-line" data-width="85"></div>
              <div className="skill__percentage">85%</div>
            </div>
          </div>

          <div className="skill__wrapper">
            <div className="skill__tag">
              基 礎 程 式 與 網 站 開 發<br />
              React（入門）、Yarn（入門）、HTML、CSS、JavaScript
            </div>
            <div className="skill__box">
              <div className="skill__progress-line" data-width="30"></div>
              <div className="skill__percentage">30%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <h2 className="section__title">文 字 作 品</h2>

        <div className="work__grid">
          <a
            href="https://enews.ccu.edu.tw/p/404-1089-41184.php?Lang=zh-tw"
            target="_blank"
            rel="noopener noreferrer"
            className="work__card"
          >
            <img
              src="https://enews.ccu.edu.tw/var/file/89/1089/img/698103636.jpg"
              alt="work 1"
            />
            <div className="work__card-title">
              長相平凡的台灣瀕危物種　山麻雀
            </div>
          </a>

          <a
            href="https://enews.ccu.edu.tw/p/404-1089-41824.php?Lang=zh-tw"
            target="_blank"
            rel="noopener noreferrer"
            className="work__card"
          >
            <img
              src="https://enews.ccu.edu.tw/var/file/89/1089/img/104413074.jpg"
              alt="work 2"
            />
            <div className="work__card-title">嘉義咖啡節　首度飄香登場</div>
          </a>

          <a
            href="https://enews.ccu.edu.tw/p/404-1089-40370.php?Lang=zh-tw"
            target="_blank"
            rel="noopener noreferrer"
            className="work__card"
          >
            <img
              src="https://enews.ccu.edu.tw/var/file/89/1089/img/455721262.jpg"
              alt="work 3"
            />
            <div className="work__card-title">
              高齡藝術教育　畫出長輩精彩人生
            </div>
          </a>

          <a
            href="https://enews.ccu.edu.tw/p/404-1089-37065.php?Lang=zh-tw"
            target="_blank"
            rel="noopener noreferrer"
            className="work__card"
          >
            <img
              src="https://enews.ccu.edu.tw/var/file/89/1089/pictures/921/m/mczh-tw700x700_large10992_53598621737.png"
              alt="work 4"
            />
            <div className="work__card-title">
              藕斷絲連　牛斗山蓮藕產業的起落
            </div>
          </a>
          <a
            href="https://enews.ccu.edu.tw/p/404-1089-28511.php?Lang=zh-tw"
            target="_blank"
            rel="noopener noreferrer"
            className="work__card"
          >
            <img
              src="https://enews.ccu.edu.tw/var/file/89/1089/img/1420/442283190.png"
              alt="work 5"
            />
            <div className="work__card-title">
              中正大學三十三週年校慶熱鬧開幕
            </div>
          </a>

          <a
            href="https://enews.ccu.edu.tw/p/404-1089-27405.php?Lang=zh-tw"
            target="_blank"
            rel="noopener noreferrer"
            className="work__card"
          >
            <img
              src="https://enews.ccu.edu.tw/var/file/89/1089/img/1420/735825754.png"
              alt="work 6"
            />
            <div className="work__card-title">
              活到老學到老 創造樂活精彩人生
            </div>
          </a>
        </div>
      </section>

      <div className="slider-container">
        <h2 className="section__title">圖 片 作 品</h2>
        <Slider {...sliderSettings}>
          {pictures.map((picture, index) => (
            <div key={index} className="slide">
              {" "}
              {/* 每个 slide 包含单个图片 */}
              <div className="slide-image-container">
                <img
                  src={picture.src}
                  alt={picture.alt}
                  className="slide-image"
                  onClick={() => openLightbox(index)}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
