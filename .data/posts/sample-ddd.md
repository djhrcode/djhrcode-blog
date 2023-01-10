---
author : "Rajdeep Singh"
categories : ["npm", "npm-cli", "npm install command"]
date : "2022-03-20T13:09:24Z"
description : "When we start programming with JavaScript, suddenly, we find a huge contrast between the weird JavaScript's world and the more classical Object Oriented programming languages such as PHP, Java, C#, Python and others."
cover: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
image : "images/npm-init-command-1.png"
images : ["images/npm-init-command-1.png"]
slug : "how-is-npm-install-command"
summary : "Npm install command help to install package from npmjs.org"
tags : ["classes", "javascript", "prototype", "oop", "object-oriented"]
title : "Classes are just syntactic sugar in JavaScript. How does inheritance works?"
draft : false
---

One of the biggest difference that maybe, you've already noticed, is the absence of the fully traditional Object Oriented Paradigm concepts like Class-Based Inheritance and components as Interfaces. If you're learning JavaScript or even have been working with it and you came from another languages of a kind that I've mentioned above, maybe you would feel that many things are really freaky in JavaScript. 

Also, you could be one of whose have felt happy with the release at 2015 of ES6 and its addition of the ` class ` keyword on the language. But, with this new addition, comes a new discussion. Has JavaScript really implemented class-based inheritance now? The answer is no, because *in JavaScript classes doesn't really exists*. 

## Classes are just syntactic sugar in JavaScript

What? Yes, what you've just read. Why am I say that? The answer is so simple, and if you are a experienced JavaScript developer, probably you already know why. In JavaScript, classes have never existed, and the language have never intended to implement a Class-Based Inheritance. JavaScript came to the world with a Prototype-Based Inheritance model, and the ES6 classes are just a syntactic sugar for the language's prototypal inheritance. 

Possibly, you are right know wondering, and especially if you doesn't have so much time writing JavaScript code or are just starting with the language. Now so much questions have came out: What is the Prototype-Based Inheritance? If JavaScript classes doesn't really exists, what the hell is the `class` keyword then?

## Prototypes are the key concept for JavaScript's inheritance

Primarly, if you came from anothers languages as C#, Java and PHP you know that those languages implements a Class-Based Inheritance where a **class** is a code-template *for creating object instances*. Besides, you can *reuse or inherit all the properties and methods* from other classes defining a new class which extend from the existing ones. Therefore, we can assume the following fact: concept the of "objects" is not directly coupled or dependant to the "classes" concept. Instead we have found that "classes" are just a way to achieve these goals: 1) create object instances and 2) inherit all the properties and methods from other objects. But classes are *not the only way to get that*, and here comes into play the **prototypes**. But, what the heck are prototypes?

Prototypes (along with Constructor Functions) are the mechanism used by JavaScript to 1) create object instances and 2) inherit properties and methods from another objects (I know, I'm boring you repeating those points and I won't repeat them anymore, I promise). But how does Prototypes mechanism works? Finally, lets start with a simple code. 

 ```javascript
// Employee will be our prototype object
const Employee = {
    name: null,
    enterprise: null,
    age: null,
    role: "employee",
    gender: "male",

    work: function () {
        console.log(`Lets work ${this.name}!`);
    },
};

const steve = {
    name: "Steve Wozniak",
    age: 45,
    role: "programmer",
    enterprise: "Apple",
};

// steve will inherit everything from Employee
Object.setPrototypeOf(steve, Employee);

console.log(steve.name); // "Steve Wozniak"
console.log(steve.age); // 45
console.log(steve.role); // "programmer"
console.log(steve.gender); // "male"
console.log(steve.enterprise); // "Apple"

steve.work() // "Lets work Steve Wozniak!"
 ```

---

**WARNING**: The example above is made just for informative purposes. I doesn't intend you to write code like this, and moreover, you shouldn't.

***



In this example I've created two objects, `Employee`  and `steve`, nothing complex until now. However, in the `steve` object I've only defined `name`, `role`, `age` and `enterprise` properties, but when I call `steve.work()`  method and the `role` and `gender` properties they work properly, perhaps I haven't defined those properties directly in `steve` object. Why is this happening here?

