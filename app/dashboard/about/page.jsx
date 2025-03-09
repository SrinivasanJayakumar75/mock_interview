import React from 'react'
import Link from "next/link";

const About = () => {
  return (
    <div className='flex flex-wrap items-center'>
      <div className='h-32 w-64 bg-gray-200 rounded-md m-4'>
        <div className='text-black text-center m-2'>
          Front End Development
          <Link href={'https://youtu.be/MsnQ5uepIaE?si=nWEQNYbNOF4Mn_jZ'}>
          <div className='bg-green-300 text-white m-20 text-center rounded-md'>Course</div>
          </Link>
        </div>
      </div>
      <div className='h-32 w-64 bg-gray-200 rounded-md m-4'>
        <div className='text-black text-center m-2'>
          Back End Development
          <Link href={'https://youtu.be/MsnQ5uepIaE?si=nWEQNYbNOF4Mn_jZ'}>
          <div className='bg-green-300 text-white m-20 text-center rounded-md'>Course</div>
          </Link>
        </div>
      </div>
      <div className='h-32 w-64 bg-gray-200 rounded-md m-4'>
        <div className='text-black text-center m-2'>
            Android App Development
          <Link href={'https://youtu.be/MsnQ5uepIaE?si=nWEQNYbNOF4Mn_jZ'}>
          <div className='bg-green-300 text-white m-20 text-center rounded-md'>Course</div>
          </Link>
        </div>
      </div>
      <div className='h-32 w-64 bg-gray-200 rounded-md m-4'>
        <div className='text-black text-center m-2'>
          Full Stack Development
          <Link href={'https://youtu.be/MsnQ5uepIaE?si=nWEQNYbNOF4Mn_jZ'}>
          <div className='bg-green-300 text-white m-20 text-center rounded-md'>Course</div>
          </Link>
        </div>
      </div>
      <div className='h-32 w-64 bg-gray-200 rounded-md m-4'>
        <div className='text-black text-center m-2'>
          Mobile App Development
          <Link href={'https://youtu.be/MsnQ5uepIaE?si=nWEQNYbNOF4Mn_jZ'}>
          <div className='bg-green-300 text-white m-20 text-center rounded-md'>Course</div>
          </Link>
        </div>
      </div>
      <div className='h-32 w-64 bg-gray-200 rounded-md m-4'>
        <div className='text-black text-center m-2'>
          Artificial Intelligence
          <Link href={'https://youtu.be/MsnQ5uepIaE?si=nWEQNYbNOF4Mn_jZ'}>
          <div className='bg-green-300 text-white m-20 text-center rounded-md'>Course</div>
          </Link>
        </div>
      </div>
      <div className='h-32 w-64 bg-gray-200 rounded-md m-4'>
        <div className='text-black text-center m-2'>
          Java Development
          <Link href={'https://youtu.be/MsnQ5uepIaE?si=nWEQNYbNOF4Mn_jZ'}>
          <div className='bg-green-300 text-white m-20 text-center rounded-md'>Course</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About