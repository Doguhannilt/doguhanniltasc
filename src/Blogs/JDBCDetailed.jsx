import React from "react";

const JDBCDetailed = () => {
  return (
    <div className=" p-6 font-mono text-white">
      <h1 className="text-green-600 text-2xl font-bold mb-4">
        What is JDBC?
      </h1>
      <p className="mb-4">
        JDBC (Java Database Connectivity) is an API in Java that enables
        Java applications to interact with databases. It provides a standard
        interface for connecting to a database, executing SQL queries, and
        retrieving the results. With JDBC, Java developers can perform various
        database operations such as querying, inserting, updating, and deleting
        data.
      </p>

      <h2 className="text-green-600 text-xl font-mono mb-2">
        Core Components of JDBC
      </h2>
      <p className="mb-4">
        JDBC is composed of several key components, each serving a specific
        purpose in database connectivity:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <span className="text-green-600 font-mono">DriverManager</span>: 
          Manages a list of database drivers. It ensures that the appropriate
          driver is used for connecting to the desired database.
        </li>
        <li>
          <span className="text-green-600 font-mono">Connection</span>: 
          Represents an active connection to a database. It is responsible for
          managing the session with the database.
        </li>
        <li>
          <span className="text-green-600 font-mono">Statement</span>: 
          Used for executing SQL queries against the database. It can execute
          queries such as SELECT, INSERT, UPDATE, and DELETE.
        </li>
        <li>
          <span className="text-green-600 font-mono">ResultSet</span>: 
          Holds the results returned by a SQL query. It provides methods to
          navigate through the results and retrieve the data.
        </li>
        <li>
          <span className="text-green-600 font-mono">PreparedStatement</span>: 
          An extension of Statement, this is used to execute parameterized SQL
          queries. It is more secure than Statement, as it helps prevent SQL
          injection attacks.
        </li>
        <li>
          <span className="text-green-600 font-mono">CallableStatement</span>: 
          Used to execute stored procedures in the database. It allows for the
          calling of database functions and procedures.
        </li>
      </ul>

      <h2 className="text-green-600 text-xl font-mono mb-2">
        How JDBC Works
      </h2>
      <p className="mb-4">
        The process of working with JDBC typically involves the following
        steps:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>
          <span className="text-green-600 font-mono">Loading the Driver</span>: 
          The first step is to load the JDBC driver for the database you want to
          connect to. This is usually done using <code>Class.forName()</code>.
        </li>
        <li>
          <span className="text-green-600 font-mono">Establishing a Connection</span>: 
          Using the DriverManager, you establish a connection to the database by
          providing the database URL, username, and password.
        </li>
        <li>
          <span className="text-green-600 font-mono">Creating a Statement</span>: 
          Once connected, you can create a Statement object to send SQL queries
          to the database.
        </li>
        <li>
          <span className="text-green-600 font-mono">Executing SQL Queries</span>: 
          With the Statement object, you can execute SQL queries. The results of
          these queries are returned in a ResultSet object.
        </li>
        <li>
          <span className="text-green-600 font-mono">Processing the Results</span>: 
          You can navigate through the ResultSet to access the data returned by
          your query.
        </li>
        <li>
          <span className="text-green-600 font-mono">Closing the Connection</span>: 
          After completing your operations, it’s important to close the
          connection to free up database resources.
        </li>
      </ol>

      <h2 className="text-green-600 text-xl font-mono mb-2">
        JDBC Drivers
      </h2>
      <p className="mb-4">
        JDBC drivers are essential components that enable the JDBC API to
        interact with different databases. There are four types of JDBC drivers:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <span className="text-green-600 font-mono">Type 1: JDBC-ODBC Bridge Driver</span>: 
          This driver translates JDBC calls into ODBC calls and relies on the
          ODBC driver to connect to the database. It is not commonly used due
          to its limitations.
        </li>
        <li>
          <span className="text-green-600 font-mono">Type 2: Native-API Driver</span>: 
          This driver uses the client-side libraries of the database, and is
          faster than the Type 1 driver but platform-dependent.
        </li>
        <li>
          <span className="text-green-600 font-mono">Type 3: Network Protocol Driver</span>: 
          This driver uses a middle-tier server to translate JDBC calls to the
          database-specific protocol. It offers better performance and is
          platform-independent.
        </li>
        <li>
          <span className="text-green-600 font-mono">Type 4: Thin Driver</span>: 
          This driver is a pure Java driver that directly converts JDBC calls to
          the database-specific protocol. It is the most commonly used driver
          due to its platform independence and performance.
        </li>
      </ul>
    </div>
  );
};

export default JDBCDetailed;