The key part here to understand how does this works is the `Object.setPrototypeOf(steve, Employee)` function call. This function allows us to indicate JavaScript that the specific object has a prototype defined, which will be stored on the object's `[[Prototype]]` internal property (also in many browsers you can manage this through the `__proto__` property, which is present in any object, but it's not recommended[^1]). When an object has a prototype defined, any unexistent property or method on that primarly object will be seeked on the object's prototype, then if exists, on the prototype's prototype, and so on recursively. This is often referred to as a **prototype chain**, and this is the way that JavaScript's inheritance works. Let's do some other checks to the same code shown before.

 ```javascript
const Employee = {
    name: null,
    enterprise: null,
    age: null,
    role: "employee",
    gender: "male",

    work: function () {
        console.log(`Lets work ${this.name}!`);
    },
};

const steve = {
    name: "Steve Wozniak",
    age: 45,
    role: "programmer",
    enterprise: "Apple",
};

Object.setPrototypeOf(steve, Employee);

// Check if Employee is prototype of steve
console.log(Employee.isPrototypeOf(steve)); // true

// Check if Object.protoype is prototype of steve
console.log(Object.protoype.isPrototypeOf(steve)); // true

// Lets get steve's prototype stored in [[Prototype]] 
console.log(Object.getPrototypeOf(steve)); // Employee 

// Shows true if "name" property is defined directly 
// on steve object instance, or false otherwise
console.log(steve.hasOwnProperty("name")); // true

// Shows true if "gender" property is defined directly 
// on steve object instance, or false otherwise
console.log(steve.hasOwnProperty("gender")); // false

 ```

From the above code comes many interesting facts. First, when we call `Employee.isPrototypeOf(steve)`  it returns `true`. But why? Because the `Employee` object is present on the prototype chain of the `steve` object. And the same we can say about `Object.prototype`, because in JavaScript, almost everything (excepting the primitive data types) is an object, even functions, and due to this, everything extends from the language's native data type `Object`. 

Now, lets continue with the third check from the above code. There we are getting the prototype of `steve` by `Object.getPrototypeOf(steve)`  function call. This return the `Employee` object we've defined before because also we've setted `Employee` as prototype of `steve` by using `Object.setPrototypeOf(steve, Employee)`. Crystal clear, isn't it?

Now, what about the last two checks? We are using a method called `hasOwnProperty()`, but I've never defined this method. Where does this method come from? Easy peasy! This method comes from the  `Object.prototype` we've talked before. As every object in JavaScript inherits from `Object` native data type, all the properties and methods found at the `Object` data type's prototype are, automatically, inherited throughout every object instance in the language. The `hasOwnProperty()` method provide us a way to detect if the specified property exists or was explicitly declared in our primarly object, or whether, the property is being inherited from the object's prototype. Up to now we have implemented the following inheritance prototype chain.



![](C:\Users\danie\OneDrive\Documents\djhrcode\js-prototype-chain.jpg)



However, maybe you've already noticed that the way we are creating objects is not very efficient. Until now, we are dealing with object instances directly but we don't have used any easier strategy to create them. And that's happening as this is not the way JavaScript is intended to do this, because for creating object instances JavaScript has the **Constructor Functions**.



## Constructor Functions? Like Classes Constructors?

Yes! The **constructor function** is the JavaScript's version of a class, and has the same responsability: define and create objects instances from the given arguments passed to the constructor. But, as you will see, in JavaScript, we don't need to define this constructor function as a member of any object or class, instead, the construtor function is itself, the class definition. Let's compare JavaScript constructor function with a class definition in PHP using the `Employee` example.

```php
class Employee {
	public function __construct(
		public string $name,
		public string $age,
		public string $enterprise,
		public string $role = "employee",
		public string $gender = "male"
	) {}
	
	public function work() {
		print("Lets work {$this->name}!");
	}
}

$steve = new Employee("Steve Wozniak", 45, "Apple");
```

This is how our `Employee` class and the `$steve` instance would look like if we write them on a PHP code. But, what would be the JavaScript  constructor function equivalent code? Let's see it!

```javascript
function Employee (
	name, 
    age, 
    enterprise, 
    role = "employee", 
    gender = "male"
) {
	this.name = name;
    this.age = age;
    this.enterprise = enterprise;
    this.role = role;
    this.gender = gender;
        
    this.work = function () {
        console.log(`Lets work ${this.name}!`);
    };
}

const steve = new Employee("Steve Wozniak", 45, "Apple");
```

What do you think? Not too much different from other languages' constructors, isn't it? On the above code we are just creating the `Employee` constructor function, and there in, we define all our properties and methods as well. Perhaps, the most confusing thing  maybe you noticed here, is that we are defining the `work() ` member more like a value for a property than a method. Why do we do this? The reason is because JavaScript has first-class functions, what means that we can use functions as a value for any variable, argument or property, just as any other value on the language. And due to this, the **method** concept itself doesn't exists as in many other languages, because in JavaScript *we only manage objects instances* with properties than can store any value, even a function. And this is a key point we need to understand! 

Unlike many other classical object-oriented languages, when we define a constructor-function *we are not creating a type*, instead we are just defining a way to construct an object, and that's why *in JavaScript we don't create types.* We are always dealing with object instances and inheriting from them the properties that we need by using prototypes. Going back to our `Employee` example, lets add another link to our prototype chain by adding two news employee definition: `Designer` and `Programmer`. 
