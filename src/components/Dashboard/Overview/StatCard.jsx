import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function StatCard({data}) {
    const {title, count} = data;
  return (
    <Card>
      <CardHeader className="pb-6">
        <CardDescription className="tajawal">{title}</CardDescription>
        <CardTitle className="text-4xl">{count}</CardTitle>
      </CardHeader>
    </Card>
  )
}
