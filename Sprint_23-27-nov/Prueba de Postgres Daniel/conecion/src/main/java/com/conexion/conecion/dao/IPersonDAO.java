package com.conexion.conecion.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.conexion.conecion.model.Person;

@Repository
public interface IPersonDAO extends CrudRepository<Person, Integer>{
	
}