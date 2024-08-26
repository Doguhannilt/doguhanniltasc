import React from "react";
import { Disclosure } from '@headlessui/react';

const ChapterTwo = () => {
    return (
        <div className="mt-10">
            {/* C'è / Ci Sono Section */}
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>C'è / Ci Sono (There is / There Are)</span>
                            <svg
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-white`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-white">
                            <ul className="list-disc list-inside ml-6">
                                <li>C'è un libro sul tavolo. (There is a book on the table.)</li>
                                <li>C'è una penna nella borsa. (There is a pen in the bag.)</li>
                                <li>Ci sono tre persone nella stanza. (There are three people in the room.)</li>
                                <li>C'è una finestra aperta. (There is an open window.)</li>
                                <li>Ci sono molti studenti nella scuola. (There are many students in the school.)</li>
                                <li>C'è un gatto sotto la sedia. (There is a cat under the chair.)</li>
                            </ul>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* The Alphabet Section */}
            <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                            <span>The Alphabet</span>
                            <svg
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-white`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-white">
                            <table className="min-w-full table-auto border-collapse border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Letter</th>
                                        <th className="border border-gray-300 px-4 py-2">Pronunciation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">A</td>
                                        <td className="border border-gray-300 px-4 py-2">/a/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">B</td>
                                        <td className="border border-gray-300 px-4 py-2">/bi/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">C</td>
                                        <td className="border border-gray-300 px-4 py-2">/tʃi/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">D</td>
                                        <td className="border border-gray-300 px-4 py-2">/di/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">E</td>
                                        <td className="border border-gray-300 px-4 py-2">/e/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">F</td>
                                        <td className="border border-gray-300 px-4 py-2">/ɛf/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">G</td>
                                        <td className="border border-gray-300 px-4 py-2">/dʒi/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">H</td>
                                        <td className="border border-gray-300 px-4 py-2">/aka/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">I</td>
                                        <td className="border border-gray-300 px-4 py-2">/i/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">L</td>
                                        <td className="border border-gray-300 px-4 py-2">/ɛl/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">M</td>
                                        <td className="border border-gray-300 px-4 py-2">/ɛm/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">N</td>
                                        <td className="border border-gray-300 px-4 py-2">/ɛn/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">O</td>
                                        <td className="border border-gray-300 px-4 py-2">/o/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">P</td>
                                        <td className="border border-gray-300 px-4 py-2">/pi/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Q</td>
                                        <td className="border border-gray-300 px-4 py-2">/ku/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">R</td>
                                        <td className="border border-gray-300 px-4 py-2">/ɛrre/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">S</td>
                                        <td className="border border-gray-300 px-4 py-2">/ɛs/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">T</td>
                                        <td className="border border-gray-300 px-4 py-2">/ti/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">U</td>
                                        <td className="border border-gray-300 px-4 py-2">/u/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">V</td>
                                        <td className="border border-gray-300 px-4 py-2">/vi/</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Z</td>
                                        <td className="border border-gray-300 px-4 py-2">/dzɛta/</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default ChapterTwo;
