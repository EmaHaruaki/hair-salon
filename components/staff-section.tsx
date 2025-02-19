import Image from "next/image"

const staffMembers = [
  {
    name: "山田 花子",
    nameEn: "Hanako Yamada",
    image: "/staff1.jpg?height=400&width=400",
    comment: "自然体の美しさを大切に。\nあなたらしさを引き出すお手伝いをします。",
    accentColor: "border-rose-300",
    oneWord: "笑顔が一番の美容液",
  },
  {
    name: "佐藤 太郎",
    nameEn: "Taro Sato",
    image: "/staff2.jpg?height=400&width=400",
    comment: "トレンドと個性を融合させた\n斬新なスタイルをご提案します。",
    accentColor: "border-green-300",
    oneWord: "髪は人生の主役",
  },
  {
    name: "鈴木 美咲",
    nameEn: "Misaki Suzuki",
    image: "/staff3.jpg?height=400&width=400",
    comment: "丁寧なカウンセリングで\nお客様の理想を形にします。",
    accentColor: "border-blue-300",
    oneWord: "美しさは自信から",
  },
]

export function StaffSection() {
  return (
    <section id="staff" className="py-24 bg-accent">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-serif text-center mb-16 tracking-wide">Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {staffMembers.map((staff, index) => (
            <div key={index} className="relative pb-40">
              <div className="relative aspect-square">
                <Image src={staff.image || "/placeholder.svg"} alt={staff.name} fill className="object-cover" />
              </div>
              <div className="bg-white p-6 shadow-lg absolute bottom-0 right-[-1rem] left-4 ml-4">
                <h3 className="text-xl font-medium mb-1">{staff.name}</h3>
                <p className={`text-sm text-muted-foreground mb-4 pb-2 border-b ${staff.accentColor}`}>
                  {staff.nameEn}
                </p>
                <p className="text-sm text-muted-foreground whitespace-pre-line mb-4">{staff.comment}</p>
                <p className="text-sm italic text-primary">"{staff.oneWord}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

