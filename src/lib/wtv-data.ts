// Mock data for the Watching The Vote site. In production, wire these
// to a CMS (Strapi / Directus) via TanStack Query.

export const stats = [
  { label: "Elections Observed", value: 24, suffix: "+" },
  { label: "Accredited Observers", value: 8500, suffix: "+" },
  { label: "States Covered", value: 36, suffix: "" },
  { label: "Polling Units Reached", value: 176000, suffix: "+" },
  { label: "Reports Published", value: 420, suffix: "" },
  { label: "Citizens Reached", value: 34_000_000, suffix: "+" },
] as const;

export const pillars = [
  { title: "Election Observation", desc: "Systematic, non-partisan observation of pre-election, election-day and post-election processes.", icon: "eye" },
  { title: "Process and Results Verification for Transparency", desc: "Statistical verification of official election results using a representative random sample of polling units.", icon: "chart" },
  { title: "Technology & Innovation", desc: "Custom-built reporting tools, SMS and mobile apps that turn observer signals into real-time intelligence.", icon: "cpu" },
  { title: "Civic Engagement", desc: "Voter education, town halls and dialogues that strengthen citizens' voice in the electoral process.", icon: "users" },
  { title: "Data Analysis", desc: "Rigorous quantitative and qualitative analysis of election-day data across all 36 states + FCT.", icon: "database" },
  { title: "Election Integrity", desc: "Evidence-based advocacy for transparent, credible, inclusive elections and reform of the electoral framework.", icon: "shield" },
] as const;

export const news = [
  { slug: "wtv-2027-preparations", date: "2026-07-14", category: "Press Release", title: "Yiaga Africa unveils Watching The Vote roadmap for the 2027 general election", excerpt: "The initiative will deploy over 3,800 accredited citizen observers across all 774 LGAs.", },
  { slug: "edo-post-election", date: "2026-06-02", category: "Analysis", title: "Post-election review: what the Edo 2024 governorship taught us", excerpt: "Turnout patterns, incident hotspots, and INEC's result upload timelines under the microscope.", },
  { slug: "observer-training-batch-11", date: "2026-05-20", category: "Observer Stories", title: "Batch 11 observer training equips 620 new citizen monitors", excerpt: "Five days of classroom, simulation and ethics training in Abuja and Lagos.", },
  { slug: "open-data-portal", date: "2026-05-04", category: "Technology", title: "Open Data portal now publishes anonymised polling-unit micro-data", excerpt: "Researchers can now download PU-level datasets from every WTV-observed election since 2015.", },
] as const;

export const reports = [
  { id: "r-2024-ondo", title: "Ondo 2024 Governorship Election: Final Observation Report", election: "Ondo 2024", type: "Final Report", pages: 88, year: 2024 },
  { id: "r-2024-edo", title: "Edo 2024 Governorship Election: Preliminary Statement", election: "Edo 2024", type: "Preliminary Statement", pages: 24, year: 2024 },
  { id: "r-2023-general", title: "Reviewing the 2023 General Election in Nigeria", election: "General 2023", type: "Final Report", pages: 210, year: 2023 },
  { id: "r-2023-off-cycle", title: "Off-Cycle Governorship Elections 2023: Comparative Analysis", election: "Off-cycle 2023", type: "Research", pages: 72, year: 2023 },
] as const;

export const elections = [
  { slug: "2027-general", name: "2027 General Election", date: "Feb 2027", status: "Upcoming", pu: "176,846", observers: "3,800" },
  { slug: "2026-osun", name: "2026 Osun Governorship", date: "Jul 2026", status: "Planning", pu: "3,763", observers: "450" },
  { slug: "2024-ondo", name: "2024 Ondo Governorship", date: "Nov 2024", status: "Completed", pu: "3,933", observers: "520" },
  { slug: "2024-edo", name: "2024 Edo Governorship", date: "Sep 2024", status: "Completed", pu: "4,519", observers: "610" },
  { slug: "2023-general", name: "2023 General Election", date: "Feb 2023", status: "Completed", pu: "176,846", observers: "3,836" },
] as const;

export const partners = [
  "European Union", "USAID", "FCDO", "Ford Foundation", "MacArthur Foundation",
  "Open Society", "Bill & Melinda Gates", "Konrad Adenauer", "OSIWA", "NED",
] as const;

// Mock time-series for dashboard chart
export const turnoutSeries = Array.from({ length: 12 }).map((_, i) => ({
  time: `${8 + i}:00`,
  checkins: Math.round(120 + Math.sin(i / 2) * 40 + i * 22),
  incidents: Math.max(0, Math.round(4 + Math.cos(i / 1.5) * 3 + (i > 8 ? 5 : 0))),
}));

export const incidentBreakdown = [
  { name: "Late arrival of materials", value: 34 },
  { name: "BVAS malfunction", value: 22 },
  { name: "Voter intimidation", value: 12 },
  { name: "Vote buying", value: 18 },
  { name: "Result upload delay", value: 14 },
];

export const stateActivity = [
  { state: "Lagos", pu: 13325, observers: 420, status: "Active" },
  { state: "Kano", pu: 11222, observers: 380, status: "Active" },
  { state: "Rivers", pu: 6866, observers: 260, status: "Active" },
  { state: "Kaduna", pu: 8158, observers: 300, status: "Active" },
  { state: "Anambra", pu: 5720, observers: 240, status: "Standby" },
  { state: "Borno", pu: 5262, observers: 210, status: "Standby" },
  { state: "Oyo", pu: 6743, observers: 240, status: "Active" },
  { state: "Enugu", pu: 4442, observers: 190, status: "Standby" },
];
