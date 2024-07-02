const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from("a", {
    stagger:.2,
    y:10,
    duration:.8,
    opacity:0
})

Shery.textAnimate("#cheading h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  });
  Shery.imageEffect("#hcenter img , .imgff img", {
    style: 2, 
    debug: false, 
    config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-10},"mousemove":{"value":3},"modeA":{"value":0},"modeN":{"value":0},"speed":{"value":-5.54,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":-151.35,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":3.14,"range":[0,3.141592653589793]},"waveFactor":{"value":-2.8,"range":[-3,3]},"color":{"value":15790320},"pixelStrength":{"value":100,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":10,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500085789780722},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0.010752688172043001}},"shapeScale":{"value":{"x":0.52,"y":0.95}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0.39,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });
  Shery.imageEffect("#hleft img", {
    style: 2, 
    debug: false, 
    config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-10},"mousemove":{"value":3},"modeA":{"value":0},"modeN":{"value":0},"speed":{"value":-5.54,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":-151.35,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":3.14,"range":[0,3.141592653589793]},"waveFactor":{"value":-2.8,"range":[-3,3]},"color":{"value":15790320},"pixelStrength":{"value":100,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":10,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500085789780722},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0.010752688172043001}},"shapeScale":{"value":{"x":0.52,"y":0.95}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0.39,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });
 