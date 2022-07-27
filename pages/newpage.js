import Link from 'next/link'

export default function newPage() {
    return (
        <>
            <h1>New Page!</h1>
            <h2>
                <Link href="/">
                    <a>Back To Home!</a>
                </Link>
            </h2>
        </>        
    );
}