"use client";

import { useId, useState } from "react";
import { UtensilsCrossed, ShowerHead, Bed, Sofa, DoorOpen, CheckCircle2 } from "lucide-react";

interface RoomScopeItem {
  Icon: typeof UtensilsCrossed;
  title: string;
  summary: string;
  intro: string;
  tasks: string[];
}

const roomScopeItems: RoomScopeItem[] = [
  {
    Icon: UtensilsCrossed,
    title: "Kitchen Cleaning",
    summary: "Countertops, sink, appliance exteriors, and floor care.",
    intro:
      "Kitchen cleaning focuses on the surfaces and fixtures used every day, wiped down and cleared of everyday buildup according to the agreed scope.",
    tasks: [
      "Countertops and accessible surfaces",
      "Sink and faucet cleaning",
      "Appliance exterior cleaning",
      "Cabinet-front wiping where agreed",
      "Floor vacuuming and mopping",
      "Trash removal and spot cleaning"
    ]
  },
  {
    Icon: ShowerHead,
    title: "Bathroom Cleaning",
    summary: "Toilets, showers, sinks, mirrors, and fixtures.",
    intro:
      "Bathrooms get focused attention on the fixtures and surfaces that need regular sanitizing between uses.",
    tasks: [
      "Toilet cleaning",
      "Sink and vanity cleaning",
      "Shower and bathtub cleaning",
      "Mirror cleaning",
      "Fixture wiping",
      "Floor cleaning and trash removal"
    ]
  },
  {
    Icon: Bed,
    title: "Bedrooms",
    summary: "Dusting, vacuuming, and accessible surface care.",
    intro:
      "Bedroom cleaning covers accessible surfaces and floors so the room feels maintained without disturbing personal belongings.",
    tasks: [
      "Accessible surface dusting",
      "Furniture exterior wiping",
      "Vacuuming or mopping",
      "Light switch and door handle wiping",
      "Baseboard spot cleaning",
      "Trash removal"
    ]
  },
  {
    Icon: Sofa,
    title: "Living Rooms & Common Areas",
    summary: "Dusting, vacuuming, and hard-floor care.",
    intro:
      "Shared living spaces are dusted and floor-cleaned, including pet hair and everyday debris where applicable, with attention to accessible furniture and fixture surfaces.",
    tasks: [
      "Dusting of accessible surfaces",
      "Ceiling fan and light fixture dusting",
      "Vacuuming and hard-floor care",
      "Window sill wiping",
      "Fixture and furniture exterior cleaning",
      "General agreed straightening"
    ]
  },
  {
    Icon: DoorOpen,
    title: "Hallways & Entry Areas",
    summary: "Floor cleaning, dust removal, and spot cleaning.",
    intro: "Hallways and entryways are cleaned to help remove dirt and debris tracked in from daily use.",
    tasks: [
      "Floor cleaning",
      "Dust and debris removal",
      "Door and handle spot cleaning",
      "Corner and baseboard attention"
    ]
  }
];

export function ResidentialScopeAccordion() {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto w-full max-w-[900px] divide-y divide-brand-100">
      {roomScopeItems.map(({ Icon, title, summary, intro, tasks }, index) => {
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
