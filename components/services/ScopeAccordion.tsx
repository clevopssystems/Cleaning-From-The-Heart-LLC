"use client";

import { useId, useState } from "react";
import { Building2, DoorOpen, ShowerHead, Coffee, Layers } from "lucide-react";

interface ScopeItem {
  Icon: typeof Building2;
  title: string;
  summary: string;
  description: string;
}

const scopeItems: ScopeItem[] = [
  {
    Icon: Building2,
    title: "Offices & Workspaces",
    summary: "Routine care for desks, floors, high-touch surfaces, trash and shared work areas.",
    description:
      "Office cleaning covers workstations, desks, and shared surfaces, including high-touch points like door handles, light switches, and shared equipment. Routine vacuuming, hard-surface floor care, dusting, and trash removal keep small offices and larger corporate offices presentable between visits. Regular attention to shared surfaces supports better indoor air quality and employee health, helping maintain a productive work environment without disrupting daily business hours."
  },
  {
    Icon: DoorOpen,
    title: "Lobbies, Entrances & Reception Areas",
    summary: "First-impression care for entrance glass, reception counters, seating and welcome areas.",
    description:
      "Lobbies and entryways create the first impression for visitors, clients, and employees entering your building, so entrance glass, reception counters, and public-facing spaces need regular attention. Window cleaning removes smudges and fingerprints, while floor care clears dirt and grime tracked in from high-traffic areas near the entrance. For offices, retail stores, and hospitality properties, a well-kept lobby supports curb appeal and building aesthetics."
  },
  {
    Icon: ShowerHead,
    title: "Restroom Cleaning & Sanitizing",
    summary: "Sanitizing, restocking and disinfection for one of the highest-priority facility areas.",
    description:
      "Restrooms are one of the highest-priority areas in any commercial facility, since they see constant use and directly affect occupant health. Restroom cleaning includes sanitizing toilets, sinks, and high-touch surfaces, along with restroom restocking of paper products and soap where that service is included. Disinfection cleaning addresses the bacteria and germs that build up in shared restrooms, which matters for schools, medical offices, restaurants, and any facility with heavy daily use."
  },
  {
    Icon: Coffee,
    title: "Breakrooms & Kitchenettes",
    summary: "Wiping, sanitizing and trash care to keep shared kitchen spaces clean daily.",
    description:
      "Break rooms and kitchenettes see heavy daily use, so counters, tables, sinks, and appliance exteriors need routine attention to stay sanitary. Surface wiping and disinfection cleaning on shared surfaces like microwave handles and refrigerator doors help limit the spread of germs among employees who pass through the space. Trash removal and recycling keep the break room from becoming a source of odor or clutter."
  },
  {
    Icon: Layers,
    title: "Hallways & Common Areas",
    summary: "Vacuuming, mopping and spot-cleaning to keep shared corridors looking well maintained.",
    description:
      "Hallways, stairwells, and common areas connect every part of a facility, carrying steady foot traffic from employees, tenants, and visitors throughout the day. Routine vacuuming of carpeted corridors, mopping of hard surfaces, and spot-cleaning of scuffs and marks keep these shared spaces looking maintained rather than worn down. Well-kept common areas reflect on the whole property, not just a single suite, especially in multi-tenant buildings."
  }
];

export function ScopeAccordion() {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto w-full max-w-[900px] divide-y divide-brand-100">
      {scopeItems.map(({ Icon, title, summary, description }, index) => {
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
                <p className="mt-4 pl-14 text-sm leading-relaxed text-muted md:text-base">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
