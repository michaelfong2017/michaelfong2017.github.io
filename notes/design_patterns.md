# Design patterns
## Encapsulation
```java
private List<Integer[]> resultsCoordinates;
public List<Integer[]> getResultsCoordinates() {
  return resultsCoordinates;
}
public void initResultsCoordinates() {
  resultsCoordinates = new ArrayList<>();
}

public static void main(String args[]) {
  initResultsCoordinates();
  // ......
  initResultsCoordinates();
  // ......
}
```

**Why do we need encapsulation here instead of just calling `resultsCoordinates = new ArrayList<>();` directly by clients (clients can be in other scripts)?**
Consider changing the data representation of `resultsCoordinates`. For example, if its type is changed from `List<Integer[]>` to `Integer[][]`, initialization will change from `resultsCoordinates = new ArrayList<>();` to `resultsCoordinates = new int[M][];`. Without encapsulation, all clients need to update the initialization process. Missing any one of them leads to bugs in program. With encapsulation, all we need to update is just:
```java
private int numberOfResults = 5;
private Integer[][] resultsCoordinates;
public Integer[][] getResultsCoordinates() {
  return resultsCoordinates;
}
public void initResultsCoordinates() {
  resultsCoordinates = new Integer[numberOfResults][];
}
```