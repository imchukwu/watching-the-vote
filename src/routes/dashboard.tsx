import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, ImagePlaceholder } from "@/components/site/SiteLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity, AlertTriangle, CheckCircle2, MapPin, Radio, Users } from "lucide-react";
import { turnoutSeries, incidentBreakdown, stateActivity } from "@/lib/wtv-data";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Election Dashboard — Watching The Vote" },
      { name: "description", content: "Live observer check-ins, incident reports, polling-unit coverage and PVT status." },
      { property: "og:title", content: "Election Dashboard · Watching The Vote" },
      { property: "og:description", content: "Real-time observer deployment and incident intelligence from Nigeria's elections." },
    ],
    links: [{ rel: "canonical", href: "/dashboard" }],
  }),
  component: DashboardPage,
});

const CHART_COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];

function DashboardPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Live election dashboard"
        title="Real-time citizen observation intelligence"
        intro="Aggregated from thousands of accredited observers across polling units. Filter by election, state and time."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="2027-general">
            <SelectTrigger className="w-56"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="2027-general">2027 General Election</SelectItem>
              <SelectItem value="2026-osun">2026 Osun Governorship</SelectItem>
              <SelectItem value="2024-ondo">2024 Ondo Governorship</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All states</SelectItem>
              <SelectItem value="lagos">Lagos</SelectItem>
              <SelectItem value="kano">Kano</SelectItem>
              <SelectItem value="rivers">Rivers</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">Export CSV</Button>
          <span className="ml-2 inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" /> Live
          </span>
        </div>
      </PageHeader>

      <section className="container-wtv py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Users, l: "Observer deployment", v: "3,812 / 3,850", tint: "text-primary" },
            { i: Radio, l: "Check-ins today", v: "8,942", tint: "text-success" },
            { i: AlertTriangle, l: "Incidents reported", v: "163", tint: "text-warning" },
            { i: CheckCircle2, l: "Reports verified", v: "1,048", tint: "text-primary" },
          ].map((k) => (
            <Card key={k.l}>
              <CardHeader className="flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{k.l}</CardTitle>
                <k.i className={`h-4 w-4 ${k.tint}`} />
              </CardHeader>
              <CardContent>
                <div className="font-display text-3xl font-bold">{k.v}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">Observer check-ins vs. incidents (today)</CardTitle>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={turnoutSeries}>
                  <defs>
                    <linearGradient id="ck" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="in" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--chart-3)" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="var(--chart-3)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={11} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                  <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                  <Area type="monotone" dataKey="checkins" stroke="var(--chart-1)" fill="url(#ck)" strokeWidth={2} />
                  <Area type="monotone" dataKey="incidents" stroke="var(--chart-3)" fill="url(#in)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Incident breakdown</CardTitle>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={incidentBreakdown} innerRadius={45} outerRadius={80} paddingAngle={2} dataKey="value">
                    {incidentBreakdown.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
              <ul className="mt-2 space-y-1 text-xs">
                {incidentBreakdown.map((b, i) => (
                  <li key={b.name} className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm" style={{ background: CHART_COLORS[i % CHART_COLORS.length] }} /> {b.name}</span>
                    <span className="font-semibold text-muted-foreground">{b.value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="text-base">Coverage map</CardTitle>
              <Badge variant="outline"><MapPin className="mr-1 h-3 w-3" /> Leaflet · placeholder</Badge>
            </CardHeader>
            <CardContent>
              <ImagePlaceholder src="/images/wtv7.jpg" label="Interactive Nigeria coverage map" ratio="aspect-[16/10]" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Observers by state (top 8)</CardTitle></CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stateActivity} layout="vertical" margin={{ left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
                  <XAxis type="number" stroke="var(--muted-foreground)" fontSize={11} />
                  <YAxis type="category" dataKey="state" stroke="var(--muted-foreground)" fontSize={11} width={70} />
                  <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                  <Bar dataKey="observers" fill="var(--chart-1)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-base">State activity</CardTitle>
            <div className="flex items-center gap-2 text-xs text-muted-foreground"><Activity className="h-4 w-4" /> Updated 30s ago</div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="py-3">State</th>
                    <th className="py-3">Polling units</th>
                    <th className="py-3">Observers</th>
                    <th className="py-3">Status</th>
                    <th className="py-3 text-right">Situation room</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {stateActivity.map((s) => (
                    <tr key={s.state}>
                      <td className="py-3 font-medium">{s.state}</td>
                      <td className="py-3 text-muted-foreground">{s.pu.toLocaleString()}</td>
                      <td className="py-3">{s.observers}</td>
                      <td className="py-3">
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${s.status === "Active" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`}>{s.status}</span>
                      </td>
                      <td className="py-3 text-right"><Button size="sm" variant="ghost">Open →</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </SiteLayout>
  );
}
