import { AiOutlineLink } from 'react-icons/ai';

interface Props {
  title: string;
  url?: string;
}

export function LinkFiles({ title, url }: Props) {
  return (
    <div className='flex items-center h-12 laptop:h-16 gap-2 w-full justify-between hover:bg-gray-900 text-white p-2 rounded-2xl'>
      <p className='text-base tablet:text-xl w-full text-center'>
        {title}
      </p>
      {url && (
        <a
          href={`${url}`}
          target="_blank"
          rel='noopener noreferrer'
          className='flex items-center justify-center p-2 tablet:p-3 bg-gray-600 rounded-2xl hover:brightness-90 transition-all'
        >
          <AiOutlineLink />
        </a>
      )}
      
    </div>
  )
}