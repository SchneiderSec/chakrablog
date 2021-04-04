import { Link } from '@chakra-ui/react';

export const Post = ({ post }) => {
    const {
        link,
        module: { meta },
    } = post

    return (
        <article>
            <Link href={'/articles/' + link}>
                Read me
            </Link>
        </article>
    )
}