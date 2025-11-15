function Logo() {
  return (
    <h1 className="font-future text-gray-900 select-none tracking-[0.6em] text-xl text-center uppercase">
      Care
    </h1>
  );
}

export default function Navbar() {
  return (
    <nav className="container backdrop-blur-sm bg-gray-50/10 fixed min-h-12 min-w-full border-b border-gray-300 px-8 py-1 flex flex-row z-100">
      <div className="text-center mx-auto md:mx-0 md:text-left my-auto">
        <Logo />
      </div>
      <div className="hidden md:block grow" />
      <div className="hidden md:block my-auto uppercase tracking-[0.3em] md:tracking-[0.5em] font-extralight font-future text-gray-600 select-none text-sm md:text-base">
        Apex Research
      </div>
    </nav>
  );
}
