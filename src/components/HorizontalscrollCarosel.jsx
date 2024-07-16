import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'

const ScrollCarosole = () => {
    return (
        <div className="bg-neutral-800">
            <HorizontalScrollCarousel />     
        </div>
    );
};


const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        console.log(card.url)
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default ScrollCarosole;

const cards = [
    {
        url: image1,
       
        title: "Anu",
        id: 1,
    },
    {
        url: image2,
        title: "Pershiba",
        id: 2,
    },
    {
        url: image1,
        title: "wajith",
        id: 3,
    },
    {
        url: image3,
        title: "Savi",
        id: 4,
    },
    {
        url: image1,
        title: "Nithin",
        id: 5,
    },
    {
        url: image2,
        title: "Roshan",
        id: 6,
    },
    {
        url: image3,
        title: "Subi",
        id: 7,
    },
];































