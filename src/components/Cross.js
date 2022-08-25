export default function Logo(params) {
  return (
    <a href="#" className="logo" onClick={params.onClick}>
      <svg classname="logo__svg" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="6.36399" y1="5.65682" x2="18.3848" y2="17.6776" stroke="url(#paint0_linear_16_668)" />
  <line x1="5.65688" y1="17.6777" x2="17.6777" y2="5.65688" stroke="url(#paint1_linear_16_668)" />
  <defs>
    <linearGradient id="paint0_linear_16_668" x1="5.30333" y1="6.71748" x2="19.1516" y2="12.4303" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FF640C" />
      <stop offset="0.507789" stopColor="#FF506A" />
      <stop offset={1} stopColor="#7F00CD" />
    </linearGradient>
    <linearGradient id="paint1_linear_16_668" x1="6.71754" y1="18.7384" x2="12.4304" y2="4.89012" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FF640C" />
      <stop offset="0.507789" stopColor="#FF506A" />
      <stop offset={1} stopColor="#7F00CD" />
    </linearGradient>
  </defs>
</svg>

    </a>
  );
}
