"use client";

import { useId, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Armchair,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Droplets,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  Utensils,
  ShowerHead,
  Sofa,
  DoorOpen,
  Building2,
  Coffee,
  Footprints,
  Layers,
  Refrigerator,
  Trash2,
  Warehouse,
  Wine
} from "lucide-react";

// Server components (the pages that render this) can't pass function props
// like a Lucide component across the server/client boundary, so each item
// carries an icon *name* and this client component resolves it locally.
const iconMap: Record<string, LucideIcon> = {
  AppWindow,
  Armchair,
  CalendarCheck,
  ClipboardList,
  Droplets,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  Utensils,
  ShowerHead,
  Sofa,
  DoorOpen,
  Building2,
  Coffee,
  Footprints,
  Layers,
  Refrigerator,
  Trash2,
  Warehouse,
  Wine
};

export interface GroupedScopeItem {
  iconName: keyof typeof iconMap;
  title: string;
  summary: string;
  intro: string;
  tasks: string[];
}

// Generic room/area accordion driven entirely by props — used by the
// residential and commercial deep cleaning pages so each can pass its own
// grouped scope data without duplicating the accordion markup.
export function GroupedScopeAccordion({ items }: { items: GroupedScopeItem[] }) {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto w-full max-w-[900px] divide-y divide-brand-100">
      {items.map(({ iconName, title, summary, intro, tasks }, index) => {
        const Icon = iconMap[iconName];
        const isOpen = openIndex === index;
        const triggerId = `${uid}-trigger-${index}`;
        const panelId = `${uid}-panel-${index}`;

        return (
          <div key={title} className="py-7">
            <h3 className="m-0">
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group -mx-3 flex w-full items-center gap-4 rounded-xl px-3 py-1 text-left transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-200">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="block text-base font-semibold text-ink md:text-lg">{title}</span>
                  <span className="mt-1 block text-sm text-muted">{summary}</span>
                </span>
                <span className="relative flex h-4 w-4 shrink-0 items-center justify-center text-brand-700">
                  <span className="absolute h-0.5 w-4 bg-current" aria-hidden />
                  <span
                    className={`absolute h-4 w-0.5 bg-current transition-transform duration-200 ease-out ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                    aria-hidden
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="mt-4 pl-14">
                  <p className="text-sm leading-relaxed text-muted md:text-base">{intro}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2 text-sm text-ink">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
