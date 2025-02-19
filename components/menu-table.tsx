import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function MenuTable() {
  const menuItems = [
    { service: "カット", price: "¥6,600" },
    { service: "カラー", price: "¥8,800〜" },
    { service: "パーマ", price: "¥8,800〜" },
    { service: "トリートメント", price: "¥4,400〜" },
    { service: "ヘッドスパ", price: "¥5,500〜" },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Menu</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menuItems.map((item) => (
            <TableRow key={item.service}>
              <TableCell>{item.service}</TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

