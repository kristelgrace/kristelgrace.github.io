var config = {
  origin: 'bottom',
  distance: '40px',
  duration: 500,
  easing: 'ease',
  mobile: true,
  reset: false,
  viewFactor: 0.4
};

window.sr = ScrollReveal(config)

sr.reveal('#checkout-work', {delay: 100});
sr.reveal('#junto-work', {delay: 500});
sr.reveal('#creart-work', {delay: 100});
sr.reveal('#shallmake-work', {delay: 500});
sr.reveal('#bunbun-work', {delay: 100});
sr.reveal('#comyoot-work', {delay: 500});


// reveal text annotations on project images
var configText = {
  origin: 'bottom',
  distance: '75%',
  duration: 500,
  easing: 'ease',
  mobile: true,
  reset: false,
  viewFactor: 0.4
};

window.srText = ScrollReveal(configText)

srText.reveal('#junto-affinity-text1', {delay: 200});
srText.reveal('#junto-affinity-text2', {delay: 1800});
srText.reveal('#junto-usertesting-text1', {delay: 200});
srText.reveal('#junto-usertesting-text2', {delay: 600});
srText.reveal('#junto-taskcomp-text1', {delay: 400});
srText.reveal('#junto-taskcomp-text2', {delay: 1900});
srText.reveal('#junto-social-text1', {delay: 2000});
srText.reveal('#junto-social-text2', {delay: 2500});
srText.reveal('#junto-demoday-text1', {delay: 400});
srText.reveal('#junto-demoday-text2', {delay: 800});
srText.reveal('#junto-demoday-text3', {delay: 1200});
srText.reveal('#creart-affinity-text', {delay: 1000});
srText.reveal('#creart-uft-text', {delay: 200});

// reveal the full overlay
var configa = {
  origin: 'bottom',
  distance: '75%',
  duration: 0,
  easing: 'ease',
  mobile: true,
  reset: false,
  viewFactor: 0.4
};

window.srcomp = ScrollReveal(configa)

srcomp.reveal('#junto-affinity-complete', {delay: 2200});
srcomp.reveal('#junto-usertesting-complete', {delay: 1000});
srcomp.reveal('#junto-demoday-complete', {delay: 2000});
srcomp.reveal('#creart-affinity-complete', {delay: 1300});
srcomp.reveal('#creart-uft-complete', {delay: 800});

function isMobile(){
  return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

if (!isMobile()) {
  var configsumL = {
    origin: 'left',
    distance: '75%',
    duration: 500,
    easing: 'ease',
    mobile: true,
    reset: false,
    viewFactor: 0.4
  };

  window.srsumL = ScrollReveal(configsumL)

  srsumL.reveal('#one', {delay: 400});
  srsumL.reveal('#two', {delay: 800});
  srsumL.reveal('#three', {delay: 1200});
  srsumL.reveal('#four', {delay: 1600});
  srsumL.reveal('#no1-insight', {delay: 400});
  srsumL.reveal('#no2-insight', {delay: 800});
  srsumL.reveal('#no3-insight', {delay: 1200});
  srsumL.reveal('#no4-insight', {delay: 1600});


  var configsumR = {
    origin: 'right',
    distance: '75%',
    duration: 500,
    easing: 'ease',
    mobile: true,
    reset: false,
    viewFactor: 0.4
  };

  window.srsumR = ScrollReveal(configsumR)


  srsumR.reveal('#context', {delay: 400});
  srsumR.reveal('#problem', {delay: 800});
  srsumR.reveal('#insight', {delay: 1200});
  srsumR.reveal('#outcome', {delay: 1600});
  srsumR.reveal('#insight01', {delay: 400});
  srsumR.reveal('#insight02', {delay: 800});
  srsumR.reveal('#insight03', {delay: 1200});
  srsumR.reveal('#insight04', {delay: 1600});

}
