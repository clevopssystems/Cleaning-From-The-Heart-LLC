import { Container } from "@/components/shared/Container";

const outcomes = [
  {
    value: "30+",
    label: "Years in Business",
    detail: "Family-owned and Seattle-rooted since the beginning"
  },
  {
    value: "200+",
    label: "Properties Served",
    detail: "Offices, schools, retail, and rental properties"
  },
  {
    value: "2 hrs",
    label: "Quote Response",
    detail: "Every request answered the same business day"
  },
  {
    value: "100%",
    label: "Satisfaction Backed",
    detail: "We return and correct any issue at no charge"
  }
];

export function SocialProofStrip() {
  return (
    <div className="border-y border-white/5 bg-brand-950">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-white/5 lg:grid-cols-4">
          {outcomes.map((item) => (
            <div key={item.label} className="flex flex-col items-start px-6 py-8 sm:px-8 lg:px-10">
              <span className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {item.value}
              </span>
              <span className="mt-1 text-sm font-semibold text-accent">{item.label}</span>
              <span className="mt-2 text-xs leading-relaxed text-white/45 hidden sm:block">{item.detail}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
