export default function BallsGenerator({value}) {
  const balls = [];
  for (let i = 0; i < Math.floor(Math.random() * value); i++) {
    balls.push(i);
  }
  function counter() {
    let n = 0;
    return () => {
      n += 1;
      return n;
    };
  }
  function randomOrb(params) {
    let orbs=['ball-1','ball-2','ball-3']
    return orbs[Math.floor(Math.random() * 2.99)];
  }
  let count = counter();
  return (
    <>
      {balls.map((el) => (
        <div
          className={randomOrb()}
          id={count()}
          style={{
            zIndex: "1",
            borderRadius: "50%",
            textAlign: "center",
            top: String(Math.floor(Math.random() * (100 +50)) -50) + "vh",
            left: String(Math.floor(Math.random() * (100 +50)) -50) + "vw",
          }}
          w
        ></div>
      ))}
    </>
  );
}