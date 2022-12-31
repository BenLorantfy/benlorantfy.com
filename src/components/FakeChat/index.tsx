export function FakeChat(props: { messages: Array<{ from: string, text: string }>, user: string }) {
    return (
        <div className='flex flex-col'>
            {props.messages.map((message) => {
                if (message.from === props.user) {
                    return (
                        <div className="self-end max-w-[50%]">
                            <div className='bg-sky-600 rounded-xl p-2 text-white'>
                                {message.text}
                            </div>
                            <div className='text-slate-400 ml-2'>{message.from}</div>
                        </div>
                    )
                }

                return (
                    <div className="self-start max-w-[50%]">
                        <div className='bg-slate-300 rounded-xl p-2'>
                            {message.text}
                        </div>
                        <div className='text-slate-400 ml-2'>{message.from}</div>
                    </div>
                )
            })}
        </div>
    )
}