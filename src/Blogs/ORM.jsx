// src/pages/ORMAndCRUD.jsx

import React from 'react';

const ORMAndCRUD = () => {
  return (
    <div className="p-8  text-white">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Understanding ORM and CRUD Operations with Hibernate</h1>
      
      <p className="mb-4">
        <strong>Object-Relational Mapping (ORM)</strong> is a powerful technique that allows developers to interact with a relational database using object-oriented programming languages. In this detailed guide, we’ll explore the core concepts of ORM, how Hibernate implements these concepts, and how you can perform basic CRUD (Create, Read, Update, Delete) operations with Hibernate.
      </p>

      <h2 className="text-3xl font-mono text-green-600 mb-2">What is ORM?</h2>
      
      <p className="mb-4">
        <strong>Object-Relational Mapping (ORM)</strong> bridges the gap between object-oriented programming and relational databases. It allows developers to work with database data in the form of objects, making the interaction more intuitive and reducing the need to write complex SQL queries.
      </p>
      
      <h3 className="text-2xl font-mono text-green-600 mb-2">Key Concepts of ORM</h3>

      <ul className="list-disc list-inside mb-4">
        <li><strong>Entities and Tables</strong> - In ORM, a Java class represents a database table. Each instance of the class corresponds to a row in the table, and the class’s attributes correspond to columns in the table.</li>
        <li><strong>Mapping</strong> - Mapping defines how Java classes and their attributes are associated with database tables and columns. Hibernate uses annotations or XML files to specify these mappings.</li>
        <li><strong>Database Operations</strong> - ORM frameworks allow developers to perform database operations (CRUD) through object manipulation, avoiding direct SQL queries.</li>
        <li><strong>Session Management</strong> - ORM frameworks like Hibernate manage database connections through sessions. A session is used to perform database operations and handle transactions.</li>
      </ul>

      <h2 className="text-3xl font-mono text-green-600 mb-2">Hibernate: An Introduction</h2>

      <p className="mb-4">
        <strong>Hibernate</strong> is a popular ORM framework for Java that simplifies database operations by mapping Java objects to database tables. It provides a powerful and flexible way to interact with databases, reducing the need for boilerplate code and SQL queries.
      </p>

      <h3 className="text-2xl font-mono text-green-600 mb-2">Core Components of Hibernate</h3>

      <ul className="list-disc list-inside mb-4">
        <li><strong>Configuration</strong> - Configuration involves setting up Hibernate’s properties, such as database connection details and mapping files. This setup can be done through XML configuration files or Java-based configuration classes.</li>
        <li><strong>SessionFactory</strong> - The <code>SessionFactory</code> is a thread-safe object that is created once and used to open <code>Session</code> objects. It manages the lifecycle of sessions and provides a way to interact with the database.</li>
        <li><strong>Session</strong> - A <code>Session</code> represents a single-threaded unit of work with the database. It is used to perform CRUD operations and manage transactions.</li>
        <li><strong>Transaction</strong> - Hibernate manages transactions through the <code>Transaction</code> interface. It ensures that a series of operations are completed successfully or rolled back in case of failure.</li>
        <li><strong>Query</strong> - Hibernate allows querying the database using HQL (Hibernate Query Language) or the Criteria API. HQL is similar to SQL but operates on objects rather than tables.</li>
      </ul>

      <h2 className="text-3xl font-mono text-green-600 mb-2">Performing CRUD Operations with Hibernate</h2>

      <h3 className="text-2xl font-mono text-green-600 mb-2">1. Create (Insert) Operation</h3>
      
      <p className="mb-4">
        Creating a new record in the database involves creating an instance of an entity class and saving it using Hibernate’s <code>Session</code> object.
      </p>

      <pre className="bg-gray-800 p-4 rounded-md mb-4">
        <code className="font-mono">
          {`// Entity class
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;

    // Getters and Setters
}

// Inserting a record
User user = new User();
user.setName("John Doe");
user.setEmail("john.doe@example.com");

Session session = sessionFactory.openSession();
Transaction transaction = session.beginTransaction();
session.save(user);  // Save user to the database
transaction.commit();
session.close();`}
        </code>
      </pre>

      <h3 className="text-2xl font-mono text-green-600 mb-2">2. Read (Select) Operation</h3>
      
      <p className="mb-4">
        Reading data involves querying the database to retrieve records. Hibernate provides methods to fetch records based on their primary key or using HQL.
      </p>

      <pre className="bg-gray-800 p-4 rounded-md mb-4">
        <code className="font-mono">
          {`// Reading a record
Session session = sessionFactory.openSession();
User user = session.get(User.class, 1L);  // Retrieve user with ID 1
session.close();

System.out.println(user.getName());`}
        </code>
      </pre>

      <h3 className="text-2xl font-mono text-green-600 mb-2">3. Update Operation</h3>
      
      <p className="mb-4">
        Updating an existing record involves fetching the entity, modifying its attributes, and then saving the changes back to the database.
      </p>

      <pre className="bg-gray-800 p-4 rounded-md mb-4">
        <code className="font-mono">
          {`// Updating a record
Session session = sessionFactory.openSession();
Transaction transaction = session.beginTransaction();

User user = session.get(User.class, 1L);  // Retrieve user with ID 1
user.setEmail("new.email@example.com");   // Update email address
session.update(user);                     // Save changes to the database

transaction.commit();
session.close();`}
        </code>
      </pre>

      <h3 className="text-2xl font-mono text-green-600 mb-2">4. Delete Operation</h3>
      
      <p className="mb-4">
        Deleting a record involves fetching the entity and removing it from the database.
      </p>

      <pre className="bg-gray-800 p-4 rounded-md mb-4">
        <code className="font-mono">
          {`// Deleting a record
Session session = sessionFactory.openSession();
Transaction transaction = session.beginTransaction();

User user = session.get(User.class, 1L);  // Retrieve user with ID 1
session.delete(user);                     // Delete user from the database

transaction.commit();
session.close();`}
        </code>
      </pre>

      <h2 className="text-3xl font-mono text-green-600 mb-2">Conclusion</h2>
      
      <p>
        ORM frameworks like Hibernate streamline the process of interacting with relational databases by allowing developers to work with objects rather than SQL queries. Understanding ORM concepts and mastering CRUD operations with Hibernate can significantly enhance your productivity and simplify your data management tasks.
      </p>
    </div>
  );
};

export default ORMAndCRUD;
