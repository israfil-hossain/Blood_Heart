import { image_logo } from "@/app/assets";
import { Card } from "./common-card";

export function Service() {
  return (
    <div className="container">
      <div className="container">
        <span>/services/</span>
        <h2 className="text-[32px] font-normal ">
          The unique selling points & <br />
          advantages of our service
        </h2>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 py-8">
          {listdata?.map((item, id) => (
            <Card
              key={id}
              image={item.image}
              title={item?.title}
              description={item.des}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const listdata = [
  {
    image: image_logo,
    title: "Image synthesis",
    des: "AI image generators can synthesize new, unique images from scratch and providing best silutions.",
  },
  {
    image: image_logo,
    title: "Style transfer",
    des: "AI image generators can transfer the style of one image to another image style.",
  },
  {
    image: image_logo,
    title: "Image synthesis",
    des: "AI image generators can synthesize new, unique images from scratch and providing best silutions.",
  },
  {
    image: image_logo,
    title: "Style transfer",
    des: "AI image generators can transfer the style of one image to another image style.",
  },
  {
    image: image_logo,
    title: "Image synthesis",
    des: "AI image generators can synthesize new, unique images from scratch and providing best silutions.",
  },
  {
    image: image_logo,
    title: "Style transfer",
    des: "AI image generators can transfer the style of one image to another image style.",
  },
  {
    image: image_logo,
    title: "Image synthesis",
    des: "AI image generators can synthesize new, unique images from scratch and providing best silutions.",
  },
  {
    image: image_logo,
    title: "Style transfer",
    des: "AI image generators can transfer the style of one image to another image style.",
  }
  
];
