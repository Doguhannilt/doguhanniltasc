import React from "react";
import { Disclosure } from '@headlessui/react';

const ChapterFour = () => {
    return (
        <div className="mt-10">
            {/* I numeri da 0 a 20 */}
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>I numeri da 0 a 20</span>
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
                                <li>0 - zero</li>
                                <li>1 - uno</li>
                                <li>2 - due</li>
                                <li>3 - tre</li>
                                <li>4 - quattro</li>
                                <li>5 - cinque</li>
                                <li>6 - sei</li>
                                <li>7 - sette</li>
                                <li>8 - otto</li>
                                <li>9 - nove</li>
                                <li>10 - dieci</li>
                                <li>11 - undici</li>
                                <li>12 - dodici</li>
                                <li>13 - tredici</li>
                                <li>14 - quattordici</li>
                                <li>15 - quindici</li>
                                <li>16 - sedici</li>
                                <li>17 - diciassette</li>
                                <li>18 - diciotto</li>
                                <li>19 - diciannove</li>
                                <li>20 - venti</li>
                            </ul>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* Dates in Italian */}
            <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                            <span>Dates in Italian</span>
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
                                <li>Lunedì - Monday</li>
                                <li>Martedì - Tuesday</li>
                                <li>Mercoledì - Wednesday</li>
                                <li>Giovedì - Thursday</li>
                                <li>Venerdì - Friday</li>
                                <li>Sabato - Saturday</li>
                                <li>Domenica - Sunday</li>
                                <li>Gennaio - January</li>
                                <li>Febbraio - February</li>
                                <li>Marzo - March</li>
                                <li>Aprile - April</li>
                                <li>Maggio - May</li>
                                <li>Giugno - June</li>
                                <li>Luglio - July</li>
                                <li>Agosto - August</li>
                                <li>Settembre - September</li>
                                <li>Ottobre - October</li>
                                <li>Novembre - November</li>
                                <li>Dicembre - December</li>
                            </ul>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* Ordinal Numbers */}
            <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                            <span>Numeri Ordinali</span>
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
                                <li>1º - primo</li>
                                <li>2º - secondo</li>
                                <li>3º - terzo</li>
                                <li>4º - quarto</li>
                                <li>5º - quinto</li>
                                <li>6º - sesto</li>
                                <li>7º - settimo</li>
                                <li>8º - ottavo</li>
                                <li>9º - nono</li>
                                <li>10º - decimo</li>
                                <li>11º - undicesimo</li>
                                <li>12º - dodicesimo</li>
                                <li>13º - tredicesimo</li>
                                <li>14º - quattordicesimo</li>
                                <li>15º - quindicesimo</li>
                                <li>16º - sedicesimo</li>
                                <li>17º - diciassettesimo</li>
                                <li>18º - diciottesimo</li>
                                <li>19º - diciannovesimo</li>
                                <li>20º - ventesimo</li>
                            </ul>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default ChapterFour;
