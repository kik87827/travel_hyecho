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
