import React from "react";
import { Disclosure } from '@headlessui/react';

const ChapterSix = () => {
    return (
        <div className="mt-10">
            {/* Telling Time */}
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                            <span>Telling Time</span>
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
                            <p>In Italian, telling time involves a few key expressions:</p>
                            <ul className="list-disc list-inside ml-6">
                                <li><strong>Sono le + hour</strong> (for hours 1-12): "Sono le due." (It's two o'clock.)</li>
                                <li><strong>È l'una</strong> (for 1 o'clock): "È l'una." (It's one o'clock.)</li>
                                <li><strong>Sono le + hour + e + minutes</strong>: "Sono le tre e venti." (It's three twenty.)</li>
                                <li><strong>Mezzogiorno</strong> (12:00 PM)</li>
                                <li><strong>Mezzanotte</strong> (12:00 AM)</li>
                            </ul>
                            <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Example</th>
                                        <th className="border border-gray-300 px-4 py-2">Translation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Sono le sei.</td>
                                        <td className="border border-gray-300 px-4 py-2">It's six o'clock.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">È l'una e mezzo.</td>
                                        <td className="border border-gray-300 px-4 py-2">It's one thirty.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Sono le otto e quarantacinque.</td>
                                        <td className="border border-gray-300 px-4 py-2">It's eight forty-five.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* Adverbs of Frequency */}
            <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                            <span>Adverbs of Frequency</span>
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
                            <p>Adverbs of frequency describe how often an action occurs:</p>
                            <ul className="list-disc list-inside ml-6">
                                <li><strong>Sempre</strong> (Always): "Mangio sempre la pizza." (I always eat pizza.)</li>
                                <li><strong>Di solito</strong> (Usually): "Di solito vado al lavoro in macchina." (I usually go to work by car.)</li>
                                <li><strong>Spesso</strong> (Often): "Vado spesso al cinema." (I often go to the cinema.)</li>
                                <li><strong>A volte</strong> (Sometimes): "A volte leggo un libro." (Sometimes I read a book.)</li>
                                <li><strong>Raramente</strong> (Rarely): "Raramente mangio fuori." (I rarely eat out.)</li>
                                <li><strong>Mai</strong> (Never): "Mai mangio cibo spazzatura." (I never eat junk food.)</li>
                            </ul>
                            <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Adverb</th>
                                        <th className="border border-gray-300 px-4 py-2">Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Sempre</td>
                                        <td className="border border-gray-300 px-4 py-2">Sempre bevo caffè al mattino.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Di solito</td>
                                        <td className="border border-gray-300 px-4 py-2">Di solito leggo prima di dormire.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Spesso</td>
                                        <td className="border border-gray-300 px-4 py-2">Spesso vado a fare jogging nel parco.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">A volte</td>
                                        <td className="border border-gray-300 px-4 py-2">A volte faccio yoga.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Raramente</td>
                                        <td className="border border-gray-300 px-4 py-2">Raramente vado al ristorante.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Mai</td>
                                        <td className="border border-gray-300 px-4 py-2">Mai mangio dolci.</td>
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

export default ChapterSix;
