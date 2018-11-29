    // http://pipwerks.com/2011/05/18/sniffing-internet-explorer-via-javascript/
  const isIE = /msie/gi.test(navigator.userAgent);

  function getScrollPos() {
        // Handle scroll position in case of IE differently
    if (isIE) {
      return document.documentElement.scrollTop;
    }

    return window.pageYOffset;
  }

  let prevScrollPos = getScrollPos();

    // Respond to scroll events
  function handleScroll(scroller, event) {
    if (scroller.updateInitiated) {
      return;
    }

    const scrollPos = getScrollPos();
    if (scrollPos === prevScrollPos) {
      return; // nothing to do
    }

    // Find the pageHeight and clientHeight
    // (the no. of pixels to scroll to make the scrollbar reach max pos)
    const pageHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Check if scroll bar position is just 50px above the max, if yes, initiate an update
    if (pageHeight - (scrollPos + clientHeight) < scroller.options.distance) {
      scroller.updateInitiated = true;

      scroller.options.callback(() => {
        scroller.updateInitiated = false;
      });
    }

    prevScrollPos = scrollPos;
  }

  export default {
    infiniteScroll(options) {
      const defaults = {
        callback() {},
        distance: 50,
      };

      const op = { ...defaults, ...options };

      const scroller = {
        options: op,
        updateInitiated: false,
      };

      window.onscroll = (event) => {
        handleScroll(scroller, event);
      };

      // For touch devices, try to detect scrolling by touching
      document.ontouchmove = (event) => {
        handleScroll(scroller, event);
      };
    },

    unbind() {
      window.onscroll = null;
      document.ontouchmove = null;
    },
  };
