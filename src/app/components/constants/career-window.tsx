
import Link from "next/link";

interface CareerWindowProps {
  header: string;
  career: string;
  description: string;
}

const CareerWindow: React.FC<CareerWindowProps> = ({ header, career, description }) => {
  return (
    <div
      className="overflow-hidden rounded-2xl border-[12px] border-white/15 mx-auto mb-8 lg:mb-12"
      data-aos="zoom-in"
    >
      <div className="bg-[#0c1015] w-full px-6 sm:px-16 py-10 sm:pt-16 sm:pb-10">
        <h3>{header}</h3>
        <p className="text-[#746eb8] py-4">{career}</p>
        <div className="flex flex-wrap justify-between">
          <p className="whitespace-pre-line pb-6 sm:pb-0">{description}</p>
          <Link
            href={`/careers/apply/${header.toLowerCase().replace(/\s+/g, "-")}`}
            className="button inline-block lg:self-start rounded-md"
          >
            Easy Apply &#x27A4;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerWindow;
