import React, {useContext} from 'react'

import link from 'next/link';

const categories = [{name: 'React', slug: 'React'}, {name: 'Web Dev', slug: 'Web'}]

export const Header = () => {
  return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">
                            Capr0's Blog
                        </span>
                    </link>
                </div>
                <div className="hidden md:float-left md:contents"></div>
            </div>
        </div>
    )
}
