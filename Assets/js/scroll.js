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

sr.reveal('#bunbun-work', {delay: 100});
sr.reveal('#junto-work', {delay: 300});
sr.reveal('#comyoot-work', {delay: 100});
sr.reveal('#creart-work', {delay: 300});

// reveal text annotations on project images
sr.reveal('#junto-affinity-text1', {delay: 200});
sr.reveal('#junto-affinity-text2', {delay: 1800});

// reveal the full overlay
var configa = {
  origin: 'bottom',
  distance: '40px',
  duration: 0,
  easing: 'ease',
  mobile: true,
  reset: false,
  viewFactor: 0.4
};

window.srcomp = ScrollReveal(configa)

srcomp.reveal('#junto-affinity-complete', {delay: 2200});


var configsumL = {
  origin: 'left',
  distance: '40px',
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


var configsumR = {
  origin: 'right',
  distance: '40px',
  duration: 500,
  easing: 'ease',
  mobile: true,
  reset: false,
  viewFactor: 0.4
};

window.srsumR = ScrollReveal(configsumR)


srsumR.reveal('#problem', {delay: 300});
srsumR.reveal('#insight', {delay: 800});
srsumR.reveal('#outcome', {delay: 1200});
