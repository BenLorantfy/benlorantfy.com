import Image from 'next/image';
import { config } from '../../config';

export function HeroImage(props: { slug: keyof typeof config.articles }) {
    return (
        <Image
            src={config.articles[props.slug].image}
        />
    )
}
