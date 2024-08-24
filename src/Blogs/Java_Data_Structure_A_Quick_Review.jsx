import React from 'react';

// Tailwind CSS styles
const styles = {
  container: 'p-8 text-white ',
  card: 'mb-6 p-4 text-white   shadow-lg rounded-lg',
  header: 'text-2xl font-mono font-bold mb-2',
  subHeader: 'text-xl font-mono font-semibold mb-1',
  text: 'font-mono text-sm mb-2',
  greenText: 'text-green-600',
  redText: 'text-red-600',
};
const collections = [
    {
      name: 'List',
      characteristics: 'Maintains the order of elements. Duplicate elements are allowed.',
      implementations: 'ArrayList, LinkedList, Vector, Stack',
      useCases: 'Used when the order of elements needs to be maintained, and duplicates are allowed. Suitable for scenarios where elements need to be accessed by their index.',
      methods: [
        'add(E element): Adds an element to the list.',
        'get(int index): Returns the element at the specified position in the list.',
        'remove(int index): Removes the element at the specified position in the list.',
        'size(): Returns the number of elements in the list.',
        'contains(Object o): Returns true if the list contains the specified element.',
        'clear(): Removes all elements from the list.'
      ],
      verified: true,
    },
    {
      name: 'Set',
      characteristics: 'Contains unique elements, i.e., no duplicates. The order is not guaranteed.',
      implementations: 'HashSet, LinkedHashSet, TreeSet',
      useCases: 'Used when duplicate data needs to be prevented. Useful for scenarios where uniqueness of elements is required, and order is not a priority.',
      methods: [
        'add(E element): Adds an element to the set. If the element is already present, it is not added.',
        'remove(Object o): Removes the specified element from the set.',
        'contains(Object o): Checks if the set contains the specified element.',
        'size(): Returns the number of elements in the set.',
        'clear(): Removes all elements from the set.',
        'isEmpty(): Returns true if the set contains no elements.'
      ],
      verified: false,
    },
    {
      name: 'Map',
      characteristics: 'Stores data as key-value pairs. Each key is unique, but values can be duplicated.',
      implementations: 'HashMap, LinkedHashMap, TreeMap, Hashtable',
      useCases: 'Used when data needs to be stored and retrieved by a unique key. Suitable for scenarios where quick lookups based on keys are needed.',
      methods: [
        'put(K key, V value): Adds a key-value pair to the map.',
        'get(Object key): Returns the value associated with the specified key.',
        'remove(Object key): Removes the key-value pair associated with the specified key.',
        'containsKey(Object key): Checks if the map contains the specified key.',
        'containsValue(Object value): Checks if the map contains the specified value.',
        'size(): Returns the number of key-value pairs in the map.',
        'clear(): Removes all key-value pairs from the map.'
      ],
      verified: true,
    },
    {
      name: 'Queue',
      characteristics: 'Operates on a first-in, first-out (FIFO) principle. Elements are added to the end and removed from the front.',
      implementations: 'LinkedList, PriorityQueue, ArrayDeque',
      useCases: 'Used in scenarios where elements need to be processed in the order they were added. Useful for task scheduling and buffering.',
      methods: [
        'add(E element): Adds an element to the end of the queue.',
        'poll(): Removes and returns the element at the front of the queue. Returns null if the queue is empty.',
        'peek(): Returns the element at the front of the queue without removing it. Returns null if the queue is empty.',
        'size(): Returns the number of elements in the queue.',
        'clear(): Removes all elements from the queue.'
      ],
      verified: false,
    },
    {
      name: 'Deque (Double-Ended Queue)',
      characteristics: 'Allows elements to be added and removed from both ends. Can operate as FIFO or LIFO (Last-In, First-Out).',
      implementations: 'ArrayDeque, LinkedList',
      useCases: 'Used when elements need to be processed from both ends. Suitable for scenarios like implementing stacks and queues.',
      methods: [
        'addFirst(E element): Adds an element to the front of the deque.',
        'addLast(E element): Adds an element to the end of the deque.',
        'removeFirst(): Removes the element from the front of the deque.',
        'removeLast(): Removes the element from the end of the deque.',
        'peekFirst(): Returns the first element without removing it.',
        'peekLast(): Returns the last element without removing it.',
        'size(): Returns the number of elements in the deque.',
        'clear(): Removes all elements from the deque.'
      ],
      verified: true,
    },
    {
      name: 'SortedSet',
      characteristics: 'Maintains elements in a natural order or according to a specified Comparator.',
      implementations: 'TreeSet',
      useCases: 'Used when unique and ordered elements are required. Suitable for scenarios where sorted data is needed.',
      methods: [
        'first(): Returns the first (lowest) element.',
        'last(): Returns the last (highest) element.',
        'subSet(E fromElement, E toElement): Returns a view of the portion of the set between fromElement, inclusive, and toElement, exclusive.',
        'headSet(E toElement): Returns a view of the portion of the set whose elements are strictly less than toElement.',
        'tailSet(E fromElement): Returns a view of the portion of the set whose elements are greater than or equal to fromElement.',
        'size(): Returns the number of elements in the set.',
        'clear(): Removes all elements from the set.'
      ],
      verified: true,
    },
    {
      name: 'SortedMap',
      characteristics: 'Maintains keys in a natural order or according to a specified Comparator.',
      implementations: 'TreeMap',
      useCases: 'Used when key-value pairs need to be stored in a specific order. Suitable for scenarios where ordered key-value mappings are required.',
      methods: [
        'firstKey(): Returns the first (lowest) key.',
        'lastKey(): Returns the last (highest) key.',
        'subMap(K fromKey, K toKey): Returns a view of the portion of the map whose keys range from fromKey, inclusive, to toKey, exclusive.',
        'headMap(K toKey): Returns a view of the portion of the map whose keys are strictly less than toKey.',
        'tailMap(K fromKey): Returns a view of the portion of the map whose keys are greater than or equal to fromKey.',
        'size(): Returns the number of key-value pairs in the map.',
        'clear(): Removes all key-value pairs from the map.'
      ],
      verified: false,
    },
  ];
  

function Java_Data_Structure_A_Quick_Review() {
  return (
    <div className={styles.container}>
      {collections.map((collection, index) => (
        <div key={index} className={styles.card}>
          <h2 className={`${styles.header} ${collection.verified ? styles.greenText : styles.redText}`}>
            {collection.name}
          </h2>
          <p className={styles.text}><strong>Characteristics:</strong> {collection.characteristics}</p>
          <p className={styles.text}><strong>Implementations:</strong> {collection.implementations}</p>
          <p className={styles.text}><strong>Use Cases:</strong> {collection.useCases}</p>
          <h3 className={`${styles.subHeader} ${collection.verified ? styles.greenText : styles.redText}`}>
            Methods:
          </h3>
          <ul className="list-disc pl-6">
            {collection.methods.map((method, idx) => (
              <li key={idx} className={styles.text}>{method}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Java_Data_Structure_A_Quick_Review;
