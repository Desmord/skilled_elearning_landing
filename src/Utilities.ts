export type TypeContentText = {
    title: string | null,
    text: string,
    image: string | null,
}

export const MAIN_CONTENT_TEXTS: TypeContentText[] = [{
    title: null,
    text: `Check out our most popular courses!`,
    image: null,
}, {
    title: `Animation`,
    text: `Learn the latest animation techniques to create stunning motion design and captivate your audience.`,
    image: `./images/icon-animation.svg`,
}, {
    title: `Design`,
    text: `Create beautiful, usable interfaces to help shape the future of how the web looks.`,
    image: `./images/icon-design.svg`,
}, {
    title: `Photography`,
    text: `Explore critical fundamentals like lighting, compsition, and focus to capture exceptional photos.`,
    image: `./images/icon-photography.svg`,
}, {
    title: `Crypto`,
    text: `All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.`,
    image: `./images/icon-crypto.svg`,
}, {
    title: `Business`,
    text: `A step-by-step playbook to help you start, scale, and sustain your buisness without outside investment.`,
    image: `./images/icon-business.svg`,
}
]