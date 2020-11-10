function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabContents = document.querySelectorAll(tabsSelector);
    const tabParent = document.querySelector(tabsContentSelector);
    const tabs = document.querySelectorAll(tabsParentSelector);

    function hideTabs() {
        tabContents.forEach((e) => {
            e.classList.add('hide');

            tabs.forEach((e) => {
                e.classList.remove(activeClass);
            });

        });
    }

    function showTab(tabItem = 0) {

        tabContents[tabItem].classList.remove("hide");
        tabs[tabItem].classList.add(activeClass);
    }

    hideTabs();
    showTab();

    tabParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(tabsParentSelector.slice(1))) {
            tabs.forEach((e, i) => {
                if (e == target) {
                    hideTabs();
                    showTab(i);
                }
            });
        }
    });
}

export default tabs;