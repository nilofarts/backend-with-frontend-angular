package com.example.demo.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class todoResourse {
	@Autowired
	private todoService todoService;
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}
	//DELETE /users/{username}/todos/{id}
		@DeleteMapping("/users/{username}/todos/{id}")
		public ResponseEntity<Void> deleteTodo(
				@PathVariable String username, @PathVariable long id){
			
			Todo todo = todoService.deleteById(id);
			
			if(todo!=null) {
				return ResponseEntity.noContent().build();
			}
			
			return ResponseEntity.notFound().build();
		}
}
