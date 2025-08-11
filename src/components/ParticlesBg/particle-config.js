const particlesConfig = {
 particles: {
   number: {
     value: 25,
     density: {
       enable: true,
       value_area: 800
     }
   },
   color: {
     value: ["#ff0064", "#0096ff", "#9600ff", "#ff7800"]
   },
   shape: {
     type: "circle",
     stroke: {
       width: 0,
       color: "#000000"
     }
   },
   opacity: {
     value: 0.7,
     random: true,
     anim: {
       enable: true,
       speed: 1,
       opacity_min: 0.3,
       sync: false
     }
   },
   size: {
     value: 40,
     random: true,
     anim: {
       enable: true,
       speed: 3,
       size_min: 20,
       sync: false
     }
   },
   line_linked: {
     enable: false
   },
   move: {
     enable: true,
     speed: 2,
     direction: "none",
     random: true,
     straight: false,
     out_mode: "bounce",
     bounce: true,
     attract: {
       enable: false
     }
   }
 },
 interactivity: {
   detect_on: "canvas",
   events: {
     onhover: {
       enable: true,
       mode: "repulse"
     },
     onclick: {
       enable: true,
       mode: "push"
     },
     resize: true
   },
   modes: {
     repulse: {
       distance: 100,
       duration: 0.4
     },
     push: {
       particles_nb: 2
     }
   }
 },
 retina_detect: true
}

export default particlesConfig