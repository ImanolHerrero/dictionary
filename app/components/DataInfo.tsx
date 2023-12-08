// DataInfo.tsx
import React from 'react';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

interface DataInfoProps {
    data: any[];
}

const DataInfo: React.FC<DataInfoProps> = ({ data }) => {

    return (
        <div>
            {data && (
                <div>
                    <h1 className='font-bold text-2xl my-4 text-orange-600'>{data[0]?.word}<span className='font-light ml-2 text-base text-gray-500'>{data[0]?.phonetic}</span></h1>

                    <audio controls key={new Date().getTime()} className='w-full my-2 mb-8'>
                        <source src={data[0]?.phonetics[0]?.audio} type="audio/mp3" />
                    </audio>

                    {data[0]?.meanings[0]?.definitions.slice(0, 4).map((definition: any, index: number) => (
                        <ul key={index} role="list" className="marker:text-orange-600 list-disc pl-5 my-4">
                            <li>{definition.definition}</li>
                        </ul>
                    ))}

                    {data[0]?.sourceUrls && data[0]?.sourceUrls[0] && (
                        <Link href={data[0].sourceUrls[0]} >
                            <div className='flex flex-row items-center underline underline-offset-4 decoration-orange-600 mt-4'>
                                <p>Source</p>
                                <MoveUpRight className='w-2 h-2 mx-1' />
                            </div>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default DataInfo;
