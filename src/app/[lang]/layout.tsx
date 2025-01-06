import { metadata } from "./metadata";

export { metadata };

interface Props {
    children: React.ReactNode;
    params: { lang: string };
}

export default function Layout({ children, params: { lang } }: Props) {
    return <div lang={lang}>{children}</div>;
}
