import { useAppContext } from "@/context/AppContext"
import { useChatRoom } from "@/context/ChatContext"
import { useSocket } from "@/context/SocketContext"
import { ChatMessage } from "@/types/chat"
import { SocketEvent } from "@/types/socket"
import { formatDate } from "@/utils/formateDate"
import { FormEvent, useRef } from "react"
import { LuSendHorizonal } from "react-icons/lu"
import { v4 as uuidV4 } from "uuid"

function ChatInput() {
    const { currentUser } = useAppContext()
    const { socket } = useSocket()
    const { setMessages } = useChatRoom()
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const inputVal = inputRef.current?.value.trim()

        if (inputVal && inputVal.length > 0) {
            const message: ChatMessage = {
                id: uuidV4(),
                message: inputVal,
                username: currentUser.username,
                timestamp: formatDate(new Date().toISOString()),
            }
            socket.emit(SocketEvent.SEND_CHAT_MESSAGE, { message })
            setMessages((messages) => [...messages, message])

            if (inputRef.current) inputRef.current.value = ""
        }
    }

    return (
        <form
            onSubmit={handleSendMessage}
            className="flex items-center justify-between rounded-full border border-primary bg-dark p-2 px-4 shadow-md"
        >
            <input
                type="text"
                className="w-full flex-grow bg-transparent px-4 py-2 text-gray-200 placeholder-gray-500 outline-none rounded-full"
                placeholder="Enter a message..."
                ref={inputRef}
            />
            <button
                className="ml-2 flex items-center justify-center rounded-full bg-primary p-2 text-black hover:bg-primary-dark transition duration-300"
                type="submit"
            >
                <LuSendHorizonal size={24} />
            </button>
        </form>
    )
}

export default ChatInput
