"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useDragControls, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, SlidersHorizontal, X } from "lucide-react";

const ALL = "All Categories";

type CategoryFilterProps<T extends string> = {
  /** Categories that actually have items (without "All Categories") */
  categories: readonly T[];
  active: T | typeof ALL;
  onChange: (category: T | typeof ALL) => void;
  /** Optional: number of items per category, shown as a small count */
  counts?: Partial<Record<T | typeof ALL, number>>;
};

export function CategoryFilter<T extends string>({
  categories,
  active,
  onChange,
  counts,
}: CategoryFilterProps<T>) {
  const options = [ALL, ...categories] as (T | typeof ALL)[];

  return (
    <div className="mb-5 sm:mb-6">
      {/* Desktop / tablet: pill chips */}
      <div className="hidden sm:block">
        <ChipRow options={options} active={active} onChange={onChange} counts={counts} />
      </div>

      {/* Mobile: one compact button that opens a bottom sheet */}
      <div className="sm:hidden">
        <MobileSheetFilter options={options} active={active} onChange={onChange} counts={counts} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop chips                                                       */
/* ------------------------------------------------------------------ */

function ChipRow<T extends string>({
  options,
  active,
  onChange,
  counts,
}: {
  options: (T | typeof ALL)[];
  active: T | typeof ALL;
  onChange: (c: T | typeof ALL) => void;
  counts?: Partial<Record<T | typeof ALL, number>>;
}) {
  const groupId = useId();

  return (
    <div
      role="radiogroup"
      aria-label="Filter gallery by category"
      className="flex flex-wrap gap-2"
    >
      {options.map((option) => {
        const selected = option === active;
        const count = counts?.[option];
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option)}
            className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#700072] focus-visible:ring-offset-2 ${
              selected
                ? "text-white"
                : "bg-white text-gray-700 ring-1 ring-inset ring-gray-200 hover:bg-[#700072]/5 hover:text-[#700072] hover:ring-[#700072]/30"
            }`}
          >
            {selected && (
              // Shared-layout pill: slides between chips when the selection changes
              <motion.span
                layoutId={`${groupId}-active-pill`}
                className="absolute inset-0 rounded-full bg-[#700072] shadow-md shadow-[#700072]/25"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative z-10">{option}</span>
            {typeof count === "number" && (
              <span
                className={`relative z-10 rounded-full px-1.5 text-xs tabular-nums ${
                  selected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile bottom sheet                                                 */
/* ------------------------------------------------------------------ */

function MobileSheetFilter<T extends string>({
  options,
  active,
  onChange,
  counts,
}: {
  options: (T | typeof ALL)[];
  active: T | typeof ALL;
  onChange: (c: T | typeof ALL) => void;
  counts?: Partial<Record<T | typeof ALL, number>>;
}) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const titleId = useId();

  // Lock page scroll, close on Escape, move focus into the sheet, restore it on close
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);

      // Simple focus trap
      if (event.key === "Tab" && sheetRef.current) {
        const focusable = sheetRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    const frame = requestAnimationFrame(() => {
      sheetRef.current
        ?.querySelector<HTMLElement>('[aria-checked="true"]')
        ?.focus();
    });

    const trigger = triggerRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(frame);
      trigger?.focus();
    };
  }, [open]);

  const select = (option: T | typeof ALL) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="flex w-full items-center gap-3 rounded-2xl bg-white px-4 py-3 text-left shadow-sm ring-1 ring-inset ring-gray-200 outline-none transition active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#700072]"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#700072]/10 text-[#700072]">
          <SlidersHorizontal className="h-4 w-4" aria-hidden />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs text-gray-500">Category</span>
          <span className="block truncate text-sm font-semibold text-gray-900">{active}</span>
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" aria-hidden />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-end">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={() => setOpen(false)}
            aria-hidden
          />

          {/* Sheet */}
          <motion.div
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative flex max-h-[80dvh] w-full flex-col rounded-t-3xl bg-white shadow-2xl"
            initial={reduceMotion ? { opacity: 0 } : { y: "100%" }}
            animate={reduceMotion ? { opacity: 1 } : { y: 0 }}
            transition={{ type: "tween", duration: reduceMotion ? 0 : 0.2, ease: "easeInOut" }}
            drag={reduceMotion ? false : "y"}
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 120 || info.velocity.y > 600) setOpen(false);
            }}
          >
            {/* Grab handle */}
            <div
              className="flex justify-center pt-3 touch-none"
              onPointerDown={(event) => dragControls.start(event)}
              aria-hidden
            >
              <span className="h-1.5 w-10 rounded-full bg-gray-300" />
            </div>

            <div className="flex items-center justify-between px-5 pb-2 pt-3">
              <h2 id={titleId} className="text-base font-semibold text-gray-900">
                Filter by category
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close filter"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 outline-none transition hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-[#700072]"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <div
              role="radiogroup"
              aria-labelledby={titleId}
              className="overflow-y-auto overscroll-contain px-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-1"
            >
              {options.map((option) => {
                const selected = option === active;
                const count = counts?.[option];
                return (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => select(option)}
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3.5 text-left text-[15px] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#700072] ${
                      selected
                        ? "bg-[#700072]/10 font-semibold text-[#700072]"
                        : "text-gray-800 hover:bg-gray-50 active:bg-gray-100"
                    }`}
                  >
                    <span className="flex-1">{option}</span>
                    {typeof count === "number" && (
                      <span className="text-sm tabular-nums text-gray-400">{count}</span>
                    )}
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        selected ? "bg-[#700072] text-white" : "ring-1 ring-inset ring-gray-300"
                      }`}
                      aria-hidden
                    >
                      {selected && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Usage (replace your old <div> + <select> block with this)           */
/* ------------------------------------------------------------------ */
/*
<CategoryFilter
  categories={availableCategories}
  active={activeCategory}
  onChange={setActiveCategory}
  // optional:
  // counts={{ "All Categories": items.length, Weddings: 12, Portraits: 8 }}
/>
*/