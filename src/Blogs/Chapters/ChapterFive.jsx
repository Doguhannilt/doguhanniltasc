import React from "react";
import { Disclosure } from '@headlessui/react';

const ChapterFive = () => {
    return (
        <div className="mt-10">
            {/* Dovere Verb */}
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>Dovere</span>
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
                            <table className="min-w-full table-auto border-collapse border border-gray-300 mb-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Person</th>
                                        <th className="border border-gray-300 px-4 py-2">Conjugation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Io</td>
                                        <td className="border border-gray-300 px-4 py-2">devo</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Tu</td>
                                        <td className="border border-gray-300 px-4 py-2">devi</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Lui/Lei</td>
                                        <td className="border border-gray-300 px-4 py-2">deve</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Noi</td>
                                        <td className="border border-gray-300 px-4 py-2">dobbiamo</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Voi</td>
                                        <td className="border border-gray-300 px-4 py-2">dovete</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Loro</td>
                                        <td className="border border-gray-300 px-4 py-2">devono</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul className="list-disc list-inside ml-6">
                                <li>Devo andare al lavoro. (I must go to work.)</li>
                                <li>Tu devi studiare per l'esame. (You must study for the exam.)</li>
                                <li>Lui deve partire presto. (He has to leave early.)</li>
                                <li>Noi dobbiamo finire il progetto. (We have to finish the project.)</li>
                                <li>Voi dovete ascoltare attentamente. (You all must listen carefully.)</li>
                                <li>Loro devono essere a casa per cena. (They must be home for dinner.)</li>
                                <li>Devo comprare il pane. (I have to buy bread.)</li>
                                <li>Devi chiamare tua madre. (You have to call your mother.)</li>
                                <li>Dobbiamo fare la spesa. (We must do the shopping.)</li>
                                <li>Devono andare dal dottore. (They have to go to the doctor.)</li>
                            </ul>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* Potere Verb */}
            <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                            <span>Potere</span>
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
                            <table className="min-w-full table-auto border-collapse border border-gray-300 mb-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Person</th>
                                        <th className="border border-gray-300 px-4 py-2">Conjugation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Io</td>
                                        <td className="border border-gray-300 px-4 py-2">posso</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Tu</td>
                                        <td className="border border-gray-300 px-4 py-2">puoi</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Lui/Lei</td>
                                        <td className="border border-gray-300 px-4 py-2">può</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Noi</td>
                                        <td className="border border-gray-300 px-4 py-2">possiamo</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Voi</td>
                                        <td className="border border-gray-300 px-4 py-2">potete</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Loro</td>
                                        <td className="border border-gray-300 px-4 py-2">possono</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul className="list-disc list-inside ml-6">
                                <li>Posso parlare con te? (Can I talk to you?)</li>
                                <li>Tu puoi venire alla festa? (Can you come to the party?)</li>
                                <li>Lui può giocare a calcio oggi. (He can play soccer today.)</li>
                                <li>Noi possiamo andare al cinema stasera. (We can go to the movies tonight.)</li>
                                <li>Voi potete aiutarmi con questo problema? (Can you all help me with this problem?)</li>
                                <li>Loro possono venire domani. (They can come tomorrow.)</li>
                                <li>Posso avere un bicchiere d'acqua? (Can I have a glass of water?)</li>
                                <li>Puoi guidare la macchina? (Can you drive the car?)</li>
                                <li>Possiamo visitare il museo? (Can we visit the museum?)</li>
                                <li>Possono rimanere qui per la notte. (They can stay here for the night.)</li>
                            </ul>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* Volere Verb */}
            <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                            <span>Volere</span>
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
                            <table className="min-w-full table-auto border-collapse border border-gray-300 mb-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Person</th>
                                        <th className="border border-gray-300 px-4 py-2">Conjugation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Io</td>
                                        <td className="border border-gray-300 px-4 py-2">voglio</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Tu</td>
                                        <td className="border border-gray-300 px-4 py-2">vuoi</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Lui/Lei</td>
                                        <td className="border border-gray-300 px-4 py-2">vuole</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Noi</td>
                                        <td className="border border-gray-300 px-4 py-2">vogliamo</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Voi</td>
                                        <td className="border border-gray-300 px-4 py-2">volete</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Loro</td>
                                        <td className="border border-gray-300 px-4 py-2">vogliono</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul className="list-disc list-inside ml-6">
                                <li>Voglio andare al cinema. (I want to go to the movies.)</li>
                                <li>Tu vuoi una pizza? (Do you want a pizza?)</li>
                                <li>Lui vuole studiare medicina. (He wants to study medicine.)</li>
                                <li>Noi vogliamo visitare Roma. (We want to visit Rome.)</li>
                                <li>Voi volete vedere quel film? (Do you all want to see that movie?)</li>
                                <li>Loro vogliono viaggiare in Europa. (They want to travel in Europe.)</li>
                                <li>Voglio comprare un nuovo libro. (I want to buy a new book.)</li>
                                <li>Vuoi venire con noi? (Do you want to come with us?)</li>
                                <li>Vogliamo mangiare al ristorante. (We want to eat at the restaurant.)</li>
                                <li>Vogliono partecipare alla gara. (They want to participate in the competition.)</li>
                            </ul>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default ChapterFive;
