document.addEventListener("DOMContentLoaded", () => {
  browserCheck(); // ui.js 추가했는데 개발에서 반영안할 경우 대비
});

function tabUI(option) {
  const options = option;
  options.forEach((item) => {
    const tabmenuDom = document.querySelectorAll(item.tabmenu);
    let tabmenuActive = Array.from(tabmenuDom).find((el) => el.classList.contains("active"));
    const tabcontgroup = document.querySelector(item.tabcontgroup);
    const tabcontDom = tabcontgroup.querySelectorAll(item.tabcont);
    let tabcontActive = Array.from(tabcontDom).find((el) => el.classList.contains("active"));
    tabmenuDom.forEach((menu) => {
      menu.addEventListener("click", (e) => {
        e.preventDefault();
        const thisEvent = e.currentTarget;
        const thisTarget = document.querySelector(thisEvent.getAttribute("href"));
        let menu_or_cont = [tabmenuActive, tabcontActive];

        menu_or_cont.forEach((multiITem) => {
          multiITem.classList.remove("active");
        });

        if (!!thisTarget) {
          thisTarget.classList.add("active");
          tabcontActive = thisTarget;
        }
        thisEvent.classList.add("active");
        tabmenuActive = thisEvent;

        if (item.callback) {
          item.callback();
        }
      });
    });
  });
}

// ui.js 추가했는데 개발에서 반영안할 경우 대비
function browserCheck() {
  function isKakaoWebBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.includes("kakaotalk") || ua.includes("kakaobrowser");
  }
  if (isKakaoWebBrowser()) {
    document.querySelector("html").classList.add("kakao");
  }
}