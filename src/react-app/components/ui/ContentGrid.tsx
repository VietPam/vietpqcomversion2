import CategoryBlock, { CategoryItem } from "./CategoryBlock";

interface CategoryGroup {
  title: string;
  items: CategoryItem[];
}

function ContentGrid() {
  const categories: CategoryGroup[] = [
    {
      title: "Spring Boot Tutorials",
      items: [
        { title: "Building a REST API with Spring Boot", href: "#spring-rest", badge: "FULL GUIDE" },
        { title: "Spring Boot Security OAuth2 Setup", href: "#spring-security", badge: "SERIES" },
        { title: "Production Monitoring with Spring Boot Actuator", href: "#spring-actuator", badge: "LATEST" },
        { title: "Dockerizing Spring Boot Applications", href: "#spring-docker", badge: "FULL GUIDE" }
      ]
    },
    {
      title: "Java Weekly Reviews",
      items: [
        { title: "Java Weekly Review - Issue 612", href: "#weekly-612", badge: "LATEST" },
        { title: "Java Weekly Review - Issue 611", href: "#weekly-611", badge: "SERIES" },
        { title: "Java Weekly Review - Issue 610", href: "#weekly-610", badge: "SERIES" },
        { title: "Java Weekly Review - Issue 609", href: "#weekly-609", badge: "SERIES" }
      ]
    },
    {
      title: "Latest Articles on Java",
      items: [
        { title: "Pattern Matching for Switch in Java 21", href: "#java21-switch", badge: "LATEST" },
        { title: "Understanding Virtual Threads in Java", href: "#virtual-threads", badge: "FULL GUIDE" },
        { title: "Complete Guide to Java Stream Collectors", href: "#stream-collectors", badge: "FULL GUIDE" },
        { title: "Deep Dive into Record Patterns in Java", href: "#record-patterns", badge: "LATEST" }
      ]
    },
    {
      title: "Spring Cloud & Microservices",
      items: [
        { title: "Spring Cloud Gateway Configuration Guide", href: "#cloud-gateway", badge: "FULL GUIDE" },
        { title: "Service Discovery using Netflix Eureka", href: "#cloud-eureka", badge: "SERIES" },
        { title: "Declarative Feign Clients in Microservices", href: "#cloud-feign", badge: "LATEST" },
        { title: "Resilience4j Circuit Breaker Integration", href: "#cloud-resilience4j", badge: "FULL GUIDE" }
      ]
    },
    {
      title: "Persistence & Database",
      items: [
        { title: "Introduction to Spring Data JPA", href: "#jpa-intro", badge: "FULL GUIDE" },
        { title: "Understanding Hibernate Entity Lifecycle", href: "#hibernate-lifecycle", badge: "SERIES" },
        { title: "Spring Transaction Management Best Practices", href: "#spring-tx", badge: "FULL GUIDE" },
        { title: "Database Migrations using Liquibase & Spring", href: "#liquibase", badge: "LATEST" }
      ]
    },
    {
      title: "Testing & Mocking",
      items: [
        { title: "A Complete Guide to JUnit 5", href: "#junit5", badge: "FULL GUIDE" },
        { title: "Mockito Mock vs. Spy Explained", href: "#mockito-mock-spy", badge: "LATEST" },
        { title: "Integration Testing with Testcontainers", href: "#testcontainers", badge: "FULL GUIDE" },
        { title: "Spring Boot TestRestTemplate Cheat Sheet", href: "#test-resttemplate", badge: "SERIES" }
      ]
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <CategoryBlock
            key={index}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
    </section>
  );
}

export default ContentGrid;
