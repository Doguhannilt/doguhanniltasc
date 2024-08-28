import React from 'react';

const AnnotationSection = ({ title, description, isGood }) => (
  <div className={`p-6 my-6 border rounded-lg shadow-sm ${isGood ? 'border-white  text-white' : ' text-white'}`}>
    <h2 className="text-2xl font-semibold mb-3 text-green-600">{title}</h2>
    <p className="text-base">{description}</p>
  </div>
);

const AnnotationInSpringBoot = () => (
  <div className="min-h-screen p-10 font-mono">
    <header className="mb-12">
      <h1 className="text-2xl font-mono font-bold mb-2">Understanding Spring Framework Annotations and Bean Lifecycle</h1>
      <p className="text-xl font-mono font-bold mb-2 text-white mt-2">A comprehensive guide to Spring Framework annotations and the lifecycle of beans, including simple explanations and practical examples.</p>
    </header>

    <main>
      <AnnotationSection
        title="@Component"
        description="The `@Component` annotation is used to mark a class as a Spring component. Spring automatically detects and registers the class as a bean in the IoC (Inversion of Control) container. This annotation is a generic stereotype for any Spring-managed component."
        isGood={true}
      />
      
      <AnnotationSection
        title="@Service"
        description="The `@Service` annotation is used to define a service class in the service layer. It is a specialization of the `@Component` annotation, indicating that the class provides business logic or service functions."
        isGood={true}
      />
      
      <AnnotationSection
        title="@Repository"
        description="The `@Repository` annotation marks a class as a data access component. It is used for data access logic and provides additional functionalities such as exception translation. This annotation is also a specialization of `@Component`."
        isGood={true}
      />
      
      <AnnotationSection
        title="@Controller"
        description="The `@Controller` annotation is used to define a controller class in a Spring MVC application. It handles HTTP requests and maps them to appropriate service methods, facilitating the MVC (Model-View-Controller) design pattern."
        isGood={true}
      />
      
      <AnnotationSection
        title="@Autowired"
        description="The `@Autowired` annotation enables automatic dependency injection. Spring resolves and injects the necessary dependencies into a bean, promoting loose coupling between components and simplifying configuration."
        isGood={true}
      />
      
      <AnnotationSection
        title="@Configuration"
        description="The `@Configuration` annotation indicates that a class declares one or more `@Bean` methods. These methods return instances of beans that are managed by the Spring container, enabling Java-based configuration."
        isGood={true}
      />
      
      <AnnotationSection
        title="@Bean"
        description="The `@Bean` annotation is used to define a bean in a configuration class. It is applied to methods to indicate that they return beans that should be managed by the Spring container. This annotation is crucial for creating and managing beans in a Java-based configuration."
        isGood={true}
      />
      
      <AnnotationSection
        title="IoC Container"
        description="The IoC (Inversion of Control) container in Spring is responsible for managing the lifecycle and dependencies of beans. It creates, configures, and manages beans based on the configuration provided. This container supports dependency injection and lifecycle management."
        isGood={true}
      />
      
      <AnnotationSection
        title="Bean Lifecycle"
        description="The lifecycle of a bean in Spring includes several stages: instantiation, dependency injection, initialization, usage, and destruction. Spring manages these stages automatically, providing hooks for custom initialization and destruction logic if needed."
        isGood={true}
      />
    </main>
  </div>
);

export default AnnotationInSpringBoot;
