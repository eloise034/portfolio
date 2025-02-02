import "./home.css";
import introImg from "../assets/000.jpg";

const Home = () => {
  return (
    <div className="container home">
      <section className="intro-section" id="home">
        <div className="intro-section__left">
          {/* ✅ 修正 className */}
          <div className="intro-section__text">
            你好 ! 我是
            <br /> 陳 怡 秀
          </div>
          <div className="intro-section__paragraph">
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
          <a href="/resume.pdf" download="resume.pdf" className="button">
            Get Resume
          </a>
        </div>
        <div className="intro-section__right">
          <div className="intro-section__image">
            <img src={introImg} alt="intro" />
            <div className="intro-section__image-half-round-shape"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
