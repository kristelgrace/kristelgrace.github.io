class BeforeAfterVertical {
    constructor(enteryObject) {

        const beforeAfterContainer = document.querySelector(enteryObject.id);
        const before = beforeAfterContainer.querySelector('.bal-vertical-before');
        const beforeText = beforeAfterContainer.querySelector('.bal-vertical-beforePosition');
        const afterText = beforeAfterContainer.querySelector('.bal-vertical-afterPosition');
        const handle = beforeAfterContainer.querySelector('.bal-vertical-handle');
        var heightChange = 0;

        beforeAfterContainer.querySelector('.bal-vertical-before-inset').setAttribute("style", "height: " + beforeAfterContainer.offsetHeight + "px;")
        window.onresize = function () {
            beforeAfterContainer.querySelector('.bal-vertical-before-inset').setAttribute("style", "height: " + beforeAfterContainer.offsetHeight + "px;")
        }
        before.setAttribute('style', "height: 50%;");
        handle.setAttribute('style', "top: 50%;");

        //touch screen event listener
        beforeAfterContainer.addEventListener("touchstart", (e) => {

            beforeAfterContainer.addEventListener("touchmove", (e2) => {
                let containerHeight = beforeAfterContainer.offsetHeight;
                let currentPoint = e2.changedTouches[0].clientY;

                let startOfDiv = beforeAfterContainer.offsetTop;

                let modifiedCurrentPoint = currentPoint - startOfDiv;

                if (modifiedCurrentPoint > 10 && modifiedCurrentPoint < beforeAfterContainer.offsetHeight - 10) {
                    let newHeight = modifiedCurrentPoint * 100 / containerHeight;

                    before.setAttribute('style', "height:" + newHeight + "%;");
                    afterText.setAttribute('style', "z-index: 1;");
                    handle.setAttribute('style', "top:" + newHeight + "%;");
                }
            });
        });

        //mouse move event listener
        beforeAfterContainer.addEventListener('mousemove', (e) => {
            let containerHeight = beforeAfterContainer.offsetHeight;
            heightChange = e.offsetY;
            let newHeight = heightChange * 100 / containerHeight;

            if (e.offsetY > 10 && e.offsetY < beforeAfterContainer.offsetHeight - 10) {
                before.setAttribute('style', "height:" + newHeight + "%;");
                console.log(afterText);
                afterText.setAttribute('style', "z-index:" + "1;");
                handle.setAttribute('style', "top:" + newHeight + "%;");
            }
        })

    }
}
