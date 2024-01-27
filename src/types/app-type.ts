export type NavItemsType = {
    label: string,
    href: string,
    icon?: React.ReactNode
}

export type ProductCategoryType = {
    id: string;
    name: string;
    description?: string;
    date_created?: string;
    last_update?: string
}
export type ProductType = {
    id: string;
    name: string;
    description?: string
    price: number;
    image: string;
    categories?: ProductCategoryType[];
    date_created?: string;
    last_update?: string;
}

export type FactItemType = {
    title: string,
    icon: string,
    content: string
}

export type TestimonialType = {
    name: string;
    content: string;
    image: string;
    position: string;
}

export type BlogPostType = {
    title: string;
    content: string;
    posted_by: string;
    posted_at: string;
    image: string
}

export interface PageHeroType {
    decoration?: boolean,
    page_link: string,
    height?: number,
    title?: string,
    content?: string,
    has_btn?: boolean,
    first_btn_link?: string
    last_btn_link?: string
    image?: string
}

export type TeamMemberType = {
    name: string,
    position: string,
    image: string,
    content: string,
}

export type FooterLinkType = {
    items: NavItemsType[]
} 