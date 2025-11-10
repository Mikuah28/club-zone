import { eskulList } from "@/data/eskullist";
import DetailEskul from "@/components/detailEskul";

export default function Page({ params }) {
  const eskul = eskulList.find(item => item.slug === params.slug);

  if (!eskul) {
    return <p className="p-6">Eskul tidak ditemukan.</p>;
  }

  return <DetailEskul eskul={eskul} />;
}
