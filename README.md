# Solid principles

- S -> Single Responsability Principle, any function should be responsible for doing only one thing.

  > this is a better, easier and faster way to know what your class especifically does.

- O -> Open Closed Principle, Any software system should be open for extension and closed for change.

  > you can implement as much classes as you want and your main class will not be motified.

- L -> Liskov Substitution Principle, functions that use references to base classes must be able to use objects of the derived class without knowing it.

  > derived classes must be substitutable for the base class.

- I -> Interface Segregation Principle, we must use every single modules or functions that we have inside the interface.

  > this is a better option to organized the code using all interface method we implements.

- D -> Dependency Inversion Principle, high-level functions should not be dependant on the code that implements low-level functions.
  
  > this help you when you want to change some depencies on your system and inject inside a class.