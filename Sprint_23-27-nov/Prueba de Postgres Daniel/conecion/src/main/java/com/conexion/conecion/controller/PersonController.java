package com.conexion.conecion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.conexion.conecion.exception.ModelNotFoundException;
import com.conexion.conecion.model.Person;
import com.conexion.conecion.service.PersonService;

import java.util.Optional;

@RestController
@RequestMapping("/person")
public class PersonController {
	
	@Autowired
    PersonService personService;

    @PostMapping("/save")
    public Person save(@RequestBody Person person) {
       return personService.save(person);
        
        //return person.getIdPerson();
    }

    @GetMapping("/listAll")
    public Iterable<Person> listAllPersons() {
        return personService.list();
    }

    @GetMapping("/list/{id}")
    public Optional<Person> listPersonById(@PathVariable("id") int id) {
        return personService.listId(id);
        //if(person.isPresent()) {
          //  return person.get();
        //}

        //throw new ModelNotFoundException("Invalid find person provided");
    }
    
    @PutMapping("/edit")
    public Person edit(@RequestBody Person p) {
    	return personService.update(p);
    }
    
    @DeleteMapping("/person/{id}")
    public void delete(@PathVariable("id") int id) {
    	personService.delete(id);
    }
    

}
