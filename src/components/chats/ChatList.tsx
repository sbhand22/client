import { useAppContext } from "@/context/AppContext"
import { useChatRoom } from "@/context/ChatContext"
import { SyntheticEvent, useEffect, useRef } from "react"

function ChatList() {
    const {
        messages,
        isNewMessage,
        setIsNewMessage,
        lastScrollHeight,
        setLastScrollHeight,
    } = useChatRoom()
    const { currentUser } = useAppContext()
    const messagesContainerRef = useRef<HTMLDivElement | null>(null)

    const handleScroll = (e: SyntheticEvent) => {
        const container = e.target as HTMLDivElement
        setLastScrollHeight(container.scrollTop)
    }

    // Scroll to bottom when messages change
    useEffect(() => {
        if (!messagesContainerRef.current) return
        messagesContainerRef.current.scrollTop =
            messagesContainerRef.current.scrollHeight
    }, [messages])

    useEffect(() => {
        if (isNewMessage) {
            setIsNewMessage(false)
        }
        if (messagesContainerRef.current)
            messagesContainerRef.current.scrollTop = lastScrollHeight
    }, [isNewMessage, setIsNewMessage, lastScrollHeight])

    return (
        <div
            className="flex-grow overflow-auto rounded-md bg-darkHover p-4 border border-gray-700 shadow-lg"
            ref={messagesContainerRef}
            onScroll={handleScroll}
        >
            {/* Chat messages */}
            {messages.map((message, index) => {
                return (
                    <div
                        key={index}
                        className={`mb-4 w-[80%] max-w-[450px] rounded-lg px-4 py-3 text-white shadow-md ${
                            message.username === currentUser.username
                                ? "ml-auto bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600"
                                : "bg-gray-800"
                        }`}
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-semibold text-white">
                                {message.username}
                            </span>
                            <span className="text-xs text-gray-400">
                                {message.timestamp}
                            </span>
                        </div>
                        <p className="mt-2 text-sm leading-tight text-gray-200">
                            {message.message}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default ChatList
