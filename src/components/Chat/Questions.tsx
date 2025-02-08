import React from 'react'

interface QuestionsProps {
    question: string;
    onClick: () => void;
}

export default function Questions({question, onClick}:QuestionsProps) {
  return (
    <button className='my-auto' onClick={onClick}>
        <div className='text-text-400 text-right p-2 py-4 font-myYekanRegular text-xs w-[368px] h-12 rounded-lg border-neutral-100 border'>{question}</div>
    </button>
  )
}
