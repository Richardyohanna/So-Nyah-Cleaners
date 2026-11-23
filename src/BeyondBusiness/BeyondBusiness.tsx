import SEO from "../component/SEO";
import worldToiletDayVideo from "../assets/beyond_business_1_compressed.mp4";
import worldToiletDayThumbnail from "../assets/beyond_business_1_thumbnail.jpg";

const BeyondBusiness = () => (
  <>
    <SEO
      title="So-nyah Beyond Business | So-Nyah Cleaners"
      description="So-nyah Cleaners marks World Toilet Day 2026 with a sanitation and hygiene intervention at Primary Healthcare Centre, Garki Village, Abuja."
    />

    <section className="relative flex items-center justify-center overflow-hidden bg-[var(--primary)] px-4 py-5 sm:px-5 sm:py-6">
      <h3 className="text-white! head text-[32px] sm:text-[38px] lg:text-[48px] tracking-normal! font-bold items-center text-center">
        So-nyah Beyond Business
      </h3>
    </section>
    <section className="bg-[var(--bg)] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <article
        aria-labelledby="world-toilet-day-title"
        className="mx-auto w-full max-w-5xl border border-[var(--border)] bg-white px-5 py-8 shadow-sm sm:px-10 sm:py-12 lg:px-16"
      >
        <header className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--primary)] sm:text-sm">
            COMMUNITY IMPACT
          </p>
          <h1
            id="world-toilet-day-title"
            className="mx-auto mt-4 max-w-3xl font-[var(--heading)] text-3xl font-bold leading-tight text-[var(--primary)] sm:text-4xl lg:text-5xl"
          >
            World Toilet Day 2026: Safe Toilets. Equal Futures.
          </h1>
        </header>

          <div className="mt-8 overflow-hidden bg-black sm:mt-10">
          <video
            aria-label="World Toilet Day 2026 sanitation and hygiene intervention"
            className="aspect-video h-auto w-full object-contain"
            controls
            playsInline
            preload="metadata"
            poster={worldToiletDayThumbnail}
          >
            <source src={worldToiletDayVideo} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>

        <div className="mt-8 space-y-5 text-base leading-7 text-[var(--accent-text)] sm:text-lg sm:leading-8">
          <p>
            Beyond the Business of Cleaning lies a greater responsibility; the initiative to contribute to healthier, safer and more dignified communities.
          </p>
          <p>
            On November 19, 2026, in commemoration of World Toilet Day, So-nyah Cleaners carried out a sanitation and hygiene intervention at Primary Healthcare Centre, Garki Village, Abuja.
          </p>
          <p>
            It was our way of supporting the global call for “Safe Toilets. Equal Futures.” and contributing, in our own little way, to Sustainable Development Goal 6 (SDG 6) – Clean Water and Sanitation, particularly the promotion of adequate and equitable sanitation and hygiene for all; especially women and girls.
          </p>
          <p>Some of the activities carried out includes:</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Deep cleaning of three (3) female toilets in the facility.</li>
            <li>We had a hygiene and sanitation awareness talk with about 50 women who visited the facility for immunization; and shared hygiene educational materials.</li>
            <li>Finally, we distributed a few toilet kit to the women present, equipped the toilets we cleaned with approved neutral toiletries, and provided sanitary waste bins for the facility.</li>
          </ul>
          <p>
            We are grateful to the management and staff of PHC Garki Village for their warm reception and cooperation throughout the exercise.
          </p>
          <p>
            @sonyah_cleaners we believe that cleaning is also a public health responsibility that preserves the dignity, safety and the well-being of people.
          </p>
          <p>
            This is more than a World Toilet Day activity. It is a step in our commitment to visible community impact.
          </p>
          <p>So-nyah Beyond Business.<br />Purpose beyond profit. Impact beyond business</p>
          <p className="font-semibold text-[var(--primary)]">#worldtoiletday2026</p>
        </div>


      </article>
    </section>
  </>
);

export default BeyondBusiness;
