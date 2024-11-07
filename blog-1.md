# Union and Intersection Types in TypeScript

In TypeScript, Union and Intersection types help us create flexible and powerful type definitions, enabling safer and more readable code.

### Union Types

Union types allow a variable to hold one of several types. They are defined using the `|` (pipe) symbol.

For example:

```typescript
type Status = "success" | "error" | "loading";

function logStatus(status: Status) {
    console.log(status);
}

logStatus("success"); // Valid
logStatus("loading"); // Valid
logStatus("failed"); // Error: 'failed' is not assignable to type 'Status'
```

<br>

In this example, `Status` can only be `"success"`, `"error"`, or `"loading"`. This helps prevent errors by restricting values to these specific options.

### Benefits of Union Types

1. **Flexible Type Definitions**: Union types are useful when a variable might hold one of several different types, like `string | number`.
2. **Improved Type Safety**: Helps prevent errors by limiting possible values.
3. **Cleaner Code**: Reduces the need for extensive conditional checks in functions, improving readability.

<br>

### Intersection Types

Intersection types combine multiple types into one, meaning that a value must satisfy all included types. They are defined using the `&` symbol.

#### Example:

```typescript
type Person = { name: string; age: number };
type Employee = { role: string };

type EmployeeProfile = Person & Employee;

const employee: EmployeeProfile = {
    name: "Alice",
    age: 30,
    role: "Developer",
};
```

<br>

Here, `Worker` combines `Person` and `Employee`, requiring both `name` and `employeeId` properties. Intersection types are ideal for building complex types from simpler ones.

#### Benefits of Intersection Types

-   **Detailed Type Descriptions**: Useful for combining features from different types.
-   **Ensures Type Completeness**: Makes sure all required properties are present.

### Summary

-   **Union Types** allow a variable to be one of several types, making code flexible.
-   **Intersection Types** combine multiple types into one, ensuring a variable meets all specified type requirements.

Union and Intersection types are powerful tools in TypeScript that make your code safer, more flexible, and easier to maintain.
