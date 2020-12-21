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

window.sra = ScrollReveal(configa)

sra.reveal('#junto-affinity-complete', {delay: 2200});
