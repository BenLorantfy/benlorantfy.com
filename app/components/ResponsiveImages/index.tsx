export function ResponsiveImages(props: { alt: string, images: { png?: string, png2x?: string, jpg?: string, jpg2x?: string, webp?: string, webp2x?: string } }) {
    if (props.images.png && !props.images.png2x) {
        return (
            <img alt={props.alt} src={props.images.png} />
        )
    }

    if (props.images.jpg && !props.images.jpg2x) {
        return (
            <img alt={props.alt} src={props.images.jpg} />
        )
    }

    const baseImg = props.images.png || props.images.jpg;

    return (
        <picture>
            <source srcSet={`${props.images.webp} 1x, ${props.images.webp2x} 2x`} type="image/webp" />
            {props.images.jpg && <source srcSet={`${props.images.jpg} 1x, ${props.images.jpg2x} 2x`} type="image/jpeg" />}
            {props.images.png && <source srcSet={`${props.images.png} 1x, ${props.images.png2x} 2x`} type="image/jpeg" />}
            <img alt={props.alt} src={baseImg} />
        </picture>
    )
}
