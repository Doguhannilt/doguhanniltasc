import { Disclosure } from '@headlessui/react'
import React from 'react'

const ChapterOne = () => {
  return (
    <div>            <Disclosure>
    {({ open }) => (
        <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium mt-10 text-left text-white text-4xl rounded-lg  focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                <span>Basics</span>
                <svg
                    className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-white`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
                <h2 className="text-2xl text-green-500 mb-4">Grammar: Singular and Plural Forms</h2>
                <ul className="list-disc list-inside mb-8">
                    <li>Masculine - Singular (-o), Plural (-i)</li>
                    <li>Feminine - Singular (-a), Plural (-e)</li>
                    <li>M/F - Singular (-e), Plural (-i)</li>
                </ul>

                <h1 className="text-3xl text-green-500 mb-6">At the Caffè</h1>
                <table className="table-auto w-full text-left mb-8">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Italian</th>
                            <th className="px-4 py-2">Translation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">un caffè</td>
                            <td className="border px-4 py-2">a coffee</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">un tè</td>
                            <td className="border px-4 py-2">a tea</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">un toast</td>
                            <td className="border px-4 py-2">a toast</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-2xl text-green-500 mb-4">Question: How to order coffee in Italia?</h2>
                <ul className="list-decimal list-inside mb-8">
                    <li>Passo avere un caffè</li>
                    <li>Passo sedermi qui? (Can I sit here?)</li>
                    <li>Vuoi un caffè? (Do you want a coffee?)</li>
                </ul>

                <h1 className="text-3xl text-green-500 mb-6">Daily Words</h1>
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Italian</th>
                            <th className="px-4 py-2">Translation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">La colazione</td>
                            <td className="border px-4 py-2">Breakfast</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Bere</td>
                            <td className="border px-4 py-2">To drink</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Mangiare</td>
                            <td className="border px-4 py-2">To eat</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">L'acqua</td>
                            <td className="border px-4 py-2">Water</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">La zuppa</td>
                            <td className="border px-4 py-2">Soup</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-2xl text-green-500 mb-4 mt-4">Indefinite Articles</h2>
                <ul className="list-disc list-inside mb-8">
                    <li>Masculine - un / uno</li>
                    <li>Feminine - una / un</li>
                </ul>

                <div className="border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                    <p className="font-bold">Trick</p>
                    <p className="text-sm">Uno + st, sp, sc</p>
                </div>
            </Disclosure.Panel>
        </>
    )}
</Disclosure></div>
  )
}

export default ChapterOne