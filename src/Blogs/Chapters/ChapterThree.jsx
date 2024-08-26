import React from "react";
import { Disclosure } from '@headlessui/react';

const ChapterThree = () => {
    return (
        <div className="mt-10">
            {/* How to use 'Avere' Verb */}
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            <span>How to use 'Avere' Verb?</span>
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
                            {/* Avere Conjugation Table */}
                            <table className="min-w-full table-auto border-collapse border border-gray-300 mb-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Person</th>
                                        <th className="border border-gray-300 px-4 py-2">Conjugation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Io (I)</td>
                                        <td className="border border-gray-300 px-4 py-2">ho</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Tu (You)</td>
                                        <td className="border border-gray-300 px-4 py-2">hai</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Lui/Lei (He/She)</td>
                                        <td className="border border-gray-300 px-4 py-2">ha</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Noi (We)</td>
                                        <td className="border border-gray-300 px-4 py-2">abbiamo</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Voi (You all)</td>
                                        <td className="border border-gray-300 px-4 py-2">avete</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Loro (They)</td>
                                        <td className="border border-gray-300 px-4 py-2">hanno</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Avere Example Sentences */}
                            <ul className="list-disc list-inside ml-6">
                                <li>Io ho un cane. (I have a dog.)</li>
                                <li>Tu hai una macchina nuova. (You have a new car.)</li>
                                <li>Lui ha una sorella. (He has a sister.)</li>
                                <li>Noi abbiamo una casa in campagna. (We have a house in the countryside.)</li>
                                <li>Voi avete molti amici. (You all have many friends.)</li>
                                <li>Loro hanno tre bambini. (They have three children.)</li>
                                <li>Io ho fame. (I am hungry.)</li>
                                <li>Tu hai freddo? (Are you cold?)</li>
                                <li>Lei ha ragione. (She is right.)</li>
                                <li>Noi abbiamo bisogno di aiuto. (We need help.)</li>
                                <li>Voi avete tempo libero oggi? (Do you have free time today?)</li>
                                <li>Loro hanno molti libri. (They have many books.)</li>
                                <li>Io ho vent'anni. (I am twenty years old.)</li>
                                <li>Tu hai una penna? (Do you have a pen?)</li>
                                <li>Lui ha paura dei cani. (He is afraid of dogs.)</li>
                                <li>Noi abbiamo una bella vista. (We have a beautiful view.)</li>
                                <li>Voi avete una grande famiglia. (You all have a big family.)</li>
                                <li>Loro hanno una vacanza programmata. (They have a planned vacation.)</li>
                                <li>Io ho bisogno di studiare. (I need to study.)</li>
                                <li>Tu hai mai visitato l'Italia? (Have you ever visited Italy?)</li>
                            </ul>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* How to use 'Essere' Verb */}
            <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-white text-4xl rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                            <span>How to use 'Essere' Verb?</span>
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
                            {/* Essere Conjugation Table */}
                            <table className="min-w-full table-auto border-collapse border border-gray-300 mb-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2">Person</th>
                                        <th className="border border-gray-300 px-4 py-2">Conjugation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Io (I)</td>
                                        <td className="border border-gray-300 px-4 py-2">sono</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Tu (You)</td>
                                        <td className="border border-gray-300 px-4 py-2">sei</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Lui/Lei (He/She)</td>
                                        <td className="border border-gray-300 px-4 py-2">è</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Noi (We)</td>
                                        <td className="border border-gray-300 px-4 py-2">siamo</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Voi (You all)</td>
                                        <td className="border border-gray-300 px-4 py-2">siete</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">Loro (They)</td>
                                        <td className="border border-gray-300 px-4 py-2">sono</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Essere Example Sentences */}
                            <ul className="list-disc list-inside ml-6">
                                <li>Io sono felice. (I am happy.)</li>
                                <li>Tu sei stanco. (You are tired.)</li>
                                <li>Lui è un medico. (He is a doctor.)</li>
                                <li>Noi siamo amici. (We are friends.)</li>
                                <li>Voi siete pronti? (Are you all ready?)</li>
                                <li>Loro sono studenti. (They are students.)</li>
                                <li>Io sono italiano. (I am Italian.)</li>
                                <li>Tu sei molto gentile. (You are very kind.)</li>
                                <li>Lei è bella. (She is beautiful.)</li>
                                <li>Noi siamo contenti. (We are happy.)</li>
                                <li>Voi siete a casa? (Are you all at home?)</li>
                                <li>Loro sono in vacanza. (They are on vacation.)</li>
                                <li>Io sono a Roma. (I am in Rome.)</li>
                                <li>Tu sei in ritardo. (You are late.)</li>
                                <li>Lui è sempre puntuale. (He is always punctual.)</li>
                                <li>Noi siamo molto occupati. (We are very busy.)</li>
                                <li>Voi siete in Italia. (You all are in Italy.)</li>
                                <li>Loro sono a scuola. (They are at school.)</li>
                                <li>Io sono uno studente. (I am a student.)</li>
                                <li>Tu sei a lavoro? (Are you at work?)</li>
                            </ul>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default ChapterThree;
