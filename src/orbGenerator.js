const [countOrb,setCountOrb] = useState(0)
  function getOrb(w,h,counter){
    let r = getRndInteger(-w,w)
    let l = getRndInteger(-w,w)
    let t = getRndInteger(-h,h)
    let b = getRndInteger(-h,h)
    let orb_name = "orb-"+String(counter)
    setCountOrb(countOrb+1)
    setOrbParam(orb_name,w,h)
    return (
      <div className={"orb "+orb_name} />
    )
  }
  
  function setOrbParam(name,w,h){
    let orb = document.querySelector("."+String(name))
    orb.style.width = w+"px"
    orb.style.height = h+"px"
  }
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }