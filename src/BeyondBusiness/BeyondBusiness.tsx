import SEO from "../component/SEO";

const BeyondBusiness = () => (
  <>
    <SEO
      title="So-nyah Beyond Business | So-Nyah Cleaners"
      description="A new chapter of the So-nyah story is coming soon."
    />

    <section className="relative flex items-center justify-center overflow-hidden bg-[var(--primary)] px-4 py-5 sm:px-5 sm:py-6">
      <h3 className="text-white! head text-[32px] sm:text-[38px] lg:text-[48px] tracking-normal! font-bold items-center text-center">
        So-nyah Beyond Business
      </h3>
    </section>
    <section className="relative isolate flex min-h-[460px] items-center justify-center overflow-hidden bg-[var(--bg)] px-4 py-20 sm:min-h-[520px] sm:px-6 sm:py-24 lg:min-h-[580px]">
      {/* <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 -z-10 h-64 w-64 rounded-full bg-[var(--index-section)] opacity-40 blur-3xl sm:h-80 sm:w-80"
      /> */}
      {/* <div
        aria-hidden="true"
        className="absolute -bottom-28 -right-20 -z-10 h-72 w-72 rounded-full bg-[var(--accent-bg)] opacity-50 blur-3xl sm:h-96 sm:w-96"
      /> */}

      <div className="w-full max-w-4xl border border-[var(--border)] bg-white px-6 py-14 text-center shadow-sm sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.24em] text-[var(--primary)] sm:text-sm">
          A NEW CHAPTER IS ON THE WAY
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl font-[var(--heading)] text-3xl font-bold leading-tight text-[var(--primary)] sm:text-4xl lg:text-5xl">
          So-nyah Beyond Business
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--accent-text)] sm:mt-6 sm:text-lg sm:leading-8">
          We are preparing something special. A new chapter of the <br />So-nyah story is coming soon.
        </p>
        <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-section)] px-5 py-2.5 text-sm font-semibold tracking-[0.12em] text-[var(--primary)] sm:mt-10 sm:px-6 sm:py-3">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--primary)]" />
          Coming Soon
        </div>
      </div>
    </section>
  </>
);

export default BeyondBusiness;
