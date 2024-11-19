import { StaticImageData } from 'next/image';
export interface PropsTypes {
    title: string
    subtitle: string
    image: StaticImageData
    description: string
    align?: 'left' | 'center'
}