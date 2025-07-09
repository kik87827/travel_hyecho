window.addEventListener("DOMContentLoaded", () => {
  uiBase.init();
});

const uiBase = {
  init() {
    // 현재 객체 내의 모든 메서드 순회
    for (const key in this) {
      if (typeof this[key] === "function" && key !== "init") {
        this[key]();
      }
    }
  },
  commonInit() {
    let touchstart = "ontouchstart" in window;
    let userAgent = navigator.userAgent.toLowerCase();
    if (touchstart) {
      browserAdd("touchmode");
    }
    if (userAgent.indexOf("samsung") > -1) {
      browserAdd("samsung");
    }

    if (navigator.platform.indexOf("Win") > -1 || navigator.platform.indexOf("win") > -1) {
      browserAdd("window");
    }

    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      // iPad or iPhone
      browserAdd("ios");
    }

    function browserAdd(opt) {
      document.querySelector("html").classList.add(opt);
    }
  },
  setVhProperty() {
    setProperty();
    window.addEventListener("resize", () => {
      setProperty();
    });

    function setProperty() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  },
  pageTopgo() {
    const btn_topgo = document.querySelector(".btn_pagetop");
    if (!!btn_topgo) {
      btn_topgo.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      });
    }
  },
  footerFunc() {
    var noticeFooterSwiper = new Swiper(".footer_notice_container", {
      direction: "vertical",
      loop: true,
      autoplay: {
        delay: 4000, // 4초마다 롤링
        disableOnInteraction: false, // 사용자 인터랙션 후에도 계속 롤링
      },
      allowTouchMove: false, // 터치/드래그 비활성화
      speed: 500, // 전환 애니메이션 속도 (ms)
    });
  },
};