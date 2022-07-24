import Link from 'next/link'
const index = () => {

    return (
        <div>
            <Link href="/statistics">
                <a>statistics link</a>
            </Link>

            <h1>index.jsx next only</h1>
            <h2>btw I lost build folder</h2>
        </div>
    )
}

export default index
