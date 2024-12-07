import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function StatCard({data}) {
    const {title, count, limit} = data;
  return (
    <Card>
      <CardHeader className="pb-6">
        <CardDescription className="tajawal">{title}</CardDescription>
        {
          limit? <CardTitle className="text-4xl">{count}<span className="text-base brand-text"> / {limit}</span></CardTitle> : <CardTitle className="text-4xl">{count}</CardTitle>
        }
      </CardHeader>
    </Card>
  )
}
