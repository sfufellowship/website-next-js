import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    params: { lang: string };
}

export default function Layout({ children, params: { lang } }: Props) {
    return <div lang={lang}>{children}</div>;
}
