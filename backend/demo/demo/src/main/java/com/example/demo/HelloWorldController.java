package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
@RequestMapping(path = "/hello-world")
public String helloWorld() {
//	return "HelloWorld";
	throw new RuntimeException("some erroe happened");
	
}
}
