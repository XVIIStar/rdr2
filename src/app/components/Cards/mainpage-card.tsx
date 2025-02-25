import Link from "next/link";

export default function MainCard({ imageSrc, alt, link, title, quote }: { imageSrc: string; alt: string; link: string; title: string; quote: string }) {
    return (
        <div className="flex flex-col items-center">
            <img src={imageSrc} alt={alt} className="w-full h-64 object-cover" />
            <Link href={link}>
                <h2 className="mt-4 text-red-300 text-xl font-semibold">{title}</h2>
            </Link>
            <p className="mt-2 text-center text-sm text-gray-300">{quote}</p>
        </div>
    );
}