package com.conexion.conecion.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.conexion.conecion.dao.IPersonDAO;
import com.conexion.conecion.model.Person;

import java.util.Optional;
@Service
public class PersonService {
	
	@Autowired
    private IPersonDAO dao;

    public Person save(Person t) { return dao.save(t); }

    public Person update(Person t) { return dao.save(t); }

    public void delete(int t) { dao.deleteById(t);}

    public Iterable<Person> list() { return dao.findAll(); }

    public Optional<Person> listId(int id) {
        return dao.findById(id);
    }
}
