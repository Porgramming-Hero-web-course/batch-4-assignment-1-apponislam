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
