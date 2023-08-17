import Link from "next/link";

export default function Header({ categories }) {
    return (
        <>
            <div className="container">
                <header className="border-bottom lh-1 py-3">
                    ...
                </header>

                <div className="nav-scroller py-1 mb-3 border-bottom">
                    <nav className="nav nav-underline justify-content-between">
                        {categories.nodes.map((category) => (
                            <Link
                                key={category.slug}
                                className="nav-item nav-link link-body-emphasis"
                                href={`/${category.slug}`}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}
