import { IconPhoto } from "@/components/icons";
import { withBasePath } from "@/lib/basePath";
import gallery from "@/content/gallery.json";

export const metadata = { title: "Galeria · Fã Clube do Lelê" };

export default function GaleriaPage() {
  return (
    <div>
      <h2 className="font-display text-lg text-sun mb-2">
        Galeria de momentos
      </h2>
      <p className="text-sm text-chalk/70 mb-5">
        Print, foto de aula, meme — manda a sua no grupo pra gente colar aqui.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {gallery.map((item, i) => (
          <div
            key={item.caption + i}
            className={`relative aspect-square bg-chalk border-[3px] border-ink shadow-hard-sm overflow-hidden flex flex-col items-center justify-center gap-2 ${
              i % 3 === 0 ? "rotate-1" : "-rotate-1"
            }`}
          >
            {item.image ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(item.image)}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 inset-x-0 bg-ink/75 text-chalk font-pixel text-[7px] uppercase text-center py-1.5">
                  {item.caption}
                </span>
              </>
            ) : (
              <>
                <IconPhoto className="w-8 h-8 text-ink/40" />
                <span className="font-pixel text-[8px] text-ink/60 uppercase text-center px-2">
                  {item.caption}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
