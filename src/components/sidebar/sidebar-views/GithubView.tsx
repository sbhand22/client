import { FaGithub } from "react-icons/fa"

const GitHubView = () => {
    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="view-title">GitHub Profile</h1>
            <FaGithub size={100} className="text-gray-200" />
            <p className="text-xl mt-4 text-gray-300">@sbhand22</p>
            <div className="flex w-full flex-col gap-4 mt-4 sm:flex-row">
                <a
                    href="https://github.com/sbhand22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-black px-4 py-2 rounded text-center sm:w-auto"
                >
                    GitHub
                </a>
                <a
                    href="https://saibhandari.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-black px-4 py-2 rounded text-center sm:w-auto"
                >
                    Portfolio
                </a>
            </div>
        </div>
    )
}

export default GitHubView
