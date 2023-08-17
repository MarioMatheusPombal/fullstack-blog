import Link from "next/link";

export default function Sidebar({ recentes }) {
    return (
        <>
            <div className="position-sticky" style={{ top: "2rem" }}>
                ...

                <div>
                    <h4 className="fst-italic">Posts recentes</h4>
                    <ul className="list-unstyled">
                        {recentes.edges.map((post) => (
                            <li key={post.node.slug}>
                                <Link className="..."
                                      href={`/${post.node.categories.nodes[0].slug}/${post.node.slug}`}
                                >
                                    {post.node.featuredImage ? (
                                        <div
                                            style={{
                                                width: 96,
                                                height: 96,
                                                backgroundImage: `url(${post.node.featuredImage.node.sourceUrl})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center center",
                                            }}
                                        ></div>
                                    ) : (
                                        <rect width="100%" height="100%" fill="#777"></rect>
                                        )}
                                    <div className="col-lg-8">
                                        <h6 className="mb-0">{post.node.title}</h6>
                                        <small className="text-body-secondary">
                                            {new Date(post.node.date).toLocaleString("pt-br", {
                                                month: "long",
                                                day: "2-digit",
                                                year: "numeric",
                                            })}
                                        </small>
                                    </div>
                                </Link>
                            </li>
                            ))}
                    </ul>
                </div>
                ...
            </div>
        </>
    );
}
