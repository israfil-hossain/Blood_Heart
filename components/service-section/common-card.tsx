import Image from "next/image";

// Define the interface for the props
interface CardProps {
    image: string;
    title: string;
    description: string;
  }
  
  // Use a generic type to type the props in your component
  export function Card<T extends CardProps>({ image, title, description }: T) {
    return (
      <div className="container w-full ">
        <Image src={image} alt={title} width={300} height={300} className="w-[40px] h-[40px] " />
        <h2 className="font-semibold text-[14px] leading-5 py-2">{title}</h2>
        <p className="text-[12px] leading-4">{description}</p>
      </div>
    );
  }
  