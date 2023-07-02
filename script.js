// first load the gsap library = it helps in creating moving animation
// go to = gsap cdn
// locomotive js = it is used for smooth scrolling 
// go to = locomotive js cdn

// to copy code of locomotive go to = locomotive js github

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()


tl.to("#page1",{
    y: "100vh",
    scale: 0.6,
    duration: 0
})

// 0 sec m page ko neech bhej diya , scale isiliyye kiya ki wo shrik ho jaye 

tl.to("#page1",{
    y: "30vh",
    duration: 1,
    delay: 1,
})

tl.to("#page1",{
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 1
})