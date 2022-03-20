export type PaddingCode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

const plMapping = {
    0: 'pl-0',
    1: 'pl-1',
    2: 'pl-2',
    3: 'pl-3',
    4: 'pl-4',
    5: 'pl-5',
    6: 'pl-6',
    7: 'pl-7',
};

const prMapping = {
    0: 'pr-0',
    1: 'pr-1',
    2: 'pr-2',
    3: 'pr-3',
    4: 'pr-4',
    5: 'pr-5',
    6: 'pr-6',
    7: 'pr-7',
};

const ptMapping = {
    0: 'pt-0',
    1: 'pt-1',
    2: 'pt-2',
    3: 'pt-3',
    4: 'pt-4',
    5: 'pt-5',
    6: 'pt-6',
    7: 'pt-7',
};

const pbMapping = {
    0: 'pb-0',
    1: 'pb-1',
    2: 'pb-2',
    3: 'pb-3',
    4: 'pb-4',
    5: 'pb-5',
    6: 'pb-6',
    7: 'pb-7',
};

export function getPaddingClassesFromCodes(paddingCodes: { pl?: PaddingCode, pr?: PaddingCode, pt?: PaddingCode, pb?: PaddingCode }) {
    const plClass = paddingCodes.pl ? plMapping[paddingCodes.pl] : "";
    const prClass = paddingCodes.pr ? prMapping[paddingCodes.pr] : "";
    const ptClass = paddingCodes.pt ? ptMapping[paddingCodes.pt] : "";
    const pbClass = paddingCodes.pb ? pbMapping[paddingCodes.pb] : "";

    return [plClass,prClass,ptClass,pbClass].filter(Boolean).join(" ");
}

export type PropsFromGetStaticProps<T extends () => Promise<({ props: any })> | ({ props: any })> = Awaited<ReturnType<T>>["props"];


// export const getArticleMeta = (params: { title: string, description: string, image: string }) => {
//     return {
//         title: params.title,
//         description: params.description,
//         'twitter:card': 'summary',
//         'twitter:title': params.title,
//         'twitter:description': params.description,
//         'twitter:image': `https://benlorantfy.com${params.image}`,
//         'og:title': params.title,
//         'og:image': `https://benlorantfy.com${params.image}`
//     }
// }
